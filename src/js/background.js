
import { width, height, ctx, left, right, up, down } from "./game"

export default class Background
{
    render()
    {
        //background
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, width, height)

        //borders
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, left, height);

        ctx.fillStyle = "white";
        ctx.fillRect(right, 0, left, height);

        ctx.fillStyle = "white";
        ctx.fillRect(left, 0, left * 3, up);

        ctx.fillStyle = "white";
        ctx.fillRect(left, down, left*3 , 20);

        //middle line
        for(let i = 20; i < height - 25; i += 40)
        {
            ctx.fillStyle = "white";
            ctx.fillRect(width * 0.5 - 10, i, 13, 20);
        }
    }
}