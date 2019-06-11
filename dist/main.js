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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\nclass Game {\n    constructor(){\n        this.player = [];\n    }\n\n    add(object){\n        if (object instanceof _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n            this.player.push(object)\n        }\n    }\n\n    addPlayer(){\n        const player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"] (); \n        this.add(player);\n        return player;\n    }\n\n    allObjects(){\n        return[].concat(this.player);\n    }\n\n    draw(ctx){\n        \n        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n        ctx.fillStyle = Game.BG_COLOR;\n        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\n        this.allObjects().forEach((object) => {\n            object.draw(ctx);\n        });\n    }\n\n    moveObjects() {\n        this.allObjects().forEach((object) => {\n            object.move();\n        });\n    }\n}\n\nGame.DIM_X = 650; \nGame.DIM_Y = 650;\nGame.BG_COLOR = \"#141414\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n    constructor(game, ctx) {\n        this.ctx = ctx;\n        this.game = game;\n        this.player = this.game.addPlayer();\n    }\n\n    start() {\n        this.bindKeyHandlers();\n        setInterval(() => {\n            this.game.moveObjects()\n            this.game.draw(this.ctx)\n        }, 20)\n    }\n\n    bindKeyHandlers() {\n        const player = this.player;\n\n        Object.keys(GameView.MOVES).forEach((k) => {\n            const move = GameView.MOVES[k];\n            key(k, () => { player.power(move); });\n        });\n    }\n    \n}\n\nGameView.MOVES = {\n    w: [0, -1],\n    a: [-1, 0],\n    s: [0, 1],\n    d: [1, 0],\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"game-canvas\");\n    const ctx = canvasEl.getContext(\"2d\");\n    canvasEl.width = _game__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DIM_X; \n    canvasEl.height = _game__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DIM_Y;\n    \n    const game = new _game__WEBPACK_IMPORTED_MODULE_2__[\"default\"](); \n    new _game_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"](game, ctx).start();\n\n\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n    constructor(options){\n        this.pos = options.pos; \n        this.vel = options.vel; \n        this.radius = options.radius; \n        this.color = options.color;\n    }\n\n    draw(ctx) {\n        // ctx.rect(20, 20, 30, 30);\n        // ctx.fillStyle = \"green\";\n\n        ctx.fillStyle = this.color;\n\n        ctx.beginPath();\n        ctx.arc(\n            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n        );\n        ctx.fill();\n    }\n\n    move(){\n        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nfunction randomColor() {\n    const hexDigits = \"0123456789ABCDEF\";\n\n    let color = \"#\";\n    for (let i = 0; i < 3; i++) {\n        color += hexDigits[Math.floor((Math.random() * 16))];\n    }\n\n    return color;\n}\n\nfunction randomPosition(){\n    return [\n        _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DIM_X * Math.random(),\n        _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DIM_Y * Math.random()\n    ]\n}\n\nclass Player extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(options = {}){\n        options.pos = options.pos || randomPosition();\n        options.radius = Player.RADIUS; \n        options.vel = options.vel || [1, -1];\n        options.color = options.color || randomColor();\n        super(options);\n    }\n\n    power(impulse){\n        this.vel[0] += impulse[0];\n        this.vel[1] += impulse[1];\n    }\n\n    playerSprite(){\n        let sprite = new Image();\n        sprite.src = '../vender/char-m.png';\n    }\n}\n\n\nPlayer.RADIUS = 15;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });