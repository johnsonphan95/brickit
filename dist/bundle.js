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
        this.status = options.status; 
        this.color = "rgba(255, 15, 255)";
        this.height = _constants__WEBPACK_IMPORTED_MODULE_0__["BRICK_HEIGHT"];
        this.width = _constants__WEBPACK_IMPORTED_MODULE_0__["BRICK_WIDTH"];
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
        } else if (this.status === 3){
            this.color = "rgba(5, 5, 255)"
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
/*! exports provided: KEY, MOVES, IMAGES, SOUNDS, SPEED, GAME_WIDTH, GAME_HEIGHT, GAME_BG, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_MARGIN_BOTTOM, BALL_RADIUS, BRICK_HEIGHT, BRICK_WIDTH, BRICK_MARGIN_TOP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY", function() { return KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVES", function() { return MOVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES", function() { return IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOUNDS", function() { return SOUNDS; });
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

const SOUNDS = {
    sound: []
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
    }

    addBricks(){
        let row = this.levels[this.level].r; 
        let col = this.levels[this.level].c;

        if (this.level === 1){
            for (let r = 0; r < row; r++){
                this.bricks[r] = [];    
                for (let c = 0; c < col; c++){
                    this.bricks[r][c] = [];
                    this.bricks[r][c] = new _brick__WEBPACK_IMPORTED_MODULE_2__["default"]({ x: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 15 + c * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 10) , y: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_MARGIN_TOP"] + r * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_HEIGHT"] + 12.5), status: 1})
                }
            }
        }
        if (this.level === 2){
            for (let r = 0; r < row; r++) {
                this.bricks[r] = [];
                for (let c = 0; c < col; c++) {
                    this.bricks[r][c] = [];
                    if (r % 2 === 0){
                        this.bricks[r][c] = new _brick__WEBPACK_IMPORTED_MODULE_2__["default"]({ x: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 15 + c * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 10), y: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_MARGIN_TOP"] + r * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_HEIGHT"] + 12.5), status: 1 })
                    } else {
                        this.bricks[r][c] = new _brick__WEBPACK_IMPORTED_MODULE_2__["default"]({ x: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 15 + c * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 10), y: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_MARGIN_TOP"] + r * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_HEIGHT"] + 12.5), status: 2 })
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
                        this.bricks[r][c] = new _brick__WEBPACK_IMPORTED_MODULE_2__["default"]({ x: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 15 + c * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 10), y: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_MARGIN_TOP"] + r * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_HEIGHT"] + 12.5), status: 3 })
                    } else {
                        this.bricks[r][c] = new _brick__WEBPACK_IMPORTED_MODULE_2__["default"]({ x: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 15 + c * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 10), y: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_MARGIN_TOP"] + r * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_HEIGHT"] + 12.5), status: 2 })
                    }
                }
            }
        }
    }

    addParticles(ball){
        for (let i = 0; i < 6; i++){
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
        ctx.strokeStyle = "grey";
        ctx.strokeRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"]);

        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(470, _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"] - 15, 8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(5, 255, 255)";
        ctx.fill();

        ctx.fillStyle = "#FFF"; 
        ctx.font = "16px Monaco";
        ctx.fillText(this.lives, 490, _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"] - 8);
        ctx.fillStyle = "rgba(255, 255, 5)";
        ctx.fillText(`SCORE: ${this.score}`, 55, _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"] - 9);
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
        if (this.ball.x < this.paddle.x + this.paddle.width && this.ball.x > this.paddle.x && this.ball.y <= this.paddle.y + this.paddle.height && this.ball.y + this.ball.radius >= this.paddle.y) {

            // PLAY SOUND

            // CHECK WHERE THE this.ball HIT THE this.paddle
            let collidePoint = this.ball.x - (this.paddle.x + this.paddle.width / 2);

            // NORMALIZE THE VALUES
            collidePoint = collidePoint / (this.paddle.width / 2);

            // CALCULATE THE ANGLE OF THE this.ball
            let angle = collidePoint * Math.PI / 3;


            this.ball.dx = Math.ceil(_constants__WEBPACK_IMPORTED_MODULE_4__["SPEED"] * Math.sin(angle));
            this.ball.dy = - Math.ceil(_constants__WEBPACK_IMPORTED_MODULE_4__["SPEED"] * Math.cos(angle));
            // this.hit.play();
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

        if (this.counter === 5) {
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
        this.muted = false;
        this.keyDown = {};
        this.moving = [];
        this.state = "title";
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.step = this.step.bind(this);
        document.addEventListener("keydown", this.handleKeyDown);
        document.addEventListener("keyup", this.handleKeyUp);
        // this.playBGM = this.playBGM.bind(this);

    }

    start() {
        _util__WEBPACK_IMPORTED_MODULE_4__["loadContent"](() => {
            requestAnimationFrame(this.step);
        })
        // this.playBGM();
    };

    // playBGM(){
    //     let bgmPlay = SOUNDS.sound[0].play(); 

    //     if (bgmPlay !== undefined){
    //         bgmPlay.then(_ => {

    //         })
    //     }
    // }

    step(){
        let that = this;
        let fps = 90;
        setTimeout(function(){
            switch(that.state){
                case "title": 
                    that.titleScreen.draw(that.ctx);
                    break;
                case "game": 
                    that.game.draw(that.ctx);
                    that.game.step();
                    if (that.game.over === true) that.state = 'gameover';
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
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ "./src/game_view.js");



const brickit = document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    const ctx = canvasEl.getContext("2d");
   
    canvasEl.width = _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_WIDTH"]; 
    canvasEl.height = _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_HEIGHT"];
    
    // const game = new Game(); 
    new _game_view__WEBPACK_IMPORTED_MODULE_1__["default"](ctx).start();
});

removeEventListener("DOMContentLoaded", brickit);



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

        if (this.counter === 5){
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
/*! exports provided: loadContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadContent", function() { return loadContent; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


const loadContent = (callback) => {
    let count = 0; // number of content loaded
    let total = 0;

    const sprites = 87;
    const sounds = 2;

    for (let i = 0; i <= sprites; i++) {
        total += 1;

        let img = new Image();
        img.onload = loaded;
        img.src = `dist/images/title/title${i}.png`;
        _constants__WEBPACK_IMPORTED_MODULE_0__["IMAGES"].logo.push(img);
    }

    for (let i = 0; i <= sounds; i++){
        total += 1; 

        let snd = new Audio(); 
        snd.src = `dist/sounds/sound${i}.mp3`;
        snd.oncanplaythrough = loaded; 
        _constants__WEBPACK_IMPORTED_MODULE_0__["SOUNDS"].sound.push(snd);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JyaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfb3Zlcl9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZGRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpdGxlX3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDBFQUFXLEU7Ozs7Ozs7Ozs7Ozs7O0FDN0QxQjtBQUFBO0FBQUE7QUFBNkM7O0FBRXRDO0FBQ1Asa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLGNBQWM7QUFDakM7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QyxFQUFFO0FBQzlDLFFBQVEsaURBQU07QUFDZDs7QUFFQSxtQkFBbUIsYUFBYTtBQUNoQyxtQjs7QUFFQSw4QjtBQUNBLHNDQUFzQyxFQUFFO0FBQ3hDLHNDO0FBQ0EsUUFBUSxpREFBTTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IFNQRUVELCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCwgUEFERExFX0hFSUdIVCwgUEFERExFX1dJRFRILCBQQURETEVfTUFSR0lOX0JPVFRPTSwgQkFMTF9SQURJVVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIEJhbGwge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgLy8gdGhpcy54ID0gKEdBTUVfV0lEVEggLyAyKTtcbiAgICAgICAgLy8gdGhpcy55ID0gR0FNRV9IRUlHSFQgLSBQQURETEVfSEVJR0hUIC0gUEFERExFX01BUkdJTl9CT1RUT00gLSBCQUxMX1JBRElVUztcbiAgICAgICAgdGhpcy54ID0geDsgXG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gQkFMTF9SQURJVVM7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBTUEVFRDsgXG4gICAgICAgIHRoaXMuZHggPSBTUEVFRCAqIChNYXRoLnJhbmRvbSgpICogMiAtIDEpXG4gICAgICAgIHRoaXMuZHkgPSAtU1BFRUQ7IFxuICAgICAgICB0aGlzLnN0YXR1cyA9IHRydWU7IFxuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZ2JhKDUsIDI1NSwgMjU1KVwiXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSAxMDsgXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgXG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZHg7IFxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5keTtcbiAgICB9XG5cbiAgICByZXNldEJhbGwoeCwgeSl7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuZHggPSBTUEVFRCAqIChNYXRoLnJhbmRvbSgpICogMiAtIDEpXG4gICAgICAgIHRoaXMuZHkgPSAtU1BFRUQ7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQmFsbDsiLCJpbXBvcnQgeyBTUEVFRCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQsIEJSSUNLX0hFSUdIVCwgQlJJQ0tfV0lEVEggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIEJyaWNrIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMueCA9IG9wdGlvbnMueDsgXG4gICAgICAgIHRoaXMueSA9IG9wdGlvbnMueTsgXG4gICAgICAgIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXM7IFxuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZ2JhKDI1NSwgMTUsIDI1NSlcIjtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBCUklDS19IRUlHSFQ7XG4gICAgICAgIHRoaXMud2lkdGggPSBCUklDS19XSURUSDtcbiAgICAgICAgdGhpcy5tYXJnaW5Ub3AgPSA1MDsgXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAxKXtcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcInJnYmEoMjU1LCAxNSwgMjU1KVwiXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1OyBcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZUNvbG9yO1xuICAgICAgICAgICAgLy8gY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlUmVjdCh0aGlzLnggLSAwLjUsIHRoaXMueSAtIDAuNSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID09PSAyKXtcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcInJnYmEoMTUsIDIyNSwgMTUpXCJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDU7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID09PSAzKXtcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcInJnYmEoNSwgNSwgMjU1KVwiXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1O1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQnJpY2s7IiwiZXhwb3J0IGNvbnN0IEtFWSA9IHsgXG4gICAgQTogNjUsIFxuICAgIEQ6IDY4LCBcbiAgICBMRUZUOiAzNywgXG4gICAgUklHSFQ6IDM5LCBcbiAgICBFTlRFUjogMTNcbn1cblxuZXhwb3J0IGNvbnN0IE1PVkVTID0ge1xuICAgIExFRlQ6IFstMSwgMF0sIFxuICAgIFJJR0hUOiBbMSwgMF0sIFxuICAgIFpFUk86IFswLCAwXVxufVxuXG5leHBvcnQgY29uc3QgSU1BR0VTID0ge1xuICAgIGxvZ286IFtdXG59XG5cbmV4cG9ydCBjb25zdCBTT1VORFMgPSB7XG4gICAgc291bmQ6IFtdXG59XG5cbmV4cG9ydCBjb25zdCBTUEVFRCA9IDc7IFxuZXhwb3J0IGNvbnN0IEdBTUVfV0lEVEggPSA1MDA7IFxuZXhwb3J0IGNvbnN0IEdBTUVfSEVJR0hUID0gNzAwO1xuZXhwb3J0IGNvbnN0IEdBTUVfQkcgPSBcIiMxNDE0MTRcIjtcbmV4cG9ydCBjb25zdCBQQURETEVfV0lEVEggPSA3NTsgXG5leHBvcnQgY29uc3QgUEFERExFX0hFSUdIVCA9IDIwO1xuZXhwb3J0IGNvbnN0IFBBRERMRV9NQVJHSU5fQk9UVE9NID0gNTA7IFxuZXhwb3J0IGNvbnN0IEJBTExfUkFESVVTID0gODsgXG5leHBvcnQgY29uc3QgQlJJQ0tfSEVJR0hUID0gMjA7IFxuZXhwb3J0IGNvbnN0IEJSSUNLX1dJRFRIID0gNDA7IFxuZXhwb3J0IGNvbnN0IEJSSUNLX01BUkdJTl9UT1AgPSA1MDtcbiIsImltcG9ydCBQYWRkbGUgZnJvbSAnLi9wYWRkbGUnO1xuaW1wb3J0IEJhbGwgZnJvbSAnLi9iYWxsJztcbmltcG9ydCBCcmljayBmcm9tICcuL2JyaWNrJztcbmltcG9ydCBQYXJ0aWNsZSBmcm9tICcuL3BhcnRpY2xlJztcbmltcG9ydCB7IFNQRUVELCBHQU1FX0hFSUdIVCwgR0FNRV9XSURUSCwgQlJJQ0tfV0lEVEgsIEJSSUNLX0hFSUdIVCwgQlJJQ0tfTUFSR0lOX1RPUH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBHYW1lIHtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucGFkZGxlID0gbmV3IFBhZGRsZSgpO1xuICAgICAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCh0aGlzLnBhZGRsZS54ICsgdGhpcy5wYWRkbGUud2lkdGgvMiwgdGhpcy5wYWRkbGUueSAtIDEwKTtcbiAgICAgICAgdGhpcy5icmlja3MgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5saXZlcyA9IDM7IFxuICAgICAgICB0aGlzLmxldmVsID0gMTsgXG4gICAgICAgIHRoaXMubGV2ZWxzID0ge1xuICAgICAgICAgICAgMToge3I6IDUsIGM6IDh9LCBcbiAgICAgICAgICAgIDI6IHtyOiA2LCBjOiA4fSwgXG4gICAgICAgICAgICAzOiB7cjogNywgYzogOH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMub3ZlciA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy53b24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGRCcmlja3MoKTtcbiAgICAgICAgdGhpcy5Cb3VuZHMgPSB0aGlzLkJvdW5kcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBhZGRsZUNvbGxpc2lvbiA9IHRoaXMucGFkZGxlQ29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYnJpY2tDb2xsaXNpb24gPSB0aGlzLmJyaWNrQ29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkUGFydGljbGVzID0gdGhpcy5hZGRQYXJ0aWNsZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVQYXJ0aWNsZXMgPSB0aGlzLnJlbW92ZVBhcnRpY2xlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmVQYXJ0aWNsZXMgPSB0aGlzLm1vdmVQYXJ0aWNsZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxldmVsVXAgPSB0aGlzLmxldmVsVXAuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBhZGRCcmlja3MoKXtcbiAgICAgICAgbGV0IHJvdyA9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdLnI7IFxuICAgICAgICBsZXQgY29sID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0uYztcblxuICAgICAgICBpZiAodGhpcy5sZXZlbCA9PT0gMSl7XG4gICAgICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJvdzsgcisrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXSA9IFtdOyAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbDsgYysrKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icmlja3Nbcl1bY10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icmlja3Nbcl1bY10gPSBuZXcgQnJpY2soeyB4OiBCUklDS19XSURUSCArIDE1ICsgYyAqIChCUklDS19XSURUSCArIDEwKSAsIHk6IEJSSUNLX01BUkdJTl9UT1AgKyByICogKEJSSUNLX0hFSUdIVCArIDEyLjUpLCBzdGF0dXM6IDF9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZXZlbCA9PT0gMil7XG4gICAgICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJvdzsgcisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icmlja3Nbcl0gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdW2NdID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmIChyICUgMiA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IG5ldyBCcmljayh7IHg6IEJSSUNLX1dJRFRIICsgMTUgKyBjICogKEJSSUNLX1dJRFRIICsgMTApLCB5OiBCUklDS19NQVJHSU5fVE9QICsgciAqIChCUklDS19IRUlHSFQgKyAxMi41KSwgc3RhdHVzOiAxIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IG5ldyBCcmljayh7IHg6IEJSSUNLX1dJRFRIICsgMTUgKyBjICogKEJSSUNLX1dJRFRIICsgMTApLCB5OiBCUklDS19NQVJHSU5fVE9QICsgciAqIChCUklDS19IRUlHSFQgKyAxMi41KSwgc3RhdHVzOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGV2ZWwgPT09IDMpe1xuICAgICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3c7IHIrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2w7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZiAociA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icmlja3Nbcl1bY10gPSBuZXcgQnJpY2soeyB4OiBCUklDS19XSURUSCArIDE1ICsgYyAqIChCUklDS19XSURUSCArIDEwKSwgeTogQlJJQ0tfTUFSR0lOX1RPUCArIHIgKiAoQlJJQ0tfSEVJR0hUICsgMTIuNSksIHN0YXR1czogMyB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icmlja3Nbcl1bY10gPSBuZXcgQnJpY2soeyB4OiBCUklDS19XSURUSCArIDE1ICsgYyAqIChCUklDS19XSURUSCArIDEwKSwgeTogQlJJQ0tfTUFSR0lOX1RPUCArIHIgKiAoQlJJQ0tfSEVJR0hUICsgMTIuNSksIHN0YXR1czogMiB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkUGFydGljbGVzKGJhbGwpe1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZShiYWxsKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVBhcnRpY2xlcygpe1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmZpbHRlcihwYXJ0aWNsZSA9PiBwYXJ0aWNsZS50dGwgPiAwKTtcbiAgICB9XG5cbiAgICBtb3ZlUGFydGljbGVzKCl7XG4gICAgICAgIHRoaXMucGFydGljbGVzLmZvckVhY2goKHBhcnRpY2xlKSA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNsZS5tb3ZlKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgICAgIGN0eC5zaGFkb3dCbHVyID0gMDtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJncmV5XCI7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcblxuICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDA7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyg0NzAsIEdBTUVfSEVJR0hUIC0gMTUsIDgsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSg1LCAyNTUsIDI1NSlcIjtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjRkZGXCI7IFxuICAgICAgICBjdHguZm9udCA9IFwiMTZweCBNb25hY29cIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMubGl2ZXMsIDQ5MCwgR0FNRV9IRUlHSFQgLSA4KTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgNSlcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGBTQ09SRTogJHt0aGlzLnNjb3JlfWAsIDU1LCBHQU1FX0hFSUdIVCAtIDkpO1xuICAgICAgICB0aGlzLmJhbGwuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLmJyaWNrcy5mb3JFYWNoKHJvdyA9PiB7IHJvdy5mb3JFYWNoKGJyaWNrID0+IGJyaWNrLmRyYXcoY3R4KSkgfSk7XG4gICAgICAgIHRoaXMucGFkZGxlLmRyYXcoY3R4KTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiBwYXJ0aWNsZS5kcmF3KGN0eCkpO1xuICAgIH1cblxuICAgIEJvdW5kcygpIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLmJhbGwueDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmJhbGwueTtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5iYWxsLmR4O1xuICAgICAgICBsZXQgZHkgPSB0aGlzLmJhbGwuZHk7XG4gICAgICAgIGxldCByYWRpdXMgPSB0aGlzLmJhbGwucmFkaXVzO1xuICAgICAgICBpZiAoeCArIHJhZGl1cyA+IEdBTUVfV0lEVEgpIHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC54ID0gR0FNRV9XSURUSCAtIHJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuYmFsbC5keCA9IC1keDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCAtIHJhZGl1cyA8IDApe1xuICAgICAgICAgICAgdGhpcy5iYWxsLnggPSByYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmJhbGwuZHggPSAtZHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgLSByYWRpdXMgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmJhbGwueSA9IHJhZGl1czsgXG4gICAgICAgICAgICB0aGlzLmJhbGwuZHkgPSAtZHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgKyByYWRpdXMgPiBHQU1FX0hFSUdIVCl7XG4gICAgICAgICAgICB0aGlzLmxpdmVzIC09IDE7IFxuICAgICAgICAgICAgLy8gdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5wYWRkbGUueCArIHRoaXMucGFkZGxlLndpZHRoLzIsIHRoaXMucGFkZGxlLnkgLSB0aGlzLmJhbGwucmFkaXVzIC0gNSk7XG4gICAgICAgICAgICB0aGlzLmJhbGwucmVzZXRCYWxsKHRoaXMucGFkZGxlLnggKyB0aGlzLnBhZGRsZS53aWR0aCAvIDIsIHRoaXMucGFkZGxlLnkgLSB0aGlzLmJhbGwucmFkaXVzIC0gNSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFkZGxlLnggPCAwICl7XG4gICAgICAgICAgICB0aGlzLnBhZGRsZS5yZW1vdmVWZWwoKTtcbiAgICAgICAgICAgIHRoaXMucGFkZGxlLnggPSAzOyBcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZGRsZS54ICsgdGhpcy5wYWRkbGUud2lkdGggPiBHQU1FX1dJRFRIKSB7XG4gICAgICAgICAgICB0aGlzLnBhZGRsZS5yZW1vdmVWZWwoKTtcbiAgICAgICAgICAgIHRoaXMucGFkZGxlLnggPSBHQU1FX1dJRFRIIC0gdGhpcy5wYWRkbGUud2lkdGggLSAzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFkZGxlQ29sbGlzaW9uKCl7XG4gICAgICAgIGlmICh0aGlzLmJhbGwueCA8IHRoaXMucGFkZGxlLnggKyB0aGlzLnBhZGRsZS53aWR0aCAmJiB0aGlzLmJhbGwueCA+IHRoaXMucGFkZGxlLnggJiYgdGhpcy5iYWxsLnkgPD0gdGhpcy5wYWRkbGUueSArIHRoaXMucGFkZGxlLmhlaWdodCAmJiB0aGlzLmJhbGwueSArIHRoaXMuYmFsbC5yYWRpdXMgPj0gdGhpcy5wYWRkbGUueSkge1xuXG4gICAgICAgICAgICAvLyBQTEFZIFNPVU5EXG5cbiAgICAgICAgICAgIC8vIENIRUNLIFdIRVJFIFRIRSB0aGlzLmJhbGwgSElUIFRIRSB0aGlzLnBhZGRsZVxuICAgICAgICAgICAgbGV0IGNvbGxpZGVQb2ludCA9IHRoaXMuYmFsbC54IC0gKHRoaXMucGFkZGxlLnggKyB0aGlzLnBhZGRsZS53aWR0aCAvIDIpO1xuXG4gICAgICAgICAgICAvLyBOT1JNQUxJWkUgVEhFIFZBTFVFU1xuICAgICAgICAgICAgY29sbGlkZVBvaW50ID0gY29sbGlkZVBvaW50IC8gKHRoaXMucGFkZGxlLndpZHRoIC8gMik7XG5cbiAgICAgICAgICAgIC8vIENBTENVTEFURSBUSEUgQU5HTEUgT0YgVEhFIHRoaXMuYmFsbFxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gY29sbGlkZVBvaW50ICogTWF0aC5QSSAvIDM7XG5cblxuICAgICAgICAgICAgdGhpcy5iYWxsLmR4ID0gTWF0aC5jZWlsKFNQRUVEICogTWF0aC5zaW4oYW5nbGUpKTtcbiAgICAgICAgICAgIHRoaXMuYmFsbC5keSA9IC0gTWF0aC5jZWlsKFNQRUVEICogTWF0aC5jb3MoYW5nbGUpKTtcbiAgICAgICAgICAgIC8vIHRoaXMuaGl0LnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJyaWNrQ29sbGlzaW9uKCl7XG4gICAgICAgIGxldCByb3cgPSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXS5yO1xuICAgICAgICBsZXQgY29sID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0uYztcbiAgICAgICAgbGV0IGJhbGwgPSB0aGlzLmJhbGw7IFxuICAgICAgICBsZXQgciA9IHRoaXMuYmFsbC5yYWRpdXM7XG5cblxuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJvdzsgcisrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbDsgYysrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGIgPSB0aGlzLmJyaWNrc1tyXVtjXTtcbiAgICAgICAgICAgICAgICBpZiAoYi5zdGF0dXMgPiAwICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFsbC54ICsgYmFsbC5yYWRpdXMgPiBiLnggJiYgYmFsbC54IC0gYmFsbC5yYWRpdXMgPCBiLnggKyBiLndpZHRoICYmIGJhbGwueSArIGJhbGwucmFkaXVzID4gYi55ICYmIGJhbGwueSAtIGJhbGwucmFkaXVzIDwgYi55ICsgYi5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYmFsbC54ICsgYmFsbC5yYWRpdXMgPj0gYi54ICYmIGJhbGwueCAtIGJhbGwucmFkaXVzIDw9IGIueCkgfHwgKGJhbGwueCAtIGJhbGwucmFkaXVzIDw9IGIueCArIGIud2lkdGggJiYgYmFsbC54ICsgYmFsbC5yYWRpdXMgPj0gYi54ICsgYi53aWR0aCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGwuZHggPSAtYmFsbC5keDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoYmFsbC55ICsgYmFsbC5yYWRpdXMgPj0gYi55ICYmIGJhbGwueSAtIGJhbGwucmFkaXVzIDw9IGIueSApIHx8IChiYWxsLnkgLSBiYWxsLnJhZGl1cyA8PSBiLnkgKyBiLmhlaWdodCAmJiBiYWxsLnkgKyBiYWxsLnJhZGl1cyA+PSBiLnkgKyBiLmhlaWdodCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGwuZHkgPSAtYmFsbC5keTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnN0YXR1cyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSAyMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkUGFydGljbGVzKGJhbGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBsZXZlbFVwKCl7XG4gICAgICAgaWYgKHRoaXMubGV2ZWwgPD0gMyl7XG4gICAgICAgICAgICBsZXQgcm93ID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0ucjtcbiAgICAgICAgICAgIGxldCBjb2wgPSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXS5jO1xuXG4gICAgICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJvdzsgcisrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2w7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYiA9IHRoaXMuYnJpY2tzW3JdW2NdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYi5zdGF0dXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxldmVsICs9IDE7XG4gICAgICAgICAgICBpZiAodGhpcy5sZXZlbCA+IDMpe1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRCcmlja3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJhbGwucmVzZXRCYWxsKHRoaXMucGFkZGxlLnggKyB0aGlzLnBhZGRsZS53aWR0aCAvIDIsIHRoaXMucGFkZGxlLnkgLSB0aGlzLmJhbGwucmFkaXVzIC0gNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgaWYgKHRoaXMubGl2ZXMgPD0gMCB8fCB0aGlzLmxldmVsID4gMyl7XG4gICAgICAgICAgICB0aGlzLm92ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIHRoaXMuQm91bmRzKCk7XG4gICAgICAgIHRoaXMucGFkZGxlQ29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuYnJpY2tDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5yZW1vdmVQYXJ0aWNsZXMoKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB0aGlzLmxldmVsVXAoKTtcbiAgICB9XG5cbiAgICBtb3ZlT2JqZWN0cygpIHtcbiAgICAgICAgdGhpcy5iYWxsLm1vdmUoKTtcbiAgICAgICAgdGhpcy5wYWRkbGUubW92ZSgpO1xuICAgICAgICB0aGlzLm1vdmVQYXJ0aWNsZXMoKTtcbiAgICB9XG5cbiAgICBzdGVwKCl7XG4gICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICB0aGlzLm1vdmVPYmplY3RzKCk7XG4gICAgfVxuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IHsgSU1BR0VTLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCB9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG5jbGFzcyB0aXRsZVNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgfVxuXG4gICAgaW1hZ2UoKSB7XG4gICAgICAgIGxldCBpbWFnZSA9IElNQUdFUy5sb2dvW3RoaXMuaW1hZ2VDb3VudF07XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCwgc2NvcmUpIHtcblxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID09PSA1KSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlKCksIDAsIEdBTUVfSEVJR0hUIC8gMjApO1xuICAgICAgICAgICAgdGhpcy5pbWFnZUNvdW50ID0gKHRoaXMuaW1hZ2VDb3VudCArIDEpICUgODc7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgICAgIC8vIGRyYXcgcHJlc3MgZW50ZXIgdG8gcGxheVxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IE1vbmFjb1wiXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSlcIjtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gMDtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIlBSRVNTICAgICAgIFRPIFBMQVkgQUdBSU5cIiwgR0FNRV9XSURUSCAvIDIsIDU1MCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCA1KVwiO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCA1KVwiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiRU5URVJcIiwgMTgwLCA1NTApO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAvLyBkcmF3IGZpbmFsIHNjb3JlIFxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiRklOQUwgU0NPUkVcIiwgMjUwLCAyNzUpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDUsIDI1NSlcIjtcbiAgICAgICAgICAgIGN0eC5mb250ID0gXCI0MHB4IE1vbmFjb1wiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHNjb3JlLCAyNTAsIDM3NSk7XG4gICAgICAgICAgXG5cbiAgICAgICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3VudGVyKys7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0aXRsZVNjcmVlbjtcblxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCB7S0VZLCBNT1ZFUywgU09VTkRTfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgVGl0bGVTY3JlZW4gZnJvbSAnLi90aXRsZV9zY3JlZW4nO1xuaW1wb3J0IEdhbWVPdmVyU2NyZWVuIGZyb20gJy4vZ2FtZV9vdmVyX3NjcmVlbic7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4vdXRpbCc7XG5cbmNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgICAgIHRoaXMucGFkZGxlID0gdGhpcy5nYW1lLnBhZGRsZTtcbiAgICAgICAgdGhpcy50aXRsZVNjcmVlbiAgPSBuZXcgVGl0bGVTY3JlZW4oKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclNjcmVlbiA9IG5ldyBHYW1lT3ZlclNjcmVlbigpO1xuICAgICAgICB0aGlzLm11dGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMua2V5RG93biA9IHt9O1xuICAgICAgICB0aGlzLm1vdmluZyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJ0aXRsZVwiO1xuICAgICAgICB0aGlzLmhhbmRsZUtleURvd24gPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlVcCA9IHRoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGVwID0gdGhpcy5zdGVwLmJpbmQodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmhhbmRsZUtleVVwKTtcbiAgICAgICAgLy8gdGhpcy5wbGF5QkdNID0gdGhpcy5wbGF5QkdNLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgVXRpbC5sb2FkQ29udGVudCgoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zdGVwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gdGhpcy5wbGF5QkdNKCk7XG4gICAgfTtcblxuICAgIC8vIHBsYXlCR00oKXtcbiAgICAvLyAgICAgbGV0IGJnbVBsYXkgPSBTT1VORFMuc291bmRbMF0ucGxheSgpOyBcblxuICAgIC8vICAgICBpZiAoYmdtUGxheSAhPT0gdW5kZWZpbmVkKXtcbiAgICAvLyAgICAgICAgIGJnbVBsYXkudGhlbihfID0+IHtcblxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIHN0ZXAoKXtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgZnBzID0gOTA7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHN3aXRjaCh0aGF0LnN0YXRlKXtcbiAgICAgICAgICAgICAgICBjYXNlIFwidGl0bGVcIjogXG4gICAgICAgICAgICAgICAgICAgIHRoYXQudGl0bGVTY3JlZW4uZHJhdyh0aGF0LmN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJnYW1lXCI6IFxuICAgICAgICAgICAgICAgICAgICB0aGF0LmdhbWUuZHJhdyh0aGF0LmN0eCk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZ2FtZS5zdGVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGF0LmdhbWUub3ZlciA9PT0gdHJ1ZSkgdGhhdC5zdGF0ZSA9ICdnYW1lb3Zlcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJnYW1lb3ZlclwiOiBcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nYW1lT3ZlclNjcmVlbi5kcmF3KHRoYXQuY3R4LCB0aGF0LmdhbWUuc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGF0LnN0ZXApXG4gICAgICAgIH0sIDEwMDAvZnBzKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlS2V5RG93bihlKXtcbiAgICAgICAgaWYgKGUucmVwZWF0IHx8IHRoaXMua2V5RG93bltlLmtleUNvZGVdKSByZXR1cm47IFxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLRVkuRU5URVIpe1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICd0aXRsZScgfHwgdGhpcy5zdGF0ZSA9PT0gJ2dhbWVvdmVyJyl7IFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcImdhbWVcIjsgXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKTsgXG4gICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUgPSB0aGlzLmdhbWUucGFkZGxlO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93biA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZS5vdmVyIHx8ICF0aGlzLmdhbWUud29uKXsgXG4gICAgICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcbiAgICAgICAgICAgICAgICBjYXNlIEtFWS5BOiBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nLnB1c2goTU9WRVMuTEVGVClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5BXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLkQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZy5wdXNoKE1PVkVTLlJJR0hUKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZS5zZXRWZWwodGhpcy5tb3ZpbmdbdGhpcy5tb3ZpbmcubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleURvd25bS0VZLkRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLRVkuTEVGVDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nLnB1c2goTU9WRVMuTEVGVClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5MRUZUXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLlJJR0hUOiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcucHVzaChNT1ZFUy5SSUdIVClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5SSUdIVF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleVVwKGUpe1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZS5vdmVyIHx8ICF0aGlzLmdhbWUud29uKXtcbiAgICAgICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLkE6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdGhpcy5tb3ZpbmcuZmlsdGVyKGFyciA9PiBhcnIuam9pbihcIlwiKSAhPT0gTU9WRVMuTEVGVC5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5BXSA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLRVkuRDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdGhpcy5tb3ZpbmcuZmlsdGVyKGFyciA9PiBhcnIuam9pbihcIlwiKSAhPT0gTU9WRVMuUklHSFQuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuRF0gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLkxFRlQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdGhpcy5tb3ZpbmcuZmlsdGVyKGFyciA9PiBhcnIuam9pbihcIlwiKSAhPT0gTU9WRVMuTEVGVC5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5MRUZUXSA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLRVkuUklHSFQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRoaXMubW92aW5nLmZpbHRlcihhcnIgPT4gYXJyLmpvaW4oXCJcIikgIT09IE1PVkVTLlJJR0hULmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleURvd25bS0VZLlJJR0hUXSA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubW92aW5nLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubW92aW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFkZGxlLnJlbW92ZVZlbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldztcbiIsImltcG9ydCB7IEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vZ2FtZV92aWV3JztcblxuY29uc3QgYnJpY2tpdCA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgXG4gICAgY2FudmFzRWwud2lkdGggPSBHQU1FX1dJRFRIOyBcbiAgICBjYW52YXNFbC5oZWlnaHQgPSBHQU1FX0hFSUdIVDtcbiAgICBcbiAgICAvLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTsgXG4gICAgbmV3IEdhbWVWaWV3KGN0eCkuc3RhcnQoKTtcbn0pO1xuXG5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBicmlja2l0KTtcblxuIiwiaW1wb3J0IHsgU1BFRUQsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hULCBQQURETEVfSEVJR0hULCBQQURETEVfV0lEVEgsIFBBRERMRV9NQVJHSU5fQk9UVE9NfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIFBhZGRsZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy52ZWwgPSBbMCwgMF07XG4gICAgICAgIHRoaXMueCA9IChHQU1FX1dJRFRILzIpIC0gKFBBRERMRV9XSURUSC8yKTtcbiAgICAgICAgdGhpcy55ID0gR0FNRV9IRUlHSFQgLSBQQURETEVfSEVJR0hUIC0gUEFERExFX01BUkdJTl9CT1RUT007XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gUEFERExFX0hFSUdIVDsgXG4gICAgICAgIHRoaXMud2lkdGggPSBQQURETEVfV0lEVEg7XG4gICAgICAgIHRoaXMuY29sb3IgPSBcInJnYmEoMjU1LCA1LCA1KVwiXG4gICAgICAgIC8vIHRoaXMuaW5Cb3VuZHMgPSB0aGlzLmluQm91bmRzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpe1xuICAgICAgICBjdHguc2hhZG93Q29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDU7IFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjsgXG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIG1vdmUoKXtcbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICsgdGhpcy52ZWxbMF07XG4gICAgICAgIHRoaXMueSA9IHRoaXMueSArIHRoaXMudmVsWzFdO1xuICAgIH1cblxuXG4gICAgc2V0VmVsKHZlbCl7XG4gICAgICAgIHZlbCA9IFt2ZWxbMF0gKiBTUEVFRCAsIHZlbFsxXSAqIFNQRUVEIF1cbiAgICAgICAgdGhpcy52ZWwgPSB2ZWw7XG4gICAgfVxuXG4gICAgcmVtb3ZlVmVsKCl7IFxuICAgICAgICB0aGlzLnZlbCA9IFswLCAwXTtcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQYWRkbGU7IiwiaW1wb3J0IHsgU1BFRUQsIFNPVU5EUyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY2xhc3MgUGFydGljbGUge1xuICAgIGNvbnN0cnVjdG9yKGJhbGwpIHtcbiAgICAgICAgdGhpcy54ID0gYmFsbC54XG4gICAgICAgIHRoaXMueSA9IGJhbGwueVxuICAgICAgICB0aGlzLnJhZGl1cyA9IDI7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBTUEVFRDtcbiAgICAgICAgdGhpcy5keCA9IDQgKiAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKTtcbiAgICAgICAgdGhpcy5keSA9IDQgKiAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKTtcbiAgICAgICAgdGhpcy50dGwgPSA1MDsgXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IDEuNTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBpZiAodGhpcy50dGwgPiAwKXtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IGByZ2JhKDI1NSwgMjU1LCAyNTUpYDtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gNTsgXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDI1NSwgMjU1LCAyNTUsICR7dGhpcy5vcGFjaXR5fSlgXG4gICAgICAgICAgICBjdHguZmlsbCgpOyBcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMudHRsIC09IDE7XG4gICAgICAgICAgICB0aGlzLm9wYWNpdHkgLT0gKDEvdGhpcy50dGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5keSAtPSAwLjE7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgICAgICB0aGlzLnkgLT0gdGhpcy5keTtcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQYXJ0aWNsZTsiLCJpbXBvcnQgeyBJTUFHRVMsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmNsYXNzIHRpdGxlU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmltYWdlQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgIH1cblxuICAgIGltYWdlKCl7XG4gICAgICAgIGxldCBpbWFnZSA9IElNQUdFUy5sb2dvW3RoaXMuaW1hZ2VDb3VudF07XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCl7XG5cbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA9PT0gNSl7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlKCksIDAsIEdBTUVfSEVJR0hULzIwKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VDb3VudCA9ICh0aGlzLmltYWdlQ291bnQgKyAxKSAlIDg3O1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIFxuICAgICAgICAgICAgLy8gZHJhdyBwcmVzcyBlbnRlciB0byBwbGF5XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSlcIjtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjMwcHggTW9uYWNvXCJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSgyNTUsIDI1NSwgMjU1KVwiO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSAwO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiUFJFU1MgICAgICAgVE8gUExBWVwiLCBHQU1FX1dJRFRIIC8gMiwgMjUwKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDUpXCI7XG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDUpXCI7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJFTlRFUlwiLCAyMzUsIDI1MCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgXG4gICAgICAgICAgICAvLyBkcmF3IGluc3RydWN0aW9ucyBhbmQgY29udHJvbHNcbiAgICBcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjMwcHggTW9uYWNvXCJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSgyNTUsIDUsIDI1NSlcIlxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSg1LCAyNTUsIDUpXCI7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJJTlNUUlVDVElPTlNcIiwgMjUwLCAzNTApXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgNSwgMjU1KVwiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiQ09OVFJPTFNcIiwgMjUwLCA1MDApO1xuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjIwcHggTW9uYWNvXCJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSgyNTUsIDI1NSwgMjU1KVwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1KVwiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiQnJlYWsgYWxsIHRoZSBCUklDS1NcIiwgMjUwLCA0MDApO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiW0FdIFtEXSBvciBbPF0gWz5dIHRvIG1vdmUgTEVGVCBSSUdIVFwiLCAyNTAsIDU1MCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJcIjtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gXCJcIjtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvdW50ZXIrKztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpdGxlU2NyZWVuOyBcblxuIiwiaW1wb3J0IHsgSU1BR0VTLCBTT1VORFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkQ29udGVudCA9IChjYWxsYmFjaykgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7IC8vIG51bWJlciBvZiBjb250ZW50IGxvYWRlZFxuICAgIGxldCB0b3RhbCA9IDA7XG5cbiAgICBjb25zdCBzcHJpdGVzID0gODc7XG4gICAgY29uc3Qgc291bmRzID0gMjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHNwcml0ZXM7IGkrKykge1xuICAgICAgICB0b3RhbCArPSAxO1xuXG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGxvYWRlZDtcbiAgICAgICAgaW1nLnNyYyA9IGBkaXN0L2ltYWdlcy90aXRsZS90aXRsZSR7aX0ucG5nYDtcbiAgICAgICAgSU1BR0VTLmxvZ28ucHVzaChpbWcpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHNvdW5kczsgaSsrKXtcbiAgICAgICAgdG90YWwgKz0gMTsgXG5cbiAgICAgICAgbGV0IHNuZCA9IG5ldyBBdWRpbygpOyBcbiAgICAgICAgc25kLnNyYyA9IGBkaXN0L3NvdW5kcy9zb3VuZCR7aX0ubXAzYDtcbiAgICAgICAgc25kLm9uY2FucGxheXRocm91Z2ggPSBsb2FkZWQ7IFxuICAgICAgICBTT1VORFMuc291bmQucHVzaChzbmQpO1xuICAgIH1cblxuICAgIC8vIE9uY2UgYWxsIGltYWdlcyBoYXZlIGJlZW4gZnVsbHkgbG9hZGVkLCB3aWxsIGluaXRpYXRlIGNhbGxiYWNrLCB3aGljaCBpbiB0aGlzXG4gICAgLy8gY2FzZSB3aWxsIGJlIGluc2lkZSB0aGUgc3RhcnQoKSBmdW5jdGlvbiBpbnNpZGUgR2FtZVZpZXdcbiAgICBmdW5jdGlvbiBsb2FkZWQoKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmIChjb3VudCA+PSB0b3RhbCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9