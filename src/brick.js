import { SPEED, GAME_WIDTH, GAME_HEIGHT, BRICK_HEIGHT, BRICK_WIDTH } from './constants';

class Brick {
    constructor(options) {
        this.x = options.x; 
        this.y = options.y; 
        this.fillColor = "#DDA0DD";
        this.strokeColor = "red";
        this.height = BRICK_HEIGHT;
        this.width = BRICK_WIDTH;
        this.status = true; 
        this.marginTop = 50; 
    }

    draw(ctx) {
        if (this.status){
            ctx.fillStyle = this.fillColor;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.strokeStyle = this.strokeColor;
            ctx.lineWidth = 3;
            ctx.strokeRect(0.5 + this.x, 0.5 + this.y, this.width, this.height);
        }
    }


}


export default Brick;