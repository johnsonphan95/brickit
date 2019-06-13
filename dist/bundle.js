/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


class Ball {
    constructor(x, y) {
        // this.x = (GAME_WIDTH / 2);
        // this.y = GAME_HEIGHT - PADDLE_HEIGHT - PADDLE_MARGIN_BOTTOM - BALL_RADIUS;
        this.x = x; 
        this.y = y;
        this.radius = _constants__WEBPACK_IMPORTED_MODULE_0__["BALL_RADIUS"];
        this.speed = _constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"]; 
        this.dx = _constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"] * (Math.random() * 2 - 1)
        this.dy = -_constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"]; 
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

    resetBall(x, y){
        this.x = x;
        this.y = y;
        this.dx = _constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"] * (Math.random() * 2 - 1)
        this.dy = -_constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"];
    }

}


/* harmony default export */ __webpack_exports__["default"] = (Ball);

/***/ }),

/***/ "./src/brick.js":
/*!**********************!*\
  !*** ./src/brick.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


class Brick {
    constructor(options) {
        this.x = options.x; 
        this.y = options.y; 
        this.color = "rgba(255, 15, 255)";
        this.height = _constants__WEBPACK_IMPORTED_MODULE_0__["BRICK_HEIGHT"];
        this.width = _constants__WEBPACK_IMPORTED_MODULE_0__["BRICK_WIDTH"];
        this.status = 2; 
        this.marginTop = 50; 
    }

    draw(ctx) {
        if (this.status === 1){
            this.color = "rgba(255, 15, 255)"
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 5; 
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            // ctx.strokeStyle = this.strokeColor;
            // ctx.lineWidth = 2;
            // ctx.strokeRect(this.x - 0.5, this.y - 0.5, this.width, this.height);
        } else if (this.status === 2){
            this.color = "rgba(15, 225, 15)"
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 5;
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }


}


/* harmony default export */ __webpack_exports__["default"] = (Brick);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: KEY, MOVES, IMAGES, SPEED, GAME_WIDTH, GAME_HEIGHT, GAME_BG, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_MARGIN_BOTTOM, BALL_RADIUS, BRICK_HEIGHT, BRICK_WIDTH, BRICK_MARGIN_TOP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY", function() { return KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVES", function() { return MOVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES", function() { return IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPEED", function() { return SPEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_WIDTH", function() { return GAME_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_HEIGHT", function() { return GAME_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_BG", function() { return GAME_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PADDLE_WIDTH", function() { return PADDLE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PADDLE_HEIGHT", function() { return PADDLE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PADDLE_MARGIN_BOTTOM", function() { return PADDLE_MARGIN_BOTTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BALL_RADIUS", function() { return BALL_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRICK_HEIGHT", function() { return BRICK_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRICK_WIDTH", function() { return BRICK_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRICK_MARGIN_TOP", function() { return BRICK_MARGIN_TOP; });
const KEY = { 
    A: 65, 
    D: 68, 
    LEFT: 37, 
    RIGHT: 39, 
    ENTER: 13
}

const MOVES = {
    LEFT: [-1, 0], 
    RIGHT: [1, 0], 
    ZERO: [0, 0]
}

const IMAGES = {
    logo: []
}

const SPEED = 7; 
const GAME_WIDTH = 500; 
const GAME_HEIGHT = 700;
const GAME_BG = "#141414";
const PADDLE_WIDTH = 75; 
const PADDLE_HEIGHT = 20;
const PADDLE_MARGIN_BOTTOM = 50; 
const BALL_RADIUS = 8; 
const BRICK_HEIGHT = 20; 
const BRICK_WIDTH = 40; 
const BRICK_MARGIN_TOP = 50;


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paddle */ "./src/paddle.js");
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball */ "./src/ball.js");
/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brick */ "./src/brick.js");
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./particle */ "./src/particle.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/constants.js");






class Game {

    constructor(){
        this.paddle = new _paddle__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.ball = new _ball__WEBPACK_IMPORTED_MODULE_1__["default"](this.paddle.x + this.paddle.width/2, this.paddle.y - 10);
        this.bricks = [];
        this.particles = [];
        this.lives = 3; 
        this.level = 1; 
        this.levels = {
            1: {r: 5, c: 8}, 
            2: {r: 1, c: 1}, 
            3: {r: 1, c: 1}
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
        this.levelUp = this.levelUp.bind(this);
        this.update = this.update.bind(this);
        this.gameOver = this.gameOver.bind(this);
    }

    addBricks(){
         
        let row = this.levels[this.level].r; 
        let col = this.levels[this.level].c;

        for (let r = 0; r < row; r++){
            this.bricks[r] = [];    
            for (let c = 0; c < col; c++){
                this.bricks[r][c] = [];
                this.bricks[r][c] = new _brick__WEBPACK_IMPORTED_MODULE_2__["default"]({ x: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 15 + c * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 10) , y: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_MARGIN_TOP"] + r * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_HEIGHT"] + 12.5)})
            }
        }
    }

    addParticles(ball){
        for (let i = 0; i < 12; i++){
            this.particles.push(new _particle__WEBPACK_IMPORTED_MODULE_3__["default"](ball))
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
        ctx.clearRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"]);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"]);

        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(15, _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"] - 15, 8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(5, 255, 255)";
        ctx.fill();

        ctx.fillStyle = "#FFF"; 
        ctx.font = "16px Monaco";
        ctx.fillText(this.lives, 40, _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"] - 9);
        ctx.fillStyle = "rgba(255, 255, 5)";
        ctx.fillText(`SCORE: ${this.score}`, 100, _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"] - 9);
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
        if (x + radius > _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_WIDTH"]) {
            this.ball.x = _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_WIDTH"] - radius;
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
        if (y + radius > _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"]){
            this.lives -= 1; 
            // this.ball = new Ball(this.paddle.x + this.paddle.width/2, this.paddle.y - this.ball.radius - 5);
            this.ball.resetBall(this.paddle.x + this.paddle.width / 2, this.paddle.y - this.ball.radius - 5);
        }
        if (this.paddle.x < 0 ){
            this.paddle.removeVel();
            this.paddle.x = 3; 
        } else if (this.paddle.x + this.paddle.width > _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_WIDTH"]) {
            this.paddle.removeVel();
            this.paddle.x = _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_WIDTH"] - this.paddle.width - 3;
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


            this.ball.dx = Math.ceil(_constants__WEBPACK_IMPORTED_MODULE_4__["SPEED"] * Math.sin(angle));
            this.ball.dy = - Math.ceil(_constants__WEBPACK_IMPORTED_MODULE_4__["SPEED"] * Math.cos(angle));
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
                        this.score += 10;
                        this.addParticles(ball);
                    }
                }
            }
        }
    }

    levelUp(){
        if (this.level <= Object.keys(this.levels).length){
            let row = this.levels[this.level].r;
            let col = this.levels[this.level].c;
        
            for (let r = 0; r < row; r++) {
                for (let c = 0; c < col; c++) {
                    let b = this.bricks[r][c]; 
                    if (b.status > 0){
                        return false;
                    }
                }
            }
            this.level += 1;
            return true;
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
        // this.gameWon();
    }

    moveObjects() {
        // this.Bounds();
        // this.paddleCollision();
        // this.brickCollision();
        // this.removeParticles();
        this.ball.move();
        this.paddle.move();
        this.moveParticles();
    }

    step(){
       this.update();
       this.moveObjects();
    }


}


/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/game_over_screen.js":
/*!*********************************!*\
  !*** ./src/game_over_screen.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


class titleScreen {
    constructor() {
        this.imageCount = 0;
        this.counter = 0;
    }

    image() {
        let image = _constants__WEBPACK_IMPORTED_MODULE_0__["IMAGES"].logo[this.imageCount];
        return image;
    }

    draw(ctx, score) {

        if (this.counter === 9) {
            ctx.clearRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_HEIGHT"]);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_HEIGHT"]);
            ctx.drawImage(this.image(), 0, _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_HEIGHT"] / 20);
            this.imageCount = (this.imageCount + 1) % 87;
            ctx.beginPath();

            // draw press enter to play
            ctx.strokeStyle = "rgba(255, 255, 255)";
            ctx.fillStyle = "rgba(255, 255, 255)";
            ctx.textAlign = "center";
            ctx.font = "30px Monaco"
            ctx.shadowColor = "rgba(255, 255, 255)";
            ctx.shadowBlur = 0;
            ctx.fillText("PRESS       TO PLAY AGAIN", _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_WIDTH"] / 2, 550);
            ctx.fillStyle = "rgba(255, 255, 5)";
            ctx.shadowColor = "rgba(255, 255, 5)";
            ctx.fillText("ENTER", 180, 550);
            ctx.closePath();

            // draw final score 
            ctx.fillText("FINAL SCORE", 250, 275);
            ctx.fillStyle = "rgba(255, 5, 255)";
            ctx.font = "40px Monaco";
            ctx.fillText(score, 250, 375);
          

            this.counter = 0;
        }
        this.counter++;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (titleScreen);



/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _title_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title_screen */ "./src/title_screen.js");
/* harmony import */ var _game_over_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game_over_screen */ "./src/game_over_screen.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./src/util.js");






class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.paddle = this.game.paddle;
        this.titleScreen  = new _title_screen__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.gameOverScreen = new _game_over_screen__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.keyDown = {};
        this.moving = [];
        this.state = "title";
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.step = this.step.bind(this);
        document.addEventListener("keydown", this.handleKeyDown);
        document.addEventListener("keyup", this.handleKeyUp);
    }

    start() {
        _util__WEBPACK_IMPORTED_MODULE_4__["loadImages"](() => {
            requestAnimationFrame(this.step)
        })
    };

    step(){
        let that = this;
        let fps = 60;
        setTimeout(function(){
            switch(that.state){
                case "title": 
                    that.titleScreen.draw(that.ctx);
                    break;
                case "game": 
                    that.game.draw(that.ctx);
                    that.game.step();
                    if (that.game.over === true) that.state = 'gameover';
                    if (that.game.won === true) that.state = 'gamewon';
                    break;
                case "gameover": 
                    that.gameOverScreen.draw(that.ctx, that.game.score);
                    break;
            }
            requestAnimationFrame(that.step)
        }, 1000/fps);
    };

    handleKeyDown(e){
        if (e.repeat || this.keyDown[e.keyCode]) return; 
        if (e.keyCode === _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].ENTER){
            if (this.state === 'title' || this.state === 'gameover'){ 
                this.state = "game"; 
                this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](); 
                this.paddle = this.game.paddle;
                this.keyDown = {};
            }
        };
        if (!this.game.over || !this.game.won){ 
            switch(e.keyCode){
                case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].A: 
                 
                    this.moving.push(_constants__WEBPACK_IMPORTED_MODULE_1__["MOVES"].LEFT)
                    this.paddle.setVel(this.moving[this.moving.length - 1]);
                    this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].A] = true;
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].D: 
                    this.moving.push(_constants__WEBPACK_IMPORTED_MODULE_1__["MOVES"].RIGHT)
                    this.paddle.setVel(this.moving[this.moving.length - 1]);
                    this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].D] = true;
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].LEFT: 
                    this.moving.push(_constants__WEBPACK_IMPORTED_MODULE_1__["MOVES"].LEFT)
                    this.paddle.setVel(this.moving[this.moving.length - 1]);
                    this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].LEFT] = true;
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].RIGHT: 
                    this.moving.push(_constants__WEBPACK_IMPORTED_MODULE_1__["MOVES"].RIGHT)
                    this.paddle.setVel(this.moving[this.moving.length - 1]);
                    this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].RIGHT] = true;
                    break;
            }
        }
    }

    handleKeyUp(e){
        if (!this.game.over || !this.game.won){
            switch(e.keyCode){
                case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].A:
                    this.moving = this.moving.filter(arr => arr.join("") !== _constants__WEBPACK_IMPORTED_MODULE_1__["MOVES"].LEFT.join(""));
                    this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].A] = false; 
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].D: 
                    this.moving = this.moving.filter(arr => arr.join("") !== _constants__WEBPACK_IMPORTED_MODULE_1__["MOVES"].RIGHT.join(""));
                    this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].D] = false; 
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].LEFT:
                    this.moving = this.moving.filter(arr => arr.join("") !== _constants__WEBPACK_IMPORTED_MODULE_1__["MOVES"].LEFT.join(""));
                    this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].LEFT] = false; 
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].RIGHT: 
                    this.moving = this.moving.filter(arr => arr.join("") !== _constants__WEBPACK_IMPORTED_MODULE_1__["MOVES"].RIGHT.join(""));
                    this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].RIGHT] = false; 
                    break;
                }
            if (this.moving.length != 0) {
                this.paddle.setVel(this.moving[this.moving.length - 1])
            }
            if (this.moving.length === 0) {
                this.paddle.removeVel();
            }
        }
    }
    
}

/* harmony default export */ __webpack_exports__["default"] = (GameView);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_view */ "./src/game_view.js");




document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    const ctx = canvasEl.getContext("2d");
   
    canvasEl.width = _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_WIDTH"]; 
    canvasEl.height = _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_HEIGHT"];
    
    
    // const game = new Game(); 
    new _game_view__WEBPACK_IMPORTED_MODULE_2__["default"](ctx).start();
})



/***/ }),

/***/ "./src/paddle.js":
/*!***********************!*\
  !*** ./src/paddle.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


class Paddle {
    constructor(){
        this.vel = [0, 0];
        this.x = (_constants__WEBPACK_IMPORTED_MODULE_0__["GAME_WIDTH"]/2) - (_constants__WEBPACK_IMPORTED_MODULE_0__["PADDLE_WIDTH"]/2);
        this.y = _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_HEIGHT"] - _constants__WEBPACK_IMPORTED_MODULE_0__["PADDLE_HEIGHT"] - _constants__WEBPACK_IMPORTED_MODULE_0__["PADDLE_MARGIN_BOTTOM"];
        this.height = _constants__WEBPACK_IMPORTED_MODULE_0__["PADDLE_HEIGHT"]; 
        this.width = _constants__WEBPACK_IMPORTED_MODULE_0__["PADDLE_WIDTH"];
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
        vel = [vel[0] * _constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"] , vel[1] * _constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"] ]
        this.vel = vel;
    }

    removeVel(){ 
        this.vel = [0, 0];
    }

}


/* harmony default export */ __webpack_exports__["default"] = (Paddle);

/***/ }),

/***/ "./src/particle.js":
/*!*************************!*\
  !*** ./src/particle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


class Particle {
    constructor(ball) {
        this.x = ball.x
        this.y = ball.y
        this.radius = 2;
        this.speed = _constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"];
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
        this.dy -= 0.1;
        this.x += this.dx;
        this.y -= this.dy;
    }

}


/* harmony default export */ __webpack_exports__["default"] = (Particle);

/***/ }),

/***/ "./src/title_screen.js":
/*!*****************************!*\
  !*** ./src/title_screen.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


class titleScreen {
    constructor(){
        this.imageCount = 0;
        this.counter = 0;
    }

    image(){
        let image = _constants__WEBPACK_IMPORTED_MODULE_0__["IMAGES"].logo[this.imageCount];
        return image;
    }

    draw(ctx){

        if (this.counter === 9){
            ctx.clearRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_HEIGHT"]);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_HEIGHT"]);
            ctx.drawImage(this.image(), 0, _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_HEIGHT"]/20);
            this.imageCount = (this.imageCount + 1) % 87;
            ctx.beginPath();
    
            // draw press enter to play
            ctx.strokeStyle = "rgba(255, 255, 255)";
            ctx.fillStyle = "rgba(255, 255, 255)";
            ctx.textAlign = "center";
            ctx.font = "30px Monaco"
            ctx.shadowColor = "rgba(255, 255, 255)";
            ctx.shadowBlur = 0;
            ctx.fillText("PRESS       TO PLAY", _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_WIDTH"] / 2, 250);
            ctx.fillStyle = "rgba(255, 255, 5)";
            ctx.shadowColor = "rgba(255, 255, 5)";
            ctx.fillText("ENTER", 235, 250);
            ctx.closePath();
    
            // draw instructions and controls
    
            ctx.beginPath();
            ctx.textAlign = "center";
            ctx.font = "30px Monaco"
            ctx.shadowColor = "rgba(255, 5, 255)"
            ctx.fillStyle = "rgba(5, 255, 5)";
            ctx.fillText("INSTRUCTIONS", 250, 350)
            ctx.fillStyle = "rgba(255, 5, 255)";
            ctx.fillText("CONTROLS", 250, 500);
            ctx.font = "20px Monaco"
            ctx.shadowColor = "rgba(255, 255, 255)";
            ctx.fillStyle = "rgba(255, 255, 255)";
            ctx.fillText("Break all the BRICKS", 250, 400);
            ctx.fillText("[A] [D] or [<] [>] to move LEFT RIGHT", 250, 550);
            ctx.fillStyle = "";
            ctx.shadowBlur = "";
            ctx.closePath();

            this.counter = 0;
        }
        this.counter++;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (titleScreen); 



/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: loadImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImages", function() { return loadImages; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


const loadImages = (callback) => {
    let count = 0; // number of images loaded
    let total = 0;

    const sprites = 87;

    for (let i = 0; i <= sprites; i++) {
        total += 1;

        let img = new Image();
        img.onload = loaded;
        img.src = `dist/images/title/title${i}.png`;
        _constants__WEBPACK_IMPORTED_MODULE_0__["IMAGES"].logo.push(img);
        // debugger
    }

    // Once all images have been fully loaded, will initiate callback, which in this
    // case will be inside the start() function inside GameView
    function loaded() {
        count++;
        if (count >= total) {
            callback();
        }
    }
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JyaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfb3Zlcl9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZGRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpdGxlX3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7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QUVBO0FBQ0Esb0JBQW9CLGlEQUFNO0FBQzFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0MscURBQVUsRUFBRSxzREFBVztBQUN2RDtBQUNBLCtCQUErQixxREFBVSxFQUFFLHNEQUFXO0FBQ3RELDJDQUEyQyxzREFBVztBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHFEQUFVO0FBQzFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsMEVBQVcsRTs7Ozs7Ozs7Ozs7Ozs7QUM3RDFCO0FBQUE7QUFBQTtBQUFxQzs7QUFFOUI7QUFDUCxrQkFBa0I7QUFDbEI7O0FBRUE7O0FBRUEsbUJBQW1CLGNBQWM7QUFDakM7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QyxFQUFFO0FBQzlDLFFBQVEsaURBQU07QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IFNQRUVELCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCwgUEFERExFX0hFSUdIVCwgUEFERExFX1dJRFRILCBQQURETEVfTUFSR0lOX0JPVFRPTSwgQkFMTF9SQURJVVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIEJhbGwge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgLy8gdGhpcy54ID0gKEdBTUVfV0lEVEggLyAyKTtcbiAgICAgICAgLy8gdGhpcy55ID0gR0FNRV9IRUlHSFQgLSBQQURETEVfSEVJR0hUIC0gUEFERExFX01BUkdJTl9CT1RUT00gLSBCQUxMX1JBRElVUztcbiAgICAgICAgdGhpcy54ID0geDsgXG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gQkFMTF9SQURJVVM7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBTUEVFRDsgXG4gICAgICAgIHRoaXMuZHggPSBTUEVFRCAqIChNYXRoLnJhbmRvbSgpICogMiAtIDEpXG4gICAgICAgIHRoaXMuZHkgPSAtU1BFRUQ7IFxuICAgICAgICB0aGlzLnN0YXR1cyA9IHRydWU7IFxuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZ2JhKDUsIDI1NSwgMjU1KVwiXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSAxMDsgXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgXG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZHg7IFxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5keTtcbiAgICB9XG5cbiAgICByZXNldEJhbGwoeCwgeSl7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuZHggPSBTUEVFRCAqIChNYXRoLnJhbmRvbSgpICogMiAtIDEpXG4gICAgICAgIHRoaXMuZHkgPSAtU1BFRUQ7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQmFsbDsiLCJpbXBvcnQgeyBTUEVFRCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQsIEJSSUNLX0hFSUdIVCwgQlJJQ0tfV0lEVEggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIEJyaWNrIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMueCA9IG9wdGlvbnMueDsgXG4gICAgICAgIHRoaXMueSA9IG9wdGlvbnMueTsgXG4gICAgICAgIHRoaXMuY29sb3IgPSBcInJnYmEoMjU1LCAxNSwgMjU1KVwiO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEJSSUNLX0hFSUdIVDtcbiAgICAgICAgdGhpcy53aWR0aCA9IEJSSUNLX1dJRFRIO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IDI7IFxuICAgICAgICB0aGlzLm1hcmdpblRvcCA9IDUwOyBcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDEpe1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9IFwicmdiYSgyNTUsIDE1LCAyNTUpXCJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDU7IFxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlQ29sb3I7XG4gICAgICAgICAgICAvLyBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2VSZWN0KHRoaXMueCAtIDAuNSwgdGhpcy55IC0gMC41LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09IDIpe1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9IFwicmdiYSgxNSwgMjI1LCAxNSlcIlxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gNTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJyaWNrOyIsImV4cG9ydCBjb25zdCBLRVkgPSB7IFxuICAgIEE6IDY1LCBcbiAgICBEOiA2OCwgXG4gICAgTEVGVDogMzcsIFxuICAgIFJJR0hUOiAzOSwgXG4gICAgRU5URVI6IDEzXG59XG5cbmV4cG9ydCBjb25zdCBNT1ZFUyA9IHtcbiAgICBMRUZUOiBbLTEsIDBdLCBcbiAgICBSSUdIVDogWzEsIDBdLCBcbiAgICBaRVJPOiBbMCwgMF1cbn1cblxuZXhwb3J0IGNvbnN0IElNQUdFUyA9IHtcbiAgICBsb2dvOiBbXVxufVxuXG5leHBvcnQgY29uc3QgU1BFRUQgPSA3OyBcbmV4cG9ydCBjb25zdCBHQU1FX1dJRFRIID0gNTAwOyBcbmV4cG9ydCBjb25zdCBHQU1FX0hFSUdIVCA9IDcwMDtcbmV4cG9ydCBjb25zdCBHQU1FX0JHID0gXCIjMTQxNDE0XCI7XG5leHBvcnQgY29uc3QgUEFERExFX1dJRFRIID0gNzU7IFxuZXhwb3J0IGNvbnN0IFBBRERMRV9IRUlHSFQgPSAyMDtcbmV4cG9ydCBjb25zdCBQQURETEVfTUFSR0lOX0JPVFRPTSA9IDUwOyBcbmV4cG9ydCBjb25zdCBCQUxMX1JBRElVUyA9IDg7IFxuZXhwb3J0IGNvbnN0IEJSSUNLX0hFSUdIVCA9IDIwOyBcbmV4cG9ydCBjb25zdCBCUklDS19XSURUSCA9IDQwOyBcbmV4cG9ydCBjb25zdCBCUklDS19NQVJHSU5fVE9QID0gNTA7XG4iLCJpbXBvcnQgUGFkZGxlIGZyb20gJy4vcGFkZGxlJztcbmltcG9ydCBCYWxsIGZyb20gJy4vYmFsbCc7XG5pbXBvcnQgQnJpY2sgZnJvbSAnLi9icmljayc7XG5pbXBvcnQgUGFydGljbGUgZnJvbSAnLi9wYXJ0aWNsZSc7XG5pbXBvcnQge1NQRUVELCBHQU1FX0hFSUdIVCwgR0FNRV9XSURUSCwgQlJJQ0tfV0lEVEgsIEJSSUNLX0hFSUdIVCwgQlJJQ0tfTUFSR0lOX1RPUH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBHYW1lIHtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucGFkZGxlID0gbmV3IFBhZGRsZSgpO1xuICAgICAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCh0aGlzLnBhZGRsZS54ICsgdGhpcy5wYWRkbGUud2lkdGgvMiwgdGhpcy5wYWRkbGUueSAtIDEwKTtcbiAgICAgICAgdGhpcy5icmlja3MgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5saXZlcyA9IDM7IFxuICAgICAgICB0aGlzLmxldmVsID0gMTsgXG4gICAgICAgIHRoaXMubGV2ZWxzID0ge1xuICAgICAgICAgICAgMToge3I6IDUsIGM6IDh9LCBcbiAgICAgICAgICAgIDI6IHtyOiAxLCBjOiAxfSwgXG4gICAgICAgICAgICAzOiB7cjogMSwgYzogMX1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMub3ZlciA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy53b24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGRCcmlja3MoKTtcbiAgICAgICAgdGhpcy5Cb3VuZHMgPSB0aGlzLkJvdW5kcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBhZGRsZUNvbGxpc2lvbiA9IHRoaXMucGFkZGxlQ29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYnJpY2tDb2xsaXNpb24gPSB0aGlzLmJyaWNrQ29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkUGFydGljbGVzID0gdGhpcy5hZGRQYXJ0aWNsZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVQYXJ0aWNsZXMgPSB0aGlzLnJlbW92ZVBhcnRpY2xlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmVQYXJ0aWNsZXMgPSB0aGlzLm1vdmVQYXJ0aWNsZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sZXZlbFVwID0gdGhpcy5sZXZlbFVwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBhZGRCcmlja3MoKXtcbiAgICAgICAgIFxuICAgICAgICBsZXQgcm93ID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0ucjsgXG4gICAgICAgIGxldCBjb2wgPSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXS5jO1xuXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93OyByKyspe1xuICAgICAgICAgICAgdGhpcy5icmlja3Nbcl0gPSBbXTsgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbDsgYysrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdW2NdID0gbmV3IEJyaWNrKHsgeDogQlJJQ0tfV0lEVEggKyAxNSArIGMgKiAoQlJJQ0tfV0lEVEggKyAxMCkgLCB5OiBCUklDS19NQVJHSU5fVE9QICsgciAqIChCUklDS19IRUlHSFQgKyAxMi41KX0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQYXJ0aWNsZXMoYmFsbCl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZShiYWxsKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVBhcnRpY2xlcygpe1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmZpbHRlcihwYXJ0aWNsZSA9PiBwYXJ0aWNsZS50dGwgPiAwKTtcbiAgICB9XG5cbiAgICBtb3ZlUGFydGljbGVzKCl7XG4gICAgICAgIHRoaXMucGFydGljbGVzLmZvckVhY2goKHBhcnRpY2xlKSA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNsZS5tb3ZlKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG5cbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSAwO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoMTUsIEdBTUVfSEVJR0hUIC0gMTUsIDgsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSg1LCAyNTUsIDI1NSlcIjtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjRkZGXCI7IFxuICAgICAgICBjdHguZm9udCA9IFwiMTZweCBNb25hY29cIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMubGl2ZXMsIDQwLCBHQU1FX0hFSUdIVCAtIDkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCA1KVwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYFNDT1JFOiAke3RoaXMuc2NvcmV9YCwgMTAwLCBHQU1FX0hFSUdIVCAtIDkpO1xuICAgICAgICB0aGlzLmJhbGwuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLmJyaWNrcy5mb3JFYWNoKHJvdyA9PiB7IHJvdy5mb3JFYWNoKGJyaWNrID0+IGJyaWNrLmRyYXcoY3R4KSkgfSk7XG4gICAgICAgIHRoaXMucGFkZGxlLmRyYXcoY3R4KTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiBwYXJ0aWNsZS5kcmF3KGN0eCkpO1xuICAgIH1cblxuICAgIEJvdW5kcygpIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLmJhbGwueDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmJhbGwueTtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5iYWxsLmR4O1xuICAgICAgICBsZXQgZHkgPSB0aGlzLmJhbGwuZHk7XG4gICAgICAgIGxldCByYWRpdXMgPSB0aGlzLmJhbGwucmFkaXVzO1xuICAgICAgICBpZiAoeCArIHJhZGl1cyA+IEdBTUVfV0lEVEgpIHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC54ID0gR0FNRV9XSURUSCAtIHJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuYmFsbC5keCA9IC1keDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCAtIHJhZGl1cyA8IDApe1xuICAgICAgICAgICAgdGhpcy5iYWxsLnggPSByYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmJhbGwuZHggPSAtZHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgLSByYWRpdXMgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmJhbGwueSA9IHJhZGl1czsgXG4gICAgICAgICAgICB0aGlzLmJhbGwuZHkgPSAtZHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgKyByYWRpdXMgPiBHQU1FX0hFSUdIVCl7XG4gICAgICAgICAgICB0aGlzLmxpdmVzIC09IDE7IFxuICAgICAgICAgICAgLy8gdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5wYWRkbGUueCArIHRoaXMucGFkZGxlLndpZHRoLzIsIHRoaXMucGFkZGxlLnkgLSB0aGlzLmJhbGwucmFkaXVzIC0gNSk7XG4gICAgICAgICAgICB0aGlzLmJhbGwucmVzZXRCYWxsKHRoaXMucGFkZGxlLnggKyB0aGlzLnBhZGRsZS53aWR0aCAvIDIsIHRoaXMucGFkZGxlLnkgLSB0aGlzLmJhbGwucmFkaXVzIC0gNSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFkZGxlLnggPCAwICl7XG4gICAgICAgICAgICB0aGlzLnBhZGRsZS5yZW1vdmVWZWwoKTtcbiAgICAgICAgICAgIHRoaXMucGFkZGxlLnggPSAzOyBcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZGRsZS54ICsgdGhpcy5wYWRkbGUud2lkdGggPiBHQU1FX1dJRFRIKSB7XG4gICAgICAgICAgICB0aGlzLnBhZGRsZS5yZW1vdmVWZWwoKTtcbiAgICAgICAgICAgIHRoaXMucGFkZGxlLnggPSBHQU1FX1dJRFRIIC0gdGhpcy5wYWRkbGUud2lkdGggLSAzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFkZGxlQ29sbGlzaW9uKCl7XG4gICAgICAgIGlmICh0aGlzLmJhbGwueCA8IHRoaXMucGFkZGxlLnggKyB0aGlzLnBhZGRsZS53aWR0aCAmJiB0aGlzLmJhbGwueCA+IHRoaXMucGFkZGxlLnggJiYgdGhpcy5iYWxsLnkgPCB0aGlzLnBhZGRsZS55ICsgdGhpcy5wYWRkbGUuaGVpZ2h0ICYmIHRoaXMuYmFsbC55ICsgdGhpcy5iYWxsLnJhZGl1cyA+IHRoaXMucGFkZGxlLnkpIHtcblxuICAgICAgICAgICAgLy8gUExBWSBTT1VORFxuXG4gICAgICAgICAgICAvLyBDSEVDSyBXSEVSRSBUSEUgdGhpcy5iYWxsIEhJVCBUSEUgdGhpcy5wYWRkbGVcbiAgICAgICAgICAgIGxldCBjb2xsaWRlUG9pbnQgPSB0aGlzLmJhbGwueCAtICh0aGlzLnBhZGRsZS54ICsgdGhpcy5wYWRkbGUud2lkdGggLyAyKTtcblxuICAgICAgICAgICAgLy8gTk9STUFMSVpFIFRIRSBWQUxVRVNcbiAgICAgICAgICAgIGNvbGxpZGVQb2ludCA9IGNvbGxpZGVQb2ludCAvICh0aGlzLnBhZGRsZS53aWR0aCAvIDIpO1xuXG4gICAgICAgICAgICAvLyBDQUxDVUxBVEUgVEhFIEFOR0xFIE9GIFRIRSB0aGlzLmJhbGxcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IGNvbGxpZGVQb2ludCAqIE1hdGguUEkgLyAzO1xuXG5cbiAgICAgICAgICAgIHRoaXMuYmFsbC5keCA9IE1hdGguY2VpbChTUEVFRCAqIE1hdGguc2luKGFuZ2xlKSk7XG4gICAgICAgICAgICB0aGlzLmJhbGwuZHkgPSAtIE1hdGguY2VpbChTUEVFRCAqIE1hdGguY29zKGFuZ2xlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBicmlja0NvbGxpc2lvbigpe1xuICAgICAgICBsZXQgcm93ID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0ucjtcbiAgICAgICAgbGV0IGNvbCA9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdLmM7XG4gICAgICAgIGxldCBiYWxsID0gdGhpcy5iYWxsOyBcbiAgICAgICAgbGV0IHIgPSB0aGlzLmJhbGwucmFkaXVzO1xuXG5cbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3c7IHIrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2w7IGMrKykge1xuICAgICAgICAgICAgICAgIGxldCBiID0gdGhpcy5icmlja3Nbcl1bY107XG4gICAgICAgICAgICAgICAgaWYgKGIuc3RhdHVzID4gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGwueCArIGJhbGwucmFkaXVzID4gYi54ICYmIGJhbGwueCAtIGJhbGwucmFkaXVzIDwgYi54ICsgYi53aWR0aCAmJiBiYWxsLnkgKyBiYWxsLnJhZGl1cyA+IGIueSAmJiBiYWxsLnkgLSBiYWxsLnJhZGl1cyA8IGIueSArIGIuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGJhbGwueCArIGJhbGwucmFkaXVzID49IGIueCAmJiBiYWxsLnggLSBiYWxsLnJhZGl1cyA8PSBiLngpIHx8IChiYWxsLnggLSBiYWxsLnJhZGl1cyA8PSBiLnggKyBiLndpZHRoICYmIGJhbGwueCArIGJhbGwucmFkaXVzID49IGIueCArIGIud2lkdGgpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsLmR4ID0gLWJhbGwuZHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKGJhbGwueSArIGJhbGwucmFkaXVzID49IGIueSAmJiBiYWxsLnkgLSBiYWxsLnJhZGl1cyA8PSBiLnkgKSB8fCAoYmFsbC55IC0gYmFsbC5yYWRpdXMgPD0gYi55ICsgYi5oZWlnaHQgJiYgYmFsbC55ICsgYmFsbC5yYWRpdXMgPj0gYi55ICsgYi5oZWlnaHQpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsLmR5ID0gLWJhbGwuZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgYi5zdGF0dXMgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFBhcnRpY2xlcyhiYWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldmVsVXAoKXtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwgPD0gT2JqZWN0LmtleXModGhpcy5sZXZlbHMpLmxlbmd0aCl7XG4gICAgICAgICAgICBsZXQgcm93ID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0ucjtcbiAgICAgICAgICAgIGxldCBjb2wgPSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXS5jO1xuICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93OyByKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiID0gdGhpcy5icmlja3Nbcl1bY107IFxuICAgICAgICAgICAgICAgICAgICBpZiAoYi5zdGF0dXMgPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGV2ZWwgKz0gMTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIGlmICh0aGlzLmxpdmVzIDw9IDAgfHwgdGhpcy5sZXZlbCA+IDMpe1xuICAgICAgICAgICAgdGhpcy5vdmVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICB0aGlzLkJvdW5kcygpO1xuICAgICAgICB0aGlzLnBhZGRsZUNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmJyaWNrQ29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlUGFydGljbGVzKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgLy8gdGhpcy5nYW1lV29uKCk7XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoKSB7XG4gICAgICAgIC8vIHRoaXMuQm91bmRzKCk7XG4gICAgICAgIC8vIHRoaXMucGFkZGxlQ29sbGlzaW9uKCk7XG4gICAgICAgIC8vIHRoaXMuYnJpY2tDb2xsaXNpb24oKTtcbiAgICAgICAgLy8gdGhpcy5yZW1vdmVQYXJ0aWNsZXMoKTtcbiAgICAgICAgdGhpcy5iYWxsLm1vdmUoKTtcbiAgICAgICAgdGhpcy5wYWRkbGUubW92ZSgpO1xuICAgICAgICB0aGlzLm1vdmVQYXJ0aWNsZXMoKTtcbiAgICB9XG5cbiAgICBzdGVwKCl7XG4gICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICB0aGlzLm1vdmVPYmplY3RzKCk7XG4gICAgfVxuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IHsgSU1BR0VTLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCB9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG5jbGFzcyB0aXRsZVNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgfVxuXG4gICAgaW1hZ2UoKSB7XG4gICAgICAgIGxldCBpbWFnZSA9IElNQUdFUy5sb2dvW3RoaXMuaW1hZ2VDb3VudF07XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCwgc2NvcmUpIHtcblxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID09PSA5KSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlKCksIDAsIEdBTUVfSEVJR0hUIC8gMjApO1xuICAgICAgICAgICAgdGhpcy5pbWFnZUNvdW50ID0gKHRoaXMuaW1hZ2VDb3VudCArIDEpICUgODc7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgICAgIC8vIGRyYXcgcHJlc3MgZW50ZXIgdG8gcGxheVxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IE1vbmFjb1wiXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSlcIjtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gMDtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIlBSRVNTICAgICAgIFRPIFBMQVkgQUdBSU5cIiwgR0FNRV9XSURUSCAvIDIsIDU1MCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCA1KVwiO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCA1KVwiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiRU5URVJcIiwgMTgwLCA1NTApO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAvLyBkcmF3IGZpbmFsIHNjb3JlIFxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiRklOQUwgU0NPUkVcIiwgMjUwLCAyNzUpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDUsIDI1NSlcIjtcbiAgICAgICAgICAgIGN0eC5mb250ID0gXCI0MHB4IE1vbmFjb1wiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHNjb3JlLCAyNTAsIDM3NSk7XG4gICAgICAgICAgXG5cbiAgICAgICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3VudGVyKys7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0aXRsZVNjcmVlbjtcblxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCB7S0VZLCBNT1ZFU30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IFRpdGxlU2NyZWVuIGZyb20gJy4vdGl0bGVfc2NyZWVuJztcbmltcG9ydCBHYW1lT3ZlclNjcmVlbiBmcm9tICcuL2dhbWVfb3Zlcl9zY3JlZW4nO1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpO1xuICAgICAgICB0aGlzLnBhZGRsZSA9IHRoaXMuZ2FtZS5wYWRkbGU7XG4gICAgICAgIHRoaXMudGl0bGVTY3JlZW4gID0gbmV3IFRpdGxlU2NyZWVuKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTY3JlZW4gPSBuZXcgR2FtZU92ZXJTY3JlZW4oKTtcbiAgICAgICAgdGhpcy5rZXlEb3duID0ge307XG4gICAgICAgIHRoaXMubW92aW5nID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUgPSBcInRpdGxlXCI7XG4gICAgICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUtleVVwID0gdGhpcy5oYW5kbGVLZXlVcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0ZXAgPSB0aGlzLnN0ZXAuYmluZCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuaGFuZGxlS2V5VXApO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBVdGlsLmxvYWRJbWFnZXMoKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RlcClcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgc3RlcCgpe1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCBmcHMgPSA2MDtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgc3dpdGNoKHRoYXQuc3RhdGUpe1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0aXRsZVwiOiBcbiAgICAgICAgICAgICAgICAgICAgdGhhdC50aXRsZVNjcmVlbi5kcmF3KHRoYXQuY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImdhbWVcIjogXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZ2FtZS5kcmF3KHRoYXQuY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nYW1lLnN0ZXAoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuZ2FtZS5vdmVyID09PSB0cnVlKSB0aGF0LnN0YXRlID0gJ2dhbWVvdmVyJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuZ2FtZS53b24gPT09IHRydWUpIHRoYXQuc3RhdGUgPSAnZ2FtZXdvbic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJnYW1lb3ZlclwiOiBcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nYW1lT3ZlclNjcmVlbi5kcmF3KHRoYXQuY3R4LCB0aGF0LmdhbWUuc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGF0LnN0ZXApXG4gICAgICAgIH0sIDEwMDAvZnBzKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlS2V5RG93bihlKXtcbiAgICAgICAgaWYgKGUucmVwZWF0IHx8IHRoaXMua2V5RG93bltlLmtleUNvZGVdKSByZXR1cm47IFxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLRVkuRU5URVIpe1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICd0aXRsZScgfHwgdGhpcy5zdGF0ZSA9PT0gJ2dhbWVvdmVyJyl7IFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcImdhbWVcIjsgXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKTsgXG4gICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUgPSB0aGlzLmdhbWUucGFkZGxlO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93biA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZS5vdmVyIHx8ICF0aGlzLmdhbWUud29uKXsgXG4gICAgICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcbiAgICAgICAgICAgICAgICBjYXNlIEtFWS5BOiBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nLnB1c2goTU9WRVMuTEVGVClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5BXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLkQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZy5wdXNoKE1PVkVTLlJJR0hUKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZS5zZXRWZWwodGhpcy5tb3ZpbmdbdGhpcy5tb3ZpbmcubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleURvd25bS0VZLkRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLRVkuTEVGVDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nLnB1c2goTU9WRVMuTEVGVClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5MRUZUXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLlJJR0hUOiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcucHVzaChNT1ZFUy5SSUdIVClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5SSUdIVF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleVVwKGUpe1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZS5vdmVyIHx8ICF0aGlzLmdhbWUud29uKXtcbiAgICAgICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLkE6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdGhpcy5tb3ZpbmcuZmlsdGVyKGFyciA9PiBhcnIuam9pbihcIlwiKSAhPT0gTU9WRVMuTEVGVC5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5BXSA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLRVkuRDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdGhpcy5tb3ZpbmcuZmlsdGVyKGFyciA9PiBhcnIuam9pbihcIlwiKSAhPT0gTU9WRVMuUklHSFQuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuRF0gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLkxFRlQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdGhpcy5tb3ZpbmcuZmlsdGVyKGFyciA9PiBhcnIuam9pbihcIlwiKSAhPT0gTU9WRVMuTEVGVC5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5MRUZUXSA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLRVkuUklHSFQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRoaXMubW92aW5nLmZpbHRlcihhcnIgPT4gYXJyLmpvaW4oXCJcIikgIT09IE1PVkVTLlJJR0hULmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleURvd25bS0VZLlJJR0hUXSA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubW92aW5nLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubW92aW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFkZGxlLnJlbW92ZVZlbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldztcbiIsImltcG9ydCB7IEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2dhbWVfdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgXG4gICAgY2FudmFzRWwud2lkdGggPSBHQU1FX1dJRFRIOyBcbiAgICBjYW52YXNFbC5oZWlnaHQgPSBHQU1FX0hFSUdIVDtcbiAgICBcbiAgICBcbiAgICAvLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTsgXG4gICAgbmV3IEdhbWVWaWV3KGN0eCkuc3RhcnQoKTtcbn0pXG5cbiIsImltcG9ydCB7IFNQRUVELCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCwgUEFERExFX0hFSUdIVCwgUEFERExFX1dJRFRILCBQQURETEVfTUFSR0lOX0JPVFRPTX0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBQYWRkbGUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudmVsID0gWzAsIDBdO1xuICAgICAgICB0aGlzLnggPSAoR0FNRV9XSURUSC8yKSAtIChQQURETEVfV0lEVEgvMik7XG4gICAgICAgIHRoaXMueSA9IEdBTUVfSEVJR0hUIC0gUEFERExFX0hFSUdIVCAtIFBBRERMRV9NQVJHSU5fQk9UVE9NO1xuICAgICAgICB0aGlzLmhlaWdodCA9IFBBRERMRV9IRUlHSFQ7IFxuICAgICAgICB0aGlzLndpZHRoID0gUEFERExFX1dJRFRIO1xuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZ2JhKDI1NSwgNSwgNSlcIlxuICAgICAgICAvLyB0aGlzLmluQm91bmRzID0gdGhpcy5pbkJvdW5kcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1OyBcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7IFxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBtb3ZlKCl7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMudmVsWzBdO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLnZlbFsxXTtcbiAgICB9XG5cblxuICAgIHNldFZlbCh2ZWwpe1xuICAgICAgICB2ZWwgPSBbdmVsWzBdICogU1BFRUQgLCB2ZWxbMV0gKiBTUEVFRCBdXG4gICAgICAgIHRoaXMudmVsID0gdmVsO1xuICAgIH1cblxuICAgIHJlbW92ZVZlbCgpeyBcbiAgICAgICAgdGhpcy52ZWwgPSBbMCwgMF07XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGFkZGxlOyIsImltcG9ydCB7IFNQRUVEIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBQYXJ0aWNsZSB7XG4gICAgY29uc3RydWN0b3IoYmFsbCkge1xuICAgICAgICB0aGlzLnggPSBiYWxsLnhcbiAgICAgICAgdGhpcy55ID0gYmFsbC55XG4gICAgICAgIHRoaXMucmFkaXVzID0gMjtcbiAgICAgICAgdGhpcy5zcGVlZCA9IFNQRUVEO1xuICAgICAgICB0aGlzLmR4ID0gNCAqIChNYXRoLnJhbmRvbSgpICogMiAtIDEpO1xuICAgICAgICB0aGlzLmR5ID0gNCAqIChNYXRoLnJhbmRvbSgpICogMiAtIDEpO1xuICAgICAgICB0aGlzLnR0bCA9IDUwOyBcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMS41O1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGlmICh0aGlzLnR0bCA+IDApe1xuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gYHJnYmEoMjU1LCAyNTUsIDI1NSlgO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1OyBcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMjU1LCAyNTUsIDI1NSwgJHt0aGlzLm9wYWNpdHl9KWBcbiAgICAgICAgICAgIGN0eC5maWxsKCk7IFxuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy50dGwgLT0gMTtcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eSAtPSAoMS90aGlzLnR0bCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLmR5IC09IDAuMTtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZHg7XG4gICAgICAgIHRoaXMueSAtPSB0aGlzLmR5O1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlOyIsImltcG9ydCB7IElNQUdFUywgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQgfSBmcm9tICcuL2NvbnN0YW50cydcblxuY2xhc3MgdGl0bGVTY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuaW1hZ2VDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgfVxuXG4gICAgaW1hZ2UoKXtcbiAgICAgICAgbGV0IGltYWdlID0gSU1BR0VTLmxvZ29bdGhpcy5pbWFnZUNvdW50XTtcbiAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KXtcblxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID09PSA5KXtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UoKSwgMCwgR0FNRV9IRUlHSFQvMjApO1xuICAgICAgICAgICAgdGhpcy5pbWFnZUNvdW50ID0gKHRoaXMuaW1hZ2VDb3VudCArIDEpICUgODc7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgXG4gICAgICAgICAgICAvLyBkcmF3IHByZXNzIGVudGVyIHRvIHBsYXlcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1KVwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1KVwiO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZm9udCA9IFwiMzBweCBNb25hY29cIlxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDA7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJQUkVTUyAgICAgICBUTyBQTEFZXCIsIEdBTUVfV0lEVEggLyAyLCAyNTApO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgNSlcIjtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSgyNTUsIDI1NSwgNSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIkVOVEVSXCIsIDIzNSwgMjUwKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBcbiAgICAgICAgICAgIC8vIGRyYXcgaW5zdHJ1Y3Rpb25zIGFuZCBjb250cm9sc1xuICAgIFxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZm9udCA9IFwiMzBweCBNb25hY29cIlxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDI1NSwgNSwgMjU1KVwiXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDUsIDI1NSwgNSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIklOU1RSVUNUSU9OU1wiLCAyNTAsIDM1MClcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCA1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJDT05UUk9MU1wiLCAyNTAsIDUwMCk7XG4gICAgICAgICAgICBjdHguZm9udCA9IFwiMjBweCBNb25hY29cIlxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJCcmVhayBhbGwgdGhlIEJSSUNLU1wiLCAyNTAsIDQwMCk7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJbQV0gW0RdIG9yIFs8XSBbPl0gdG8gbW92ZSBMRUZUIFJJR0hUXCIsIDI1MCwgNTUwKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIlwiO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSBcIlwiO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnRlcisrO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGl0bGVTY3JlZW47IFxuXG4iLCJpbXBvcnQgeyBJTUFHRVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkSW1hZ2VzID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMDsgLy8gbnVtYmVyIG9mIGltYWdlcyBsb2FkZWRcbiAgICBsZXQgdG90YWwgPSAwO1xuXG4gICAgY29uc3Qgc3ByaXRlcyA9IDg3O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc3ByaXRlczsgaSsrKSB7XG4gICAgICAgIHRvdGFsICs9IDE7XG5cbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gbG9hZGVkO1xuICAgICAgICBpbWcuc3JjID0gYGRpc3QvaW1hZ2VzL3RpdGxlL3RpdGxlJHtpfS5wbmdgO1xuICAgICAgICBJTUFHRVMubG9nby5wdXNoKGltZyk7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgLy8gT25jZSBhbGwgaW1hZ2VzIGhhdmUgYmVlbiBmdWxseSBsb2FkZWQsIHdpbGwgaW5pdGlhdGUgY2FsbGJhY2ssIHdoaWNoIGluIHRoaXNcbiAgICAvLyBjYXNlIHdpbGwgYmUgaW5zaWRlIHRoZSBzdGFydCgpIGZ1bmN0aW9uIGluc2lkZSBHYW1lVmlld1xuICAgIGZ1bmN0aW9uIGxvYWRlZCgpIHtcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYgKGNvdW50ID49IHRvdGFsKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9