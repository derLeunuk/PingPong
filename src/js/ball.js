import { width, height, ctx, left, right, keys, up, down } from "./game"


export default class Ball
{
    constructor()
    {
        this.xpos = width * 0.66;
        this.ypos = height/2;
        this.bheight = 20;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.state = 0;
        this.p1 = "0";
        this.p2 = "0";
    }

    render()
    {
        ctx.fillStyle = "white";
        ctx.fillRect(this.xpos, this.ypos, this.bheight, this.bheight);

        ctx.fillStyle = "white";
        ctx.textAlign = "right";
        ctx.font = "150px Archivo Black";
        ctx.fillText(this.p1, width/2 - 55, 150);
        ctx.fillText(this.p2, width/2 + 150, 150);

        if(this.state == 0 || this.state == 2)
        {
            ctx.fillStyle = "black";
            ctx.textAlign = "left";
            ctx.font = "40px Staatliches";
            ctx.fillText("Press 'enter' to start", 40, 55);

            ctx.fillStyle = "black";
            ctx.textAlign = "left";
            ctx.font = "40px Staatliches";
            ctx.fillText("1 Player: press 1", 40, 105);

            ctx.fillStyle = "black";
            ctx.textAlign = "left";
            ctx.font = "40px Staatliches";
            ctx.fillText("2 Player: press 2", 40, 155);
        }

        if(this.state == 2)
        {
            ctx.fillStyle = "white";
            ctx.fillRect(width/2 - 300, height/2 - 100, 600, 130);

            if(this.p1 == 10)
            {
            ctx.fillStyle = "black";
            ctx.textAlign = "left";
            ctx.font = "160px Staatliches";
            ctx.fillText("Player 1 wins!", width/2 - 450, height/2);
            }

            if(this.p2 == 10)
            {
            ctx.fillStyle = "black";
            ctx.textAlign = "right";
            ctx.font = "160px Staatliches";
            ctx.fillText("Player 2 wins!", width/2 +250, height/2);
            }
        }
    }

    update()
    {
        this.xpos += this.xSpeed;
        this.ypos += this.ySpeed;

        if(this.state == 0  && keys["enter"])
        {
                this.ySpeed = 1;
                this.xSpeed = -7;
                this.state = 1;
        }

        if(this.state == 2  && keys["enter"])
        {
                this.ySpeed = 0;
                this.xSpeed = -7;
                this.state = 1;
                this.p1 = 0;
                this.p2 = 0;
        }
        
        if(this.ypos < up)
        {
            this.ySpeed = -this.ySpeed;
        }

        if(this.ypos > down - this.bheight)
        {
            this.ySpeed =  -this.ySpeed;
        }

        if(this.xpos < left - this.bheight)
        {
            this.xpos = width * 0.66;
            this.ypos = height/2;
            this.xSpeed = -7;
            this.ySpeed = 1;
            this.p2++;
        }

        if(this.xpos > right)
        {
            this.xpos = width * 0.33;
            this.ypos = height/2;
            this.xSpeed = 7;
            this.ySpeed = 1;
            this.p1++;
            
        }

        if(this.p1 == 10 || this.p2 == 10)
        {
            this.state = 2;
        }

        if(this.state == 2)
        {
            this.xSpeed = 0;
            this.ySpeed = 0;
        }
    }

    checkCollision(pl)
    {
        let plwidth = pl.pwidth;
        let plheight = pl.pheight;
        let plypos = pl.pypos;
        let plxpos = pl.pxpos;

        //player collision, player height parted in 10 sections with different collision logic
        //1
        if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos >= plypos && this.ypos <= plypos + 20)
        {
            if(this.xSpeed < 0)
            {
                this.xSpeed = this.xSpeed - 1;
                this.xSpeed = -this.xSpeed;
                this.ySpeed = -7 - 0.5;
            }
            else
            {
                this.xSpeed = this.xSpeed + 1;
                this.xSpeed = -this.xSpeed;
                this.ySpeed = -7 - 0.5;
            }
        }else{ //2
        if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 20 && this.ypos <= plypos + 50)
            {
                if(this.xSpeed < 0)
                    {
                        this.xSpeed = this.xSpeed - 1;
                        this.xSpeed = -this.xSpeed;
                        this.ySpeed = -6 - 0.5;
                    }
                    else
                    {
                        this.xSpeed = this.xSpeed + 1;
                        this.xSpeed = -this.xSpeed;
                        this.ySpeed = -6 - 0.5;
                    }
        }else{ //3
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 50 && this.ypos <= plypos + 80)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = -5 - 0.5;
                        }
                        else
                        {
                        this.xSpeed = this.xSpeed + 1;
                        this.xSpeed = -this.xSpeed;
                        this.ySpeed = -5 - 0.5;
                        }
        }else{ //4
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 80 && this.ypos <= plypos + 122)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = -4 - 0.5;
                        }
                        else
                        {
                            this.xSpeed = this.xSpeed + 1;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = -4 + 0.5;
                        }
                     
        }else{ //5
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 122 && this.ypos <= plypos + 125)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = -3 - 0.5;
                        }
                        else
                        {
                            this.xSpeed = this.xSpeed + 1;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = -3 - 0.5;
                        }
                     
        }else{ //6
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos +125 && this.ypos <= plypos + 128)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 3 + 0.5;
                        }
                        else
                        {
                            this.xSpeed = this.xSpeed + 1;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 3 + 0.5;
                        }
                     
        }else{ //7
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 128 && this.ypos <= plypos + 170)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 4 + 0.5;
                        }
                        else
                        {
                            this.xSpeed = this.xSpeed + 1;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 4 + 0.5;
                        }
                     
        }else{ //8
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 170 && this.ypos <= plypos + 200)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 5 + 0.5;
                        }
                        else
                        {
                            this.xSpeed = this.xSpeed + 1;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 5 + 0.5;
                        }
                     
        }else{ //9
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 200 && this.ypos <= plypos + 230)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 6 + 0.5;
                        }
                        else
                        {
                            this.xSpeed = this.xSpeed + 1;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 6 + 0.5;
                        }
                     
        }else{ //10
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos +150 && this.ypos <= plypos + plheight)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 7 + 0.5;
                        }
                        else
                        {
                            this.xSpeed = this.xSpeed + 1;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 7 + 0.5;
                        }
                     
        }   
        }   
        }   
        }   
        }   
        }   
        }   
        }
        }
        }
    }
}