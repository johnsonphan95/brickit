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
    ENTER: 13, 
    M: 77
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
        else if (this.level === 2){
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
        else if (this.level === 3){
            for (let r = 0; r < row; r++) {
                this.bricks[r] = [];
                for (let c = 0; c < col; c++) {
                    this.bricks[r][c] = [];
                    if (r === 3) {
                        this.bricks[r][c] = new _brick__WEBPACK_IMPORTED_MODULE_2__["default"]({ x: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 15 + c * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 10), y: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_MARGIN_TOP"] + r * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_HEIGHT"] + 12.5), status: 3 })
                    } else if (r === 0 || r == 2 || r == 4 || r == 6) {
                        this.bricks[r][c] = new _brick__WEBPACK_IMPORTED_MODULE_2__["default"]({ x: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 15 + c * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 10), y: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_MARGIN_TOP"] + r * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_HEIGHT"] + 12.5), status: 2 })
                    } else  {
                        this.bricks[r][c] = new _brick__WEBPACK_IMPORTED_MODULE_2__["default"]({ x: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 15 + c * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_WIDTH"] + 10), y: _constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_MARGIN_TOP"] + r * (_constants__WEBPACK_IMPORTED_MODULE_4__["BRICK_HEIGHT"] + 12.5), status: 1 })
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
        this.bgm = new Audio('./dist/sounds/sound0.mp3');
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
    }

    start() {
        _util__WEBPACK_IMPORTED_MODULE_4__["loadContent"](() => {
            requestAnimationFrame(this.step)
        })
    };

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
            if (this.state === 'title'){ 
                this.state = "game"; 
                this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](); 
                this.bgm.loop = true; 
                this.bgm.volume = 0.5;
                this.bgm.play();
                this.paddle = this.game.paddle;
                this.keyDown = {};
            } else if (this.state === 'gameover'){
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
                case _constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].M: 
                    if (this.bgm.muted === false){
                        this.bgm.muted = true
                    } else { 
                        this.bgm.muted = false;
                    }
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
            ctx.fillText("[M] to MUTE/UNMUTE sound", 250, 600);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JyaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfb3Zlcl9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZGRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpdGxlX3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7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LHFEQUFVLEVBQUUsc0RBQVc7QUFDdEQsMkNBQTJDLHNEQUFXO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QscURBQVU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDBFQUFXLEU7Ozs7Ozs7Ozs7Ozs7O0FDOUQxQjtBQUFBO0FBQUE7QUFBNkM7O0FBRXRDO0FBQ1Asa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLGNBQWM7QUFDakM7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QyxFQUFFO0FBQzlDLFFBQVEsaURBQU07QUFDZDs7QUFFQSxtQkFBbUIsYUFBYTtBQUNoQyxtQjs7QUFFQSw4QjtBQUNBLHNDQUFzQyxFQUFFO0FBQ3hDLHNDO0FBQ0EsUUFBUSxpREFBTTtBQUNkOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBTUEVFRCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQsIFBBRERMRV9IRUlHSFQsIFBBRERMRV9XSURUSCwgUEFERExFX01BUkdJTl9CT1RUT00sIEJBTExfUkFESVVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBCYWxsIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIC8vIHRoaXMueCA9IChHQU1FX1dJRFRIIC8gMik7XG4gICAgICAgIC8vIHRoaXMueSA9IEdBTUVfSEVJR0hUIC0gUEFERExFX0hFSUdIVCAtIFBBRERMRV9NQVJHSU5fQk9UVE9NIC0gQkFMTF9SQURJVVM7XG4gICAgICAgIHRoaXMueCA9IHg7IFxuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IEJBTExfUkFESVVTO1xuICAgICAgICB0aGlzLnNwZWVkID0gU1BFRUQ7IFxuICAgICAgICB0aGlzLmR4ID0gU1BFRUQgKiAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKVxuICAgICAgICB0aGlzLmR5ID0gLVNQRUVEOyBcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0cnVlOyBcbiAgICAgICAgdGhpcy5jb2xvciA9IFwicmdiYSg1LCAyNTUsIDI1NSlcIlxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5zaGFkb3dCbHVyID0gMTA7IFxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IFxuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmR4OyBcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZHk7XG4gICAgfVxuXG4gICAgcmVzZXRCYWxsKHgsIHkpe1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmR4ID0gU1BFRUQgKiAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKVxuICAgICAgICB0aGlzLmR5ID0gLVNQRUVEO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJhbGw7IiwiaW1wb3J0IHsgU1BFRUQsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hULCBCUklDS19IRUlHSFQsIEJSSUNLX1dJRFRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBCcmljayB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLnggPSBvcHRpb25zLng7IFxuICAgICAgICB0aGlzLnkgPSBvcHRpb25zLnk7IFxuICAgICAgICB0aGlzLnN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzOyBcbiAgICAgICAgdGhpcy5jb2xvciA9IFwicmdiYSgyNTUsIDE1LCAyNTUpXCI7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQlJJQ0tfSEVJR0hUO1xuICAgICAgICB0aGlzLndpZHRoID0gQlJJQ0tfV0lEVEg7XG4gICAgICAgIHRoaXMubWFyZ2luVG9wID0gNTA7IFxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMSl7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gXCJyZ2JhKDI1NSwgMTUsIDI1NSlcIlxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gNTsgXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2VDb2xvcjtcbiAgICAgICAgICAgIC8vIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVJlY3QodGhpcy54IC0gMC41LCB0aGlzLnkgLSAwLjUsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PT0gMil7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gXCJyZ2JhKDE1LCAyMjUsIDE1KVwiXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1O1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PT0gMyl7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gXCJyZ2JhKDUsIDUsIDI1NSlcIlxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gNTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJyaWNrOyIsImV4cG9ydCBjb25zdCBLRVkgPSB7IFxuICAgIEE6IDY1LCBcbiAgICBEOiA2OCwgXG4gICAgTEVGVDogMzcsIFxuICAgIFJJR0hUOiAzOSwgXG4gICAgRU5URVI6IDEzLCBcbiAgICBNOiA3N1xufVxuXG5leHBvcnQgY29uc3QgTU9WRVMgPSB7XG4gICAgTEVGVDogWy0xLCAwXSwgXG4gICAgUklHSFQ6IFsxLCAwXSwgXG4gICAgWkVSTzogWzAsIDBdXG59XG5cbmV4cG9ydCBjb25zdCBJTUFHRVMgPSB7XG4gICAgbG9nbzogW11cbn1cblxuZXhwb3J0IGNvbnN0IFNPVU5EUyA9IHtcbiAgICBzb3VuZDogW11cbn1cblxuZXhwb3J0IGNvbnN0IFNQRUVEID0gNzsgXG5leHBvcnQgY29uc3QgR0FNRV9XSURUSCA9IDUwMDsgXG5leHBvcnQgY29uc3QgR0FNRV9IRUlHSFQgPSA3MDA7XG5leHBvcnQgY29uc3QgR0FNRV9CRyA9IFwiIzE0MTQxNFwiO1xuZXhwb3J0IGNvbnN0IFBBRERMRV9XSURUSCA9IDc1OyBcbmV4cG9ydCBjb25zdCBQQURETEVfSEVJR0hUID0gMjA7XG5leHBvcnQgY29uc3QgUEFERExFX01BUkdJTl9CT1RUT00gPSA1MDsgXG5leHBvcnQgY29uc3QgQkFMTF9SQURJVVMgPSA4OyBcbmV4cG9ydCBjb25zdCBCUklDS19IRUlHSFQgPSAyMDsgXG5leHBvcnQgY29uc3QgQlJJQ0tfV0lEVEggPSA0MDsgXG5leHBvcnQgY29uc3QgQlJJQ0tfTUFSR0lOX1RPUCA9IDUwO1xuIiwiaW1wb3J0IFBhZGRsZSBmcm9tICcuL3BhZGRsZSc7XG5pbXBvcnQgQmFsbCBmcm9tICcuL2JhbGwnO1xuaW1wb3J0IEJyaWNrIGZyb20gJy4vYnJpY2snO1xuaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4vcGFydGljbGUnO1xuaW1wb3J0IHsgU1BFRUQsIEdBTUVfSEVJR0hULCBHQU1FX1dJRFRILCBCUklDS19XSURUSCwgQlJJQ0tfSEVJR0hULCBCUklDS19NQVJHSU5fVE9QfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIEdhbWUge1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wYWRkbGUgPSBuZXcgUGFkZGxlKCk7XG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKHRoaXMucGFkZGxlLnggKyB0aGlzLnBhZGRsZS53aWR0aC8yLCB0aGlzLnBhZGRsZS55IC0gMTApO1xuICAgICAgICB0aGlzLmJyaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuICAgICAgICB0aGlzLmxpdmVzID0gMzsgXG4gICAgICAgIHRoaXMubGV2ZWwgPSAxOyBcbiAgICAgICAgdGhpcy5sZXZlbHMgPSB7XG4gICAgICAgICAgICAxOiB7cjogNSwgYzogOH0sIFxuICAgICAgICAgICAgMjoge3I6IDYsIGM6IDh9LCBcbiAgICAgICAgICAgIDM6IHtyOiA3LCBjOiA4fVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5vdmVyID0gZmFsc2U7IFxuICAgICAgICB0aGlzLndvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkZEJyaWNrcygpO1xuICAgICAgICB0aGlzLkJvdW5kcyA9IHRoaXMuQm91bmRzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGFkZGxlQ29sbGlzaW9uID0gdGhpcy5wYWRkbGVDb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5icmlja0NvbGxpc2lvbiA9IHRoaXMuYnJpY2tDb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRQYXJ0aWNsZXMgPSB0aGlzLmFkZFBhcnRpY2xlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZVBhcnRpY2xlcyA9IHRoaXMucmVtb3ZlUGFydGljbGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZVBhcnRpY2xlcyA9IHRoaXMubW92ZVBhcnRpY2xlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubGV2ZWxVcCA9IHRoaXMubGV2ZWxVcC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGFkZEJyaWNrcygpe1xuICAgICAgICBsZXQgcm93ID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0ucjsgXG4gICAgICAgIGxldCBjb2wgPSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXS5jO1xuXG4gICAgICAgIGlmICh0aGlzLmxldmVsID09PSAxKXtcbiAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93OyByKyspe1xuICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdID0gW107ICAgIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sOyBjKyspe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IG5ldyBCcmljayh7IHg6IEJSSUNLX1dJRFRIICsgMTUgKyBjICogKEJSSUNLX1dJRFRIICsgMTApICwgeTogQlJJQ0tfTUFSR0lOX1RPUCArIHIgKiAoQlJJQ0tfSEVJR0hUICsgMTIuNSksIHN0YXR1czogMX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubGV2ZWwgPT09IDIpe1xuICAgICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3c7IHIrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2w7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZiAociAlIDIgPT09IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icmlja3Nbcl1bY10gPSBuZXcgQnJpY2soeyB4OiBCUklDS19XSURUSCArIDE1ICsgYyAqIChCUklDS19XSURUSCArIDEwKSwgeTogQlJJQ0tfTUFSR0lOX1RPUCArIHIgKiAoQlJJQ0tfSEVJR0hUICsgMTIuNSksIHN0YXR1czogMSB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icmlja3Nbcl1bY10gPSBuZXcgQnJpY2soeyB4OiBCUklDS19XSURUSCArIDE1ICsgYyAqIChCUklDS19XSURUSCArIDEwKSwgeTogQlJJQ0tfTUFSR0lOX1RPUCArIHIgKiAoQlJJQ0tfSEVJR0hUICsgMTIuNSksIHN0YXR1czogMiB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubGV2ZWwgPT09IDMpe1xuICAgICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3c7IHIrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2w7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZiAociA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icmlja3Nbcl1bY10gPSBuZXcgQnJpY2soeyB4OiBCUklDS19XSURUSCArIDE1ICsgYyAqIChCUklDS19XSURUSCArIDEwKSwgeTogQlJJQ0tfTUFSR0lOX1RPUCArIHIgKiAoQlJJQ0tfSEVJR0hUICsgMTIuNSksIHN0YXR1czogMyB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHIgPT09IDAgfHwgciA9PSAyIHx8IHIgPT0gNCB8fCByID09IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdW2NdID0gbmV3IEJyaWNrKHsgeDogQlJJQ0tfV0lEVEggKyAxNSArIGMgKiAoQlJJQ0tfV0lEVEggKyAxMCksIHk6IEJSSUNLX01BUkdJTl9UT1AgKyByICogKEJSSUNLX0hFSUdIVCArIDEyLjUpLCBzdGF0dXM6IDIgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IG5ldyBCcmljayh7IHg6IEJSSUNLX1dJRFRIICsgMTUgKyBjICogKEJSSUNLX1dJRFRIICsgMTApLCB5OiBCUklDS19NQVJHSU5fVE9QICsgciAqIChCUklDS19IRUlHSFQgKyAxMi41KSwgc3RhdHVzOiAxIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQYXJ0aWNsZXMoYmFsbCl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKGJhbGwpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlUGFydGljbGVzKCl7XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXMuZmlsdGVyKHBhcnRpY2xlID0+IHBhcnRpY2xlLnR0bCA+IDApO1xuICAgIH1cblxuICAgIG1vdmVQYXJ0aWNsZXMoKXtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaCgocGFydGljbGUpID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2xlLm1vdmUoKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZHJhdyhjdHgpe1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSAwO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZXlcIjtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuXG4gICAgICAgIGN0eC5zaGFkb3dCbHVyID0gMDtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKDQ3MCwgR0FNRV9IRUlHSFQgLSAxNSwgOCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDUsIDI1NSwgMjU1KVwiO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRkZcIjsgXG4gICAgICAgIGN0eC5mb250ID0gXCIxNnB4IE1vbmFjb1wiO1xuICAgICAgICBjdHguZmlsbFRleHQodGhpcy5saXZlcywgNDkwLCBHQU1FX0hFSUdIVCAtIDgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCA1KVwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYFNDT1JFOiAke3RoaXMuc2NvcmV9YCwgNTUsIEdBTUVfSEVJR0hUIC0gOSk7XG4gICAgICAgIHRoaXMuYmFsbC5kcmF3KGN0eCk7XG4gICAgICAgIHRoaXMuYnJpY2tzLmZvckVhY2gocm93ID0+IHsgcm93LmZvckVhY2goYnJpY2sgPT4gYnJpY2suZHJhdyhjdHgpKSB9KTtcbiAgICAgICAgdGhpcy5wYWRkbGUuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHBhcnRpY2xlLmRyYXcoY3R4KSk7XG4gICAgfVxuXG4gICAgQm91bmRzKCkge1xuICAgICAgICBsZXQgeCA9IHRoaXMuYmFsbC54O1xuICAgICAgICBsZXQgeSA9IHRoaXMuYmFsbC55O1xuICAgICAgICBsZXQgZHggPSB0aGlzLmJhbGwuZHg7XG4gICAgICAgIGxldCBkeSA9IHRoaXMuYmFsbC5keTtcbiAgICAgICAgbGV0IHJhZGl1cyA9IHRoaXMuYmFsbC5yYWRpdXM7XG4gICAgICAgIGlmICh4ICsgcmFkaXVzID4gR0FNRV9XSURUSCkge1xuICAgICAgICAgICAgdGhpcy5iYWxsLnggPSBHQU1FX1dJRFRIIC0gcmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5iYWxsLmR4ID0gLWR4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh4IC0gcmFkaXVzIDwgMCl7XG4gICAgICAgICAgICB0aGlzLmJhbGwueCA9IHJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuYmFsbC5keCA9IC1keDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSAtIHJhZGl1cyA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC55ID0gcmFkaXVzOyBcbiAgICAgICAgICAgIHRoaXMuYmFsbC5keSA9IC1keTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSArIHJhZGl1cyA+IEdBTUVfSEVJR0hUKXtcbiAgICAgICAgICAgIHRoaXMubGl2ZXMgLT0gMTsgXG4gICAgICAgICAgICAvLyB0aGlzLmJhbGwgPSBuZXcgQmFsbCh0aGlzLnBhZGRsZS54ICsgdGhpcy5wYWRkbGUud2lkdGgvMiwgdGhpcy5wYWRkbGUueSAtIHRoaXMuYmFsbC5yYWRpdXMgLSA1KTtcbiAgICAgICAgICAgIHRoaXMuYmFsbC5yZXNldEJhbGwodGhpcy5wYWRkbGUueCArIHRoaXMucGFkZGxlLndpZHRoIC8gMiwgdGhpcy5wYWRkbGUueSAtIHRoaXMuYmFsbC5yYWRpdXMgLSA1KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wYWRkbGUueCA8IDAgKXtcbiAgICAgICAgICAgIHRoaXMucGFkZGxlLnJlbW92ZVZlbCgpO1xuICAgICAgICAgICAgdGhpcy5wYWRkbGUueCA9IDM7IFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFkZGxlLnggKyB0aGlzLnBhZGRsZS53aWR0aCA+IEdBTUVfV0lEVEgpIHtcbiAgICAgICAgICAgIHRoaXMucGFkZGxlLnJlbW92ZVZlbCgpO1xuICAgICAgICAgICAgdGhpcy5wYWRkbGUueCA9IEdBTUVfV0lEVEggLSB0aGlzLnBhZGRsZS53aWR0aCAtIDM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYWRkbGVDb2xsaXNpb24oKXtcbiAgICAgICAgaWYgKHRoaXMuYmFsbC54IDwgdGhpcy5wYWRkbGUueCArIHRoaXMucGFkZGxlLndpZHRoICYmIHRoaXMuYmFsbC54ID4gdGhpcy5wYWRkbGUueCAmJiB0aGlzLmJhbGwueSA8PSB0aGlzLnBhZGRsZS55ICsgdGhpcy5wYWRkbGUuaGVpZ2h0ICYmIHRoaXMuYmFsbC55ICsgdGhpcy5iYWxsLnJhZGl1cyA+PSB0aGlzLnBhZGRsZS55KSB7XG5cbiAgICAgICAgICAgIC8vIFBMQVkgU09VTkRcblxuICAgICAgICAgICAgLy8gQ0hFQ0sgV0hFUkUgVEhFIHRoaXMuYmFsbCBISVQgVEhFIHRoaXMucGFkZGxlXG4gICAgICAgICAgICBsZXQgY29sbGlkZVBvaW50ID0gdGhpcy5iYWxsLnggLSAodGhpcy5wYWRkbGUueCArIHRoaXMucGFkZGxlLndpZHRoIC8gMik7XG5cbiAgICAgICAgICAgIC8vIE5PUk1BTElaRSBUSEUgVkFMVUVTXG4gICAgICAgICAgICBjb2xsaWRlUG9pbnQgPSBjb2xsaWRlUG9pbnQgLyAodGhpcy5wYWRkbGUud2lkdGggLyAyKTtcblxuICAgICAgICAgICAgLy8gQ0FMQ1VMQVRFIFRIRSBBTkdMRSBPRiBUSEUgdGhpcy5iYWxsXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSBjb2xsaWRlUG9pbnQgKiBNYXRoLlBJIC8gMztcblxuXG4gICAgICAgICAgICB0aGlzLmJhbGwuZHggPSBNYXRoLmNlaWwoU1BFRUQgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICAgICAgdGhpcy5iYWxsLmR5ID0gLSBNYXRoLmNlaWwoU1BFRUQgKiBNYXRoLmNvcyhhbmdsZSkpO1xuICAgICAgICAgICAgLy8gdGhpcy5oaXQucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnJpY2tDb2xsaXNpb24oKXtcbiAgICAgICAgbGV0IHJvdyA9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdLnI7XG4gICAgICAgIGxldCBjb2wgPSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXS5jO1xuICAgICAgICBsZXQgYmFsbCA9IHRoaXMuYmFsbDsgXG4gICAgICAgIGxldCByID0gdGhpcy5iYWxsLnJhZGl1cztcblxuXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93OyByKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sOyBjKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYiA9IHRoaXMuYnJpY2tzW3JdW2NdO1xuICAgICAgICAgICAgICAgIGlmIChiLnN0YXR1cyA+IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWxsLnggKyBiYWxsLnJhZGl1cyA+IGIueCAmJiBiYWxsLnggLSBiYWxsLnJhZGl1cyA8IGIueCArIGIud2lkdGggJiYgYmFsbC55ICsgYmFsbC5yYWRpdXMgPiBiLnkgJiYgYmFsbC55IC0gYmFsbC5yYWRpdXMgPCBiLnkgKyBiLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChiYWxsLnggKyBiYWxsLnJhZGl1cyA+PSBiLnggJiYgYmFsbC54IC0gYmFsbC5yYWRpdXMgPD0gYi54KSB8fCAoYmFsbC54IC0gYmFsbC5yYWRpdXMgPD0gYi54ICsgYi53aWR0aCAmJiBiYWxsLnggKyBiYWxsLnJhZGl1cyA+PSBiLnggKyBiLndpZHRoKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbC5keCA9IC1iYWxsLmR4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChiYWxsLnkgKyBiYWxsLnJhZGl1cyA+PSBiLnkgJiYgYmFsbC55IC0gYmFsbC5yYWRpdXMgPD0gYi55ICkgfHwgKGJhbGwueSAtIGJhbGwucmFkaXVzIDw9IGIueSArIGIuaGVpZ2h0ICYmIGJhbGwueSArIGJhbGwucmFkaXVzID49IGIueSArIGIuaGVpZ2h0KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbC5keSA9IC1iYWxsLmR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYi5zdGF0dXMgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMjA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFBhcnRpY2xlcyhiYWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgbGV2ZWxVcCgpe1xuICAgICAgIGlmICh0aGlzLmxldmVsIDw9IDMpe1xuICAgICAgICAgICAgbGV0IHJvdyA9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdLnI7XG4gICAgICAgICAgICBsZXQgY29sID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0uYztcblxuICAgICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3c7IHIrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGIgPSB0aGlzLmJyaWNrc1tyXVtjXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGIuc3RhdHVzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sZXZlbCArPSAxO1xuICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWwgPiAzKXtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQnJpY2tzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iYWxsLnJlc2V0QmFsbCh0aGlzLnBhZGRsZS54ICsgdGhpcy5wYWRkbGUud2lkdGggLyAyLCB0aGlzLnBhZGRsZS55IC0gdGhpcy5iYWxsLnJhZGl1cyAtIDUpO1xuICAgICAgICAgICAgfVxuICAgICAgIH1cblxuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIGlmICh0aGlzLmxpdmVzIDw9IDAgfHwgdGhpcy5sZXZlbCA+IDMpe1xuICAgICAgICAgICAgdGhpcy5vdmVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICB0aGlzLkJvdW5kcygpO1xuICAgICAgICB0aGlzLnBhZGRsZUNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmJyaWNrQ29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlUGFydGljbGVzKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgdGhpcy5sZXZlbFVwKCk7XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoKSB7XG4gICAgICAgIHRoaXMuYmFsbC5tb3ZlKCk7XG4gICAgICAgIHRoaXMucGFkZGxlLm1vdmUoKTtcbiAgICAgICAgdGhpcy5tb3ZlUGFydGljbGVzKCk7XG4gICAgfVxuXG4gICAgc3RlcCgpe1xuICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgIH1cblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCB7IElNQUdFUywgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQgfSBmcm9tICcuL2NvbnN0YW50cydcblxuY2xhc3MgdGl0bGVTY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmltYWdlQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgIH1cblxuICAgIGltYWdlKCkge1xuICAgICAgICBsZXQgaW1hZ2UgPSBJTUFHRVMubG9nb1t0aGlzLmltYWdlQ291bnRdO1xuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgsIHNjb3JlKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA9PT0gNSkge1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSgpLCAwLCBHQU1FX0hFSUdIVCAvIDIwKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VDb3VudCA9ICh0aGlzLmltYWdlQ291bnQgKyAxKSAlIDg3O1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgICAgICAgICAvLyBkcmF3IHByZXNzIGVudGVyIHRvIHBsYXlcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1KVwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1KVwiO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZm9udCA9IFwiMzBweCBNb25hY29cIlxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDA7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJQUkVTUyAgICAgICBUTyBQTEFZIEFHQUlOXCIsIEdBTUVfV0lEVEggLyAyLCA1NTApO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgNSlcIjtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSgyNTUsIDI1NSwgNSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIkVOVEVSXCIsIDE4MCwgNTUwKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgLy8gZHJhdyBmaW5hbCBzY29yZSBcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIkZJTkFMIFNDT1JFXCIsIDI1MCwgMjc1KTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCA1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHguZm9udCA9IFwiNDBweCBNb25hY29cIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChzY29yZSwgMjUwLCAzNzUpO1xuICAgICAgICAgIFxuXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnRlcisrO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGl0bGVTY3JlZW47XG5cbiIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQge0tFWSwgTU9WRVMsIFNPVU5EU30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IFRpdGxlU2NyZWVuIGZyb20gJy4vdGl0bGVfc2NyZWVuJztcbmltcG9ydCBHYW1lT3ZlclNjcmVlbiBmcm9tICcuL2dhbWVfb3Zlcl9zY3JlZW4nO1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpO1xuICAgICAgICB0aGlzLnBhZGRsZSA9IHRoaXMuZ2FtZS5wYWRkbGU7XG4gICAgICAgIHRoaXMuYmdtID0gbmV3IEF1ZGlvKCcuL2Rpc3Qvc291bmRzL3NvdW5kMC5tcDMnKTtcbiAgICAgICAgdGhpcy50aXRsZVNjcmVlbiAgPSBuZXcgVGl0bGVTY3JlZW4oKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclNjcmVlbiA9IG5ldyBHYW1lT3ZlclNjcmVlbigpO1xuICAgICAgICB0aGlzLm11dGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMua2V5RG93biA9IHt9O1xuICAgICAgICB0aGlzLm1vdmluZyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJ0aXRsZVwiO1xuICAgICAgICB0aGlzLmhhbmRsZUtleURvd24gPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlVcCA9IHRoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGVwID0gdGhpcy5zdGVwLmJpbmQodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmhhbmRsZUtleVVwKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgVXRpbC5sb2FkQ29udGVudCgoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zdGVwKVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBzdGVwKCl7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IGZwcyA9IDkwO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzd2l0Y2godGhhdC5zdGF0ZSl7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRpdGxlXCI6IFxuICAgICAgICAgICAgICAgICAgICB0aGF0LnRpdGxlU2NyZWVuLmRyYXcodGhhdC5jdHgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ2FtZVwiOiBcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nYW1lLmRyYXcodGhhdC5jdHgpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmdhbWUuc3RlcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC5nYW1lLm92ZXIgPT09IHRydWUpIHRoYXQuc3RhdGUgPSAnZ2FtZW92ZXInO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ2FtZW92ZXJcIjogXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZ2FtZU92ZXJTY3JlZW4uZHJhdyh0aGF0LmN0eCwgdGhhdC5nYW1lLnNjb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhhdC5zdGVwKVxuICAgICAgICB9LCAxMDAwL2Zwcyk7XG4gICAgfTtcblxuICAgIGhhbmRsZUtleURvd24oZSl7XG4gICAgICAgIGlmIChlLnJlcGVhdCB8fCB0aGlzLmtleURvd25bZS5rZXlDb2RlXSkgcmV0dXJuOyBcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS0VZLkVOVEVSKXtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSAndGl0bGUnKXsgXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFwiZ2FtZVwiOyBcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpOyBcbiAgICAgICAgICAgICAgICB0aGlzLmJnbS5sb29wID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgdGhpcy5iZ20udm9sdW1lID0gMC41O1xuICAgICAgICAgICAgICAgIHRoaXMuYmdtLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZSA9IHRoaXMuZ2FtZS5wYWRkbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duID0ge307XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdnYW1lb3Zlcicpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcImdhbWVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFkZGxlID0gdGhpcy5nYW1lLnBhZGRsZTtcbiAgICAgICAgICAgICAgICB0aGlzLmtleURvd24gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF0aGlzLmdhbWUub3ZlciB8fCAhdGhpcy5nYW1lLndvbil7IFxuICAgICAgICAgICAgc3dpdGNoKGUua2V5Q29kZSl7XG4gICAgICAgICAgICAgICAgY2FzZSBLRVkuQTogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nLnB1c2goTU9WRVMuTEVGVClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5BXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLkQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZy5wdXNoKE1PVkVTLlJJR0hUKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZS5zZXRWZWwodGhpcy5tb3ZpbmdbdGhpcy5tb3ZpbmcubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleURvd25bS0VZLkRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLRVkuTEVGVDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nLnB1c2goTU9WRVMuTEVGVClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5MRUZUXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLlJJR0hUOiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcucHVzaChNT1ZFUy5SSUdIVClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5SSUdIVF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtFWS5NOiBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYmdtLm11dGVkID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJnbS5tdXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJnbS5tdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVLZXlVcChlKXtcbiAgICAgICAgaWYgKCF0aGlzLmdhbWUub3ZlciB8fCAhdGhpcy5nYW1lLndvbil7XG4gICAgICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcbiAgICAgICAgICAgICAgICBjYXNlIEtFWS5BOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRoaXMubW92aW5nLmZpbHRlcihhcnIgPT4gYXJyLmpvaW4oXCJcIikgIT09IE1PVkVTLkxFRlQuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuQV0gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLkQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRoaXMubW92aW5nLmZpbHRlcihhcnIgPT4gYXJyLmpvaW4oXCJcIikgIT09IE1PVkVTLlJJR0hULmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleURvd25bS0VZLkRdID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtFWS5MRUZUOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRoaXMubW92aW5nLmZpbHRlcihhcnIgPT4gYXJyLmpvaW4oXCJcIikgIT09IE1PVkVTLkxFRlQuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuTEVGVF0gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLlJJR0hUOiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0aGlzLm1vdmluZy5maWx0ZXIoYXJyID0+IGFyci5qb2luKFwiXCIpICE9PSBNT1ZFUy5SSUdIVC5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5SSUdIVF0gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1vdmluZy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFkZGxlLnNldFZlbCh0aGlzLm1vdmluZ1t0aGlzLm1vdmluZy5sZW5ndGggLSAxXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1vdmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZS5yZW1vdmVWZWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVZpZXc7XG4iLCJpbXBvcnQgeyBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2dhbWVfdmlldyc7XG5cbmNvbnN0IGJyaWNraXQgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgIFxuICAgIGNhbnZhc0VsLndpZHRoID0gR0FNRV9XSURUSDsgXG4gICAgY2FudmFzRWwuaGVpZ2h0ID0gR0FNRV9IRUlHSFQ7XG4gICAgXG4gICAgLy8gY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7IFxuICAgIG5ldyBHYW1lVmlldyhjdHgpLnN0YXJ0KCk7XG59KTtcblxucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYnJpY2tpdCk7XG5cbiIsImltcG9ydCB7IFNQRUVELCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCwgUEFERExFX0hFSUdIVCwgUEFERExFX1dJRFRILCBQQURETEVfTUFSR0lOX0JPVFRPTX0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBQYWRkbGUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudmVsID0gWzAsIDBdO1xuICAgICAgICB0aGlzLnggPSAoR0FNRV9XSURUSC8yKSAtIChQQURETEVfV0lEVEgvMik7XG4gICAgICAgIHRoaXMueSA9IEdBTUVfSEVJR0hUIC0gUEFERExFX0hFSUdIVCAtIFBBRERMRV9NQVJHSU5fQk9UVE9NO1xuICAgICAgICB0aGlzLmhlaWdodCA9IFBBRERMRV9IRUlHSFQ7IFxuICAgICAgICB0aGlzLndpZHRoID0gUEFERExFX1dJRFRIO1xuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZ2JhKDI1NSwgNSwgNSlcIlxuICAgICAgICAvLyB0aGlzLmluQm91bmRzID0gdGhpcy5pbkJvdW5kcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1OyBcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7IFxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBtb3ZlKCl7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMudmVsWzBdO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLnZlbFsxXTtcbiAgICB9XG5cblxuICAgIHNldFZlbCh2ZWwpe1xuICAgICAgICB2ZWwgPSBbdmVsWzBdICogU1BFRUQgLCB2ZWxbMV0gKiBTUEVFRCBdXG4gICAgICAgIHRoaXMudmVsID0gdmVsO1xuICAgIH1cblxuICAgIHJlbW92ZVZlbCgpeyBcbiAgICAgICAgdGhpcy52ZWwgPSBbMCwgMF07XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGFkZGxlOyIsImltcG9ydCB7IFNQRUVELCBTT1VORFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIFBhcnRpY2xlIHtcbiAgICBjb25zdHJ1Y3RvcihiYWxsKSB7XG4gICAgICAgIHRoaXMueCA9IGJhbGwueFxuICAgICAgICB0aGlzLnkgPSBiYWxsLnlcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAyO1xuICAgICAgICB0aGlzLnNwZWVkID0gU1BFRUQ7XG4gICAgICAgIHRoaXMuZHggPSA0ICogKE1hdGgucmFuZG9tKCkgKiAyIC0gMSk7XG4gICAgICAgIHRoaXMuZHkgPSA0ICogKE1hdGgucmFuZG9tKCkgKiAyIC0gMSk7XG4gICAgICAgIHRoaXMudHRsID0gNTA7IFxuICAgICAgICB0aGlzLm9wYWNpdHkgPSAxLjU7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgaWYgKHRoaXMudHRsID4gMCl7XG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBgcmdiYSgyNTUsIDI1NSwgMjU1KWA7XG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDU7IFxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgyNTUsIDI1NSwgMjU1LCAke3RoaXMub3BhY2l0eX0pYFxuICAgICAgICAgICAgY3R4LmZpbGwoKTsgXG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB0aGlzLnR0bCAtPSAxO1xuICAgICAgICAgICAgdGhpcy5vcGFjaXR5IC09ICgxL3RoaXMudHRsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMuZHkgLT0gMC4xO1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5keDtcbiAgICAgICAgdGhpcy55IC09IHRoaXMuZHk7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGFydGljbGU7IiwiaW1wb3J0IHsgSU1BR0VTLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCB9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG5jbGFzcyB0aXRsZVNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5pbWFnZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICB9XG5cbiAgICBpbWFnZSgpe1xuICAgICAgICBsZXQgaW1hZ2UgPSBJTUFHRVMubG9nb1t0aGlzLmltYWdlQ291bnRdO1xuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpe1xuXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDUpe1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSgpLCAwLCBHQU1FX0hFSUdIVC8yMCk7XG4gICAgICAgICAgICB0aGlzLmltYWdlQ291bnQgPSAodGhpcy5pbWFnZUNvdW50ICsgMSkgJSA4NztcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBcbiAgICAgICAgICAgIC8vIGRyYXcgcHJlc3MgZW50ZXIgdG8gcGxheVxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IE1vbmFjb1wiXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSlcIjtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gMDtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIlBSRVNTICAgICAgIFRPIFBMQVlcIiwgR0FNRV9XSURUSCAvIDIsIDI1MCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCA1KVwiO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCA1KVwiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiRU5URVJcIiwgMjM1LCAyNTApO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIFxuICAgICAgICAgICAgLy8gZHJhdyBpbnN0cnVjdGlvbnMgYW5kIGNvbnRyb2xzXG4gICAgXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IE1vbmFjb1wiXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMjU1LCA1LCAyNTUpXCJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoNSwgMjU1LCA1KVwiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiSU5TVFJVQ1RJT05TXCIsIDI1MCwgMzUwKVxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDUsIDI1NSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIkNPTlRST0xTXCIsIDI1MCwgNTAwKTtcbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIyMHB4IE1vbmFjb1wiXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIkJyZWFrIGFsbCB0aGUgQlJJQ0tTXCIsIDI1MCwgNDAwKTtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIltBXSBbRF0gb3IgWzxdIFs+XSB0byBtb3ZlIExFRlQgUklHSFRcIiwgMjUwLCA1NTApO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiW01dIHRvIE1VVEUvVU5NVVRFIHNvdW5kXCIsIDI1MCwgNjAwKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIlwiO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSBcIlwiO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnRlcisrO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGl0bGVTY3JlZW47IFxuXG4iLCJpbXBvcnQgeyBJTUFHRVMsIFNPVU5EUyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGxvYWRDb250ZW50ID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMDsgLy8gbnVtYmVyIG9mIGNvbnRlbnQgbG9hZGVkXG4gICAgbGV0IHRvdGFsID0gMDtcblxuICAgIGNvbnN0IHNwcml0ZXMgPSA4NztcbiAgICBjb25zdCBzb3VuZHMgPSAyO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc3ByaXRlczsgaSsrKSB7XG4gICAgICAgIHRvdGFsICs9IDE7XG5cbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gbG9hZGVkO1xuICAgICAgICBpbWcuc3JjID0gYGRpc3QvaW1hZ2VzL3RpdGxlL3RpdGxlJHtpfS5wbmdgO1xuICAgICAgICBJTUFHRVMubG9nby5wdXNoKGltZyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc291bmRzOyBpKyspe1xuICAgICAgICB0b3RhbCArPSAxOyBcblxuICAgICAgICBsZXQgc25kID0gbmV3IEF1ZGlvKCk7IFxuICAgICAgICBzbmQuc3JjID0gYGRpc3Qvc291bmRzL3NvdW5kJHtpfS5tcDNgO1xuICAgICAgICBzbmQub25jYW5wbGF5dGhyb3VnaCA9IGxvYWRlZDsgXG4gICAgICAgIFNPVU5EUy5zb3VuZC5wdXNoKHNuZCk7XG4gICAgfVxuXG4gICAgLy8gT25jZSBhbGwgaW1hZ2VzIGhhdmUgYmVlbiBmdWxseSBsb2FkZWQsIHdpbGwgaW5pdGlhdGUgY2FsbGJhY2ssIHdoaWNoIGluIHRoaXNcbiAgICAvLyBjYXNlIHdpbGwgYmUgaW5zaWRlIHRoZSBzdGFydCgpIGZ1bmN0aW9uIGluc2lkZSBHYW1lVmlld1xuICAgIGZ1bmN0aW9uIGxvYWRlZCgpIHtcbiAgICAgICAgXG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmIChjb3VudCA+PSB0b3RhbCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9