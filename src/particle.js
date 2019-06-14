import { SPEED, GAME_WIDTH, GAME_HEIGHT} from './constants';

class Particle {
    constructor(ball) {
        this.x = ball.x
        this.y = ball.y
        this.radius = 2;
        this.speed = SPEED;
        this.dx = 4 * (Math.random() * 2 - 1);
        this.dy = 4 * (Math.random() * 2 - 1);
        this.ttl = 50; 
        this.opacity = 1.5;
    }

    draw(ctx) {
        if (this.ttl > 0){
            ctx.shadowColor = `rgba(255, 255, 255)`;
            ctx.shadowBlur = 5; 
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
            ctx.fill(); 
            ctx.closePath();
            this.ttl -= 1;
            this.opacity -= (1/this.ttl);
        }
    }

    move() {
        if (this.x + this.radius > GAME_WIDTH) {
            this.x = GAME_WIDTH - this.radius;
            this.dx = -this.dx;
        }
        if (this.x - this.radius < 0) {
            this.x = this.radius;
            this.dx = -this.dx;
        }
        if (this.y - this.radius < 0) {
            this.y = this.radius;
            this.dy = -this.dy;
        }
        this.dy -= 0.1;
        this.x += this.dx;
        this.y -= this.dy;
    }

}


export default Particle;