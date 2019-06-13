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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JyaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfb3Zlcl9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZGRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpdGxlX3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBNkg7O0FBRTdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUI7QUFDQTtBQUNBLHNCQUFzQixzREFBVztBQUNqQyxxQkFBcUIsZ0RBQUssQztBQUMxQixrQkFBa0IsZ0RBQUs7QUFDdkIsbUJBQW1CLGdEQUFLLEM7QUFDeEIsMkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QjtBQUNBLHdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0RBQUs7QUFDdkIsbUJBQW1CLGdEQUFLO0FBQ3hCOztBQUVBOzs7QUFHZSxtRUFBSSxFOzs7Ozs7Ozs7Ozs7QUN6Q25CO0FBQUE7QUFBd0Y7O0FBRXhGO0FBQ0E7QUFDQSwyQjtBQUNBLDJCO0FBQ0EscUM7QUFDQTtBQUNBLHNCQUFzQix1REFBWTtBQUNsQyxxQkFBcUIsc0RBQVc7QUFDaEMsNEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR2Usb0VBQUssRTs7Ozs7Ozs7Ozs7O0FDMUNwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLGE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPLGdCO0FBQ0EsdUI7QUFDQTtBQUNBO0FBQ0Esd0I7QUFDQTtBQUNBLGdDO0FBQ0Esc0I7QUFDQSx3QjtBQUNBLHVCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQ1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ0o7QUFDRTtBQUNNO0FBQ3VFOztBQUV6Rzs7QUFFQTtBQUNBLDBCQUEwQiwrQ0FBTTtBQUNoQyx3QkFBd0IsNkNBQUk7QUFDNUI7QUFDQTtBQUNBLHVCO0FBQ0EsdUI7QUFDQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCLGdCQUFnQixXQUFXO0FBQzNCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsMEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QztBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEMsb0M7QUFDQSwrQkFBK0IsU0FBUztBQUN4QztBQUNBLDRDQUE0Qyw4Q0FBSyxFQUFFLElBQUksc0RBQVcsYUFBYSxzREFBVyxZQUFZLDJEQUFnQixRQUFRLHVEQUFZLG9CQUFvQjtBQUM5SjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0EsK0JBQStCLFNBQVM7QUFDeEM7QUFDQTtBQUNBLGdEQUFnRCw4Q0FBSyxFQUFFLElBQUksc0RBQVcsYUFBYSxzREFBVyxXQUFXLDJEQUFnQixRQUFRLHVEQUFZLHFCQUFxQjtBQUNsSyxxQkFBcUI7QUFDckIsZ0RBQWdELDhDQUFLLEVBQUUsSUFBSSxzREFBVyxhQUFhLHNEQUFXLFdBQVcsMkRBQWdCLFFBQVEsdURBQVkscUJBQXFCO0FBQ2xLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBLCtCQUErQixTQUFTO0FBQ3hDO0FBQ0E7QUFDQSxnREFBZ0QsOENBQUssRUFBRSxJQUFJLHNEQUFXLGFBQWEsc0RBQVcsV0FBVywyREFBZ0IsUUFBUSx1REFBWSxxQkFBcUI7QUFDbEsscUJBQXFCO0FBQ3JCLGdEQUFnRCw4Q0FBSyxFQUFFLElBQUksc0RBQVcsYUFBYSxzREFBVyxXQUFXLDJEQUFnQixRQUFRLHVEQUFZLHFCQUFxQjtBQUNsSztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsb0NBQW9DLGlEQUFRO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLDRCQUE0QixxREFBVSxFQUFFLHNEQUFXO0FBQ25EO0FBQ0EsMkJBQTJCLHFEQUFVLEVBQUUsc0RBQVc7QUFDbEQ7QUFDQTtBQUNBLDZCQUE2QixxREFBVSxFQUFFLHNEQUFXOztBQUVwRDtBQUNBO0FBQ0EscUJBQXFCLHNEQUFXO0FBQ2hDO0FBQ0E7O0FBRUEsK0I7QUFDQTtBQUNBLHNDQUFzQyxzREFBVztBQUNqRDtBQUNBLCtCQUErQixXQUFXLE9BQU8sc0RBQVc7QUFDNUQ7QUFDQSxvQ0FBb0Msd0NBQXdDO0FBQzVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscURBQVU7QUFDbkMsMEJBQTBCLHFEQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNEQUFXO0FBQ3BDLDRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCO0FBQ0EsU0FBUyw4Q0FBOEMscURBQVU7QUFDakU7QUFDQSw0QkFBNEIscURBQVU7QUFDdEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxxQ0FBcUMsZ0RBQUs7QUFDMUMsdUNBQXVDLGdEQUFLO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QjtBQUNBOzs7QUFHQSx1QkFBdUIsU0FBUztBQUNoQywyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUI7QUFDQTtBQUNBO0FBQ0EseUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsU0FBUztBQUNwQywrQkFBK0IsU0FBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHZSxtRUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDNVBwQjtBQUFBO0FBQTZEOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGlEQUFNO0FBQzFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0MscURBQVUsRUFBRSxzREFBVztBQUN2RDtBQUNBLCtCQUErQixxREFBVSxFQUFFLHNEQUFXO0FBQ3RELDJDQUEyQyxzREFBVztBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELHFEQUFVO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7QUNqRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNxQjtBQUNOO0FBQ087QUFDakI7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2Q0FBSTtBQUM1QjtBQUNBO0FBQ0EsZ0NBQWdDLHFEQUFXO0FBQzNDLGtDQUFrQyx5REFBYztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsaURBQWdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLHdEO0FBQ0EsMEJBQTBCLDhDQUFHO0FBQzdCLHFFO0FBQ0Esb0M7QUFDQSxnQ0FBZ0MsNkNBQUksRztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDO0FBQ0E7QUFDQSxxQkFBcUIsOENBQUc7QUFDeEIscUNBQXFDLGdEQUFLO0FBQzFDO0FBQ0EsaUNBQWlDLDhDQUFHO0FBQ3BDO0FBQ0EscUJBQXFCLDhDQUFHO0FBQ3hCLHFDQUFxQyxnREFBSztBQUMxQztBQUNBLGlDQUFpQyw4Q0FBRztBQUNwQztBQUNBLHFCQUFxQiw4Q0FBRztBQUN4QixxQ0FBcUMsZ0RBQUs7QUFDMUM7QUFDQSxpQ0FBaUMsOENBQUc7QUFDcEM7QUFDQSxxQkFBcUIsOENBQUc7QUFDeEIscUNBQXFDLGdEQUFLO0FBQzFDO0FBQ0EsaUNBQWlDLDhDQUFHO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4Q0FBRztBQUN4Qiw2RUFBNkUsZ0RBQUs7QUFDbEYsaUNBQWlDLDhDQUFHLFk7QUFDcEM7QUFDQSxxQkFBcUIsOENBQUc7QUFDeEIsNkVBQTZFLGdEQUFLO0FBQ2xGLGlDQUFpQyw4Q0FBRyxZO0FBQ3BDO0FBQ0EscUJBQXFCLDhDQUFHO0FBQ3hCLDZFQUE2RSxnREFBSztBQUNsRixpQ0FBaUMsOENBQUcsZTtBQUNwQztBQUNBLHFCQUFxQiw4Q0FBRztBQUN4Qiw2RUFBNkUsZ0RBQUs7QUFDbEYsaUNBQWlDLDhDQUFHLGdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN2SHhCO0FBQUE7QUFBQTtBQUFzRDtBQUNuQjs7QUFFbkM7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxREFBVSxDO0FBQy9CLHNCQUFzQixzREFBVzs7QUFFakMsK0I7QUFDQSxRQUFRLGtEQUFRO0FBQ2hCLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUErRzs7QUFFL0c7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFVLE9BQU8sdURBQVk7QUFDL0MsaUJBQWlCLHNEQUFXLEdBQUcsd0RBQWEsR0FBRywrREFBb0I7QUFDbkUsc0JBQXNCLHdEQUFhLEM7QUFDbkMscUJBQXFCLHVEQUFZO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkI7QUFDQSxtQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esd0JBQXdCLGdEQUFLLFlBQVksZ0RBQUs7QUFDOUM7QUFDQTs7QUFFQSxnQjtBQUNBO0FBQ0E7O0FBRUE7OztBQUdlLHFFQUFNLEU7Ozs7Ozs7Ozs7OztBQ3RDckI7QUFBQTtBQUE0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBSztBQUMxQjtBQUNBO0FBQ0Esc0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxhQUFhO0FBQ2hFLHVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHZSx1RUFBUSxFOzs7Ozs7Ozs7Ozs7QUNyQ3ZCO0FBQUE7QUFBNkQ7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsaURBQU07QUFDMUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdDQUFnQyxxREFBVSxFQUFFLHNEQUFXO0FBQ3ZEO0FBQ0EsK0JBQStCLHFEQUFVLEVBQUUsc0RBQVc7QUFDdEQsMkNBQTJDLHNEQUFXO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QscURBQVU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwwRUFBVyxFOzs7Ozs7Ozs7Ozs7OztBQzdEMUI7QUFBQTtBQUFBO0FBQTZDOztBQUV0QztBQUNQLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixjQUFjO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsRUFBRTtBQUM5QyxRQUFRLGlEQUFNO0FBQ2Q7O0FBRUEsbUJBQW1CLGFBQWE7QUFDaEMsbUI7O0FBRUEsOEI7QUFDQSxzQ0FBc0MsRUFBRTtBQUN4QyxzQztBQUNBLFFBQVEsaURBQU07QUFDZDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgU1BFRUQsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hULCBQQURETEVfSEVJR0hULCBQQURETEVfV0lEVEgsIFBBRERMRV9NQVJHSU5fQk9UVE9NLCBCQUxMX1JBRElVUyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY2xhc3MgQmFsbCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICAvLyB0aGlzLnggPSAoR0FNRV9XSURUSCAvIDIpO1xuICAgICAgICAvLyB0aGlzLnkgPSBHQU1FX0hFSUdIVCAtIFBBRERMRV9IRUlHSFQgLSBQQURETEVfTUFSR0lOX0JPVFRPTSAtIEJBTExfUkFESVVTO1xuICAgICAgICB0aGlzLnggPSB4OyBcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBCQUxMX1JBRElVUztcbiAgICAgICAgdGhpcy5zcGVlZCA9IFNQRUVEOyBcbiAgICAgICAgdGhpcy5keCA9IFNQRUVEICogKE1hdGgucmFuZG9tKCkgKiAyIC0gMSlcbiAgICAgICAgdGhpcy5keSA9IC1TUEVFRDsgXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdHJ1ZTsgXG4gICAgICAgIHRoaXMuY29sb3IgPSBcInJnYmEoNSwgMjU1LCAyNTUpXCJcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguc2hhZG93Q29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDEwOyBcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5keDsgXG4gICAgICAgIHRoaXMueSArPSB0aGlzLmR5O1xuICAgIH1cblxuICAgIHJlc2V0QmFsbCh4LCB5KXtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5keCA9IFNQRUVEICogKE1hdGgucmFuZG9tKCkgKiAyIC0gMSlcbiAgICAgICAgdGhpcy5keSA9IC1TUEVFRDtcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBCYWxsOyIsImltcG9ydCB7IFNQRUVELCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCwgQlJJQ0tfSEVJR0hULCBCUklDS19XSURUSCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY2xhc3MgQnJpY2sge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy54ID0gb3B0aW9ucy54OyBcbiAgICAgICAgdGhpcy55ID0gb3B0aW9ucy55OyBcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1czsgXG4gICAgICAgIHRoaXMuY29sb3IgPSBcInJnYmEoMjU1LCAxNSwgMjU1KVwiO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEJSSUNLX0hFSUdIVDtcbiAgICAgICAgdGhpcy53aWR0aCA9IEJSSUNLX1dJRFRIO1xuICAgICAgICB0aGlzLm1hcmdpblRvcCA9IDUwOyBcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDEpe1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9IFwicmdiYSgyNTUsIDE1LCAyNTUpXCJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDU7IFxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlQ29sb3I7XG4gICAgICAgICAgICAvLyBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2VSZWN0KHRoaXMueCAtIDAuNSwgdGhpcy55IC0gMC41LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09IDIpe1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9IFwicmdiYSgxNSwgMjI1LCAxNSlcIlxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gNTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09IDMpe1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9IFwicmdiYSg1LCA1LCAyNTUpXCJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDU7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBCcmljazsiLCJleHBvcnQgY29uc3QgS0VZID0geyBcbiAgICBBOiA2NSwgXG4gICAgRDogNjgsIFxuICAgIExFRlQ6IDM3LCBcbiAgICBSSUdIVDogMzksIFxuICAgIEVOVEVSOiAxM1xufVxuXG5leHBvcnQgY29uc3QgTU9WRVMgPSB7XG4gICAgTEVGVDogWy0xLCAwXSwgXG4gICAgUklHSFQ6IFsxLCAwXSwgXG4gICAgWkVSTzogWzAsIDBdXG59XG5cbmV4cG9ydCBjb25zdCBJTUFHRVMgPSB7XG4gICAgbG9nbzogW11cbn1cblxuZXhwb3J0IGNvbnN0IFNPVU5EUyA9IHtcbiAgICBzb3VuZDogW11cbn1cblxuZXhwb3J0IGNvbnN0IFNQRUVEID0gNzsgXG5leHBvcnQgY29uc3QgR0FNRV9XSURUSCA9IDUwMDsgXG5leHBvcnQgY29uc3QgR0FNRV9IRUlHSFQgPSA3MDA7XG5leHBvcnQgY29uc3QgR0FNRV9CRyA9IFwiIzE0MTQxNFwiO1xuZXhwb3J0IGNvbnN0IFBBRERMRV9XSURUSCA9IDc1OyBcbmV4cG9ydCBjb25zdCBQQURETEVfSEVJR0hUID0gMjA7XG5leHBvcnQgY29uc3QgUEFERExFX01BUkdJTl9CT1RUT00gPSA1MDsgXG5leHBvcnQgY29uc3QgQkFMTF9SQURJVVMgPSA4OyBcbmV4cG9ydCBjb25zdCBCUklDS19IRUlHSFQgPSAyMDsgXG5leHBvcnQgY29uc3QgQlJJQ0tfV0lEVEggPSA0MDsgXG5leHBvcnQgY29uc3QgQlJJQ0tfTUFSR0lOX1RPUCA9IDUwO1xuIiwiaW1wb3J0IFBhZGRsZSBmcm9tICcuL3BhZGRsZSc7XG5pbXBvcnQgQmFsbCBmcm9tICcuL2JhbGwnO1xuaW1wb3J0IEJyaWNrIGZyb20gJy4vYnJpY2snO1xuaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4vcGFydGljbGUnO1xuaW1wb3J0IHsgU1BFRUQsIEdBTUVfSEVJR0hULCBHQU1FX1dJRFRILCBCUklDS19XSURUSCwgQlJJQ0tfSEVJR0hULCBCUklDS19NQVJHSU5fVE9QfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIEdhbWUge1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wYWRkbGUgPSBuZXcgUGFkZGxlKCk7XG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKHRoaXMucGFkZGxlLnggKyB0aGlzLnBhZGRsZS53aWR0aC8yLCB0aGlzLnBhZGRsZS55IC0gMTApO1xuICAgICAgICB0aGlzLmJyaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuICAgICAgICB0aGlzLmxpdmVzID0gMzsgXG4gICAgICAgIHRoaXMubGV2ZWwgPSAxOyBcbiAgICAgICAgdGhpcy5sZXZlbHMgPSB7XG4gICAgICAgICAgICAxOiB7cjogNSwgYzogOH0sIFxuICAgICAgICAgICAgMjoge3I6IDYsIGM6IDh9LCBcbiAgICAgICAgICAgIDM6IHtyOiA3LCBjOiA4fVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5vdmVyID0gZmFsc2U7IFxuICAgICAgICB0aGlzLndvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkZEJyaWNrcygpO1xuICAgICAgICB0aGlzLkJvdW5kcyA9IHRoaXMuQm91bmRzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGFkZGxlQ29sbGlzaW9uID0gdGhpcy5wYWRkbGVDb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5icmlja0NvbGxpc2lvbiA9IHRoaXMuYnJpY2tDb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRQYXJ0aWNsZXMgPSB0aGlzLmFkZFBhcnRpY2xlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZVBhcnRpY2xlcyA9IHRoaXMucmVtb3ZlUGFydGljbGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZVBhcnRpY2xlcyA9IHRoaXMubW92ZVBhcnRpY2xlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubGV2ZWxVcCA9IHRoaXMubGV2ZWxVcC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGFkZEJyaWNrcygpe1xuICAgICAgICBsZXQgcm93ID0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0ucjsgXG4gICAgICAgIGxldCBjb2wgPSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXS5jO1xuXG4gICAgICAgIGlmICh0aGlzLmxldmVsID09PSAxKXtcbiAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93OyByKyspe1xuICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdID0gW107ICAgIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sOyBjKyspe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IG5ldyBCcmljayh7IHg6IEJSSUNLX1dJRFRIICsgMTUgKyBjICogKEJSSUNLX1dJRFRIICsgMTApICwgeTogQlJJQ0tfTUFSR0lOX1RPUCArIHIgKiAoQlJJQ0tfSEVJR0hUICsgMTIuNSksIHN0YXR1czogMX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxldmVsID09PSAyKXtcbiAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93OyByKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icmlja3Nbcl1bY10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIgJSAyID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdW2NdID0gbmV3IEJyaWNrKHsgeDogQlJJQ0tfV0lEVEggKyAxNSArIGMgKiAoQlJJQ0tfV0lEVEggKyAxMCksIHk6IEJSSUNLX01BUkdJTl9UT1AgKyByICogKEJSSUNLX0hFSUdIVCArIDEyLjUpLCBzdGF0dXM6IDEgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdW2NdID0gbmV3IEJyaWNrKHsgeDogQlJJQ0tfV0lEVEggKyAxNSArIGMgKiAoQlJJQ0tfV0lEVEggKyAxMCksIHk6IEJSSUNLX01BUkdJTl9UT1AgKyByICogKEJSSUNLX0hFSUdIVCArIDEyLjUpLCBzdGF0dXM6IDIgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZXZlbCA9PT0gMyl7XG4gICAgICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJvdzsgcisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icmlja3Nbcl0gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tzW3JdW2NdID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmIChyID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IG5ldyBCcmljayh7IHg6IEJSSUNLX1dJRFRIICsgMTUgKyBjICogKEJSSUNLX1dJRFRIICsgMTApLCB5OiBCUklDS19NQVJHSU5fVE9QICsgciAqIChCUklDS19IRUlHSFQgKyAxMi41KSwgc3RhdHVzOiAzIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWNrc1tyXVtjXSA9IG5ldyBCcmljayh7IHg6IEJSSUNLX1dJRFRIICsgMTUgKyBjICogKEJSSUNLX1dJRFRIICsgMTApLCB5OiBCUklDS19NQVJHSU5fVE9QICsgciAqIChCUklDS19IRUlHSFQgKyAxMi41KSwgc3RhdHVzOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQYXJ0aWNsZXMoYmFsbCl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKGJhbGwpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlUGFydGljbGVzKCl7XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXMuZmlsdGVyKHBhcnRpY2xlID0+IHBhcnRpY2xlLnR0bCA+IDApO1xuICAgIH1cblxuICAgIG1vdmVQYXJ0aWNsZXMoKXtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaCgocGFydGljbGUpID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2xlLm1vdmUoKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZHJhdyhjdHgpe1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSAwO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZXlcIjtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuXG4gICAgICAgIGN0eC5zaGFkb3dCbHVyID0gMDtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKDQ3MCwgR0FNRV9IRUlHSFQgLSAxNSwgOCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDUsIDI1NSwgMjU1KVwiO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRkZcIjsgXG4gICAgICAgIGN0eC5mb250ID0gXCIxNnB4IE1vbmFjb1wiO1xuICAgICAgICBjdHguZmlsbFRleHQodGhpcy5saXZlcywgNDkwLCBHQU1FX0hFSUdIVCAtIDgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCA1KVwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYFNDT1JFOiAke3RoaXMuc2NvcmV9YCwgNTUsIEdBTUVfSEVJR0hUIC0gOSk7XG4gICAgICAgIHRoaXMuYmFsbC5kcmF3KGN0eCk7XG4gICAgICAgIHRoaXMuYnJpY2tzLmZvckVhY2gocm93ID0+IHsgcm93LmZvckVhY2goYnJpY2sgPT4gYnJpY2suZHJhdyhjdHgpKSB9KTtcbiAgICAgICAgdGhpcy5wYWRkbGUuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHBhcnRpY2xlLmRyYXcoY3R4KSk7XG4gICAgfVxuXG4gICAgQm91bmRzKCkge1xuICAgICAgICBsZXQgeCA9IHRoaXMuYmFsbC54O1xuICAgICAgICBsZXQgeSA9IHRoaXMuYmFsbC55O1xuICAgICAgICBsZXQgZHggPSB0aGlzLmJhbGwuZHg7XG4gICAgICAgIGxldCBkeSA9IHRoaXMuYmFsbC5keTtcbiAgICAgICAgbGV0IHJhZGl1cyA9IHRoaXMuYmFsbC5yYWRpdXM7XG4gICAgICAgIGlmICh4ICsgcmFkaXVzID4gR0FNRV9XSURUSCkge1xuICAgICAgICAgICAgdGhpcy5iYWxsLnggPSBHQU1FX1dJRFRIIC0gcmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5iYWxsLmR4ID0gLWR4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh4IC0gcmFkaXVzIDwgMCl7XG4gICAgICAgICAgICB0aGlzLmJhbGwueCA9IHJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuYmFsbC5keCA9IC1keDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSAtIHJhZGl1cyA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC55ID0gcmFkaXVzOyBcbiAgICAgICAgICAgIHRoaXMuYmFsbC5keSA9IC1keTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSArIHJhZGl1cyA+IEdBTUVfSEVJR0hUKXtcbiAgICAgICAgICAgIHRoaXMubGl2ZXMgLT0gMTsgXG4gICAgICAgICAgICAvLyB0aGlzLmJhbGwgPSBuZXcgQmFsbCh0aGlzLnBhZGRsZS54ICsgdGhpcy5wYWRkbGUud2lkdGgvMiwgdGhpcy5wYWRkbGUueSAtIHRoaXMuYmFsbC5yYWRpdXMgLSA1KTtcbiAgICAgICAgICAgIHRoaXMuYmFsbC5yZXNldEJhbGwodGhpcy5wYWRkbGUueCArIHRoaXMucGFkZGxlLndpZHRoIC8gMiwgdGhpcy5wYWRkbGUueSAtIHRoaXMuYmFsbC5yYWRpdXMgLSA1KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wYWRkbGUueCA8IDAgKXtcbiAgICAgICAgICAgIHRoaXMucGFkZGxlLnJlbW92ZVZlbCgpO1xuICAgICAgICAgICAgdGhpcy5wYWRkbGUueCA9IDM7IFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFkZGxlLnggKyB0aGlzLnBhZGRsZS53aWR0aCA+IEdBTUVfV0lEVEgpIHtcbiAgICAgICAgICAgIHRoaXMucGFkZGxlLnJlbW92ZVZlbCgpO1xuICAgICAgICAgICAgdGhpcy5wYWRkbGUueCA9IEdBTUVfV0lEVEggLSB0aGlzLnBhZGRsZS53aWR0aCAtIDM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYWRkbGVDb2xsaXNpb24oKXtcbiAgICAgICAgaWYgKHRoaXMuYmFsbC54IDwgdGhpcy5wYWRkbGUueCArIHRoaXMucGFkZGxlLndpZHRoICYmIHRoaXMuYmFsbC54ID4gdGhpcy5wYWRkbGUueCAmJiB0aGlzLmJhbGwueSA8PSB0aGlzLnBhZGRsZS55ICsgdGhpcy5wYWRkbGUuaGVpZ2h0ICYmIHRoaXMuYmFsbC55ICsgdGhpcy5iYWxsLnJhZGl1cyA+PSB0aGlzLnBhZGRsZS55KSB7XG5cbiAgICAgICAgICAgIC8vIFBMQVkgU09VTkRcblxuICAgICAgICAgICAgLy8gQ0hFQ0sgV0hFUkUgVEhFIHRoaXMuYmFsbCBISVQgVEhFIHRoaXMucGFkZGxlXG4gICAgICAgICAgICBsZXQgY29sbGlkZVBvaW50ID0gdGhpcy5iYWxsLnggLSAodGhpcy5wYWRkbGUueCArIHRoaXMucGFkZGxlLndpZHRoIC8gMik7XG5cbiAgICAgICAgICAgIC8vIE5PUk1BTElaRSBUSEUgVkFMVUVTXG4gICAgICAgICAgICBjb2xsaWRlUG9pbnQgPSBjb2xsaWRlUG9pbnQgLyAodGhpcy5wYWRkbGUud2lkdGggLyAyKTtcblxuICAgICAgICAgICAgLy8gQ0FMQ1VMQVRFIFRIRSBBTkdMRSBPRiBUSEUgdGhpcy5iYWxsXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSBjb2xsaWRlUG9pbnQgKiBNYXRoLlBJIC8gMztcblxuXG4gICAgICAgICAgICB0aGlzLmJhbGwuZHggPSBNYXRoLmNlaWwoU1BFRUQgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICAgICAgdGhpcy5iYWxsLmR5ID0gLSBNYXRoLmNlaWwoU1BFRUQgKiBNYXRoLmNvcyhhbmdsZSkpO1xuICAgICAgICAgICAgLy8gdGhpcy5oaXQucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnJpY2tDb2xsaXNpb24oKXtcbiAgICAgICAgbGV0IHJvdyA9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdLnI7XG4gICAgICAgIGxldCBjb2wgPSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXS5jO1xuICAgICAgICBsZXQgYmFsbCA9IHRoaXMuYmFsbDsgXG4gICAgICAgIGxldCByID0gdGhpcy5iYWxsLnJhZGl1cztcblxuXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93OyByKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sOyBjKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYiA9IHRoaXMuYnJpY2tzW3JdW2NdO1xuICAgICAgICAgICAgICAgIGlmIChiLnN0YXR1cyA+IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWxsLnggKyBiYWxsLnJhZGl1cyA+IGIueCAmJiBiYWxsLnggLSBiYWxsLnJhZGl1cyA8IGIueCArIGIud2lkdGggJiYgYmFsbC55ICsgYmFsbC5yYWRpdXMgPiBiLnkgJiYgYmFsbC55IC0gYmFsbC5yYWRpdXMgPCBiLnkgKyBiLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChiYWxsLnggKyBiYWxsLnJhZGl1cyA+PSBiLnggJiYgYmFsbC54IC0gYmFsbC5yYWRpdXMgPD0gYi54KSB8fCAoYmFsbC54IC0gYmFsbC5yYWRpdXMgPD0gYi54ICsgYi53aWR0aCAmJiBiYWxsLnggKyBiYWxsLnJhZGl1cyA+PSBiLnggKyBiLndpZHRoKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbC5keCA9IC1iYWxsLmR4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChiYWxsLnkgKyBiYWxsLnJhZGl1cyA+PSBiLnkgJiYgYmFsbC55IC0gYmFsbC5yYWRpdXMgPD0gYi55ICkgfHwgKGJhbGwueSAtIGJhbGwucmFkaXVzIDw9IGIueSArIGIuaGVpZ2h0ICYmIGJhbGwueSArIGJhbGwucmFkaXVzID49IGIueSArIGIuaGVpZ2h0KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbC5keSA9IC1iYWxsLmR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuc3RhdHVzIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDIwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRQYXJ0aWNsZXMoYmFsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGxldmVsVXAoKXtcbiAgICAgICBpZiAodGhpcy5sZXZlbCA8PSAzKXtcbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXS5yO1xuICAgICAgICAgICAgbGV0IGNvbCA9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdLmM7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93OyByKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiID0gdGhpcy5icmlja3Nbcl1bY107XG4gICAgICAgICAgICAgICAgICAgIGlmIChiLnN0YXR1cyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGV2ZWwgKz0gMTtcbiAgICAgICAgICAgIGlmICh0aGlzLmxldmVsID4gMyl7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEJyaWNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFsbC5yZXNldEJhbGwodGhpcy5wYWRkbGUueCArIHRoaXMucGFkZGxlLndpZHRoIC8gMiwgdGhpcy5wYWRkbGUueSAtIHRoaXMuYmFsbC5yYWRpdXMgLSA1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICBpZiAodGhpcy5saXZlcyA8PSAwIHx8IHRoaXMubGV2ZWwgPiAzKXtcbiAgICAgICAgICAgIHRoaXMub3ZlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgdGhpcy5Cb3VuZHMoKTtcbiAgICAgICAgdGhpcy5wYWRkbGVDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5icmlja0NvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLnJlbW92ZVBhcnRpY2xlcygpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIHRoaXMubGV2ZWxVcCgpO1xuICAgIH1cblxuICAgIG1vdmVPYmplY3RzKCkge1xuICAgICAgICB0aGlzLmJhbGwubW92ZSgpO1xuICAgICAgICB0aGlzLnBhZGRsZS5tb3ZlKCk7XG4gICAgICAgIHRoaXMubW92ZVBhcnRpY2xlcygpO1xuICAgIH1cblxuICAgIHN0ZXAoKXtcbiAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICB9XG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgeyBJTUFHRVMsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmNsYXNzIHRpdGxlU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbWFnZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICB9XG5cbiAgICBpbWFnZSgpIHtcbiAgICAgICAgbGV0IGltYWdlID0gSU1BR0VTLmxvZ29bdGhpcy5pbWFnZUNvdW50XTtcbiAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH1cblxuICAgIGRyYXcoY3R4LCBzY29yZSkge1xuXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDUpIHtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UoKSwgMCwgR0FNRV9IRUlHSFQgLyAyMCk7XG4gICAgICAgICAgICB0aGlzLmltYWdlQ291bnQgPSAodGhpcy5pbWFnZUNvdW50ICsgMSkgJSA4NztcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgICAgICAgICAgLy8gZHJhdyBwcmVzcyBlbnRlciB0byBwbGF5XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSlcIjtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjMwcHggTW9uYWNvXCJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSgyNTUsIDI1NSwgMjU1KVwiO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSAwO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiUFJFU1MgICAgICAgVE8gUExBWSBBR0FJTlwiLCBHQU1FX1dJRFRIIC8gMiwgNTUwKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDUpXCI7XG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDUpXCI7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJFTlRFUlwiLCAxODAsIDU1MCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgIC8vIGRyYXcgZmluYWwgc2NvcmUgXG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJGSU5BTCBTQ09SRVwiLCAyNTAsIDI3NSk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgNSwgMjU1KVwiO1xuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjQwcHggTW9uYWNvXCI7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoc2NvcmUsIDI1MCwgMzc1KTtcbiAgICAgICAgICBcblxuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvdW50ZXIrKztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpdGxlU2NyZWVuO1xuXG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IHtLRVksIE1PVkVTLCBTT1VORFN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBUaXRsZVNjcmVlbiBmcm9tICcuL3RpdGxlX3NjcmVlbic7XG5pbXBvcnQgR2FtZU92ZXJTY3JlZW4gZnJvbSAnLi9nYW1lX292ZXJfc2NyZWVuJztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi91dGlsJztcblxuY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKTtcbiAgICAgICAgdGhpcy5wYWRkbGUgPSB0aGlzLmdhbWUucGFkZGxlO1xuICAgICAgICB0aGlzLmJnbSA9IG5ldyBBdWRpbygnLi9kaXN0L3NvdW5kcy9zb3VuZDAubXAzJyk7XG4gICAgICAgIHRoaXMudGl0bGVTY3JlZW4gID0gbmV3IFRpdGxlU2NyZWVuKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTY3JlZW4gPSBuZXcgR2FtZU92ZXJTY3JlZW4oKTtcbiAgICAgICAgdGhpcy5tdXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmtleURvd24gPSB7fTtcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwidGl0bGVcIjtcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlEb3duID0gdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlS2V5VXAgPSB0aGlzLmhhbmRsZUtleVVwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RlcCA9IHRoaXMuc3RlcC5iaW5kKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5oYW5kbGVLZXlVcCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIFV0aWwubG9hZENvbnRlbnQoKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RlcClcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgc3RlcCgpe1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCBmcHMgPSA5MDtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgc3dpdGNoKHRoYXQuc3RhdGUpe1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0aXRsZVwiOiBcbiAgICAgICAgICAgICAgICAgICAgdGhhdC50aXRsZVNjcmVlbi5kcmF3KHRoYXQuY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImdhbWVcIjogXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZ2FtZS5kcmF3KHRoYXQuY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nYW1lLnN0ZXAoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuZ2FtZS5vdmVyID09PSB0cnVlKSB0aGF0LnN0YXRlID0gJ2dhbWVvdmVyJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImdhbWVvdmVyXCI6IFxuICAgICAgICAgICAgICAgICAgICB0aGF0LmdhbWVPdmVyU2NyZWVuLmRyYXcodGhhdC5jdHgsIHRoYXQuZ2FtZS5zY29yZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoYXQuc3RlcClcbiAgICAgICAgfSwgMTAwMC9mcHMpO1xuICAgIH07XG5cbiAgICBoYW5kbGVLZXlEb3duKGUpe1xuICAgICAgICBpZiAoZS5yZXBlYXQgfHwgdGhpcy5rZXlEb3duW2Uua2V5Q29kZV0pIHJldHVybjsgXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtFWS5FTlRFUil7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3RpdGxlJyB8fCB0aGlzLnN0YXRlID09PSAnZ2FtZW92ZXInKXsgXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFwiZ2FtZVwiOyBcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpOyBcbiAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZSA9IHRoaXMuZ2FtZS5wYWRkbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmICghdGhpcy5nYW1lLm92ZXIgfHwgIXRoaXMuZ2FtZS53b24peyBcbiAgICAgICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLkE6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZy5wdXNoKE1PVkVTLkxFRlQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFkZGxlLnNldFZlbCh0aGlzLm1vdmluZ1t0aGlzLm1vdmluZy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuQV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtFWS5EOiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcucHVzaChNT1ZFUy5SSUdIVClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkbGUuc2V0VmVsKHRoaXMubW92aW5nW3RoaXMubW92aW5nLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5EXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLkxFRlQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZy5wdXNoKE1PVkVTLkxFRlQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFkZGxlLnNldFZlbCh0aGlzLm1vdmluZ1t0aGlzLm1vdmluZy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuTEVGVF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtFWS5SSUdIVDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nLnB1c2goTU9WRVMuUklHSFQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFkZGxlLnNldFZlbCh0aGlzLm1vdmluZ1t0aGlzLm1vdmluZy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuUklHSFRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVLZXlVcChlKXtcbiAgICAgICAgaWYgKCF0aGlzLmdhbWUub3ZlciB8fCAhdGhpcy5nYW1lLndvbil7XG4gICAgICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcbiAgICAgICAgICAgICAgICBjYXNlIEtFWS5BOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRoaXMubW92aW5nLmZpbHRlcihhcnIgPT4gYXJyLmpvaW4oXCJcIikgIT09IE1PVkVTLkxFRlQuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuQV0gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLkQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRoaXMubW92aW5nLmZpbHRlcihhcnIgPT4gYXJyLmpvaW4oXCJcIikgIT09IE1PVkVTLlJJR0hULmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleURvd25bS0VZLkRdID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtFWS5MRUZUOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRoaXMubW92aW5nLmZpbHRlcihhcnIgPT4gYXJyLmpvaW4oXCJcIikgIT09IE1PVkVTLkxFRlQuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuTEVGVF0gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS0VZLlJJR0hUOiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0aGlzLm1vdmluZy5maWx0ZXIoYXJyID0+IGFyci5qb2luKFwiXCIpICE9PSBNT1ZFUy5SSUdIVC5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5SSUdIVF0gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1vdmluZy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFkZGxlLnNldFZlbCh0aGlzLm1vdmluZ1t0aGlzLm1vdmluZy5sZW5ndGggLSAxXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1vdmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZS5yZW1vdmVWZWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVZpZXc7XG4iLCJpbXBvcnQgeyBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2dhbWVfdmlldyc7XG5cbmNvbnN0IGJyaWNraXQgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgIFxuICAgIGNhbnZhc0VsLndpZHRoID0gR0FNRV9XSURUSDsgXG4gICAgY2FudmFzRWwuaGVpZ2h0ID0gR0FNRV9IRUlHSFQ7XG4gICAgXG4gICAgLy8gY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7IFxuICAgIG5ldyBHYW1lVmlldyhjdHgpLnN0YXJ0KCk7XG59KTtcblxucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYnJpY2tpdCk7XG5cbiIsImltcG9ydCB7IFNQRUVELCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCwgUEFERExFX0hFSUdIVCwgUEFERExFX1dJRFRILCBQQURETEVfTUFSR0lOX0JPVFRPTX0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBQYWRkbGUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudmVsID0gWzAsIDBdO1xuICAgICAgICB0aGlzLnggPSAoR0FNRV9XSURUSC8yKSAtIChQQURETEVfV0lEVEgvMik7XG4gICAgICAgIHRoaXMueSA9IEdBTUVfSEVJR0hUIC0gUEFERExFX0hFSUdIVCAtIFBBRERMRV9NQVJHSU5fQk9UVE9NO1xuICAgICAgICB0aGlzLmhlaWdodCA9IFBBRERMRV9IRUlHSFQ7IFxuICAgICAgICB0aGlzLndpZHRoID0gUEFERExFX1dJRFRIO1xuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZ2JhKDI1NSwgNSwgNSlcIlxuICAgICAgICAvLyB0aGlzLmluQm91bmRzID0gdGhpcy5pbkJvdW5kcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1OyBcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7IFxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBtb3ZlKCl7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMudmVsWzBdO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLnZlbFsxXTtcbiAgICB9XG5cblxuICAgIHNldFZlbCh2ZWwpe1xuICAgICAgICB2ZWwgPSBbdmVsWzBdICogU1BFRUQgLCB2ZWxbMV0gKiBTUEVFRCBdXG4gICAgICAgIHRoaXMudmVsID0gdmVsO1xuICAgIH1cblxuICAgIHJlbW92ZVZlbCgpeyBcbiAgICAgICAgdGhpcy52ZWwgPSBbMCwgMF07XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGFkZGxlOyIsImltcG9ydCB7IFNQRUVELCBTT1VORFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIFBhcnRpY2xlIHtcbiAgICBjb25zdHJ1Y3RvcihiYWxsKSB7XG4gICAgICAgIHRoaXMueCA9IGJhbGwueFxuICAgICAgICB0aGlzLnkgPSBiYWxsLnlcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAyO1xuICAgICAgICB0aGlzLnNwZWVkID0gU1BFRUQ7XG4gICAgICAgIHRoaXMuZHggPSA0ICogKE1hdGgucmFuZG9tKCkgKiAyIC0gMSk7XG4gICAgICAgIHRoaXMuZHkgPSA0ICogKE1hdGgucmFuZG9tKCkgKiAyIC0gMSk7XG4gICAgICAgIHRoaXMudHRsID0gNTA7IFxuICAgICAgICB0aGlzLm9wYWNpdHkgPSAxLjU7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgaWYgKHRoaXMudHRsID4gMCl7XG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBgcmdiYSgyNTUsIDI1NSwgMjU1KWA7XG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDU7IFxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgyNTUsIDI1NSwgMjU1LCAke3RoaXMub3BhY2l0eX0pYFxuICAgICAgICAgICAgY3R4LmZpbGwoKTsgXG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB0aGlzLnR0bCAtPSAxO1xuICAgICAgICAgICAgdGhpcy5vcGFjaXR5IC09ICgxL3RoaXMudHRsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMuZHkgLT0gMC4xO1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5keDtcbiAgICAgICAgdGhpcy55IC09IHRoaXMuZHk7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGFydGljbGU7IiwiaW1wb3J0IHsgSU1BR0VTLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCB9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG5jbGFzcyB0aXRsZVNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5pbWFnZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICB9XG5cbiAgICBpbWFnZSgpe1xuICAgICAgICBsZXQgaW1hZ2UgPSBJTUFHRVMubG9nb1t0aGlzLmltYWdlQ291bnRdO1xuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpe1xuXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDUpe1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSgpLCAwLCBHQU1FX0hFSUdIVC8yMCk7XG4gICAgICAgICAgICB0aGlzLmltYWdlQ291bnQgPSAodGhpcy5pbWFnZUNvdW50ICsgMSkgJSA4NztcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBcbiAgICAgICAgICAgIC8vIGRyYXcgcHJlc3MgZW50ZXIgdG8gcGxheVxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IE1vbmFjb1wiXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSlcIjtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gMDtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIlBSRVNTICAgICAgIFRPIFBMQVlcIiwgR0FNRV9XSURUSCAvIDIsIDI1MCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCA1KVwiO1xuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCA1KVwiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiRU5URVJcIiwgMjM1LCAyNTApO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIFxuICAgICAgICAgICAgLy8gZHJhdyBpbnN0cnVjdGlvbnMgYW5kIGNvbnRyb2xzXG4gICAgXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IE1vbmFjb1wiXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMjU1LCA1LCAyNTUpXCJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoNSwgMjU1LCA1KVwiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiSU5TVFJVQ1RJT05TXCIsIDI1MCwgMzUwKVxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDUsIDI1NSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIkNPTlRST0xTXCIsIDI1MCwgNTAwKTtcbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIyMHB4IE1vbmFjb1wiXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIkJyZWFrIGFsbCB0aGUgQlJJQ0tTXCIsIDI1MCwgNDAwKTtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIltBXSBbRF0gb3IgWzxdIFs+XSB0byBtb3ZlIExFRlQgUklHSFRcIiwgMjUwLCA1NTApO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiXCI7XG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IFwiXCI7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3VudGVyKys7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0aXRsZVNjcmVlbjsgXG5cbiIsImltcG9ydCB7IElNQUdFUywgU09VTkRTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgbG9hZENvbnRlbnQgPSAoY2FsbGJhY2spID0+IHtcbiAgICBsZXQgY291bnQgPSAwOyAvLyBudW1iZXIgb2YgY29udGVudCBsb2FkZWRcbiAgICBsZXQgdG90YWwgPSAwO1xuXG4gICAgY29uc3Qgc3ByaXRlcyA9IDg3O1xuICAgIGNvbnN0IHNvdW5kcyA9IDI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzcHJpdGVzOyBpKyspIHtcbiAgICAgICAgdG90YWwgKz0gMTtcblxuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSBsb2FkZWQ7XG4gICAgICAgIGltZy5zcmMgPSBgZGlzdC9pbWFnZXMvdGl0bGUvdGl0bGUke2l9LnBuZ2A7XG4gICAgICAgIElNQUdFUy5sb2dvLnB1c2goaW1nKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzb3VuZHM7IGkrKyl7XG4gICAgICAgIHRvdGFsICs9IDE7IFxuXG4gICAgICAgIGxldCBzbmQgPSBuZXcgQXVkaW8oKTsgXG4gICAgICAgIHNuZC5zcmMgPSBgZGlzdC9zb3VuZHMvc291bmQke2l9Lm1wM2A7XG4gICAgICAgIHNuZC5vbmNhbnBsYXl0aHJvdWdoID0gbG9hZGVkOyBcbiAgICAgICAgU09VTkRTLnNvdW5kLnB1c2goc25kKTtcbiAgICB9XG5cbiAgICAvLyBPbmNlIGFsbCBpbWFnZXMgaGF2ZSBiZWVuIGZ1bGx5IGxvYWRlZCwgd2lsbCBpbml0aWF0ZSBjYWxsYmFjaywgd2hpY2ggaW4gdGhpc1xuICAgIC8vIGNhc2Ugd2lsbCBiZSBpbnNpZGUgdGhlIHN0YXJ0KCkgZnVuY3Rpb24gaW5zaWRlIEdhbWVWaWV3XG4gICAgZnVuY3Rpb24gbG9hZGVkKCkge1xuICAgICAgICBcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYgKGNvdW50ID49IHRvdGFsKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=