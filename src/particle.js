import { SPEED } from './constants';

class Particle {
    constructor(ball) {
        this.x = ball.x
        this.y = ball.y
        this.radius = 2;
        this.speed = SPEED;
        this.dx = SPEED/2 * (Math.random() * 2 - 1);
        this.dy = SPEED/2 * (Math.random() * 2 - 1);
        this.ttl = 50; 
        this.opacity = 1;
    }

    draw(ctx) {
        if (this.ttl > 0){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
            ctx.fill();
            ctx.closePath();
            ctx.shadowColor = `rgba(255, 255, 255)`;
            ctx.shadowBlur = 15; 
            this.ttl -= 1;
            this.opacity -= (1/this.ttl);
        }
    }

    move() {
        this.dy -= 0.1;
        this.x += this.dx;
        this.y -= this.dy;
    }

}


export default Particle;