
import Background  from "./background"
import Player from "./player"
import Ball from "./ball"
import Bot from "./bot";

export let width;
export let height;
export let left;
export let right;
export let up;
export let down;
export let canvas;
export let ctx;
export let keys = {};

export class Game
{
    setup()
    {
        canvas = document.getElementById('canvas');
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        ctx = canvas.getContext("2d");
        ctx.imageSmoothingEnabled = false;

        this.setVariables();

        this.keylistener();

        this.background = new Background();

        this.player1 = new Player(left + 10, "w", "s");
        this.player2 = new Bot(right - 35);

        this.ball = new Ball();
    }

    update()
    {
        this.setVariables();

        this.player1.update();
        this.player2.update(this.ball);

        this.ball.update();

        this.ball.checkCollision(this.player1);
        this.ball.checkCollision(this.player2);
    }

    // This is called at best 60 times every second
    // Use this function for drawing
    render()
    {
        this.background.render();

        this.player1.render();
        this.player2.render();

        this.ball.render();
    }

    keylistener()
    {
        document.addEventListener('keydown', event => {
			keys[event.key.toLowerCase()] = true;
		});
		document.addEventListener('keyup', event => {
			delete keys[event.key.toLowerCase()];
		});
    }

    setVariables()
    {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        ctx = canvas.getContext("2d");
        right = width * 0.8 - 20;
        left = width * 0.2 + 20;
        up = 20;
        down = height - 20;
    }
}