import { SPEED, GAME_WIDTH, GAME_HEIGHT, PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_MARGIN_BOTTOM} from './constants';

class Paddle {
    constructor(){
        this.vel = [0, 0];
        this.x = (GAME_WIDTH/2) - (PADDLE_WIDTH/2);
        this.y = GAME_HEIGHT - PADDLE_HEIGHT - PADDLE_MARGIN_BOTTOM;
        this.height = PADDLE_HEIGHT; 
        this.width = PADDLE_WIDTH;
        this.color = "rgba(255, 5, 5)"
        // this.inBounds = this.inBounds.bind(this);
    }

    draw(ctx){
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 5; 
        ctx.fillStyle = this.color; 
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move(){
        this.x = this.x + this.vel[0];
        this.y = this.y + this.vel[1];
    }


    setVel(vel){
        vel = [vel[0] * SPEED , vel[1] * SPEED ]
        this.vel = vel;
    }

    removeVel(){ 
        this.vel = [0, 0];
    }

}


export default Paddle;