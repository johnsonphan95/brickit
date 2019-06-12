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
    constructor() {
        this.x = (_constants__WEBPACK_IMPORTED_MODULE_0__["GAME_WIDTH"] / 2);
        this.y = _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_HEIGHT"] - _constants__WEBPACK_IMPORTED_MODULE_0__["PADDLE_HEIGHT"] - _constants__WEBPACK_IMPORTED_MODULE_0__["PADDLE_MARGIN_BOTTOM"] - _constants__WEBPACK_IMPORTED_MODULE_0__["BALL_RADIUS"];
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





// import Creep from './creep';

class Game {

    constructor(){
        this.paddle = new _paddle__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.ball = new _ball__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.bricks = [];
        this.particles = [];
        this.lives = 3; 
        this.level = 2; 
        this.levels = {
            1: {r: 5, c: 8}, 
            2: {r: 8, c: 8}, 
            3: {r: 10, c: 8}
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
                this.bricks[r][c] = new _brick__WEBPACK_IMPORTED_MODULE_2__["default"]({ x: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 15 + c * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 10) , y: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_MARGIN_TOP"] + r * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_HEIGHT"] + 12.5)})
            }
        }
    }

    addParticles(ball){
        for (let i = 0; i < 6; i++){
            this.particles.push(new _particle__WEBPACK_IMPORTED_MODULE_3__["default"](ball))
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
        ctx.clearRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"]);
        ctx.fillStyle = "black";
        ctx.fillRect(_constants__WEBPACK_IMPORTED_MODULE_4__["GAME_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"], -_constants__WEBPACK_IMPORTED_MODULE_4__["GAME_WIDTH"], -_constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"]);
        ctx.lineWidth = 10;
        // ctx.strokeStyle = "rgba(5, 255, 255)";
        // ctx.shadowColor = "rgba(5, 255, 255)"; 
        // ctx.shadowBlur = 5; 
        // ctx.strokeRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        // ctx.lineWidth = 2;
        // ctx.shadowBlur = 0;
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
            this.ball = new _ball__WEBPACK_IMPORTED_MODULE_1__["default"]();
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
        if (this.ball.x < this.paddle.x + this.paddle.width && this.ball.x > this.paddle.x && this.paddle.y < this.paddle.y + this.paddle.height && this.ball.y + this.ball.radius > this.paddle.y) {

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
                    if (ball.x + ball.radius > b.x && ball.x - ball.radius < b.x + _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] && ball.y + ball.radius > b.y && ball.y - ball.radius < b.y + _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_HEIGHT"]) {
                        ball.dy = - ball.dy;
                        this.addParticles(ball);
                        b.status -=1; 
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
        this.width = _constants__WEBPACK_IMPORTED_MODULE_0__["PADDLE_WIDTH"]
        // this.inBounds = this.inBounds.bind(this);
    }

    draw(ctx){
        ctx.shadowColor = "rgba(5, 255, 255)";
        ctx.shadowBlur = 5; 
        ctx.fillStyle = "rgba(5, 255, 255)"; 
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
        this.dx = _constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"]/2 * (Math.random() * 2 - 1);
        this.dy = _constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"]/2 * (Math.random() * 2 - 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JyaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZGRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQTZIOztBQUU3SDtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFVO0FBQzVCLGlCQUFpQixzREFBVyxHQUFH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QUNBO0FBQ0E7QUFDQSxnQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdlLHVFQUFRLEU7Ozs7Ozs7Ozs7O0FDckN2QixXQUFXLE9BQU87O0FBRWxCO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBLHlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEMsMEI7O0FBRUE7QUFDQSxtQztBQUNBLDZDQUE2QyxVQUFVLEdBQUcsRUFBRTtBQUM1RDtBQUNBOztBQUVBLDBCQUEwQixjQUFjO0FBQ3hDLDBCOztBQUVBLHFDO0FBQ0EsbUM7QUFDQSw4Q0FBOEMsVUFBVSxHQUFHLEVBQUU7QUFDN0Q7QUFDQTtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDO0FBQ0EsMEI7O0FBRUEscUM7QUFDQSxtQztBQUNBLDZDQUE2QyxFQUFFO0FBQy9DO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBTUEVFRCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQsIFBBRERMRV9IRUlHSFQsIFBBRERMRV9XSURUSCwgUEFERExFX01BUkdJTl9CT1RUT00sIEJBTExfUkFESVVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBCYWxsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy54ID0gKEdBTUVfV0lEVEggLyAyKTtcbiAgICAgICAgdGhpcy55ID0gR0FNRV9IRUlHSFQgLSBQQURETEVfSEVJR0hUIC0gUEFERExFX01BUkdJTl9CT1RUT00gLSBCQUxMX1JBRElVUztcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBCQUxMX1JBRElVUztcbiAgICAgICAgdGhpcy5zcGVlZCA9IFNQRUVEOyBcbiAgICAgICAgdGhpcy5keCA9IFNQRUVEICogKE1hdGgucmFuZG9tKCkgKiAyIC0gMSlcbiAgICAgICAgdGhpcy5keSA9IC1TUEVFRDsgXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdHJ1ZTsgXG4gICAgICAgIHRoaXMuY29sb3IgPSBcInJnYmEoNSwgMjU1LCAyNTUpXCJcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguc2hhZG93Q29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDEwOyBcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5keDsgXG4gICAgICAgIHRoaXMueSArPSB0aGlzLmR5O1xuICAgIH1cblxuICAgIHJlc2V0QmFsbCgpe1xuICAgICAgICB0aGlzLnggPSAoR0FNRV9XSURUSCAvIDIpO1xuICAgICAgICB0aGlzLnkgPSBHQU1FX0hFSUdIVCAtIFBBRERMRV9IRUlHSFQgLSBQQURETEVfTUFSR0lOX0JPVFRPTSAtIEJBTExfUkFESVVTO1xuICAgICAgICB0aGlzLmR4ID0gU1BFRUQgKiAoTUFUSC5yYW5kb20oKSAqIDIgLSAxKVxuICAgICAgICB0aGlzLmR5ID0gLVNQRUVEO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJhbGw7IiwiaW1wb3J0IHsgU1BFRUQsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hULCBCUklDS19IRUlHSFQsIEJSSUNLX1dJRFRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBCcmljayB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLnggPSBvcHRpb25zLng7IFxuICAgICAgICB0aGlzLnkgPSBvcHRpb25zLnk7IFxuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZ2JhKDI1NSwgMTUsIDI1NSlcIjtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBCUklDS19IRUlHSFQ7XG4gICAgICAgIHRoaXMud2lkdGggPSBCUklDS19XSURUSDtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAyOyBcbiAgICAgICAgdGhpcy5tYXJnaW5Ub3AgPSA1MDsgXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAxKXtcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcInJnYmEoMjU1LCAxNSwgMjU1KVwiXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1OyBcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZUNvbG9yO1xuICAgICAgICAgICAgLy8gY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlUmVjdCh0aGlzLnggLSAwLjUsIHRoaXMueSAtIDAuNSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID09PSAyKXtcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcInJnYmEoMTUsIDIyNSwgMTUpXCJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDU7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBCcmljazsiLCJleHBvcnQgY29uc3QgS0VZID0geyBcbiAgICBBOiA2NSwgXG4gICAgRDogNjgsIFxuICAgIExFRlQ6IDM3LCBcbiAgICBSSUdIVDogMzlcbn1cblxuZXhwb3J0IGNvbnN0IE1PVkVTID0ge1xuICAgIExFRlQ6IFstMSwgMF0sIFxuICAgIFJJR0hUOiBbMSwgMF0sIFxuICAgIFpFUk86IFswLCAwXVxufVxuXG5leHBvcnQgY29uc3QgU1BFRUQgPSA3OyBcbmV4cG9ydCBjb25zdCBHQU1FX1dJRFRIID0gNTAwOyBcbmV4cG9ydCBjb25zdCBHQU1FX0hFSUdIVCA9IDcwMDtcbmV4cG9ydCBjb25zdCBHQU1FX0JHID0gXCIjMTQxNDE0XCI7XG5leHBvcnQgY29uc3QgUEFERExFX1dJRFRIID0gMTAwOyBcbmV4cG9ydCBjb25zdCBQQURETEVfSEVJR0hUID0gMjA7XG5leHBvcnQgY29uc3QgUEFERExFX01BUkdJTl9CT1RUT00gPSA1MDsgXG5leHBvcnQgY29uc3QgQkFMTF9SQURJVVMgPSA4OyBcbmV4cG9ydCBjb25zdCBCUklDS19IRUlHSFQgPSAyMDsgXG5leHBvcnQgY29uc3QgQlJJQ0tfV0lEVEggPSA0MDsgXG5leHBvcnQgY29uc3QgQlJJQ0tfTUFSR0lOX1RPUCA9IDUwO1xuIiwiaW1wb3J0IFBhZGRsZSBmcm9tICcuL3BhZGRsZSc7XG5pbXBvcnQgQmFsbCBmcm9tICcuL2JhbGwnO1xuaW1wb3J0IEJyaWNrIGZyb20gJy4vYnJpY2snO1xuaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4vcGFydGljbGUnO1xuaW1wb3J0IHtTUEVFRCwgR0FNRV9IRUlHSFQsIEdBTUVfV0lEVEgsIEJSSUNLX1dJRFRILCBCUklDS19IRUlHSFQsIEJSSUNLX01BUkdJTl9UT1B9IGZyb20gJy4vY29uc3RhbnRzJztcbi8vIGltcG9ydCBDcmVlcCBmcm9tICcuL2NyZWVwJztcblxuY2xhc3MgR2FtZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBhZGRsZSA9IG5ldyBQYWRkbGUoKTtcbiAgICAgICAgdGhpcy5iYWxsID0gbmV3IEJhbGwoKTtcbiAgICAgICAgdGhpcy5icmlja3MgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5saXZlcyA9IDM7IFxuICAgICAgICB0aGlzLmxldmVsID0gMjsgXG4gICAgICAgIHRoaXMubGV2ZWxzID0ge1xuICAgICAgICAgICAgMToge3I6IDUsIGM6IDh9LCBcbiAgICAgICAgICAgIDI6IHtyOiA4LCBjOiA4fSwgXG4gICAgICAgICAgICAzOiB7cjogMTAsIGM6IDh9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHRoaXMubG9zZSA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5hZGRCcmlja3MoKTtcbiAgICAgICAgdGhpcy5pbkJvdW5kcyA9IHRoaXMuaW5Cb3VuZHMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wYWRkbGVDb2xsaXNvbiA9IHRoaXMucGFkZGxlQ29sbGlzb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5icmlja0NvbGxpc2lvbiA9IHRoaXMuYnJpY2tDb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRQYXJ0aWNsZXMgPSB0aGlzLmFkZFBhcnRpY2xlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZVBhcnRpY2xlcyA9IHRoaXMucmVtb3ZlUGFydGljbGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZVBhcnRpY2xlcyA9IHRoaXMubW92ZVBhcnRpY2xlcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGFkZEJyaWNrcygpe1xuICAgICAgICAgXG4gICAgICAgIGxldCByb3cgPSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXS5yOyBcbiAgICAgICAgbGV0IGNvbCA9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdLmM7XG5cbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3c7IHIrKyl7XG4gICAgICAgICAgICB0aGlzLmJyaWNrc1tyXSA9IFtdOyAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sOyBjKyspe1xuICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdW2NdID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5icmlja3Nbcl1bY10gPSBuZXcgQnJpY2soeyB4OiBCUklDS19XSURUSCArIDE1ICsgYyAqIChCUklDS19XSURUSCArIDEwKSAsIHk6IEJSSUNLX01BUkdJTl9UT1AgKyByICogKEJSSUNLX0hFSUdIVCArIDEyLjUpfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFBhcnRpY2xlcyhiYWxsKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspe1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUoYmFsbCkpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wYXJ0aWNsZXMpXG4gICAgfVxuXG4gICAgcmVtb3ZlUGFydGljbGVzKCl7XG4gICAgICAgIHRoaXMucGFydGljbGVzLmZvckVhY2goKHBhcnRpY2xlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhcnRpY2xlLnR0bCA8PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLnNsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG1vdmVQYXJ0aWNsZXMoKXtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaCgocGFydGljbGUpID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2xlLm1vdmUoKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZHJhdyhjdHgpe1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hULCAtR0FNRV9XSURUSCwgLUdBTUVfSEVJR0hUKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDEwO1xuICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoNSwgMjU1LCAyNTUpXCI7XG4gICAgICAgIC8vIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSg1LCAyNTUsIDI1NSlcIjsgXG4gICAgICAgIC8vIGN0eC5zaGFkb3dCbHVyID0gNTsgXG4gICAgICAgIC8vIGN0eC5zdHJva2VSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICAgICAgLy8gY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIC8vIGN0eC5zaGFkb3dCbHVyID0gMDtcbiAgICAgICAgdGhpcy5wYWRkbGUuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLmJhbGwuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLmJyaWNrcy5mb3JFYWNoKHJvdyA9PiB7IHJvdy5mb3JFYWNoKGJyaWNrID0+IGJyaWNrLmRyYXcoY3R4KSkgfSk7XG4gICAgICAgIHRoaXMucGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4gcGFydGljbGUuZHJhdyhjdHgpKTtcbiAgICAgICAgLy8gYnJpY2suZHJhdyhjdHgpfSk7XG4gICAgICAgIC8vIHRoaXMuYWxsT2JqZWN0cygpLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIG9iamVjdC5kcmF3KGN0eCk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBpbkJvdW5kcygpIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLmJhbGwueDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmJhbGwueTtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5iYWxsLmR4O1xuICAgICAgICBsZXQgZHkgPSB0aGlzLmJhbGwuZHk7XG4gICAgICAgIGxldCByYWRpdXMgPSB0aGlzLmJhbGwucmFkaXVzO1xuICAgICAgICBpZiAoeCArIHJhZGl1cyA+IEdBTUVfV0lEVEgpIHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC54ID0gR0FNRV9XSURUSCAtIHJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuYmFsbC5keCA9IC1keDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCAtIHJhZGl1cyA8IDApe1xuICAgICAgICAgICAgdGhpcy5iYWxsLnggPSByYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmJhbGwuZHggPSAtZHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgLSByYWRpdXMgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmJhbGwueSA9IHJhZGl1czsgXG4gICAgICAgICAgICB0aGlzLmJhbGwuZHkgPSAtZHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgKyByYWRpdXMgPiBHQU1FX0hFSUdIVCl7XG4gICAgICAgICAgICB0aGlzLmxpdmVzIC09IDE7IFxuICAgICAgICAgICAgdGhpcy5iYWxsID0gbmV3IEJhbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wYWRkbGUueCA8IDAgKXtcbiAgICAgICAgICAgIHRoaXMucGFkZGxlLnJlbW92ZVZlbCgpO1xuICAgICAgICAgICAgdGhpcy5wYWRkbGUueCA9IDM7IFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFkZGxlLnggKyB0aGlzLnBhZGRsZS53aWR0aCA+IEdBTUVfV0lEVEgpIHtcbiAgICAgICAgICAgIHRoaXMucGFkZGxlLnJlbW92ZVZlbCgpO1xuICAgICAgICAgICAgdGhpcy5wYWRkbGUueCA9IEdBTUVfV0lEVEggLSB0aGlzLnBhZGRsZS53aWR0aCAtIDM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYWRkbGVDb2xsaXNvbigpe1xuICAgICAgICBpZiAodGhpcy5iYWxsLnggPCB0aGlzLnBhZGRsZS54ICsgdGhpcy5wYWRkbGUud2lkdGggJiYgdGhpcy5iYWxsLnggPiB0aGlzLnBhZGRsZS54ICYmIHRoaXMucGFkZGxlLnkgPCB0aGlzLnBhZGRsZS55ICsgdGhpcy5wYWRkbGUuaGVpZ2h0ICYmIHRoaXMuYmFsbC55ICsgdGhpcy5iYWxsLnJhZGl1cyA+IHRoaXMucGFkZGxlLnkpIHtcblxuICAgICAgICAgICAgLy8gUExBWSBTT1VORFxuICAgICAgICAgICAgLy8gdGhpcy5wYWRkbGVfSElULnBsYXkoKTtcblxuICAgICAgICAgICAgLy8gQ0hFQ0sgV0hFUkUgVEhFIHRoaXMuYmFsbCBISVQgVEhFIHRoaXMucGFkZGxlXG4gICAgICAgICAgICBsZXQgY29sbGlkZVBvaW50ID0gdGhpcy5iYWxsLnggLSAodGhpcy5wYWRkbGUueCArIHRoaXMucGFkZGxlLndpZHRoIC8gMik7XG5cbiAgICAgICAgICAgIC8vIE5PUk1BTElaRSBUSEUgVkFMVUVTXG4gICAgICAgICAgICBjb2xsaWRlUG9pbnQgPSBjb2xsaWRlUG9pbnQgLyAodGhpcy5wYWRkbGUud2lkdGggLyAyKTtcblxuICAgICAgICAgICAgLy8gQ0FMQ1VMQVRFIFRIRSBBTkdMRSBPRiBUSEUgdGhpcy5iYWxsXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSBjb2xsaWRlUG9pbnQgKiBNYXRoLlBJIC8gMztcblxuXG4gICAgICAgICAgICB0aGlzLmJhbGwuZHggPSBTUEVFRCAqIE1hdGguc2luKGFuZ2xlKTtcbiAgICAgICAgICAgIHRoaXMuYmFsbC5keSA9IC0gU1BFRUQgKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBicmlja0NvbGxpc2lvbigpe1xuICAgICAgICBsZXQgcm93ID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0ucjtcbiAgICAgICAgbGV0IGNvbCA9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdLmM7XG4gICAgICAgIGxldCBiYWxsID0gdGhpcy5iYWxsOyBcbiAgICAgICAgbGV0IHIgPSB0aGlzLmJhbGwucmFkaXVzO1xuXG5cbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3c7IHIrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2w7IGMrKykge1xuICAgICAgICAgICAgICAgIGxldCBiID0gdGhpcy5icmlja3Nbcl1bY107XG4gICAgICAgICAgICAgICAgaWYgKGIuc3RhdHVzID4gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGwueCArIGJhbGwucmFkaXVzID4gYi54ICYmIGJhbGwueCAtIGJhbGwucmFkaXVzIDwgYi54ICsgQlJJQ0tfV0lEVEggJiYgYmFsbC55ICsgYmFsbC5yYWRpdXMgPiBiLnkgJiYgYmFsbC55IC0gYmFsbC5yYWRpdXMgPCBiLnkgKyBCUklDS19IRUlHSFQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbGwuZHkgPSAtIGJhbGwuZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFBhcnRpY2xlcyhiYWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuc3RhdHVzIC09MTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlT2JqZWN0cygpIHtcbiAgICAgICAgdGhpcy5pbkJvdW5kcygpO1xuICAgICAgICB0aGlzLnBhZGRsZUNvbGxpc29uKCk7XG4gICAgICAgIHRoaXMuYnJpY2tDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5yZW1vdmVQYXJ0aWNsZXMoKTtcbiAgICAgICAgdGhpcy5iYWxsLm1vdmUoKTtcbiAgICAgICAgdGhpcy5wYWRkbGUubW92ZSgpO1xuICAgICAgICB0aGlzLm1vdmVQYXJ0aWNsZXMoKTtcbiAgICB9XG5cbiAgICBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHtLRVksIE1PVkVTfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMucGFkZGxlID0gZ2FtZS5wYWRkbGU7XG4gICAgICAgIHRoaXMua2V5RG93biA9IHt9O1xuICAgICAgICB0aGlzLm1vdmluZyA9IFtdO1xuICAgICAgICB0aGlzLmhhbmRsZUtleURvd24gPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlVcCA9IHRoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5oYW5kbGVLZXlVcClcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eClcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubW92ZU9iamVjdHMoKVxuICAgICAgICAgICAgfSwgMjApXG4gICAgfVxuXG4gICAgaGFuZGxlS2V5RG93bihlKXtcbiAgICAgICAgaWYgKGUucmVwZWF0IHx8IHRoaXMua2V5RG93bltlLmtleUNvZGVdKSByZXR1cm47IFxuICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcbiAgICAgICAgICAgIGNhc2UgS0VZLkE6IFxuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nLnB1c2goTU9WRVMuTEVGVClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vdmluZylcbiAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZS5zZXRWZWwodGhpcy5tb3ZpbmdbdGhpcy5tb3ZpbmcubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuQV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVkuRDogXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcucHVzaChNT1ZFUy5SSUdIVClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vdmluZylcbiAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZS5zZXRWZWwodGhpcy5tb3ZpbmdbdGhpcy5tb3ZpbmcubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuRF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVkuTEVGVDogXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcucHVzaChNT1ZFUy5MRUZUKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW92aW5nKVxuICAgICAgICAgICAgICAgIHRoaXMucGFkZGxlLnNldFZlbCh0aGlzLm1vdmluZ1t0aGlzLm1vdmluZy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5MRUZUXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtFWS5SSUdIVDogXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcucHVzaChNT1ZFUy5SSUdIVClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vdmluZylcbiAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZS5zZXRWZWwodGhpcy5tb3ZpbmdbdGhpcy5tb3ZpbmcubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuUklHSFRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleVVwKGUpe1xuICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcbiAgICAgICAgICAgIGNhc2UgS0VZLkE6XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0aGlzLm1vdmluZy5maWx0ZXIoYXJyID0+IGFyci5qb2luKFwiXCIpICE9PSBNT1ZFUy5MRUZULmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW92aW5nKVxuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuQV0gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtFWS5EOiBcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRoaXMubW92aW5nLmZpbHRlcihhcnIgPT4gYXJyLmpvaW4oXCJcIikgIT09IE1PVkVTLlJJR0hULmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW92aW5nKVxuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuRF0gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtFWS5MRUZUOlxuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdGhpcy5tb3ZpbmcuZmlsdGVyKGFyciA9PiBhcnIuam9pbihcIlwiKSAhPT0gTU9WRVMuTEVGVC5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vdmluZylcbiAgICAgICAgICAgICAgICB0aGlzLmtleURvd25bS0VZLkxFRlRdID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVkuUklHSFQ6IFxuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdGhpcy5tb3ZpbmcuZmlsdGVyKGFyciA9PiBhcnIuam9pbihcIlwiKSAhPT0gTU9WRVMuUklHSFQuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5tb3ZpbmcpXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5SSUdIVF0gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1vdmluZy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKVxuICAgICAgICAgICAgLy8gdGhpcy5jcmVlcC5zZXRWZWwodGhpcy5tb3ZpbmdbdGhpcy5tb3ZpbmcubGVuZ3RoIC0gMV0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubW92aW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5wYWRkbGUucmVtb3ZlVmVsKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmNyZWVwLnJlbW92ZVZlbCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5cbiIsImltcG9ydCB7IEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2dhbWVfdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgXG4gICAgY2FudmFzRWwud2lkdGggPSBHQU1FX1dJRFRIOyBcbiAgICBjYW52YXNFbC5oZWlnaHQgPSBHQU1FX0hFSUdIVDtcbiAgICBcbiAgICBcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTsgXG4gICAgbmV3IEdhbWVWaWV3KGdhbWUsIGN0eCkuc3RhcnQoKTtcbn0pXG5cbiIsImltcG9ydCB7IFNQRUVELCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCwgUEFERExFX0hFSUdIVCwgUEFERExFX1dJRFRILCBQQURETEVfTUFSR0lOX0JPVFRPTX0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBQYWRkbGUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudmVsID0gWzAsIDBdO1xuICAgICAgICB0aGlzLnggPSAoR0FNRV9XSURUSC8yKSAtIChQQURETEVfV0lEVEgvMik7XG4gICAgICAgIHRoaXMueSA9IEdBTUVfSEVJR0hUIC0gUEFERExFX0hFSUdIVCAtIFBBRERMRV9NQVJHSU5fQk9UVE9NO1xuICAgICAgICB0aGlzLmhlaWdodCA9IFBBRERMRV9IRUlHSFQ7IFxuICAgICAgICB0aGlzLndpZHRoID0gUEFERExFX1dJRFRIXG4gICAgICAgIC8vIHRoaXMuaW5Cb3VuZHMgPSB0aGlzLmluQm91bmRzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpe1xuICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoNSwgMjU1LCAyNTUpXCI7XG4gICAgICAgIGN0eC5zaGFkb3dCbHVyID0gNTsgXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoNSwgMjU1LCAyNTUpXCI7IFxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBtb3ZlKCl7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMudmVsWzBdO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLnZlbFsxXTtcbiAgICB9XG5cblxuICAgIHNldFZlbCh2ZWwpe1xuICAgICAgICB2ZWwgPSBbdmVsWzBdICogU1BFRUQgLCB2ZWxbMV0gKiBTUEVFRCBdXG4gICAgICAgIHRoaXMudmVsID0gdmVsO1xuICAgIH1cblxuICAgIHJlbW92ZVZlbCgpeyBcbiAgICAgICAgdGhpcy52ZWwgPSBbMCwgMF07XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGFkZGxlOyIsImltcG9ydCB7IFNQRUVEIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBQYXJ0aWNsZSB7XG4gICAgY29uc3RydWN0b3IoYmFsbCkge1xuICAgICAgICB0aGlzLnggPSBiYWxsLnhcbiAgICAgICAgdGhpcy55ID0gYmFsbC55XG4gICAgICAgIHRoaXMucmFkaXVzID0gMjtcbiAgICAgICAgdGhpcy5zcGVlZCA9IFNQRUVEO1xuICAgICAgICB0aGlzLmR4ID0gU1BFRUQvMiAqIChNYXRoLnJhbmRvbSgpICogMiAtIDEpO1xuICAgICAgICB0aGlzLmR5ID0gU1BFRUQvMiAqIChNYXRoLnJhbmRvbSgpICogMiAtIDEpO1xuICAgICAgICB0aGlzLnR0bCA9IDUwOyBcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBpZiAodGhpcy50dGwgPiAwKXtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMjU1LCAyNTUsIDI1NSwgJHt0aGlzLm9wYWNpdHl9KWBcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBgcmdiYSgyNTUsIDI1NSwgMjU1KWA7XG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDE1OyBcbiAgICAgICAgICAgIHRoaXMudHRsIC09IDE7XG4gICAgICAgICAgICB0aGlzLm9wYWNpdHkgLT0gKDEvdGhpcy50dGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5keSAtPSAwLjE7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgICAgICB0aGlzLnkgLT0gdGhpcy5keTtcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQYXJ0aWNsZTsiLCIvLyBpbXBvcnQge0lNQUdFU30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vLyBleHBvcnQgY29uc3QgbG9hZEltYWdlcyA9IChjYWxsYmFjaykgPT4ge1xuLy8gICAgIGxldCBjb3VudCA9IDA7IC8vIG51bWJlciBvZiBpbWFnZXMgbG9hZGVkXG5cbi8vICAgICBjb25zdCBkaXJlY3Rpb25zID0gW1widXBcIiwgXCJkb3duXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJdO1xuLy8gICAgIGNvbnN0IHNwcml0ZXMgPSAzOyBcbi8vICAgICBsZXQgdG90YWwgPSAwO1xuXG4vLyAgICAgZGlyZWN0aW9ucy5mb3JFYWNoKGRpcmVjdGlvbiA9PiB7XG4vLyAgICAgICAgIC8vIHdpbGwgaXRlcmF0ZSB0aHJvdWdoIGxvb3AsIGkgYW5kIGRpcmVjdGlvbiB3aWxsIGRlbm90ZSBpbWFnZSBmaWxlIHRvIGJlIGxvYWRlZCBpbiBhbiBhcnJheVxuLy8gICAgICAgICAvLyBsb2NhdGVkIGluIElNQUdFU1xuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzcHJpdGVzOyBpKyspe1xuLy8gICAgICAgICAgICAgdG90YWwgKz0gMTsgXG5cbi8vICAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbi8vICAgICAgICAgICAgIGltZy5vbmxvYWQgPSBsb2FkZWQ7IFxuLy8gICAgICAgICAgICAgaW1nLnNyYyA9IGBkaXN0L2ltYWdlcy9jaGFyLSR7ZGlyZWN0aW9ufS0ke2l9LnBuZ2A7XG4vLyAgICAgICAgICAgICBJTUFHRVMucGxheWVyW2RpcmVjdGlvbl0ucHVzaChpbWcpO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc3ByaXRlczsgaSsrKXtcbi8vICAgICAgICAgICAgIHRvdGFsICs9IDE7IFxuXG4vLyAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7IFxuLy8gICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGxvYWRlZDsgXG4vLyAgICAgICAgICAgICBpbWcuc3JjID0gYGRpc3QvaW1hZ2VzL2NyZWVwLSR7ZGlyZWN0aW9ufS0ke2l9LnBuZ2A7XG4vLyAgICAgICAgICAgICBJTUFHRVMuY3JlZXBbZGlyZWN0aW9uXS5wdXNoKGltZyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc3ByaXRlczsgaSsrKXtcbi8vICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4vLyAgICAgICAgICAgICB0b3RhbCArPSAxOyBcblxuLy8gICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpOyBcbi8vICAgICAgICAgICAgIGltZy5vbmxvYWQgPSBsb2FkZWQ7IFxuLy8gICAgICAgICAgICAgaW1nLnNyYyA9IGBkaXN0L2ltYWdlcy90aWxlLSR7aX0ucG5nYDtcbi8vICAgICAgICAgICAgIElNQUdFUy50cmFwc1tcImJlYXJUcmFwXCJdLnB1c2goaW1nKTtcbi8vICAgICAgICAgfVxuXG5cbi8vICAgICAgICAgLy8gT25jZSBhbGwgaW1hZ2VzIGhhdmUgYmVlbiBmdWxseSBsb2FkZWQsIHdpbGwgaW5pdGlhdGUgY2FsbGJhY2ssIHdoaWNoIGluIHRoaXNcbi8vICAgICAgICAgLy8gY2FzZSB3aWxsIGJlIGluc2lkZSB0aGUgc3RhcnQoKSBmdW5jdGlvbiBpbnNpZGUgR2FtZVZpZXdcbi8vICAgICAgICAgZnVuY3Rpb24gbG9hZGVkKCkge1xuLy8gICAgICAgICAgICAgY291bnQgKys7IFxuLy8gICAgICAgICAgICAgaWYgKGNvdW50ID49IHRvdGFsKXtcbi8vICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfSlcbi8vIH1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==