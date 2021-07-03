import { Game } from './game';

class App
{

	constructor() 
    {
		this.game = new Game();
	}

	setup()
    {
		// Any setup that is required that only runs once before game loads goes here
		this.game.setup();
		this.gameLoop();
	}

	gameLoop()
    {
		requestAnimationFrame(this.gameLoop.bind(this));

		this.game.update();
		this.game.render();
	}
}

window.onload = () => 
{
	let app = new App();

	app.setup();
}