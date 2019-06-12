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
        this.color = "rgba(5, 255, 255)"
    }

    draw(ctx) {
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10; 
        ctx.beginPath(); 
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    move() {
        this.x += this.dx; 
        this.y += this.dy;
    }

    resetBall(){
        this.x = (GAME_WIDTH / 2);
        this.y = GAME_HEIGHT - PADDLE_HEIGHT - PADDLE_MARGIN_BOTTOM - BALL_RADIUS;
        this.dx = SPEED * (MATH.random() * 2 - 1)
        this.dy = -SPEED;
    }

}


export default Ball;