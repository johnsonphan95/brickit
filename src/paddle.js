import { SPEED, GAME_WIDTH, GAME_HEIGHT, PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_MARGIN_BOTTOM} from './constants';

class Paddle {
    constructor(){
        this.vel = [0, 0];
        this.x = (GAME_WIDTH/2) - (PADDLE_WIDTH/2);
        this.y = GAME_HEIGHT - PADDLE_HEIGHT - PADDLE_MARGIN_BOTTOM;
        this.height = PADDLE_HEIGHT; 
        this.width = PADDLE_WIDTH
        // this.inBounds = this.inBounds.bind(this);
    }

    draw(ctx){
        ctx.fillStyle = "orange"; 
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.strokeStyle = "blue";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

    move(){
        this.x = this.x + this.vel[0];
        this.y = this.y + this.vel[1];
    }

    // inBounds() {
    //     let posX = this.pos[0];
    //     let posY = this.pos[1];
    //     if (posX < 0) {
    //         this.pos[0] = 0;
    //         this.removeVel();
    //     } else if (posX > GAME_WIDTH - 35) {
    //         this.pos[0] = GAME_WIDTH - 35;
    //         this.removeVel();
    //     } else if (posY > GAME_HEIGHT - 50) {
    //         this.pos[1] = GAME_HEIGHT - 50;
    //         this.removeVel();
    //     } else if (posY < 0) {
    //         this.pos[1] = 0;
    //         this.removeVel();
    //     }
    // }

    setVel(vel){
        vel = [vel[0] * SPEED * 2, vel[1] * SPEED * 2]
        this.vel = vel;
    }

    removeVel(){
        // vel = [vel[0] * SPEED, vel[1] * SPEED]
        // this.vel = [this.vel[0] - vel[0], this.vel[1] - vel[1]]; 
        this.vel = [0, 0];
    }

}


export default Paddle;