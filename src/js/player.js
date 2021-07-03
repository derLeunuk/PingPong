import { width, height, ctx, left, right, keys, up, down } from "./game";

export let pheight;
export let pwidth;
/*export let pxpos;
export let pypos;
export let pLeft;
export let pRight;*/

export default class Player
{
    constructor(pxpos, up, down)
    {  
        this.up = up;
        this.down = down;
        this.pxpos = pxpos;
        this.pwidth = 20;
        this.pheight = 200;
        this.pypos = height/2 - 100;
        this.ySpeed = 7;
        this.pleft = this.pxpos;
        this.pright = this.pxpos + this.pwidth;
    }

    render()
    {
        ctx.fillStyle = "white";
        ctx.fillRect(this.pxpos, this.pypos, this.pwidth, this.pheight);
    }

    update()
    {
        if (keys[this.up]) {
            this.pypos -= this.ySpeed;       
        }
        if (keys[this.down]) {
            this.pypos += this.ySpeed;
        }

        if(this.pypos < up)
        {
            this.pypos = up;
        }

        if(this.pypos > down - this.pheight)
        {
            this.pypos = down - this.pheight;
        }
    }
}