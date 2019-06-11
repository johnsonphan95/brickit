import { SPEED, GAME_WIDTH, GAME_HEIGHT, PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_MARGIN_BOTTOM, BALL_RADIUS } from './constants';

class Ball {
    constructor() {
        this.x = (GAME_WIDTH / 2);
        this.y = GAME_HEIGHT - PADDLE_HEIGHT - PADDLE_MARGIN_BOTTOM - BALL_RADIUS;
        this.radius = BALL_RADIUS;
        this.speed = SPEED; 
        this.dx = SPEED * (Math.random() * 2 - 1)
        this.dy = -SPEED; 
        this.status = true; 
        // this.inBounds = this.inBounds.bind(this);
    }

    draw(ctx) {
        ctx.beginPath(); 
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    }

    move() {
        // this.inBounds();
        this.x += this.dx; 
        this.y += this.dy;
        // console.log(this.x, this.y)
    }

    // inBounds() {
    //     let x = this.x;
    //     let y = this.y;
    //     let dx = this.dx; 
    //     let dy = this.dy;
    //     let radius = this.radius; 
    //     if (x + radius > GAME_WIDTH || x - radius < 0){
    //         this.dx = -dx;
    //     }
    //     if (y - radius < 0){
    //         this.dy = -dy;
    //     }
    // }


    resetBall(){
        this.x = (GAME_WIDTH / 2);
        this.y = GAME_HEIGHT - PADDLE_HEIGHT - PADDLE_MARGIN_BOTTOM - BALL_RADIUS;
        this.dx = SPEED * (MATH.random() * 2 - 1)
        this.dy = -SPEED;
    }

    
}


export default Ball;