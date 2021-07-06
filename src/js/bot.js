import { width, height, ctx, left, right, keys, up, down, u, d } from "./game";
import { Ball } from "./ball";

export let pheight;
export let pwidth;

export default class Bot
{
    constructor(pxpos)
    {  
        this.pxpos = pxpos;
        this.pwidth = 25;
        this.pheight = 200;
        this.pypos = height/2 - 100;
        this.ySpeed = 5;
        this.pleft = this.pxpos;
        this.pright = this.pxpos + this.pwidth;
        this.d = 5;
    }

    render()
    {
        ctx.fillStyle = "white";
        ctx.fillRect(this.pxpos, this.pypos, this.pwidth, this.pheight);
    }

    update(b)
    {
        let blypos = b.ypos;
        this.ySpeed = (blypos - this.pypos)*0.2;

        if(this.ySpeed < 0)
        {
            this.ySpeed = -this.ySpeed;
        }

        if(this.ySpeed > 9)
        {
            this.ySpeed = 9;
        }

        if(this.ySpeed < 3)
        {
            this.ySpeed = 3;
        }

        if(blypos < this.pypos + this.pheight/2 - 40)
        {
            this.pypos -= this.ySpeed;
        }
        if(blypos > this.pypos + this.pheight/2 + 40)
        {
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