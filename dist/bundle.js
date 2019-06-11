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
        // this.inBounds = this.inBounds.bind(this);
    }

    draw(ctx) {
        ctx.beginPath(); 
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    }

    move() {
        // this.inBounds();
        this.x += this.dx; 
        this.y += this.dy;
        // console.log(this.x, this.y)
    }

    // inBounds() {
    //     let x = this.x;
    //     let y = this.y;
    //     let dx = this.dx; 
    //     let dy = this.dy;
    //     let radius = this.radius; 
    //     if (x + radius > GAME_WIDTH || x - radius < 0){
    //         this.dx = -dx;
    //     }
    //     if (y - radius < 0){
    //         this.dy = -dy;
    //     }
    // }


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
        this.fillColor = "#DDA0DD";
        this.strokeColor = "red";
        this.height = _constants__WEBPACK_IMPORTED_MODULE_0__["BRICK_HEIGHT"];
        this.width = _constants__WEBPACK_IMPORTED_MODULE_0__["BRICK_WIDTH"];
        this.status = true; 
        this.marginTop = 50; 
    }

    draw(ctx) {
        if (this.status){
            ctx.fillStyle = this.fillColor;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.strokeStyle = this.strokeColor;
            ctx.lineWidth = 3;
            ctx.strokeRect(0.5 + this.x, 0.5 + this.y, this.width, this.height);
        }
    }


}


/* harmony default export */ __webpack_exports__["default"] = (Brick);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: KEY, MOVES, SPEED, GAME_WIDTH, GAME_HEIGHT, GAME_BG, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_MARGIN_BOTTOM, BALL_RADIUS, BRICK_HEIGHT, BRICK_WIDTH */
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
const KEY = { 
    A: 65, 
    D: 68
}

const MOVES = {
    LEFT: [-1, 0], 
    RIGHT: [1, 0], 
    ZERO: [0, 0]
}

const SPEED = 5; 
const GAME_WIDTH = 500; 
const GAME_HEIGHT = 700;
const GAME_BG = "#141414";
const PADDLE_WIDTH = 100; 
const PADDLE_HEIGHT = 20;
const PADDLE_MARGIN_BOTTOM = 50; 
const BALL_RADIUS = 8; 
const BRICK_HEIGHT = 20; 
const BRICK_WIDTH = 50; 


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
                this.bricks[r][c] = new _brick__WEBPACK_IMPORTED_MODULE_2__["default"]({ x: 50 + c * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"]), y: 50 + r * _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_HEIGHT"]})
            }
        }
    }

    addParticles(ball){
        for (let i = 0; i < 12; i++){
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
        ctx.fillStyle = "grey";
        ctx.fillRect(_constants__WEBPACK_IMPORTED_MODULE_4__["GAME_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"], -_constants__WEBPACK_IMPORTED_MODULE_4__["GAME_WIDTH"], -_constants__WEBPACK_IMPORTED_MODULE_4__["GAME_HEIGHT"]);
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
        if (x + radius > _constants__WEBPACK_IMPORTED_MODULE_4__["GAME_WIDTH"] || x - radius < 0) {
            this.ball.dx = -dx;
        }
        if (y - radius < 0) {
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


        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                let b = this.bricks[r][c];
                if (b.status) {
                    if (ball.x + ball.radius > b.x && ball.x - ball.radius < b.x + _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] && ball.y + ball.radius > b.y && ball.y - ball.radius < b.y + _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_HEIGHT"]) {
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
            // this.game.addObjects();
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
        ctx.fillStyle = "orange"; 
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.strokeStyle = "blue";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

    move(){
        this.x = this.x + this.vel[0];
        this.y = this.y + this.vel[1];
    }

    // inBounds() {
    //     let posX = this.pos[0];
    //     let posY = this.pos[1];
    //     if (posX < 0) {
    //         this.pos[0] = 0;
    //         this.removeVel();
    //     } else if (posX > GAME_WIDTH - 35) {
    //         this.pos[0] = GAME_WIDTH - 35;
    //         this.removeVel();
    //     } else if (posY > GAME_HEIGHT - 50) {
    //         this.pos[1] = GAME_HEIGHT - 50;
    //         this.removeVel();
    //     } else if (posY < 0) {
    //         this.pos[1] = 0;
    //         this.removeVel();
    //     }
    // }

    setVel(vel){
        vel = [vel[0] * _constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"] * 2, vel[1] * _constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"] * 2]
        this.vel = vel;
    }

    removeVel(){
        // vel = [vel[0] * SPEED, vel[1] * SPEED]
        // this.vel = [this.vel[0] - vel[0], this.vel[1] - vel[1]]; 
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
        this.dx = _constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"] * (Math.random() * 2 - 1);
        this.dy = _constants__WEBPACK_IMPORTED_MODULE_0__["SPEED"] * (Math.random() * 2 - 1);
        this.ttl = 50; 
    }

    draw(ctx) {
        if (this.ttl > 0){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.closePath();
            this.ttl -= 1;
        }
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JyaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZGRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQTZIOztBQUU3SDtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFVO0FBQzVCLGlCQUFpQixzREFBVyxHQUFH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O0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEM7QUFDQSwwQjs7QUFFQSxxQztBQUNBLG1DO0FBQ0EsNkNBQTZDLEVBQUU7QUFDL0M7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esd0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IFNQRUVELCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCwgUEFERExFX0hFSUdIVCwgUEFERExFX1dJRFRILCBQQURETEVfTUFSR0lOX0JPVFRPTSwgQkFMTF9SQURJVVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIEJhbGwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnggPSAoR0FNRV9XSURUSCAvIDIpO1xuICAgICAgICB0aGlzLnkgPSBHQU1FX0hFSUdIVCAtIFBBRERMRV9IRUlHSFQgLSBQQURETEVfTUFSR0lOX0JPVFRPTSAtIEJBTExfUkFESVVTO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IEJBTExfUkFESVVTO1xuICAgICAgICB0aGlzLnNwZWVkID0gU1BFRUQ7IFxuICAgICAgICB0aGlzLmR4ID0gU1BFRUQgKiAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKVxuICAgICAgICB0aGlzLmR5ID0gLVNQRUVEOyBcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0cnVlOyBcbiAgICAgICAgLy8gdGhpcy5pbkJvdW5kcyA9IHRoaXMuaW5Cb3VuZHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IFxuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICAvLyB0aGlzLmluQm91bmRzKCk7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmR4OyBcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZHk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMueCwgdGhpcy55KVxuICAgIH1cblxuICAgIC8vIGluQm91bmRzKCkge1xuICAgIC8vICAgICBsZXQgeCA9IHRoaXMueDtcbiAgICAvLyAgICAgbGV0IHkgPSB0aGlzLnk7XG4gICAgLy8gICAgIGxldCBkeCA9IHRoaXMuZHg7IFxuICAgIC8vICAgICBsZXQgZHkgPSB0aGlzLmR5O1xuICAgIC8vICAgICBsZXQgcmFkaXVzID0gdGhpcy5yYWRpdXM7IFxuICAgIC8vICAgICBpZiAoeCArIHJhZGl1cyA+IEdBTUVfV0lEVEggfHwgeCAtIHJhZGl1cyA8IDApe1xuICAgIC8vICAgICAgICAgdGhpcy5keCA9IC1keDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAoeSAtIHJhZGl1cyA8IDApe1xuICAgIC8vICAgICAgICAgdGhpcy5keSA9IC1keTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuXG4gICAgcmVzZXRCYWxsKCl7XG4gICAgICAgIHRoaXMueCA9IChHQU1FX1dJRFRIIC8gMik7XG4gICAgICAgIHRoaXMueSA9IEdBTUVfSEVJR0hUIC0gUEFERExFX0hFSUdIVCAtIFBBRERMRV9NQVJHSU5fQk9UVE9NIC0gQkFMTF9SQURJVVM7XG4gICAgICAgIHRoaXMuZHggPSBTUEVFRCAqIChNQVRILnJhbmRvbSgpICogMiAtIDEpXG4gICAgICAgIHRoaXMuZHkgPSAtU1BFRUQ7XG4gICAgfVxuXG4gICAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQmFsbDsiLCJpbXBvcnQgeyBTUEVFRCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQsIEJSSUNLX0hFSUdIVCwgQlJJQ0tfV0lEVEggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIEJyaWNrIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMueCA9IG9wdGlvbnMueDsgXG4gICAgICAgIHRoaXMueSA9IG9wdGlvbnMueTsgXG4gICAgICAgIHRoaXMuZmlsbENvbG9yID0gXCIjRERBMEREXCI7XG4gICAgICAgIHRoaXMuc3Ryb2tlQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEJSSUNLX0hFSUdIVDtcbiAgICAgICAgdGhpcy53aWR0aCA9IEJSSUNLX1dJRFRIO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHRydWU7IFxuICAgICAgICB0aGlzLm1hcmdpblRvcCA9IDUwOyBcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMpe1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZUNvbG9yO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDM7XG4gICAgICAgICAgICBjdHguc3Ryb2tlUmVjdCgwLjUgKyB0aGlzLngsIDAuNSArIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBCcmljazsiLCJleHBvcnQgY29uc3QgS0VZID0geyBcbiAgICBBOiA2NSwgXG4gICAgRDogNjhcbn1cblxuZXhwb3J0IGNvbnN0IE1PVkVTID0ge1xuICAgIExFRlQ6IFstMSwgMF0sIFxuICAgIFJJR0hUOiBbMSwgMF0sIFxuICAgIFpFUk86IFswLCAwXVxufVxuXG5leHBvcnQgY29uc3QgU1BFRUQgPSA1OyBcbmV4cG9ydCBjb25zdCBHQU1FX1dJRFRIID0gNTAwOyBcbmV4cG9ydCBjb25zdCBHQU1FX0hFSUdIVCA9IDcwMDtcbmV4cG9ydCBjb25zdCBHQU1FX0JHID0gXCIjMTQxNDE0XCI7XG5leHBvcnQgY29uc3QgUEFERExFX1dJRFRIID0gMTAwOyBcbmV4cG9ydCBjb25zdCBQQURETEVfSEVJR0hUID0gMjA7XG5leHBvcnQgY29uc3QgUEFERExFX01BUkdJTl9CT1RUT00gPSA1MDsgXG5leHBvcnQgY29uc3QgQkFMTF9SQURJVVMgPSA4OyBcbmV4cG9ydCBjb25zdCBCUklDS19IRUlHSFQgPSAyMDsgXG5leHBvcnQgY29uc3QgQlJJQ0tfV0lEVEggPSA1MDsgXG4iLCJpbXBvcnQgUGFkZGxlIGZyb20gJy4vcGFkZGxlJztcbmltcG9ydCBCYWxsIGZyb20gJy4vYmFsbCc7XG5pbXBvcnQgQnJpY2sgZnJvbSAnLi9icmljayc7XG5pbXBvcnQgUGFydGljbGUgZnJvbSAnLi9wYXJ0aWNsZSc7XG5pbXBvcnQge1NQRUVELCBHQU1FX0hFSUdIVCwgR0FNRV9XSURUSCwgQlJJQ0tfV0lEVEgsIEJSSUNLX0hFSUdIVH0gZnJvbSAnLi9jb25zdGFudHMnO1xuLy8gaW1wb3J0IENyZWVwIGZyb20gJy4vY3JlZXAnO1xuXG5jbGFzcyBHYW1lIHtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucGFkZGxlID0gbmV3IFBhZGRsZSgpO1xuICAgICAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCgpO1xuICAgICAgICB0aGlzLmJyaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuICAgICAgICB0aGlzLmxpdmVzID0gMzsgXG4gICAgICAgIHRoaXMubGV2ZWwgPSAxOyBcbiAgICAgICAgdGhpcy5sZXZlbHMgPSB7XG4gICAgICAgICAgICAxOiB7cjogNSwgYzogOH0sIFxuICAgICAgICAgICAgMjoge3I6IDQsIGM6IDh9LCBcbiAgICAgICAgICAgIDM6IHtyOiA2LCBjOiA4fVxuICAgICAgICB9O1xuICAgICAgICAvLyB0aGlzLmxvc2UgPSBmYWxzZTsgXG4gICAgICAgIHRoaXMuYWRkQnJpY2tzKCk7XG4gICAgICAgIHRoaXMuaW5Cb3VuZHMgPSB0aGlzLmluQm91bmRzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGFkZGxlQ29sbGlzb24gPSB0aGlzLnBhZGRsZUNvbGxpc29uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYnJpY2tDb2xsaXNpb24gPSB0aGlzLmJyaWNrQ29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkUGFydGljbGVzID0gdGhpcy5hZGRQYXJ0aWNsZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVQYXJ0aWNsZXMgPSB0aGlzLnJlbW92ZVBhcnRpY2xlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmVQYXJ0aWNsZXMgPSB0aGlzLm1vdmVQYXJ0aWNsZXMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBhZGRCcmlja3MoKXtcbiAgICAgICAgIFxuICAgICAgICBsZXQgcm93ID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0ucjsgXG4gICAgICAgIGxldCBjb2wgPSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXS5jO1xuXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93OyByKyspe1xuICAgICAgICAgICAgdGhpcy5icmlja3Nbcl0gPSBbXTsgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbDsgYysrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdW2NdID0gbmV3IEJyaWNrKHsgeDogNTAgKyBjICogKEJSSUNLX1dJRFRIKSwgeTogNTAgKyByICogQlJJQ0tfSEVJR0hUfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFBhcnRpY2xlcyhiYWxsKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKGJhbGwpKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFydGljbGVzKVxuICAgIH1cblxuICAgIHJlbW92ZVBhcnRpY2xlcygpe1xuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKChwYXJ0aWNsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJ0aWNsZS50dGwgPD0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5zbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBtb3ZlUGFydGljbGVzKCl7XG4gICAgICAgIHRoaXMucGFydGljbGVzLmZvckVhY2goKHBhcnRpY2xlKSA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNsZS5tb3ZlKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZXlcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hULCAtR0FNRV9XSURUSCwgLUdBTUVfSEVJR0hUKTtcbiAgICAgICAgdGhpcy5wYWRkbGUuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLmJhbGwuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLmJyaWNrcy5mb3JFYWNoKHJvdyA9PiB7IHJvdy5mb3JFYWNoKGJyaWNrID0+IGJyaWNrLmRyYXcoY3R4KSkgfSk7XG4gICAgICAgIHRoaXMucGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4gcGFydGljbGUuZHJhdyhjdHgpKTtcbiAgICAgICAgLy8gYnJpY2suZHJhdyhjdHgpfSk7XG4gICAgICAgIC8vIHRoaXMuYWxsT2JqZWN0cygpLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIG9iamVjdC5kcmF3KGN0eCk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBpbkJvdW5kcygpIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLmJhbGwueDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmJhbGwueTtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5iYWxsLmR4O1xuICAgICAgICBsZXQgZHkgPSB0aGlzLmJhbGwuZHk7XG4gICAgICAgIGxldCByYWRpdXMgPSB0aGlzLmJhbGwucmFkaXVzO1xuICAgICAgICBpZiAoeCArIHJhZGl1cyA+IEdBTUVfV0lEVEggfHwgeCAtIHJhZGl1cyA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC5keCA9IC1keDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSAtIHJhZGl1cyA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC5keSA9IC1keTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSArIHJhZGl1cyA+IEdBTUVfSEVJR0hUKXtcbiAgICAgICAgICAgIHRoaXMubGl2ZXMgLT0gMTsgXG4gICAgICAgICAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBhZGRsZS54IDwgMCApe1xuICAgICAgICAgICAgdGhpcy5wYWRkbGUucmVtb3ZlVmVsKCk7XG4gICAgICAgICAgICB0aGlzLnBhZGRsZS54ID0gMzsgXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYWRkbGUueCArIHRoaXMucGFkZGxlLndpZHRoID4gR0FNRV9XSURUSCkge1xuICAgICAgICAgICAgdGhpcy5wYWRkbGUucmVtb3ZlVmVsKCk7XG4gICAgICAgICAgICB0aGlzLnBhZGRsZS54ID0gR0FNRV9XSURUSCAtIHRoaXMucGFkZGxlLndpZHRoIC0gMztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhZGRsZUNvbGxpc29uKCl7XG4gICAgICAgIGlmICh0aGlzLmJhbGwueCA8IHRoaXMucGFkZGxlLnggKyB0aGlzLnBhZGRsZS53aWR0aCAmJiB0aGlzLmJhbGwueCA+IHRoaXMucGFkZGxlLnggJiYgdGhpcy5wYWRkbGUueSA8IHRoaXMucGFkZGxlLnkgKyB0aGlzLnBhZGRsZS5oZWlnaHQgJiYgdGhpcy5iYWxsLnkgKyB0aGlzLmJhbGwucmFkaXVzID4gdGhpcy5wYWRkbGUueSkge1xuXG4gICAgICAgICAgICAvLyBQTEFZIFNPVU5EXG4gICAgICAgICAgICAvLyB0aGlzLnBhZGRsZV9ISVQucGxheSgpO1xuXG4gICAgICAgICAgICAvLyBDSEVDSyBXSEVSRSBUSEUgdGhpcy5iYWxsIEhJVCBUSEUgdGhpcy5wYWRkbGVcbiAgICAgICAgICAgIGxldCBjb2xsaWRlUG9pbnQgPSB0aGlzLmJhbGwueCAtICh0aGlzLnBhZGRsZS54ICsgdGhpcy5wYWRkbGUud2lkdGggLyAyKTtcblxuICAgICAgICAgICAgLy8gTk9STUFMSVpFIFRIRSBWQUxVRVNcbiAgICAgICAgICAgIGNvbGxpZGVQb2ludCA9IGNvbGxpZGVQb2ludCAvICh0aGlzLnBhZGRsZS53aWR0aCAvIDIpO1xuXG4gICAgICAgICAgICAvLyBDQUxDVUxBVEUgVEhFIEFOR0xFIE9GIFRIRSB0aGlzLmJhbGxcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IGNvbGxpZGVQb2ludCAqIE1hdGguUEkgLyAzO1xuXG5cbiAgICAgICAgICAgIHRoaXMuYmFsbC5keCA9IFNQRUVEICogTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgICAgICAgdGhpcy5iYWxsLmR5ID0gLSBTUEVFRCAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJyaWNrQ29sbGlzaW9uKCl7XG4gICAgICAgIGxldCByb3cgPSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXS5yO1xuICAgICAgICBsZXQgY29sID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0uYztcbiAgICAgICAgbGV0IGJhbGwgPSB0aGlzLmJhbGw7IFxuXG5cbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3c7IHIrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2w7IGMrKykge1xuICAgICAgICAgICAgICAgIGxldCBiID0gdGhpcy5icmlja3Nbcl1bY107XG4gICAgICAgICAgICAgICAgaWYgKGIuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWxsLnggKyBiYWxsLnJhZGl1cyA+IGIueCAmJiBiYWxsLnggLSBiYWxsLnJhZGl1cyA8IGIueCArIEJSSUNLX1dJRFRIICYmIGJhbGwueSArIGJhbGwucmFkaXVzID4gYi55ICYmIGJhbGwueSAtIGJhbGwucmFkaXVzIDwgYi55ICsgQlJJQ0tfSEVJR0hUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxsLmR5ID0gLSBiYWxsLmR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRQYXJ0aWNsZXMoYmFsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiLnN0YXR1cyA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVPYmplY3RzKCkge1xuICAgICAgICB0aGlzLmluQm91bmRzKCk7XG4gICAgICAgIHRoaXMucGFkZGxlQ29sbGlzb24oKTtcbiAgICAgICAgdGhpcy5icmlja0NvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLnJlbW92ZVBhcnRpY2xlcygpO1xuICAgICAgICB0aGlzLmJhbGwubW92ZSgpO1xuICAgICAgICB0aGlzLnBhZGRsZS5tb3ZlKCk7XG4gICAgICAgIHRoaXMubW92ZVBhcnRpY2xlcygpO1xuICAgIH1cblxuICAgIFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge0tFWSwgTU9WRVN9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5wYWRkbGUgPSBnYW1lLnBhZGRsZTtcbiAgICAgICAgdGhpcy5rZXlEb3duID0ge307XG4gICAgICAgIHRoaXMubW92aW5nID0gW107XG4gICAgICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUtleVVwID0gdGhpcy5oYW5kbGVLZXlVcC5iaW5kKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUtleURvd24pXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmhhbmRsZUtleVVwKVxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgLy8gdGhpcy5nYW1lLmFkZE9iamVjdHMoKTtcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eClcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubW92ZU9iamVjdHMoKVxuICAgICAgICAgICAgfSwgMjApXG4gICAgfVxuXG4gICAgaGFuZGxlS2V5RG93bihlKXtcbiAgICAgICAgaWYgKGUucmVwZWF0IHx8IHRoaXMua2V5RG93bltlLmtleUNvZGVdKSByZXR1cm47IFxuICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcbiAgICAgICAgICAgIGNhc2UgS0VZLkE6IFxuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nLnB1c2goTU9WRVMuTEVGVClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vdmluZylcbiAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZS5zZXRWZWwodGhpcy5tb3ZpbmdbdGhpcy5tb3ZpbmcubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuQV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVkuRDogXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcucHVzaChNT1ZFUy5SSUdIVClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vdmluZylcbiAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZS5zZXRWZWwodGhpcy5tb3ZpbmdbdGhpcy5tb3ZpbmcubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuRF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5VXAoZSl7XG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xuICAgICAgICAgICAgY2FzZSBLRVkuQTpcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRoaXMubW92aW5nLmZpbHRlcihhcnIgPT4gYXJyLmpvaW4oXCJcIikgIT09IE1PVkVTLkxFRlQuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5tb3ZpbmcpXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5BXSA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS0VZLkQ6IFxuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdGhpcy5tb3ZpbmcuZmlsdGVyKGFyciA9PiBhcnIuam9pbihcIlwiKSAhPT0gTU9WRVMuUklHSFQuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5tb3ZpbmcpXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5EXSA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubW92aW5nLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICB0aGlzLnBhZGRsZS5zZXRWZWwodGhpcy5tb3ZpbmdbdGhpcy5tb3ZpbmcubGVuZ3RoIC0gMV0pXG4gICAgICAgICAgICAvLyB0aGlzLmNyZWVwLnNldFZlbCh0aGlzLm1vdmluZ1t0aGlzLm1vdmluZy5sZW5ndGggLSAxXSlcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tb3ZpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnBhZGRsZS5yZW1vdmVWZWwoKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY3JlZXAucmVtb3ZlVmVsKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cblxuIiwiaW1wb3J0IHsgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vZ2FtZV92aWV3JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICBcbiAgICBjYW52YXNFbC53aWR0aCA9IEdBTUVfV0lEVEg7IFxuICAgIGNhbnZhc0VsLmhlaWdodCA9IEdBTUVfSEVJR0hUO1xuICAgIFxuICAgIFxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpOyBcbiAgICBuZXcgR2FtZVZpZXcoZ2FtZSwgY3R4KS5zdGFydCgpO1xufSlcblxuIiwiaW1wb3J0IHsgU1BFRUQsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hULCBQQURETEVfSEVJR0hULCBQQURETEVfV0lEVEgsIFBBRERMRV9NQVJHSU5fQk9UVE9NfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIFBhZGRsZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy52ZWwgPSBbMCwgMF07XG4gICAgICAgIHRoaXMueCA9IChHQU1FX1dJRFRILzIpIC0gKFBBRERMRV9XSURUSC8yKTtcbiAgICAgICAgdGhpcy55ID0gR0FNRV9IRUlHSFQgLSBQQURETEVfSEVJR0hUIC0gUEFERExFX01BUkdJTl9CT1RUT007XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gUEFERExFX0hFSUdIVDsgXG4gICAgICAgIHRoaXMud2lkdGggPSBQQURETEVfV0lEVEhcbiAgICAgICAgLy8gdGhpcy5pbkJvdW5kcyA9IHRoaXMuaW5Cb3VuZHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCl7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIm9yYW5nZVwiOyBcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgbW92ZSgpe1xuICAgICAgICB0aGlzLnggPSB0aGlzLnggKyB0aGlzLnZlbFswXTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy55ICsgdGhpcy52ZWxbMV07XG4gICAgfVxuXG4gICAgLy8gaW5Cb3VuZHMoKSB7XG4gICAgLy8gICAgIGxldCBwb3NYID0gdGhpcy5wb3NbMF07XG4gICAgLy8gICAgIGxldCBwb3NZID0gdGhpcy5wb3NbMV07XG4gICAgLy8gICAgIGlmIChwb3NYIDwgMCkge1xuICAgIC8vICAgICAgICAgdGhpcy5wb3NbMF0gPSAwO1xuICAgIC8vICAgICAgICAgdGhpcy5yZW1vdmVWZWwoKTtcbiAgICAvLyAgICAgfSBlbHNlIGlmIChwb3NYID4gR0FNRV9XSURUSCAtIDM1KSB7XG4gICAgLy8gICAgICAgICB0aGlzLnBvc1swXSA9IEdBTUVfV0lEVEggLSAzNTtcbiAgICAvLyAgICAgICAgIHRoaXMucmVtb3ZlVmVsKCk7XG4gICAgLy8gICAgIH0gZWxzZSBpZiAocG9zWSA+IEdBTUVfSEVJR0hUIC0gNTApIHtcbiAgICAvLyAgICAgICAgIHRoaXMucG9zWzFdID0gR0FNRV9IRUlHSFQgLSA1MDtcbiAgICAvLyAgICAgICAgIHRoaXMucmVtb3ZlVmVsKCk7XG4gICAgLy8gICAgIH0gZWxzZSBpZiAocG9zWSA8IDApIHtcbiAgICAvLyAgICAgICAgIHRoaXMucG9zWzFdID0gMDtcbiAgICAvLyAgICAgICAgIHRoaXMucmVtb3ZlVmVsKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBzZXRWZWwodmVsKXtcbiAgICAgICAgdmVsID0gW3ZlbFswXSAqIFNQRUVEICogMiwgdmVsWzFdICogU1BFRUQgKiAyXVxuICAgICAgICB0aGlzLnZlbCA9IHZlbDtcbiAgICB9XG5cbiAgICByZW1vdmVWZWwoKXtcbiAgICAgICAgLy8gdmVsID0gW3ZlbFswXSAqIFNQRUVELCB2ZWxbMV0gKiBTUEVFRF1cbiAgICAgICAgLy8gdGhpcy52ZWwgPSBbdGhpcy52ZWxbMF0gLSB2ZWxbMF0sIHRoaXMudmVsWzFdIC0gdmVsWzFdXTsgXG4gICAgICAgIHRoaXMudmVsID0gWzAsIDBdO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBhZGRsZTsiLCJpbXBvcnQgeyBTUEVFRCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQsIFBBRERMRV9IRUlHSFQsIFBBRERMRV9XSURUSCwgUEFERExFX01BUkdJTl9CT1RUT00sIEJBTExfUkFESVVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBQYXJ0aWNsZSB7XG4gICAgY29uc3RydWN0b3IoYmFsbCkge1xuICAgICAgICB0aGlzLnggPSBiYWxsLnhcbiAgICAgICAgdGhpcy55ID0gYmFsbC55XG4gICAgICAgIHRoaXMucmFkaXVzID0gMjtcbiAgICAgICAgdGhpcy5zcGVlZCA9IFNQRUVEO1xuICAgICAgICB0aGlzLmR4ID0gU1BFRUQgKiAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKTtcbiAgICAgICAgdGhpcy5keSA9IFNQRUVEICogKE1hdGgucmFuZG9tKCkgKiAyIC0gMSk7XG4gICAgICAgIHRoaXMudHRsID0gNTA7IFxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGlmICh0aGlzLnR0bCA+IDApe1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB0aGlzLnR0bCAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZHg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmR5O1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlOyIsIi8vIGltcG9ydCB7SU1BR0VTfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8vIGV4cG9ydCBjb25zdCBsb2FkSW1hZ2VzID0gKGNhbGxiYWNrKSA9PiB7XG4vLyAgICAgbGV0IGNvdW50ID0gMDsgLy8gbnVtYmVyIG9mIGltYWdlcyBsb2FkZWRcblxuLy8gICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXCJ1cFwiLCBcImRvd25cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIl07XG4vLyAgICAgY29uc3Qgc3ByaXRlcyA9IDM7IFxuLy8gICAgIGxldCB0b3RhbCA9IDA7XG5cbi8vICAgICBkaXJlY3Rpb25zLmZvckVhY2goZGlyZWN0aW9uID0+IHtcbi8vICAgICAgICAgLy8gd2lsbCBpdGVyYXRlIHRocm91Z2ggbG9vcCwgaSBhbmQgZGlyZWN0aW9uIHdpbGwgZGVub3RlIGltYWdlIGZpbGUgdG8gYmUgbG9hZGVkIGluIGFuIGFycmF5XG4vLyAgICAgICAgIC8vIGxvY2F0ZWQgaW4gSU1BR0VTXG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHNwcml0ZXM7IGkrKyl7XG4vLyAgICAgICAgICAgICB0b3RhbCArPSAxOyBcblxuLy8gICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuLy8gICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGxvYWRlZDsgXG4vLyAgICAgICAgICAgICBpbWcuc3JjID0gYGRpc3QvaW1hZ2VzL2NoYXItJHtkaXJlY3Rpb259LSR7aX0ucG5nYDtcbi8vICAgICAgICAgICAgIElNQUdFUy5wbGF5ZXJbZGlyZWN0aW9uXS5wdXNoKGltZyk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzcHJpdGVzOyBpKyspe1xuLy8gICAgICAgICAgICAgdG90YWwgKz0gMTsgXG5cbi8vICAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTsgXG4vLyAgICAgICAgICAgICBpbWcub25sb2FkID0gbG9hZGVkOyBcbi8vICAgICAgICAgICAgIGltZy5zcmMgPSBgZGlzdC9pbWFnZXMvY3JlZXAtJHtkaXJlY3Rpb259LSR7aX0ucG5nYDtcbi8vICAgICAgICAgICAgIElNQUdFUy5jcmVlcFtkaXJlY3Rpb25dLnB1c2goaW1nKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzcHJpdGVzOyBpKyspe1xuLy8gICAgICAgICAgICAgLy8gZGVidWdnZXJcbi8vICAgICAgICAgICAgIHRvdGFsICs9IDE7IFxuXG4vLyAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7IFxuLy8gICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGxvYWRlZDsgXG4vLyAgICAgICAgICAgICBpbWcuc3JjID0gYGRpc3QvaW1hZ2VzL3RpbGUtJHtpfS5wbmdgO1xuLy8gICAgICAgICAgICAgSU1BR0VTLnRyYXBzW1wiYmVhclRyYXBcIl0ucHVzaChpbWcpO1xuLy8gICAgICAgICB9XG5cblxuLy8gICAgICAgICAvLyBPbmNlIGFsbCBpbWFnZXMgaGF2ZSBiZWVuIGZ1bGx5IGxvYWRlZCwgd2lsbCBpbml0aWF0ZSBjYWxsYmFjaywgd2hpY2ggaW4gdGhpc1xuLy8gICAgICAgICAvLyBjYXNlIHdpbGwgYmUgaW5zaWRlIHRoZSBzdGFydCgpIGZ1bmN0aW9uIGluc2lkZSBHYW1lVmlld1xuLy8gICAgICAgICBmdW5jdGlvbiBsb2FkZWQoKSB7XG4vLyAgICAgICAgICAgICBjb3VudCArKzsgXG4vLyAgICAgICAgICAgICBpZiAoY291bnQgPj0gdG90YWwpe1xuLy8gICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9KVxuLy8gfVxuXG4iXSwic291cmNlUm9vdCI6IiJ9