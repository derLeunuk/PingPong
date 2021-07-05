import { width, height, ctx, left, right, keys, up, down } from "./game"

export let ypos;

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
        //points counter
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
        ctx.fillText(this.p1, width/2 - 155, 150);
        ctx.fillText(this.p2, width/2 + 250, 150);

        if(this.state == 0 || this.state == 2)
        {
            ctx.fillStyle = "black";
            ctx.textAlign = "left";
            ctx.font = "40px Staatliches";
            ctx.fillText("Press 'enter' to start", 40, 55);

            /*
            ctx.fillStyle = "black";
            ctx.textAlign = "left";
            ctx.font = "40px Staatliches";
            ctx.fillText("1 Player: press 1", 40, 105);

            ctx.fillStyle = "black";
            ctx.textAlign = "left";
            ctx.font = "40px Staatliches";
            ctx.fillText("2 Player: press 2", 40, 155);
            */
        }

        if(this.state == 2)
        {
            ctx.fillStyle = "white";
            ctx.fillRect(width/2 - 300, height/2 - 100, 600, 130);

            if(this.p1 == 10)
            {
            ctx.fillStyle = "black";
            ctx.textAlign = "right";
            ctx.font = "100px Staatliches";
            ctx.fillText("Player 1 wins!", width/2 + 250, height/2);
            }

            if(this.p2 == 10)
            {
            ctx.fillStyle = "black";
            ctx.textAlign = "right";
            ctx.font = "100px Staatliches";
            ctx.fillText("Player 2 wins!", width/2 + 250, height/2);
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
                this.ySpeed = 1;
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
            this.xSpeed = -9;
            this.ySpeed = 2;
            this.p2++;
        }

        if(this.xpos > right)
        {
            this.xpos = width * 0.33;
            this.ypos = height/2;
            this.xSpeed = 9;
            this.ySpeed = 2;
            this.p1++;
            
        }

        if(this.p1 == 10 || this.p2 == 10)
        {
            this.state = 2;
        }

        if(this.state == 2)
        {
            this.xpos = width * 0.66;
            this.ypos = height/2;
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
        if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos + this.bheight >= plypos && this.ypos <= plypos + 10)
        {
            if(this.xSpeed < 0)
            {
                this.xSpeed = this.xSpeed - 1.5;
                this.xSpeed = -this.xSpeed;
                this.ySpeed = -13;
            }
            else
            {
                this.xSpeed = this.xSpeed + 1.5;
                this.xSpeed = -this.xSpeed;
                this.ySpeed = -13;
            }
        }else{ //2
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 10 && this.ypos <= plypos + 25)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = -10;
                        }
                        else
                        {
                            this.xSpeed = this.xSpeed + 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = -10;
                        }
                     
        }else{ //3
        if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 25 && this.ypos <= plypos + 50)
            {
                if(this.xSpeed < 0)
                    {
                        this.xSpeed = this.xSpeed - 1.5;
                        this.xSpeed = -this.xSpeed;
                        this.ySpeed = -8;
                    }
                    else
                    {
                        this.xSpeed = this.xSpeed + 1.5;
                        this.xSpeed = -this.xSpeed;
                        this.ySpeed = -8;
                    }
        }else{ //4
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 50 && this.ypos <= plypos + 75)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = -6;
                        }
                        else
                        {
                        this.xSpeed = this.xSpeed + 1.5;
                        this.xSpeed = -this.xSpeed;
                        this.ySpeed = -6;
                        }
        }else{ //5
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 75 && this.ypos <= plypos + 90)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = -4;
                        }
                        else
                        {
                            this.xSpeed = this.xSpeed + 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = -4;
                        }
                     
        }else{ //6
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 90 && this.ypos <= plypos + 100)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = -3;
                        }
                        else
                        {
                            this.xSpeed = this.xSpeed + 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = -3;
                        }
                     
        }else{ //7
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 100 && this.ypos <= plypos + 110)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 3;
                        }
                        else
                        {
                            this.xSpeed = this.xSpeed + 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 3;
                        }
                     
        }else{ //8
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 110 && this.ypos <= plypos + 125)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 4;
                        }
                        else
                        {
                            this.xSpeed = this.xSpeed + 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 4;
                        }
                     
        }else{ //9
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 125 && this.ypos <= plypos + 150)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 6;
                        }
                        else
                        {
                            this.xSpeed = this.xSpeed + 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 6;
                        }
                     
        }else{ //10
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 150 && this.ypos <= plypos + 175)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 8;
                        }
                        else
                        {
                            this.xSpeed = this.xSpeed + 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 8;
                        }
                     
        }else{ //11
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 175 && this.ypos <= plypos + 190)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 10;
                        }
                        else
                        {
                            this.xSpeed = this.xSpeed + 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 10;
                        }
                     
        }else{ //12
            if(this.xpos >= plxpos - this.bheight && this.xpos <= plxpos + plwidth && this.ypos > plypos + 190 && this.ypos <= plypos + plheight)
                {
                    if(this.xSpeed < 0)
                        {
                            this.xSpeed = this.xSpeed - 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 13;
                        }
                        else
                        {
                            this.xSpeed = this.xSpeed + 1.5;
                            this.xSpeed = -this.xSpeed;
                            this.ySpeed = 13;
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
    }
}