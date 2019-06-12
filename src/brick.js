import { SPEED, GAME_WIDTH, GAME_HEIGHT, BRICK_HEIGHT, BRICK_WIDTH } from './constants';

class Brick {
    constructor(options) {
        this.x = options.x; 
        this.y = options.y; 
        this.color = "rgba(255, 15, 255)";
        this.height = BRICK_HEIGHT;
        this.width = BRICK_WIDTH;
        this.status = 2; 
        this.marginTop = 50; 
    }

    draw(ctx) {
        if (this.status === 1){
            this.color = "rgba(255, 15, 255)"
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 5; 
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            // ctx.strokeStyle = this.strokeColor;
            // ctx.lineWidth = 2;
            // ctx.strokeRect(this.x - 0.5, this.y - 0.5, this.width, this.height);
        } else if (this.status === 2){
            this.color = "rgba(15, 225, 15)"
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 5;
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }


}


export default Brick;