import Paddle from './paddle';
import Ball from './ball';
import Brick from './brick';
import Particle from './particle';
import {SPEED, GAME_HEIGHT, GAME_WIDTH, BRICK_WIDTH, BRICK_HEIGHT, BRICK_MARGIN_TOP} from './constants';

class Game {

    constructor(){
        this.paddle = new Paddle();
        this.ball = new Ball(this.paddle.x + this.paddle.width/2, this.paddle.y - 10);
        this.bricks = [];
        this.particles = [];
        this.lives = 3; 
        this.level = 1; 
        this.levels = {
            1: {r: 5, c: 8}, 
            2: {r: 8, c: 8}, 
            3: {r: 10, c: 8}
        };
        this.score = 0;
        // this.lose = false; 
        this.addBricks();
        this.paddleBounds = this.paddleBounds.bind(this);
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
                this.bricks[r][c] = new Brick({ x: BRICK_WIDTH + 15 + c * (BRICK_WIDTH + 10) , y: BRICK_MARGIN_TOP + r * (BRICK_HEIGHT + 12.5)})
            }
        }
    }

    addParticles(ball){
        for (let i = 0; i < 12; i++){
            this.particles.push(new Particle(ball))
        }
    }

    removeParticles(){
        this.particles = this.particles.filter(particle => particle.ttl > 0);
    }

    moveParticles(){
        this.particles.forEach((particle) => {
            particle.move();
        })
    }
    
    draw(ctx){
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        // ctx.lineWidth = 10;
        // ctx.strokeStyle = "rgba(5, 255, 255)";
        // ctx.shadowColor = "rgba(5, 255, 255)"; 
        // ctx.shadowBlur = 5; 
        // ctx.strokeRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        // ctx.lineWidth = 2;
        // ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(15, GAME_HEIGHT - 15, 8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(5, 255, 255)";
        ctx.fill();
        ctx.fillStyle = "#FFF"; 
        ctx.font = "16px Germania One";
        ctx.fillText(this.lives, 30, GAME_HEIGHT - 9);
        this.ball.draw(ctx);
        this.bricks.forEach(row => { row.forEach(brick => brick.draw(ctx)) });
        this.paddle.draw(ctx);
        this.particles.forEach(particle => particle.draw(ctx));
    }

    paddleBounds() {
        let x = this.ball.x;
        let y = this.ball.y;
        let dx = this.ball.dx;
        let dy = this.ball.dy;
        let radius = this.ball.radius;
        if (x + radius > GAME_WIDTH) {
            this.ball.x = GAME_WIDTH - radius;
            this.ball.dx = -dx;
        }
        if (x - radius < 0){
            this.ball.x = radius;
            this.ball.dx = -dx;
        }
        if (y - radius < 0) {
            this.ball.y = radius; 
            this.ball.dy = -dy;
        }
        if (y + radius > GAME_HEIGHT){
            this.lives -= 1; 
            this.ball = new Ball(this.paddle.x + this.paddle.width/2, this.paddle.y - 10);
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
        if (this.ball.x < this.paddle.x + this.paddle.width && this.ball.x > this.paddle.x && this.ball.y < this.paddle.y + this.paddle.height && this.ball.y + this.ball.radius > this.paddle.y) {

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
        let r = this.ball.radius;


        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                let b = this.bricks[r][c];
                if (b.status > 0 ) {
                    if (ball.x + ball.radius > b.x && ball.x - ball.radius < b.x + b.width && ball.y + ball.radius > b.y && ball.y - ball.radius < b.y + b.height) {
                        // ball.dy = - ball.dy;
                        // this.addParticles(ball);
                        // b.status -=1; 
                        if ((ball.x + ball.radius >= b.x && ball.x - ball.radius <= b.x) || (ball.x - ball.radius <= b.x + b.width && ball.x + ball.radius >= b.x + b.width)){
                            ball.dx = -ball.dx; 
                            // b.status -= 1;
                            this.addParticles(ball);
                        } 
                        if ((ball.y + ball.radius >= b.y && ball.y - ball.radius <= b.y ) || (ball.y - ball.radius <= b.y + b.height && ball.y + ball.radius >= b.y + b.height)){
                            ball.dy = -ball.dy;
                            // b.status -= 1;
                            this.addParticles(ball);
                        }
                        b.status -= 1;
                    }
                }
            }
        }
    }

    moveObjects() {
        this.paddleBounds();
        this.paddleCollison();
        this.brickCollision();
        this.removeParticles();
        this.ball.move();
        this.paddle.move();
        this.moveParticles();
    }

    isGameLost(){
        if (this.game.lives <= 0){
            return true ;
        }
        return false;
    }

    isLevelDone(){
        if (this.bricks.length === 0){
            this.levels += 1;
        }
    }

    isGameWon(){
        if (this.levels === 4){
            return true;
        }
        return false
    }

    
}


export default Game;
