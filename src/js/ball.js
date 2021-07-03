import { width, height, ctx, left, right, keys, up, down } from "./game"


export default class Ball
{
    constructor()
    {
        this.xpos = width * 0.66;
        this.ypos = height/2;
        this.bheight = 14;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.state = 0;
    }

    render()
    {
        ctx.fillStyle = "white";
        ctx.fillRect(this.xpos, this.ypos, this.bheight, this.bheight);

        if(this.state == 0)
        {
            ctx.fillStyle = "black";
            ctx.textAlign = "left";
            ctx.font = "30px Arial";
            ctx.fillText("Press 'enter' to start", 50, 50);
        }
    }

    update(p)
    {
        this.xpos += this.xSpeed;
        this.ypos += this.ySpeed;

        if(this.state == 0 && keys["enter"])
        {
                this.ySpeed = 0;
                this.xSpeed = -4;
                this.state = 1;
        }
        
        if(this.ypos < up)
        {
            this.ySpeed = -this.ySpeed;
        }

        if(this.ypos > down - this.bheight)
        {
            this.ySpeed =  -this.ySpeed;
        }

        if(this.xpos < left - this.bheight || this.xpos > right)
        {
            this.xpos = width * 0.66;
            this.ypos = height/2;
            this.xSpeed = -4;
            this.ySpeed = 0;
        }
    }

    checkCollision(pl)
    {
        let plwidth = pl.pwidth;
        let plheight = pl.pheight;
        let plypos = pl.pypos;
        let plxpos = pl.pxpos;

        //player collision
        if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos >= plypos && this.ypos <= plypos + 50)
        {
            this.xSpeed = -this.xSpeed;
            this.ySpeed = -4;
        }else
            {
                if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 50 && this.ypos <= plypos + 100)
                    {
                        this.xSpeed = -this.xSpeed;
                        this.ySpeed = -2;
                    }else
                        {
                            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos +100 && this.ypos <= plypos + 150)
                                {
                                    this.xSpeed = -this.xSpeed;
                                    this.ySpeed = 2;
                                }else
                                    {
                                        if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos +150 && this.ypos <= plypos + plheight)
                                        {
                                            this.xSpeed = -this.xSpeed;
                                            this.ySpeed = 4;
                                        }
                                    }
                    
                        }
            }
    }
}