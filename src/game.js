import Paddle from './paddle';
import Ball from './ball';
import Brick from './brick';
import Particle from './particle';
import {SPEED, GAME_HEIGHT, GAME_WIDTH, BRICK_WIDTH, BRICK_HEIGHT} from './constants';
// import Creep from './creep';

class Game {

    constructor(){
        this.paddle = new Paddle();
        this.ball = new Ball();
        this.bricks = [];
        this.particles = [];
        this.lives = 3; 
        this.level = 1; 
        this.levels = {
            1: {r: 5, c: 8}, 
            2: {r: 4, c: 8}, 
            3: {r: 6, c: 8}
        };
        // this.lose = false; 
        this.addBricks();
        this.inBounds = this.inBounds.bind(this);
        this.paddleCollison = this.paddleCollison.bind(this);
        this.brickCollision = this.brickCollision.bind(this);
        this.addParticles = this.addParticles.bind(this);
        this.removeParticles = this.removeParticles.bind(this);
        this.moveParticles = this.moveParticles.bind(this);
    }

    addBricks(){
         
        let row = this.levels[this.level].r; 
        let col = this.levels[this.level].c;

        for (let r = 0; r < row; r++){
            this.bricks[r] = [];    
            for (let c = 0; c < col; c++){
                this.bricks[r][c] = [];
                this.bricks[r][c] = new Brick({ x: 50 + c * (BRICK_WIDTH), y: 50 + r * BRICK_HEIGHT})
            }
        }
    }

    addParticles(ball){
        for (let i = 0; i < 12; i++){
            this.particles.push(new Particle(ball))
        }
        console.log(this.particles)
    }

    removeParticles(){
        this.particles.forEach((particle, index) => {
            if (particle.ttl <= 0){
                this.particles = this.particles.slice(index, 1)
            }
        })
    }

    moveParticles(){
        this.particles.forEach((particle) => {
            particle.move();
        })
    }
    
    draw(ctx){
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        ctx.fillStyle = "grey";
        ctx.fillRect(GAME_WIDTH, GAME_HEIGHT, -GAME_WIDTH, -GAME_HEIGHT);
        this.paddle.draw(ctx);
        this.ball.draw(ctx);
        this.bricks.forEach(row => { row.forEach(brick => brick.draw(ctx)) });
        this.particles.forEach(particle => particle.draw(ctx));
        // brick.draw(ctx)});
        // this.allObjects().forEach((object) => {
            //     object.draw(ctx);
            // });
    }

    inBounds() {
        let x = this.ball.x;
        let y = this.ball.y;
        let dx = this.ball.dx;
        let dy = this.ball.dy;
        let radius = this.ball.radius;
        if (x + radius > GAME_WIDTH || x - radius < 0) {
            this.ball.dx = -dx;
        }
        if (y - radius < 0) {
            this.ball.dy = -dy;
        }
        if (y + radius > GAME_HEIGHT){
            this.lives -= 1; 
            this.ball = new Ball();
        }
        if (this.paddle.x < 0 ){
            this.paddle.removeVel();
            this.paddle.x = 3; 
        } else if (this.paddle.x + this.paddle.width > GAME_WIDTH) {
            this.paddle.removeVel();
            this.paddle.x = GAME_WIDTH - this.paddle.width - 3;
        }
    }

    paddleCollison(){
        if (this.ball.x < this.paddle.x + this.paddle.width && this.ball.x > this.paddle.x && this.paddle.y < this.paddle.y + this.paddle.height && this.ball.y + this.ball.radius > this.paddle.y) {

            // PLAY SOUND
            // this.paddle_HIT.play();

            // CHECK WHERE THE this.ball HIT THE this.paddle
            let collidePoint = this.ball.x - (this.paddle.x + this.paddle.width / 2);

            // NORMALIZE THE VALUES
            collidePoint = collidePoint / (this.paddle.width / 2);

            // CALCULATE THE ANGLE OF THE this.ball
            let angle = collidePoint * Math.PI / 3;


            this.ball.dx = SPEED * Math.sin(angle);
            this.ball.dy = - SPEED * Math.cos(angle);
        }
    }

    brickCollision(){
        let row = this.levels[this.level].r;
        let col = this.levels[this.level].c;
        let ball = this.ball; 


        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                let b = this.bricks[r][c];
                if (b.status) {
                    if (ball.x + ball.radius > b.x && ball.x - ball.radius < b.x + BRICK_WIDTH && ball.y + ball.radius > b.y && ball.y - ball.radius < b.y + BRICK_HEIGHT) {
                        ball.dy = - ball.dy;
                        this.addParticles(ball);
                        b.status = false; 
                    }
                }
            }
        }
    }

    moveObjects() {
        this.inBounds();
        this.paddleCollison();
        this.brickCollision();
        this.removeParticles();
        this.ball.move();
        this.paddle.move();
        this.moveParticles();
    }

    
}


export default Game;
