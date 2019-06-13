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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JyaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfb3Zlcl9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZGRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpdGxlX3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7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QTtBQUNBO0FBQ0E7O0FBRWUsMEVBQVcsRTs7Ozs7Ozs7Ozs7Ozs7QUM3RDFCO0FBQUE7QUFBQTtBQUFxQzs7QUFFOUI7QUFDUCxrQkFBa0I7QUFDbEI7O0FBRUE7O0FBRUEsbUJBQW1CLGNBQWM7QUFDakM7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QyxFQUFFO0FBQzlDLFFBQVEsaURBQU07QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBTUEVFRCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQsIFBBRERMRV9IRUlHSFQsIFBBRERMRV9XSURUSCwgUEFERExFX01BUkdJTl9CT1RUT00sIEJBTExfUkFESVVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBCYWxsIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIC8vIHRoaXMueCA9IChHQU1FX1dJRFRIIC8gMik7XG4gICAgICAgIC8vIHRoaXMueSA9IEdBTUVfSEVJR0hUIC0gUEFERExFX0hFSUdIVCAtIFBBRERMRV9NQVJHSU5fQk9UVE9NIC0gQkFMTF9SQURJVVM7XG4gICAgICAgIHRoaXMueCA9IHg7IFxuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IEJBTExfUkFESVVTO1xuICAgICAgICB0aGlzLnNwZWVkID0gU1BFRUQ7IFxuICAgICAgICB0aGlzLmR4ID0gU1BFRUQgKiAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKVxuICAgICAgICB0aGlzLmR5ID0gLVNQRUVEOyBcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0cnVlOyBcbiAgICAgICAgdGhpcy5jb2xvciA9IFwicmdiYSg1LCAyNTUsIDI1NSlcIlxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5zaGFkb3dCbHVyID0gMTA7IFxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IFxuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmR4OyBcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZHk7XG4gICAgfVxuXG4gICAgcmVzZXRCYWxsKHgsIHkpe1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmR4ID0gU1BFRUQgKiAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKVxuICAgICAgICB0aGlzLmR5ID0gLVNQRUVEO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJhbGw7IiwiaW1wb3J0IHsgU1BFRUQsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hULCBCUklDS19IRUlHSFQsIEJSSUNLX1dJRFRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBCcmljayB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLnggPSBvcHRpb25zLng7IFxuICAgICAgICB0aGlzLnkgPSBvcHRpb25zLnk7IFxuICAgICAgICB0aGlzLnN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzOyBcbiAgICAgICAgdGhpcy5jb2xvciA9IFwicmdiYSgyNTUsIDE1LCAyNTUpXCI7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQlJJQ0tfSEVJR0hUO1xuICAgICAgICB0aGlzLndpZHRoID0gQlJJQ0tfV0lEVEg7XG4gICAgICAgIHRoaXMubWFyZ2luVG9wID0gNTA7IFxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMSl7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gXCJyZ2JhKDI1NSwgMTUsIDI1NSlcIlxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gNTsgXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2VDb2xvcjtcbiAgICAgICAgICAgIC8vIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVJlY3QodGhpcy54IC0gMC41LCB0aGlzLnkgLSAwLjUsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PT0gMil7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gXCJyZ2JhKDE1LCAyMjUsIDE1KVwiXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1O1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PT0gMyl7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gXCJyZ2JhKDUsIDUsIDI1NSlcIlxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gNTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJyaWNrOyIsImV4cG9ydCBjb25zdCBLRVkgPSB7IFxuICAgIEE6IDY1LCBcbiAgICBEOiA2OCwgXG4gICAgTEVGVDogMzcsIFxuICAgIFJJR0hUOiAzOSwgXG4gICAgRU5URVI6IDEzXG59XG5cbmV4cG9ydCBjb25zdCBNT1ZFUyA9IHtcbiAgICBMRUZUOiBbLTEsIDBdLCBcbiAgICBSSUdIVDogWzEsIDBdLCBcbiAgICBaRVJPOiBbMCwgMF1cbn1cblxuZXhwb3J0IGNvbnN0IElNQUdFUyA9IHtcbiAgICBsb2dvOiBbXVxufVxuXG5leHBvcnQgY29uc3QgU1BFRUQgPSA3OyBcbmV4cG9ydCBjb25zdCBHQU1FX1dJRFRIID0gNTAwOyBcbmV4cG9ydCBjb25zdCBHQU1FX0hFSUdIVCA9IDcwMDtcbmV4cG9ydCBjb25zdCBHQU1FX0JHID0gXCIjMTQxNDE0XCI7XG5leHBvcnQgY29uc3QgUEFERExFX1dJRFRIID0gNzU7IFxuZXhwb3J0IGNvbnN0IFBBRERMRV9IRUlHSFQgPSAyMDtcbmV4cG9ydCBjb25zdCBQQURETEVfTUFSR0lOX0JPVFRPTSA9IDUwOyBcbmV4cG9ydCBjb25zdCBCQUxMX1JBRElVUyA9IDg7IFxuZXhwb3J0IGNvbnN0IEJSSUNLX0hFSUdIVCA9IDIwOyBcbmV4cG9ydCBjb25zdCBCUklDS19XSURUSCA9IDQwOyBcbmV4cG9ydCBjb25zdCBCUklDS19NQVJHSU5fVE9QID0gNTA7XG4iLCJpbXBvcnQgUGFkZGxlIGZyb20gJy4vcGFkZGxlJztcbmltcG9ydCBCYWxsIGZyb20gJy4vYmFsbCc7XG5pbXBvcnQgQnJpY2sgZnJvbSAnLi9icmljayc7XG5pbXBvcnQgUGFydGljbGUgZnJvbSAnLi9wYXJ0aWNsZSc7XG5pbXBvcnQge1NQRUVELCBHQU1FX0hFSUdIVCwgR0FNRV9XSURUSCwgQlJJQ0tfV0lEVEgsIEJSSUNLX0hFSUdIVCwgQlJJQ0tfTUFSR0lOX1RPUH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBHYW1lIHtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucGFkZGxlID0gbmV3IFBhZGRsZSgpO1xuICAgICAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCh0aGlzLnBhZGRsZS54ICsgdGhpcy5wYWRkbGUud2lkdGgvMiwgdGhpcy5wYWRkbGUueSAtIDEwKTtcbiAgICAgICAgdGhpcy5icmlja3MgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5saXZlcyA9IDM7IFxuICAgICAgICB0aGlzLmxldmVsID0gMTsgXG4gICAgICAgIHRoaXMubGV2ZWxzID0ge1xuICAgICAgICAgICAgMToge3I6IDUsIGM6IDh9LCBcbiAgICAgICAgICAgIDI6IHtyOiA2LCBjOiA4fSwgXG4gICAgICAgICAgICAzOiB7cjogNywgYzogOH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMub3ZlciA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy53b24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGRCcmlja3MoKTtcbiAgICAgICAgdGhpcy5Cb3VuZHMgPSB0aGlzLkJvdW5kcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBhZGRsZUNvbGxpc2lvbiA9IHRoaXMucGFkZGxlQ29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYnJpY2tDb2xsaXNpb24gPSB0aGlzLmJyaWNrQ29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkUGFydGljbGVzID0gdGhpcy5hZGRQYXJ0aWNsZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVQYXJ0aWNsZXMgPSB0aGlzLnJlbW92ZVBhcnRpY2xlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmVQYXJ0aWNsZXMgPSB0aGlzLm1vdmVQYXJ0aWNsZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxldmVsVXAgPSB0aGlzLmxldmVsVXAuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5hbnlCcmlja3MgPSB0aGlzLmFueUJyaWNrcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGFkZEJyaWNrcygpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxldmVsKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0pO1xuICAgICAgICBsZXQgcm93ID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0ucjsgXG4gICAgICAgIGxldCBjb2wgPSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXS5jO1xuXG4gICAgICAgIGlmICh0aGlzLmxldmVsID09PSAxKXtcbiAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93OyByKyspe1xuICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdID0gW107ICAgIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sOyBjKyspe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IG5ldyBCcmljayh7IHg6IEJSSUNLX1dJRFRIICsgMTUgKyBjICogKEJSSUNLX1dJRFRIICsgMTApICwgeTogQlJJQ0tfTUFSR0lOX1RPUCArIHIgKiAoQlJJQ0tfSEVJR0hUICsgMTIuNSksIHN0YXR1czogMX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxldmVsID09PSAyKXtcbiAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93OyByKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icmlja3Nbcl1bY10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIgJSAyID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdW2NdID0gbmV3IEJyaWNrKHsgeDogQlJJQ0tfV0lEVEggKyAxNSArIGMgKiAoQlJJQ0tfV0lEVEggKyAxMCksIHk6IEJSSUNLX01BUkdJTl9UT1AgKyByICogKEJSSUNLX0hFSUdIVCArIDEyLjUpLCBzdGF0dXM6IDEgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdW2NdID0gbmV3IEJyaWNrKHsgeDogQlJJQ0tfV0lEVEggKyAxNSArIGMgKiAoQlJJQ0tfV0lEVEggKyAxMCksIHk6IEJSSUNLX01BUkdJTl9UT1AgKyByICogKEJSSUNLX0hFSUdIVCArIDEyLjUpLCBzdGF0dXM6IDIgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZXZlbCA9PT0gMyl7XG4gICAgICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJvdzsgcisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icmlja3Nbcl0gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdW2NdID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmIChyID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IG5ldyBCcmljayh7IHg6IEJSSUNLX1dJRFRIICsgMTUgKyBjICogKEJSSUNLX1dJRFRIICsgMTApLCB5OiBCUklDS19NQVJHSU5fVE9QICsgciAqIChCUklDS19IRUlHSFQgKyAxMi41KSwgc3RhdHVzOiAzIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IG5ldyBCcmljayh7IHg6IEJSSUNLX1dJRFRIICsgMTUgKyBjICogKEJSSUNLX1dJRFRIICsgMTApLCB5OiBCUklDS19NQVJHSU5fVE9QICsgciAqIChCUklDS19IRUlHSFQgKyAxMi41KSwgc3RhdHVzOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQYXJ0aWNsZXMoYmFsbCl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZShiYWxsKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVBhcnRpY2xlcygpe1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmZpbHRlcihwYXJ0aWNsZSA9PiBwYXJ0aWNsZS50dGwgPiAwKTtcbiAgICB9XG5cbiAgICBtb3ZlUGFydGljbGVzKCl7XG4gICAgICAgIHRoaXMucGFydGljbGVzLmZvckVhY2goKHBhcnRpY2xlKSA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNsZS5tb3ZlKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgICAgIGN0eC5zaGFkb3dCbHVyID0gMDtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJncmV5XCI7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcblxuICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDA7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyg0NzAsIEdBTUVfSEVJR0hUIC0gMTUsIDgsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSg1LCAyNTUsIDI1NSlcIjtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjRkZGXCI7IFxuICAgICAgICBjdHguZm9udCA9IFwiMTZweCBNb25hY29cIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMubGl2ZXMsIDQ5MCwgR0FNRV9IRUlHSFQgLSA4KTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgNSlcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGBTQ09SRTogJHt0aGlzLnNjb3JlfWAsIDU1LCBHQU1FX0hFSUdIVCAtIDkpO1xuICAgICAgICB0aGlzLmJhbGwuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLmJyaWNrcy5mb3JFYWNoKHJvdyA9PiB7IHJvdy5mb3JFYWNoKGJyaWNrID0+IGJyaWNrLmRyYXcoY3R4KSkgfSk7XG4gICAgICAgIHRoaXMucGFkZGxlLmRyYXcoY3R4KTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiBwYXJ0aWNsZS5kcmF3KGN0eCkpO1xuICAgIH1cblxuICAgIEJvdW5kcygpIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLmJhbGwueDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmJhbGwueTtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5iYWxsLmR4O1xuICAgICAgICBsZXQgZHkgPSB0aGlzLmJhbGwuZHk7XG4gICAgICAgIGxldCByYWRpdXMgPSB0aGlzLmJhbGwucmFkaXVzO1xuICAgICAgICBpZiAoeCArIHJhZGl1cyA+IEdBTUVfV0lEVEgpIHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC54ID0gR0FNRV9XSURUSCAtIHJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuYmFsbC5keCA9IC1keDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCAtIHJhZGl1cyA8IDApe1xuICAgICAgICAgICAgdGhpcy5iYWxsLnggPSByYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmJhbGwuZHggPSAtZHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgLSByYWRpdXMgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmJhbGwueSA9IHJhZGl1czsgXG4gICAgICAgICAgICB0aGlzLmJhbGwuZHkgPSAtZHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgKyByYWRpdXMgPiBHQU1FX0hFSUdIVCl7XG4gICAgICAgICAgICB0aGlzLmxpdmVzIC09IDE7IFxuICAgICAgICAgICAgLy8gdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5wYWRkbGUueCArIHRoaXMucGFkZGxlLndpZHRoLzIsIHRoaXMucGFkZGxlLnkgLSB0aGlzLmJhbGwucmFkaXVzIC0gNSk7XG4gICAgICAgICAgICB0aGlzLmJhbGwucmVzZXRCYWxsKHRoaXMucGFkZGxlLnggKyB0aGlzLnBhZGRsZS53aWR0aCAvIDIsIHRoaXMucGFkZGxlLnkgLSB0aGlzLmJhbGwucmFkaXVzIC0gNSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFkZGxlLnggPCAwICl7XG4gICAgICAgICAgICB0aGlzLnBhZGRsZS5yZW1vdmVWZWwoKTtcbiAgICAgICAgICAgIHRoaXMucGFkZGxlLnggPSAzOyBcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZGRsZS54ICsgdGhpcy5wYWRkbGUud2lkdGggPiBHQU1FX1dJRFRIKSB7XG4gICAgICAgICAgICB0aGlzLnBhZGRsZS5yZW1vdmVWZWwoKTtcbiAgICAgICAgICAgIHRoaXMucGFkZGxlLnggPSBHQU1FX1dJRFRIIC0gdGhpcy5wYWRkbGUud2lkdGggLSAzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFkZGxlQ29sbGlzaW9uKCl7XG4gICAgICAgIGlmICh0aGlzLmJhbGwueCA8IHRoaXMucGFkZGxlLnggKyB0aGlzLnBhZGRsZS53aWR0aCAmJiB0aGlzLmJhbGwueCA+IHRoaXMucGFkZGxlLnggJiYgdGhpcy5iYWxsLnkgPCB0aGlzLnBhZGRsZS55ICsgdGhpcy5wYWRkbGUuaGVpZ2h0ICYmIHRoaXMuYmFsbC55ICsgdGhpcy5iYWxsLnJhZGl1cyA+IHRoaXMucGFkZGxlLnkpIHtcblxuICAgICAgICAgICAgLy8gUExBWSBTT1VORFxuXG4gICAgICAgICAgICAvLyBDSEVDSyBXSEVSRSBUSEUgdGhpcy5iYWxsIEhJVCBUSEUgdGhpcy5wYWRkbGVcbiAgICAgICAgICAgIGxldCBjb2xsaWRlUG9pbnQgPSB0aGlzLmJhbGwueCAtICh0aGlzLnBhZGRsZS54ICsgdGhpcy5wYWRkbGUud2lkdGggLyAyKTtcblxuICAgICAgICAgICAgLy8gTk9STUFMSVpFIFRIRSBWQUxVRVNcbiAgICAgICAgICAgIGNvbGxpZGVQb2ludCA9IGNvbGxpZGVQb2ludCAvICh0aGlzLnBhZGRsZS53aWR0aCAvIDIpO1xuXG4gICAgICAgICAgICAvLyBDQUxDVUxBVEUgVEhFIEFOR0xFIE9GIFRIRSB0aGlzLmJhbGxcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IGNvbGxpZGVQb2ludCAqIE1hdGguUEkgLyAzO1xuXG5cbiAgICAgICAgICAgIHRoaXMuYmFsbC5keCA9IE1hdGguY2VpbChTUEVFRCAqIE1hdGguc2luKGFuZ2xlKSk7XG4gICAgICAgICAgICB0aGlzLmJhbGwuZHkgPSAtIE1hdGguY2VpbChTUEVFRCAqIE1hdGguY29zKGFuZ2xlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBicmlja0NvbGxpc2lvbigpe1xuICAgICAgICBsZXQgcm93ID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0ucjtcbiAgICAgICAgbGV0IGNvbCA9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdLmM7XG4gICAgICAgIGxldCBiYWxsID0gdGhpcy5iYWxsOyBcbiAgICAgICAgbGV0IHIgPSB0aGlzLmJhbGwucmFkaXVzO1xuXG5cbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3c7IHIrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2w7IGMrKykge1xuICAgICAgICAgICAgICAgIGxldCBiID0gdGhpcy5icmlja3Nbcl1bY107XG4gICAgICAgICAgICAgICAgaWYgKGIuc3RhdHVzID4gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGwueCArIGJhbGwucmFkaXVzID4gYi54ICYmIGJhbGwueCAtIGJhbGwucmFkaXVzIDwgYi54ICsgYi53aWR0aCAmJiBiYWxsLnkgKyBiYWxsLnJhZGl1cyA+IGIueSAmJiBiYWxsLnkgLSBiYWxsLnJhZGl1cyA8IGIueSArIGIuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGJhbGwueCArIGJhbGwucmFkaXVzID49IGIueCAmJiBiYWxsLnggLSBiYWxsLnJhZGl1cyA8PSBiLngpIHx8IChiYWxsLnggLSBiYWxsLnJhZGl1cyA8PSBiLnggKyBiLndpZHRoICYmIGJhbGwueCArIGJhbGwucmFkaXVzID49IGIueCArIGIud2lkdGgpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsLmR4ID0gLWJhbGwuZHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKGJhbGwueSArIGJhbGwucmFkaXVzID49IGIueSAmJiBiYWxsLnkgLSBiYWxsLnJhZGl1cyA8PSBiLnkgKSB8fCAoYmFsbC55IC0gYmFsbC5yYWRpdXMgPD0gYi55ICsgYi5oZWlnaHQgJiYgYmFsbC55ICsgYmFsbC5yYWRpdXMgPj0gYi55ICsgYi5oZWlnaHQpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsLmR5ID0gLWJhbGwuZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgYi5zdGF0dXMgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMjA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFBhcnRpY2xlcyhiYWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgbGV2ZWxVcCgpe1xuICAgICAgIGlmICh0aGlzLmxldmVsIDw9IDMpe1xuICAgICAgICAgICAgbGV0IHJvdyA9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdLnI7XG4gICAgICAgICAgICBsZXQgY29sID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0uYztcblxuICAgICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3c7IHIrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGIgPSB0aGlzLmJyaWNrc1tyXVtjXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGIuc3RhdHVzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sZXZlbCArPSAxO1xuICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWwgPiAzKXtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQnJpY2tzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iYWxsLnJlc2V0QmFsbCh0aGlzLnBhZGRsZS54ICsgdGhpcy5wYWRkbGUud2lkdGggLyAyLCB0aGlzLnBhZGRsZS55IC0gdGhpcy5iYWxsLnJhZGl1cyAtIDUpO1xuICAgICAgICAgICAgfVxuICAgICAgIH1cblxuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIGlmICh0aGlzLmxpdmVzIDw9IDAgfHwgdGhpcy5sZXZlbCA+IDMpe1xuICAgICAgICAgICAgdGhpcy5vdmVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICB0aGlzLkJvdW5kcygpO1xuICAgICAgICB0aGlzLnBhZGRsZUNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmJyaWNrQ29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlUGFydGljbGVzKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgdGhpcy5sZXZlbFVwKCk7XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoKSB7XG4gICAgICAgIHRoaXMuYmFsbC5tb3ZlKCk7XG4gICAgICAgIHRoaXMucGFkZGxlLm1vdmUoKTtcbiAgICAgICAgdGhpcy5tb3ZlUGFydGljbGVzKCk7XG4gICAgfVxuXG4gICAgc3RlcCgpe1xuICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgIH1cblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCB7IElNQUdFUywgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQgfSBmcm9tICcuL2NvbnN0YW50cydcblxuY2xhc3MgdGl0bGVTY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmltYWdlQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgIH1cblxuICAgIGltYWdlKCkge1xuICAgICAgICBsZXQgaW1hZ2UgPSBJTUFHRVMubG9nb1t0aGlzLmltYWdlQ291bnRdO1xuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgsIHNjb3JlKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA9PT0gNSkge1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSgpLCAwLCBHQU1FX0hFSUdIVCAvIDIwKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VDb3VudCA9ICh0aGlzLmltYWdlQ291bnQgKyAxKSAlIDg3O1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgICAgICAgICAvLyBkcmF3IHByZXNzIGVudGVyIHRvIHBsYXlcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1KVwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1KVwiO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZm9udCA9IFwiMzBweCBNb25hY29cIlxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDA7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJQUkVTUyAgICAgICBUTyBQTEFZIEFHQUlOXCIsIEdBTUVfV0lEVEggLyAyLCA1NTApO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgNSlcIjtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSgyNTUsIDI1NSwgNSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIkVOVEVSXCIsIDE4MCwgNTUwKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgLy8gZHJhdyBmaW5hbCBzY29yZSBcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIkZJTkFMIFNDT1JFXCIsIDI1MCwgMjc1KTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCA1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHguZm9udCA9IFwiNDBweCBNb25hY29cIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChzY29yZSwgMjUwLCAzNzUpO1xuICAgICAgICAgIFxuXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnRlcisrO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGl0bGVTY3JlZW47XG5cbiIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQge0tFWSwgTU9WRVN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBUaXRsZVNjcmVlbiBmcm9tICcuL3RpdGxlX3NjcmVlbic7XG5pbXBvcnQgR2FtZU92ZXJTY3JlZW4gZnJvbSAnLi9nYW1lX292ZXJfc2NyZWVuJztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi91dGlsJztcblxuY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKTtcbiAgICAgICAgdGhpcy5wYWRkbGUgPSB0aGlzLmdhbWUucGFkZGxlO1xuICAgICAgICB0aGlzLnRpdGxlU2NyZWVuICA9IG5ldyBUaXRsZVNjcmVlbigpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyU2NyZWVuID0gbmV3IEdhbWVPdmVyU2NyZWVuKCk7XG4gICAgICAgIHRoaXMua2V5RG93biA9IHt9O1xuICAgICAgICB0aGlzLm1vdmluZyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJ0aXRsZVwiO1xuICAgICAgICB0aGlzLmhhbmRsZUtleURvd24gPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlVcCA9IHRoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGVwID0gdGhpcy5zdGVwLmJpbmQodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmhhbmRsZUtleVVwKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgVXRpbC5sb2FkSW1hZ2VzKCgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnN0ZXApXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIHN0ZXAoKXtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgZnBzID0gNjA7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHN3aXRjaCh0aGF0LnN0YXRlKXtcbiAgICAgICAgICAgICAgICBjYXNlIFwidGl0bGVcIjogXG4gICAgICAgICAgICAgICAgICAgIHRoYXQudGl0bGVTY3JlZW4uZHJhdyh0aGF0LmN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJnYW1lXCI6IFxuICAgICAgICAgICAgICAgICAgICB0aGF0LmdhbWUuZHJhdyh0aGF0LmN0eCk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZ2FtZS5zdGVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGF0LmdhbWUub3ZlciA9PT0gdHJ1ZSkgdGhhdC5zdGF0ZSA9ICdnYW1lb3Zlcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJnYW1lb3ZlclwiOiBcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nYW1lT3ZlclNjcmVlbi5kcmF3KHRoYXQuY3R4LCB0aGF0LmdhbWUuc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGF0LnN0ZXApXG4gICAgICAgIH0sIDEwMDAvZnBzKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlS2V5RG93bihlKXtcbiAgICAgICAgaWYgKGUucmVwZWF0IHx8IHRoaXMua2V5RG93bltlLmtleUNvZGVdKSByZXR1cm47IFxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLRVkuRU5URVIpe1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICd0aXRsZScgfHwgdGhpcy5zdGF0ZSA9PT0gJ2dhbWVvdmVyJyl7IFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcImdhbWVcIjsgXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKTsgXG4gICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUgPSB0aGlzLmdhbWUucGFkZGxlO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93biA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZS5vdmVyIHx8ICF0aGlzLmdhbWUud29uKXsgXG4gICAgICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcbiAgICAgICAgICAgICAgICBjYXNlIEtFWS5BOiBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nLnB1c2goTU9WRVMuTEVGVClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5BXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLkQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZy5wdXNoKE1PVkVTLlJJR0hUKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZS5zZXRWZWwodGhpcy5tb3ZpbmdbdGhpcy5tb3ZpbmcubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleURvd25bS0VZLkRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLRVkuTEVGVDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nLnB1c2goTU9WRVMuTEVGVClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5MRUZUXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLlJJR0hUOiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcucHVzaChNT1ZFUy5SSUdIVClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5SSUdIVF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleVVwKGUpe1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZS5vdmVyIHx8ICF0aGlzLmdhbWUud29uKXtcbiAgICAgICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLkE6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdGhpcy5tb3ZpbmcuZmlsdGVyKGFyciA9PiBhcnIuam9pbihcIlwiKSAhPT0gTU9WRVMuTEVGVC5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5BXSA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLRVkuRDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdGhpcy5tb3ZpbmcuZmlsdGVyKGFyciA9PiBhcnIuam9pbihcIlwiKSAhPT0gTU9WRVMuUklHSFQuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuRF0gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLkxFRlQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdGhpcy5tb3ZpbmcuZmlsdGVyKGFyciA9PiBhcnIuam9pbihcIlwiKSAhPT0gTU9WRVMuTEVGVC5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5MRUZUXSA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLRVkuUklHSFQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRoaXMubW92aW5nLmZpbHRlcihhcnIgPT4gYXJyLmpvaW4oXCJcIikgIT09IE1PVkVTLlJJR0hULmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleURvd25bS0VZLlJJR0hUXSA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubW92aW5nLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubW92aW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFkZGxlLnJlbW92ZVZlbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldztcbiIsImltcG9ydCB7IEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2dhbWVfdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgXG4gICAgY2FudmFzRWwud2lkdGggPSBHQU1FX1dJRFRIOyBcbiAgICBjYW52YXNFbC5oZWlnaHQgPSBHQU1FX0hFSUdIVDtcbiAgICBcbiAgICBcbiAgICAvLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTsgXG4gICAgbmV3IEdhbWVWaWV3KGN0eCkuc3RhcnQoKTtcbn0pXG5cbiIsImltcG9ydCB7IFNQRUVELCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCwgUEFERExFX0hFSUdIVCwgUEFERExFX1dJRFRILCBQQURETEVfTUFSR0lOX0JPVFRPTX0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBQYWRkbGUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudmVsID0gWzAsIDBdO1xuICAgICAgICB0aGlzLnggPSAoR0FNRV9XSURUSC8yKSAtIChQQURETEVfV0lEVEgvMik7XG4gICAgICAgIHRoaXMueSA9IEdBTUVfSEVJR0hUIC0gUEFERExFX0hFSUdIVCAtIFBBRERMRV9NQVJHSU5fQk9UVE9NO1xuICAgICAgICB0aGlzLmhlaWdodCA9IFBBRERMRV9IRUlHSFQ7IFxuICAgICAgICB0aGlzLndpZHRoID0gUEFERExFX1dJRFRIO1xuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZ2JhKDI1NSwgNSwgNSlcIlxuICAgICAgICAvLyB0aGlzLmluQm91bmRzID0gdGhpcy5pbkJvdW5kcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1OyBcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7IFxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBtb3ZlKCl7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMudmVsWzBdO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLnZlbFsxXTtcbiAgICB9XG5cblxuICAgIHNldFZlbCh2ZWwpe1xuICAgICAgICB2ZWwgPSBbdmVsWzBdICogU1BFRUQgLCB2ZWxbMV0gKiBTUEVFRCBdXG4gICAgICAgIHRoaXMudmVsID0gdmVsO1xuICAgIH1cblxuICAgIHJlbW92ZVZlbCgpeyBcbiAgICAgICAgdGhpcy52ZWwgPSBbMCwgMF07XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGFkZGxlOyIsImltcG9ydCB7IFNQRUVEIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBQYXJ0aWNsZSB7XG4gICAgY29uc3RydWN0b3IoYmFsbCkge1xuICAgICAgICB0aGlzLnggPSBiYWxsLnhcbiAgICAgICAgdGhpcy55ID0gYmFsbC55XG4gICAgICAgIHRoaXMucmFkaXVzID0gMjtcbiAgICAgICAgdGhpcy5zcGVlZCA9IFNQRUVEO1xuICAgICAgICB0aGlzLmR4ID0gNCAqIChNYXRoLnJhbmRvbSgpICogMiAtIDEpO1xuICAgICAgICB0aGlzLmR5ID0gNCAqIChNYXRoLnJhbmRvbSgpICogMiAtIDEpO1xuICAgICAgICB0aGlzLnR0bCA9IDUwOyBcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMS41O1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGlmICh0aGlzLnR0bCA+IDApe1xuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gYHJnYmEoMjU1LCAyNTUsIDI1NSlgO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1OyBcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMjU1LCAyNTUsIDI1NSwgJHt0aGlzLm9wYWNpdHl9KWBcbiAgICAgICAgICAgIGN0eC5maWxsKCk7IFxuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy50dGwgLT0gMTtcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eSAtPSAoMS90aGlzLnR0bCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLmR5IC09IDAuMTtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZHg7XG4gICAgICAgIHRoaXMueSAtPSB0aGlzLmR5O1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlOyIsImltcG9ydCB7IElNQUdFUywgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQgfSBmcm9tICcuL2NvbnN0YW50cydcblxuY2xhc3MgdGl0bGVTY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuaW1hZ2VDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgfVxuXG4gICAgaW1hZ2UoKXtcbiAgICAgICAgbGV0IGltYWdlID0gSU1BR0VTLmxvZ29bdGhpcy5pbWFnZUNvdW50XTtcbiAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KXtcblxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID09PSA1KXtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UoKSwgMCwgR0FNRV9IRUlHSFQvMjApO1xuICAgICAgICAgICAgdGhpcy5pbWFnZUNvdW50ID0gKHRoaXMuaW1hZ2VDb3VudCArIDEpICUgODc7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgXG4gICAgICAgICAgICAvLyBkcmF3IHByZXNzIGVudGVyIHRvIHBsYXlcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1KVwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1KVwiO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZm9udCA9IFwiMzBweCBNb25hY29cIlxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDA7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJQUkVTUyAgICAgICBUTyBQTEFZXCIsIEdBTUVfV0lEVEggLyAyLCAyNTApO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgNSlcIjtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSgyNTUsIDI1NSwgNSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIkVOVEVSXCIsIDIzNSwgMjUwKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBcbiAgICAgICAgICAgIC8vIGRyYXcgaW5zdHJ1Y3Rpb25zIGFuZCBjb250cm9sc1xuICAgIFxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZm9udCA9IFwiMzBweCBNb25hY29cIlxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDI1NSwgNSwgMjU1KVwiXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDUsIDI1NSwgNSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIklOU1RSVUNUSU9OU1wiLCAyNTAsIDM1MClcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCA1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJDT05UUk9MU1wiLCAyNTAsIDUwMCk7XG4gICAgICAgICAgICBjdHguZm9udCA9IFwiMjBweCBNb25hY29cIlxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJCcmVhayBhbGwgdGhlIEJSSUNLU1wiLCAyNTAsIDQwMCk7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJbQV0gW0RdIG9yIFs8XSBbPl0gdG8gbW92ZSBMRUZUIFJJR0hUXCIsIDI1MCwgNTUwKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIlwiO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSBcIlwiO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnRlcisrO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGl0bGVTY3JlZW47IFxuXG4iLCJpbXBvcnQgeyBJTUFHRVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkSW1hZ2VzID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMDsgLy8gbnVtYmVyIG9mIGltYWdlcyBsb2FkZWRcbiAgICBsZXQgdG90YWwgPSAwO1xuXG4gICAgY29uc3Qgc3ByaXRlcyA9IDg3O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc3ByaXRlczsgaSsrKSB7XG4gICAgICAgIHRvdGFsICs9IDE7XG5cbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gbG9hZGVkO1xuICAgICAgICBpbWcuc3JjID0gYGRpc3QvaW1hZ2VzL3RpdGxlL3RpdGxlJHtpfS5wbmdgO1xuICAgICAgICBJTUFHRVMubG9nby5wdXNoKGltZyk7XG4gICAgfVxuXG4gICAgLy8gT25jZSBhbGwgaW1hZ2VzIGhhdmUgYmVlbiBmdWxseSBsb2FkZWQsIHdpbGwgaW5pdGlhdGUgY2FsbGJhY2ssIHdoaWNoIGluIHRoaXNcbiAgICAvLyBjYXNlIHdpbGwgYmUgaW5zaWRlIHRoZSBzdGFydCgpIGZ1bmN0aW9uIGluc2lkZSBHYW1lVmlld1xuICAgIGZ1bmN0aW9uIGxvYWRlZCgpIHtcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYgKGNvdW50ID49IHRvdGFsKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9