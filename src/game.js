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
            2: {r: 6, c: 8}, 
            3: {r: 7, c: 8}
        };
        this.score = 0;
        this.over = false; 
        this.won = false;
        this.addBricks();
        this.Bounds = this.Bounds.bind(this);
        this.paddleCollision = this.paddleCollision.bind(this);
        this.brickCollision = this.brickCollision.bind(this);
        this.addParticles = this.addParticles.bind(this);
        this.removeParticles = this.removeParticles.bind(this);
        this.moveParticles = this.moveParticles.bind(this);
        this.update = this.update.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.levelUp = this.levelUp.bind(this);
        // this.anyBricks = this.anyBricks.bind(this);
    }

    addBricks(){
        console.log(this.level);
        console.log(this.levels[this.level]);
        let row = this.levels[this.level].r; 
        let col = this.levels[this.level].c;

        if (this.level === 1){
            for (let r = 0; r < row; r++){
                this.bricks[r] = [];    
                for (let c = 0; c < col; c++){
                    this.bricks[r][c] = [];
                    this.bricks[r][c] = new Brick({ x: BRICK_WIDTH + 15 + c * (BRICK_WIDTH + 10) , y: BRICK_MARGIN_TOP + r * (BRICK_HEIGHT + 12.5), status: 1})
                }
            }
        }
        if (this.level === 2){
            for (let r = 0; r < row; r++) {
                this.bricks[r] = [];
                for (let c = 0; c < col; c++) {
                    this.bricks[r][c] = [];
                    if (r % 2 === 0){
                        this.bricks[r][c] = new Brick({ x: BRICK_WIDTH + 15 + c * (BRICK_WIDTH + 10), y: BRICK_MARGIN_TOP + r * (BRICK_HEIGHT + 12.5), status: 1 })
                    } else {
                        this.bricks[r][c] = new Brick({ x: BRICK_WIDTH + 15 + c * (BRICK_WIDTH + 10), y: BRICK_MARGIN_TOP + r * (BRICK_HEIGHT + 12.5), status: 2 })
                    }
                }
            }
        }
        if (this.level === 3){
            for (let r = 0; r < row; r++) {
                this.bricks[r] = [];
                for (let c = 0; c < col; c++) {
                    this.bricks[r][c] = [];
                    if (r === 3) {
                        this.bricks[r][c] = new Brick({ x: BRICK_WIDTH + 15 + c * (BRICK_WIDTH + 10), y: BRICK_MARGIN_TOP + r * (BRICK_HEIGHT + 12.5), status: 3 })
                    } else {
                        this.bricks[r][c] = new Brick({ x: BRICK_WIDTH + 15 + c * (BRICK_WIDTH + 10), y: BRICK_MARGIN_TOP + r * (BRICK_HEIGHT + 12.5), status: 2 })
                    }
                }
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
        ctx.shadowBlur = 0;
        ctx.strokeStyle = "grey";
        ctx.strokeRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(470, GAME_HEIGHT - 15, 8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(5, 255, 255)";
        ctx.fill();

        ctx.fillStyle = "#FFF"; 
        ctx.font = "16px Monaco";
        ctx.fillText(this.lives, 490, GAME_HEIGHT - 8);
        ctx.fillStyle = "rgba(255, 255, 5)";
        ctx.fillText(`SCORE: ${this.score}`, 55, GAME_HEIGHT - 9);
        this.ball.draw(ctx);
        this.bricks.forEach(row => { row.forEach(brick => brick.draw(ctx)) });
        this.paddle.draw(ctx);
        this.particles.forEach(particle => particle.draw(ctx));
    }

    Bounds() {
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
            // this.ball = new Ball(this.paddle.x + this.paddle.width/2, this.paddle.y - this.ball.radius - 5);
            this.ball.resetBall(this.paddle.x + this.paddle.width / 2, this.paddle.y - this.ball.radius - 5);
        }
        if (this.paddle.x < 0 ){
            this.paddle.removeVel();
            this.paddle.x = 3; 
        } else if (this.paddle.x + this.paddle.width > GAME_WIDTH) {
            this.paddle.removeVel();
            this.paddle.x = GAME_WIDTH - this.paddle.width - 3;
        }
    }

    paddleCollision(){
        if (this.ball.x < this.paddle.x + this.paddle.width && this.ball.x > this.paddle.x && this.ball.y < this.paddle.y + this.paddle.height && this.ball.y + this.ball.radius > this.paddle.y) {

            // PLAY SOUND

            // CHECK WHERE THE this.ball HIT THE this.paddle
            let collidePoint = this.ball.x - (this.paddle.x + this.paddle.width / 2);

            // NORMALIZE THE VALUES
            collidePoint = collidePoint / (this.paddle.width / 2);

            // CALCULATE THE ANGLE OF THE this.ball
            let angle = collidePoint * Math.PI / 3;


            this.ball.dx = Math.ceil(SPEED * Math.sin(angle));
            this.ball.dy = - Math.ceil(SPEED * Math.cos(angle));
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
                        if ((ball.x + ball.radius >= b.x && ball.x - ball.radius <= b.x) || (ball.x - ball.radius <= b.x + b.width && ball.x + ball.radius >= b.x + b.width)){
                            ball.dx = -ball.dx;
                        } 
                        else if ((ball.y + ball.radius >= b.y && ball.y - ball.radius <= b.y ) || (ball.y - ball.radius <= b.y + b.height && ball.y + ball.radius >= b.y + b.height)){
                            ball.dy = -ball.dy;
                        } 
                        b.status -= 1;
                        this.score += 20;
                        this.addParticles(ball);
                    }
                }
            }
        }
    }


    levelUp(){
       if (this.level <= 3){
            let row = this.levels[this.level].r;
            let col = this.levels[this.level].c;

            for (let r = 0; r < row; r++) {
                for (let c = 0; c < col; c++) {
                    let b = this.bricks[r][c];
                    if (b.status > 0) {
                        return false;
                    }
                }
            }
            this.level += 1;
            if (this.level > 3){
                this.gameOver();
            } else {
                this.addBricks();
                this.ball.resetBall(this.paddle.x + this.paddle.width / 2, this.paddle.y - this.ball.radius - 5);
            }
       }

    }

    gameOver(){
        if (this.lives <= 0 || this.level > 3){
            this.over = true;
        }
    }

    update(){
        this.Bounds();
        this.paddleCollision();
        this.brickCollision();
        this.removeParticles();
        this.gameOver();
        this.levelUp();
    }

    moveObjects() {
        this.ball.move();
        this.paddle.move();
        this.moveParticles();
    }

    step(){
       this.update();
       this.moveObjects();
    }


}


export default Game;
