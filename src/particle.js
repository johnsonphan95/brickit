import { SPEED, GAME_WIDTH, GAME_HEIGHT, PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_MARGIN_BOTTOM, BALL_RADIUS } from './constants';

class Particle {
    constructor(ball) {
        this.x = ball.x
        this.y = ball.y
        this.radius = 2;
        this.speed = SPEED;
        this.dx = SPEED * (Math.random() * 2 - 1);
        this.dy = SPEED * (Math.random() * 2 - 1);
        this.ttl = 50; 
    }

    draw(ctx) {
        if (this.ttl > 0){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.closePath();
            this.ttl -= 1;
        }
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;
    }

}


export default Particle;