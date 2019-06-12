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

    resetBall(){
        this.x = (_constants__WEBPACK_IMPORTED_MODULE_0__["GAME_WIDTH"] / 2);
        this.y = _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_HEIGHT"] - _constants__WEBPACK_IMPORTED_MODULE_0__["PADDLE_HEIGHT"] - _constants__WEBPACK_IMPORTED_MODULE_0__["PADDLE_MARGIN_BOTTOM"] - _constants__WEBPACK_IMPORTED_MODULE_0__["BALL_RADIUS"];
        this.dx = _constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"] * (MATH.random() * 2 - 1)
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
/*! exports provided: KEY, MOVES, SPEED, GAME_WIDTH, GAME_HEIGHT, GAME_BG, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_MARGIN_BOTTOM, BALL_RADIUS, BRICK_HEIGHT, BRICK_WIDTH, BRICK_MARGIN_TOP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY", function() { return KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVES", function() { return MOVES; });
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
    RIGHT: 39
}

const MOVES = {
    LEFT: [-1, 0], 
    RIGHT: [1, 0], 
    ZERO: [0, 0]
}

const SPEED = 7; 
const GAME_WIDTH = 500; 
const GAME_HEIGHT = 700;
const GAME_BG = "#141414";
const PADDLE_WIDTH = 100; 
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
        // ctx.lineWidth = 10;
        // ctx.strokeStyle = "rgba(5, 255, 255)";
        // ctx.shadowColor = "rgba(5, 255, 255)"; 
        // ctx.shadowBlur = 5; 
        // ctx.strokeRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        // ctx.lineWidth = 2;
        // ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(15, _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"] - 15, 8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(5, 255, 255)";
        ctx.fill();
        ctx.fillStyle = "#FFF"; 
        ctx.font = "16px Germania One";
        ctx.fillText(this.lives, 30, _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"] - 9);
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
            this.ball = new _ball__WEBPACK_IMPORTED_MODULE_1__["default"](this.paddle.x + this.paddle.width/2, this.paddle.y - 10);
        }
        if (this.paddle.x < 0 ){
            this.paddle.removeVel();
            this.paddle.x = 3; 
        } else if (this.paddle.x + this.paddle.width > _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_WIDTH"]) {
            this.paddle.removeVel();
            this.paddle.x = _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_WIDTH"] - this.paddle.width - 3;
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


            this.ball.dx = _constants__WEBPACK_IMPORTED_MODULE_4__["SPEED"] * Math.sin(angle);
            this.ball.dy = - _constants__WEBPACK_IMPORTED_MODULE_4__["SPEED"] * Math.cos(angle);
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


/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;
        this.paddle = game.paddle;
        this.keyDown = {};
        this.moving = [];
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        document.addEventListener("keydown", this.handleKeyDown)
        document.addEventListener("keyup", this.handleKeyUp)
    }

    start() {
            setInterval(() => {
                this.game.draw(this.ctx)
                this.game.moveObjects()
            }, 20)
    }

    handleKeyDown(e){
        if (e.repeat || this.keyDown[e.keyCode]) return; 
        switch(e.keyCode){
            case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].A: 
                this.moving.push(_constants__WEBPACK_IMPORTED_MODULE_1__["MOVES"].LEFT)
                console.log(this.moving)
                this.paddle.setVel(this.moving[this.moving.length - 1]);
                this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].A] = true;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].D: 
                this.moving.push(_constants__WEBPACK_IMPORTED_MODULE_1__["MOVES"].RIGHT)
                console.log(this.moving)
                this.paddle.setVel(this.moving[this.moving.length - 1]);
                this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].D] = true;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].LEFT: 
                this.moving.push(_constants__WEBPACK_IMPORTED_MODULE_1__["MOVES"].LEFT)
                console.log(this.moving)
                this.paddle.setVel(this.moving[this.moving.length - 1]);
                this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].LEFT] = true;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].RIGHT: 
                this.moving.push(_constants__WEBPACK_IMPORTED_MODULE_1__["MOVES"].RIGHT)
                console.log(this.moving)
                this.paddle.setVel(this.moving[this.moving.length - 1]);
                this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].RIGHT] = true;
                break;
        }
    }

    handleKeyUp(e){
        switch(e.keyCode){
            case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].A:
                this.moving = this.moving.filter(arr => arr.join("") !== _constants__WEBPACK_IMPORTED_MODULE_1__["MOVES"].LEFT.join(""));
                console.log(this.moving)
                this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].A] = false; 
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].D: 
                this.moving = this.moving.filter(arr => arr.join("") !== _constants__WEBPACK_IMPORTED_MODULE_1__["MOVES"].RIGHT.join(""));
                console.log(this.moving)
                this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].D] = false; 
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].LEFT:
                this.moving = this.moving.filter(arr => arr.join("") !== _constants__WEBPACK_IMPORTED_MODULE_1__["MOVES"].LEFT.join(""));
                console.log(this.moving)
                this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].LEFT] = false; 
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].RIGHT: 
                this.moving = this.moving.filter(arr => arr.join("") !== _constants__WEBPACK_IMPORTED_MODULE_1__["MOVES"].RIGHT.join(""));
                console.log(this.moving)
                this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].RIGHT] = false; 
                break;
            }
        if (this.moving.length != 0) {
            this.paddle.setVel(this.moving[this.moving.length - 1])
            // this.creep.setVel(this.moving[this.moving.length - 1])
        }
        if (this.moving.length === 0) {
            this.paddle.removeVel();
            // this.creep.removeVel();
        }
    }
    
}




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
    
    
    const game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](); 
    new _game_view__WEBPACK_IMPORTED_MODULE_2__["default"](game, ctx).start();
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

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

// import {IMAGES} from './constants';

// export const loadImages = (callback) => {
//     let count = 0; // number of images loaded

//     const directions = ["up", "down", "left", "right"];
//     const sprites = 3; 
//     let total = 0;

//     directions.forEach(direction => {
//         // will iterate through loop, i and direction will denote image file to be loaded in an array
//         // located in IMAGES
//         for (let i = 0; i <= sprites; i++){
//             total += 1; 

//             let img = new Image();
//             img.onload = loaded; 
//             img.src = `dist/images/char-${direction}-${i}.png`;
//             IMAGES.player[direction].push(img);
//         }

//         for (let i = 0; i <= sprites; i++){
//             total += 1; 

//             let img = new Image(); 
//             img.onload = loaded; 
//             img.src = `dist/images/creep-${direction}-${i}.png`;
//             IMAGES.creep[direction].push(img);
//         }
//         for (let i = 0; i <= sprites; i++){
//             // debugger
//             total += 1; 

//             let img = new Image(); 
//             img.onload = loaded; 
//             img.src = `dist/images/tile-${i}.png`;
//             IMAGES.traps["bearTrap"].push(img);
//         }


//         // Once all images have been fully loaded, will initiate callback, which in this
//         // case will be inside the start() function inside GameView
//         function loaded() {
//             count ++; 
//             if (count >= total){
//                 callback();
//             }
//         }
//     })
// }



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JyaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZGRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQTZIOztBQUU3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CO0FBQ0E7QUFDQSxzQkFBc0Isc0RBQVc7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QUNBLCtCO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxhQUFhO0FBQ2hFLHVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHZSx1RUFBUSxFOzs7Ozs7Ozs7OztBQ3JDdkIsV0FBVyxPQUFPOztBQUVsQjtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQSx5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDLDBCOztBQUVBO0FBQ0EsbUM7QUFDQSw2Q0FBNkMsVUFBVSxHQUFHLEVBQUU7QUFDNUQ7QUFDQTs7QUFFQSwwQkFBMEIsY0FBYztBQUN4QywwQjs7QUFFQSxxQztBQUNBLG1DO0FBQ0EsOENBQThDLFVBQVUsR0FBRyxFQUFFO0FBQzdEO0FBQ0E7QUFDQSwwQkFBMEIsY0FBYztBQUN4QztBQUNBLDBCOztBQUVBLHFDO0FBQ0EsbUM7QUFDQSw2Q0FBNkMsRUFBRTtBQUMvQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSx3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgU1BFRUQsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hULCBQQURETEVfSEVJR0hULCBQQURETEVfV0lEVEgsIFBBRERMRV9NQVJHSU5fQk9UVE9NLCBCQUxMX1JBRElVUyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY2xhc3MgQmFsbCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICAvLyB0aGlzLnggPSAoR0FNRV9XSURUSCAvIDIpO1xuICAgICAgICAvLyB0aGlzLnkgPSBHQU1FX0hFSUdIVCAtIFBBRERMRV9IRUlHSFQgLSBQQURETEVfTUFSR0lOX0JPVFRPTSAtIEJBTExfUkFESVVTO1xuICAgICAgICB0aGlzLnggPSB4OyBcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBCQUxMX1JBRElVUztcbiAgICAgICAgdGhpcy5zcGVlZCA9IFNQRUVEOyBcbiAgICAgICAgdGhpcy5keCA9IFNQRUVEICogKE1hdGgucmFuZG9tKCkgKiAyIC0gMSlcbiAgICAgICAgdGhpcy5keSA9IC1TUEVFRDsgXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdHJ1ZTsgXG4gICAgICAgIHRoaXMuY29sb3IgPSBcInJnYmEoNSwgMjU1LCAyNTUpXCJcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguc2hhZG93Q29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDEwOyBcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5keDsgXG4gICAgICAgIHRoaXMueSArPSB0aGlzLmR5O1xuICAgIH1cblxuICAgIHJlc2V0QmFsbCgpe1xuICAgICAgICB0aGlzLnggPSAoR0FNRV9XSURUSCAvIDIpO1xuICAgICAgICB0aGlzLnkgPSBHQU1FX0hFSUdIVCAtIFBBRERMRV9IRUlHSFQgLSBQQURETEVfTUFSR0lOX0JPVFRPTSAtIEJBTExfUkFESVVTO1xuICAgICAgICB0aGlzLmR4ID0gU1BFRUQgKiAoTUFUSC5yYW5kb20oKSAqIDIgLSAxKVxuICAgICAgICB0aGlzLmR5ID0gLVNQRUVEO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJhbGw7IiwiaW1wb3J0IHsgU1BFRUQsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hULCBCUklDS19IRUlHSFQsIEJSSUNLX1dJRFRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBCcmljayB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLnggPSBvcHRpb25zLng7IFxuICAgICAgICB0aGlzLnkgPSBvcHRpb25zLnk7IFxuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZ2JhKDI1NSwgMTUsIDI1NSlcIjtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBCUklDS19IRUlHSFQ7XG4gICAgICAgIHRoaXMud2lkdGggPSBCUklDS19XSURUSDtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAyOyBcbiAgICAgICAgdGhpcy5tYXJnaW5Ub3AgPSA1MDsgXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAxKXtcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcInJnYmEoMjU1LCAxNSwgMjU1KVwiXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1OyBcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZUNvbG9yO1xuICAgICAgICAgICAgLy8gY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlUmVjdCh0aGlzLnggLSAwLjUsIHRoaXMueSAtIDAuNSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID09PSAyKXtcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcInJnYmEoMTUsIDIyNSwgMTUpXCJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDU7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBCcmljazsiLCJleHBvcnQgY29uc3QgS0VZID0geyBcbiAgICBBOiA2NSwgXG4gICAgRDogNjgsIFxuICAgIExFRlQ6IDM3LCBcbiAgICBSSUdIVDogMzlcbn1cblxuZXhwb3J0IGNvbnN0IE1PVkVTID0ge1xuICAgIExFRlQ6IFstMSwgMF0sIFxuICAgIFJJR0hUOiBbMSwgMF0sIFxuICAgIFpFUk86IFswLCAwXVxufVxuXG5leHBvcnQgY29uc3QgU1BFRUQgPSA3OyBcbmV4cG9ydCBjb25zdCBHQU1FX1dJRFRIID0gNTAwOyBcbmV4cG9ydCBjb25zdCBHQU1FX0hFSUdIVCA9IDcwMDtcbmV4cG9ydCBjb25zdCBHQU1FX0JHID0gXCIjMTQxNDE0XCI7XG5leHBvcnQgY29uc3QgUEFERExFX1dJRFRIID0gMTAwOyBcbmV4cG9ydCBjb25zdCBQQURETEVfSEVJR0hUID0gMjA7XG5leHBvcnQgY29uc3QgUEFERExFX01BUkdJTl9CT1RUT00gPSA1MDsgXG5leHBvcnQgY29uc3QgQkFMTF9SQURJVVMgPSA4OyBcbmV4cG9ydCBjb25zdCBCUklDS19IRUlHSFQgPSAyMDsgXG5leHBvcnQgY29uc3QgQlJJQ0tfV0lEVEggPSA0MDsgXG5leHBvcnQgY29uc3QgQlJJQ0tfTUFSR0lOX1RPUCA9IDUwO1xuIiwiaW1wb3J0IFBhZGRsZSBmcm9tICcuL3BhZGRsZSc7XG5pbXBvcnQgQmFsbCBmcm9tICcuL2JhbGwnO1xuaW1wb3J0IEJyaWNrIGZyb20gJy4vYnJpY2snO1xuaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4vcGFydGljbGUnO1xuaW1wb3J0IHtTUEVFRCwgR0FNRV9IRUlHSFQsIEdBTUVfV0lEVEgsIEJSSUNLX1dJRFRILCBCUklDS19IRUlHSFQsIEJSSUNLX01BUkdJTl9UT1B9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY2xhc3MgR2FtZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBhZGRsZSA9IG5ldyBQYWRkbGUoKTtcbiAgICAgICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5wYWRkbGUueCArIHRoaXMucGFkZGxlLndpZHRoLzIsIHRoaXMucGFkZGxlLnkgLSAxMCk7XG4gICAgICAgIHRoaXMuYnJpY2tzID0gW107XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gW107XG4gICAgICAgIHRoaXMubGl2ZXMgPSAzOyBcbiAgICAgICAgdGhpcy5sZXZlbCA9IDE7IFxuICAgICAgICB0aGlzLmxldmVscyA9IHtcbiAgICAgICAgICAgIDE6IHtyOiA1LCBjOiA4fSwgXG4gICAgICAgICAgICAyOiB7cjogOCwgYzogOH0sIFxuICAgICAgICAgICAgMzoge3I6IDEwLCBjOiA4fVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgLy8gdGhpcy5sb3NlID0gZmFsc2U7IFxuICAgICAgICB0aGlzLmFkZEJyaWNrcygpO1xuICAgICAgICB0aGlzLnBhZGRsZUJvdW5kcyA9IHRoaXMucGFkZGxlQm91bmRzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGFkZGxlQ29sbGlzb24gPSB0aGlzLnBhZGRsZUNvbGxpc29uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYnJpY2tDb2xsaXNpb24gPSB0aGlzLmJyaWNrQ29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkUGFydGljbGVzID0gdGhpcy5hZGRQYXJ0aWNsZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVQYXJ0aWNsZXMgPSB0aGlzLnJlbW92ZVBhcnRpY2xlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmVQYXJ0aWNsZXMgPSB0aGlzLm1vdmVQYXJ0aWNsZXMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBhZGRCcmlja3MoKXtcbiAgICAgICAgIFxuICAgICAgICBsZXQgcm93ID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0ucjsgXG4gICAgICAgIGxldCBjb2wgPSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXS5jO1xuXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93OyByKyspe1xuICAgICAgICAgICAgdGhpcy5icmlja3Nbcl0gPSBbXTsgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbDsgYysrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdW2NdID0gbmV3IEJyaWNrKHsgeDogQlJJQ0tfV0lEVEggKyAxNSArIGMgKiAoQlJJQ0tfV0lEVEggKyAxMCkgLCB5OiBCUklDS19NQVJHSU5fVE9QICsgciAqIChCUklDS19IRUlHSFQgKyAxMi41KX0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQYXJ0aWNsZXMoYmFsbCl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZShiYWxsKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVBhcnRpY2xlcygpe1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmZpbHRlcihwYXJ0aWNsZSA9PiBwYXJ0aWNsZS50dGwgPiAwKTtcbiAgICB9XG5cbiAgICBtb3ZlUGFydGljbGVzKCl7XG4gICAgICAgIHRoaXMucGFydGljbGVzLmZvckVhY2goKHBhcnRpY2xlKSA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNsZS5tb3ZlKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgICAgIC8vIGN0eC5saW5lV2lkdGggPSAxMDtcbiAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDUsIDI1NSwgMjU1KVwiO1xuICAgICAgICAvLyBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoNSwgMjU1LCAyNTUpXCI7IFxuICAgICAgICAvLyBjdHguc2hhZG93Qmx1ciA9IDU7IFxuICAgICAgICAvLyBjdHguc3Ryb2tlUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgICAgIC8vIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICAvLyBjdHguc2hhZG93Qmx1ciA9IDA7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYygxNSwgR0FNRV9IRUlHSFQgLSAxNSwgOCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDUsIDI1NSwgMjU1KVwiO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjRkZGXCI7IFxuICAgICAgICBjdHguZm9udCA9IFwiMTZweCBHZXJtYW5pYSBPbmVcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMubGl2ZXMsIDMwLCBHQU1FX0hFSUdIVCAtIDkpO1xuICAgICAgICB0aGlzLmJhbGwuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLmJyaWNrcy5mb3JFYWNoKHJvdyA9PiB7IHJvdy5mb3JFYWNoKGJyaWNrID0+IGJyaWNrLmRyYXcoY3R4KSkgfSk7XG4gICAgICAgIHRoaXMucGFkZGxlLmRyYXcoY3R4KTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiBwYXJ0aWNsZS5kcmF3KGN0eCkpO1xuICAgIH1cblxuICAgIHBhZGRsZUJvdW5kcygpIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLmJhbGwueDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmJhbGwueTtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5iYWxsLmR4O1xuICAgICAgICBsZXQgZHkgPSB0aGlzLmJhbGwuZHk7XG4gICAgICAgIGxldCByYWRpdXMgPSB0aGlzLmJhbGwucmFkaXVzO1xuICAgICAgICBpZiAoeCArIHJhZGl1cyA+IEdBTUVfV0lEVEgpIHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC54ID0gR0FNRV9XSURUSCAtIHJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuYmFsbC5keCA9IC1keDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCAtIHJhZGl1cyA8IDApe1xuICAgICAgICAgICAgdGhpcy5iYWxsLnggPSByYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmJhbGwuZHggPSAtZHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgLSByYWRpdXMgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmJhbGwueSA9IHJhZGl1czsgXG4gICAgICAgICAgICB0aGlzLmJhbGwuZHkgPSAtZHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgKyByYWRpdXMgPiBHQU1FX0hFSUdIVCl7XG4gICAgICAgICAgICB0aGlzLmxpdmVzIC09IDE7IFxuICAgICAgICAgICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5wYWRkbGUueCArIHRoaXMucGFkZGxlLndpZHRoLzIsIHRoaXMucGFkZGxlLnkgLSAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFkZGxlLnggPCAwICl7XG4gICAgICAgICAgICB0aGlzLnBhZGRsZS5yZW1vdmVWZWwoKTtcbiAgICAgICAgICAgIHRoaXMucGFkZGxlLnggPSAzOyBcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZGRsZS54ICsgdGhpcy5wYWRkbGUud2lkdGggPiBHQU1FX1dJRFRIKSB7XG4gICAgICAgICAgICB0aGlzLnBhZGRsZS5yZW1vdmVWZWwoKTtcbiAgICAgICAgICAgIHRoaXMucGFkZGxlLnggPSBHQU1FX1dJRFRIIC0gdGhpcy5wYWRkbGUud2lkdGggLSAzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFkZGxlQ29sbGlzb24oKXtcbiAgICAgICAgaWYgKHRoaXMuYmFsbC54IDwgdGhpcy5wYWRkbGUueCArIHRoaXMucGFkZGxlLndpZHRoICYmIHRoaXMuYmFsbC54ID4gdGhpcy5wYWRkbGUueCAmJiB0aGlzLmJhbGwueSA8IHRoaXMucGFkZGxlLnkgKyB0aGlzLnBhZGRsZS5oZWlnaHQgJiYgdGhpcy5iYWxsLnkgKyB0aGlzLmJhbGwucmFkaXVzID4gdGhpcy5wYWRkbGUueSkge1xuXG4gICAgICAgICAgICAvLyBQTEFZIFNPVU5EXG4gICAgICAgICAgICAvLyB0aGlzLnBhZGRsZV9ISVQucGxheSgpO1xuXG4gICAgICAgICAgICAvLyBDSEVDSyBXSEVSRSBUSEUgdGhpcy5iYWxsIEhJVCBUSEUgdGhpcy5wYWRkbGVcbiAgICAgICAgICAgIGxldCBjb2xsaWRlUG9pbnQgPSB0aGlzLmJhbGwueCAtICh0aGlzLnBhZGRsZS54ICsgdGhpcy5wYWRkbGUud2lkdGggLyAyKTtcblxuICAgICAgICAgICAgLy8gTk9STUFMSVpFIFRIRSBWQUxVRVNcbiAgICAgICAgICAgIGNvbGxpZGVQb2ludCA9IGNvbGxpZGVQb2ludCAvICh0aGlzLnBhZGRsZS53aWR0aCAvIDIpO1xuXG4gICAgICAgICAgICAvLyBDQUxDVUxBVEUgVEhFIEFOR0xFIE9GIFRIRSB0aGlzLmJhbGxcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IGNvbGxpZGVQb2ludCAqIE1hdGguUEkgLyAzO1xuXG5cbiAgICAgICAgICAgIHRoaXMuYmFsbC5keCA9IFNQRUVEICogTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgICAgICAgdGhpcy5iYWxsLmR5ID0gLSBTUEVFRCAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJyaWNrQ29sbGlzaW9uKCl7XG4gICAgICAgIGxldCByb3cgPSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXS5yO1xuICAgICAgICBsZXQgY29sID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0uYztcbiAgICAgICAgbGV0IGJhbGwgPSB0aGlzLmJhbGw7IFxuICAgICAgICBsZXQgciA9IHRoaXMuYmFsbC5yYWRpdXM7XG5cblxuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJvdzsgcisrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbDsgYysrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGIgPSB0aGlzLmJyaWNrc1tyXVtjXTtcbiAgICAgICAgICAgICAgICBpZiAoYi5zdGF0dXMgPiAwICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFsbC54ICsgYmFsbC5yYWRpdXMgPiBiLnggJiYgYmFsbC54IC0gYmFsbC5yYWRpdXMgPCBiLnggKyBiLndpZHRoICYmIGJhbGwueSArIGJhbGwucmFkaXVzID4gYi55ICYmIGJhbGwueSAtIGJhbGwucmFkaXVzIDwgYi55ICsgYi5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhbGwuZHkgPSAtIGJhbGwuZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZFBhcnRpY2xlcyhiYWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGIuc3RhdHVzIC09MTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGJhbGwueCArIGJhbGwucmFkaXVzID49IGIueCAmJiBiYWxsLnggLSBiYWxsLnJhZGl1cyA8PSBiLngpIHx8IChiYWxsLnggLSBiYWxsLnJhZGl1cyA8PSBiLnggKyBiLndpZHRoICYmIGJhbGwueCArIGJhbGwucmFkaXVzID49IGIueCArIGIud2lkdGgpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsLmR4ID0gLWJhbGwuZHg7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGIuc3RhdHVzIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRQYXJ0aWNsZXMoYmFsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChiYWxsLnkgKyBiYWxsLnJhZGl1cyA+PSBiLnkgJiYgYmFsbC55IC0gYmFsbC5yYWRpdXMgPD0gYi55ICkgfHwgKGJhbGwueSAtIGJhbGwucmFkaXVzIDw9IGIueSArIGIuaGVpZ2h0ICYmIGJhbGwueSArIGJhbGwucmFkaXVzID49IGIueSArIGIuaGVpZ2h0KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbC5keSA9IC1iYWxsLmR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGIuc3RhdHVzIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRQYXJ0aWNsZXMoYmFsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBiLnN0YXR1cyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoKSB7XG4gICAgICAgIHRoaXMucGFkZGxlQm91bmRzKCk7XG4gICAgICAgIHRoaXMucGFkZGxlQ29sbGlzb24oKTtcbiAgICAgICAgdGhpcy5icmlja0NvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLnJlbW92ZVBhcnRpY2xlcygpO1xuICAgICAgICB0aGlzLmJhbGwubW92ZSgpO1xuICAgICAgICB0aGlzLnBhZGRsZS5tb3ZlKCk7XG4gICAgICAgIHRoaXMubW92ZVBhcnRpY2xlcygpO1xuICAgIH1cblxuICAgIGlzR2FtZUxvc3QoKXtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5saXZlcyA8PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlIDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNMZXZlbERvbmUoKXtcbiAgICAgICAgaWYgKHRoaXMuYnJpY2tzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICB0aGlzLmxldmVscyArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNHYW1lV29uKCl7XG4gICAgICAgIGlmICh0aGlzLmxldmVscyA9PT0gNCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHtLRVksIE1PVkVTfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMucGFkZGxlID0gZ2FtZS5wYWRkbGU7XG4gICAgICAgIHRoaXMua2V5RG93biA9IHt9O1xuICAgICAgICB0aGlzLm1vdmluZyA9IFtdO1xuICAgICAgICB0aGlzLmhhbmRsZUtleURvd24gPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlVcCA9IHRoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5oYW5kbGVLZXlVcClcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eClcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubW92ZU9iamVjdHMoKVxuICAgICAgICAgICAgfSwgMjApXG4gICAgfVxuXG4gICAgaGFuZGxlS2V5RG93bihlKXtcbiAgICAgICAgaWYgKGUucmVwZWF0IHx8IHRoaXMua2V5RG93bltlLmtleUNvZGVdKSByZXR1cm47IFxuICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcbiAgICAgICAgICAgIGNhc2UgS0VZLkE6IFxuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nLnB1c2goTU9WRVMuTEVGVClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vdmluZylcbiAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZS5zZXRWZWwodGhpcy5tb3ZpbmdbdGhpcy5tb3ZpbmcubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuQV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVkuRDogXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcucHVzaChNT1ZFUy5SSUdIVClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vdmluZylcbiAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZS5zZXRWZWwodGhpcy5tb3ZpbmdbdGhpcy5tb3ZpbmcubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuRF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVkuTEVGVDogXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcucHVzaChNT1ZFUy5MRUZUKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW92aW5nKVxuICAgICAgICAgICAgICAgIHRoaXMucGFkZGxlLnNldFZlbCh0aGlzLm1vdmluZ1t0aGlzLm1vdmluZy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5MRUZUXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtFWS5SSUdIVDogXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcucHVzaChNT1ZFUy5SSUdIVClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vdmluZylcbiAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZS5zZXRWZWwodGhpcy5tb3ZpbmdbdGhpcy5tb3ZpbmcubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuUklHSFRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleVVwKGUpe1xuICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcbiAgICAgICAgICAgIGNhc2UgS0VZLkE6XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0aGlzLm1vdmluZy5maWx0ZXIoYXJyID0+IGFyci5qb2luKFwiXCIpICE9PSBNT1ZFUy5MRUZULmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW92aW5nKVxuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuQV0gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtFWS5EOiBcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRoaXMubW92aW5nLmZpbHRlcihhcnIgPT4gYXJyLmpvaW4oXCJcIikgIT09IE1PVkVTLlJJR0hULmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW92aW5nKVxuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuRF0gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtFWS5MRUZUOlxuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdGhpcy5tb3ZpbmcuZmlsdGVyKGFyciA9PiBhcnIuam9pbihcIlwiKSAhPT0gTU9WRVMuTEVGVC5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vdmluZylcbiAgICAgICAgICAgICAgICB0aGlzLmtleURvd25bS0VZLkxFRlRdID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVkuUklHSFQ6IFxuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdGhpcy5tb3ZpbmcuZmlsdGVyKGFyciA9PiBhcnIuam9pbihcIlwiKSAhPT0gTU9WRVMuUklHSFQuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5tb3ZpbmcpXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5SSUdIVF0gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1vdmluZy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKVxuICAgICAgICAgICAgLy8gdGhpcy5jcmVlcC5zZXRWZWwodGhpcy5tb3ZpbmdbdGhpcy5tb3ZpbmcubGVuZ3RoIC0gMV0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubW92aW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5wYWRkbGUucmVtb3ZlVmVsKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmNyZWVwLnJlbW92ZVZlbCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5cbiIsImltcG9ydCB7IEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2dhbWVfdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgXG4gICAgY2FudmFzRWwud2lkdGggPSBHQU1FX1dJRFRIOyBcbiAgICBjYW52YXNFbC5oZWlnaHQgPSBHQU1FX0hFSUdIVDtcbiAgICBcbiAgICBcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTsgXG4gICAgbmV3IEdhbWVWaWV3KGdhbWUsIGN0eCkuc3RhcnQoKTtcbn0pXG5cbiIsImltcG9ydCB7IFNQRUVELCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCwgUEFERExFX0hFSUdIVCwgUEFERExFX1dJRFRILCBQQURETEVfTUFSR0lOX0JPVFRPTX0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBQYWRkbGUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudmVsID0gWzAsIDBdO1xuICAgICAgICB0aGlzLnggPSAoR0FNRV9XSURUSC8yKSAtIChQQURETEVfV0lEVEgvMik7XG4gICAgICAgIHRoaXMueSA9IEdBTUVfSEVJR0hUIC0gUEFERExFX0hFSUdIVCAtIFBBRERMRV9NQVJHSU5fQk9UVE9NO1xuICAgICAgICB0aGlzLmhlaWdodCA9IFBBRERMRV9IRUlHSFQ7IFxuICAgICAgICB0aGlzLndpZHRoID0gUEFERExFX1dJRFRIO1xuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZ2JhKDI1NSwgNSwgNSlcIlxuICAgICAgICAvLyB0aGlzLmluQm91bmRzID0gdGhpcy5pbkJvdW5kcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1OyBcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7IFxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBtb3ZlKCl7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMudmVsWzBdO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLnZlbFsxXTtcbiAgICB9XG5cblxuICAgIHNldFZlbCh2ZWwpe1xuICAgICAgICB2ZWwgPSBbdmVsWzBdICogU1BFRUQgLCB2ZWxbMV0gKiBTUEVFRCBdXG4gICAgICAgIHRoaXMudmVsID0gdmVsO1xuICAgIH1cblxuICAgIHJlbW92ZVZlbCgpeyBcbiAgICAgICAgdGhpcy52ZWwgPSBbMCwgMF07XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGFkZGxlOyIsImltcG9ydCB7IFNQRUVEIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBQYXJ0aWNsZSB7XG4gICAgY29uc3RydWN0b3IoYmFsbCkge1xuICAgICAgICB0aGlzLnggPSBiYWxsLnhcbiAgICAgICAgdGhpcy55ID0gYmFsbC55XG4gICAgICAgIHRoaXMucmFkaXVzID0gMjtcbiAgICAgICAgdGhpcy5zcGVlZCA9IFNQRUVEO1xuICAgICAgICB0aGlzLmR4ID0gNCAqIChNYXRoLnJhbmRvbSgpICogMiAtIDEpO1xuICAgICAgICB0aGlzLmR5ID0gNCAqIChNYXRoLnJhbmRvbSgpICogMiAtIDEpO1xuICAgICAgICB0aGlzLnR0bCA9IDUwOyBcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMS41O1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGlmICh0aGlzLnR0bCA+IDApe1xuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gYHJnYmEoMjU1LCAyNTUsIDI1NSlgO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1OyBcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMjU1LCAyNTUsIDI1NSwgJHt0aGlzLm9wYWNpdHl9KWBcbiAgICAgICAgICAgIGN0eC5maWxsKCk7IFxuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy50dGwgLT0gMTtcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eSAtPSAoMS90aGlzLnR0bCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLmR5IC09IDAuMTtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZHg7XG4gICAgICAgIHRoaXMueSAtPSB0aGlzLmR5O1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlOyIsIi8vIGltcG9ydCB7SU1BR0VTfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8vIGV4cG9ydCBjb25zdCBsb2FkSW1hZ2VzID0gKGNhbGxiYWNrKSA9PiB7XG4vLyAgICAgbGV0IGNvdW50ID0gMDsgLy8gbnVtYmVyIG9mIGltYWdlcyBsb2FkZWRcblxuLy8gICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXCJ1cFwiLCBcImRvd25cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIl07XG4vLyAgICAgY29uc3Qgc3ByaXRlcyA9IDM7IFxuLy8gICAgIGxldCB0b3RhbCA9IDA7XG5cbi8vICAgICBkaXJlY3Rpb25zLmZvckVhY2goZGlyZWN0aW9uID0+IHtcbi8vICAgICAgICAgLy8gd2lsbCBpdGVyYXRlIHRocm91Z2ggbG9vcCwgaSBhbmQgZGlyZWN0aW9uIHdpbGwgZGVub3RlIGltYWdlIGZpbGUgdG8gYmUgbG9hZGVkIGluIGFuIGFycmF5XG4vLyAgICAgICAgIC8vIGxvY2F0ZWQgaW4gSU1BR0VTXG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHNwcml0ZXM7IGkrKyl7XG4vLyAgICAgICAgICAgICB0b3RhbCArPSAxOyBcblxuLy8gICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuLy8gICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGxvYWRlZDsgXG4vLyAgICAgICAgICAgICBpbWcuc3JjID0gYGRpc3QvaW1hZ2VzL2NoYXItJHtkaXJlY3Rpb259LSR7aX0ucG5nYDtcbi8vICAgICAgICAgICAgIElNQUdFUy5wbGF5ZXJbZGlyZWN0aW9uXS5wdXNoKGltZyk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzcHJpdGVzOyBpKyspe1xuLy8gICAgICAgICAgICAgdG90YWwgKz0gMTsgXG5cbi8vICAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTsgXG4vLyAgICAgICAgICAgICBpbWcub25sb2FkID0gbG9hZGVkOyBcbi8vICAgICAgICAgICAgIGltZy5zcmMgPSBgZGlzdC9pbWFnZXMvY3JlZXAtJHtkaXJlY3Rpb259LSR7aX0ucG5nYDtcbi8vICAgICAgICAgICAgIElNQUdFUy5jcmVlcFtkaXJlY3Rpb25dLnB1c2goaW1nKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzcHJpdGVzOyBpKyspe1xuLy8gICAgICAgICAgICAgLy8gZGVidWdnZXJcbi8vICAgICAgICAgICAgIHRvdGFsICs9IDE7IFxuXG4vLyAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7IFxuLy8gICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGxvYWRlZDsgXG4vLyAgICAgICAgICAgICBpbWcuc3JjID0gYGRpc3QvaW1hZ2VzL3RpbGUtJHtpfS5wbmdgO1xuLy8gICAgICAgICAgICAgSU1BR0VTLnRyYXBzW1wiYmVhclRyYXBcIl0ucHVzaChpbWcpO1xuLy8gICAgICAgICB9XG5cblxuLy8gICAgICAgICAvLyBPbmNlIGFsbCBpbWFnZXMgaGF2ZSBiZWVuIGZ1bGx5IGxvYWRlZCwgd2lsbCBpbml0aWF0ZSBjYWxsYmFjaywgd2hpY2ggaW4gdGhpc1xuLy8gICAgICAgICAvLyBjYXNlIHdpbGwgYmUgaW5zaWRlIHRoZSBzdGFydCgpIGZ1bmN0aW9uIGluc2lkZSBHYW1lVmlld1xuLy8gICAgICAgICBmdW5jdGlvbiBsb2FkZWQoKSB7XG4vLyAgICAgICAgICAgICBjb3VudCArKzsgXG4vLyAgICAgICAgICAgICBpZiAoY291bnQgPj0gdG90YWwpe1xuLy8gICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9KVxuLy8gfVxuXG4iXSwic291cmNlUm9vdCI6IiJ9