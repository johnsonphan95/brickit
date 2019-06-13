import Game from './game';
import {KEY, MOVES} from './constants';
import TitleScreen from './title_screen';
import GameOverScreen from './game_over_screen';
import * as Util from './util';

class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.game = new Game();
        this.paddle = this.game.paddle;
        this.titleScreen  = new TitleScreen();
        this.gameOverScreen = new GameOverScreen();
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
        Util.loadImages(() => {
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
        if (e.keyCode === KEY.ENTER){
            if (this.state === 'title' || this.state === 'gameover'){ 
                this.state = "game"; 
                this.game = new Game(); 
                this.paddle = this.game.paddle;
                this.keyDown = {};
            }
        };
        if (!this.game.over || !this.game.won){ 
            switch(e.keyCode){
                case KEY.A: 
                 
                    this.moving.push(MOVES.LEFT)
                    this.paddle.setVel(this.moving[this.moving.length - 1]);
                    this.keyDown[KEY.A] = true;
                    break;
                case KEY.D: 
                    this.moving.push(MOVES.RIGHT)
                    this.paddle.setVel(this.moving[this.moving.length - 1]);
                    this.keyDown[KEY.D] = true;
                    break;
                case KEY.LEFT: 
                    this.moving.push(MOVES.LEFT)
                    this.paddle.setVel(this.moving[this.moving.length - 1]);
                    this.keyDown[KEY.LEFT] = true;
                    break;
                case KEY.RIGHT: 
                    this.moving.push(MOVES.RIGHT)
                    this.paddle.setVel(this.moving[this.moving.length - 1]);
                    this.keyDown[KEY.RIGHT] = true;
                    break;
            }
        }
    }

    handleKeyUp(e){
        if (!this.game.over || !this.game.won){
            switch(e.keyCode){
                case KEY.A:
                    this.moving = this.moving.filter(arr => arr.join("") !== MOVES.LEFT.join(""));
                    this.keyDown[KEY.A] = false; 
                    break;
                case KEY.D: 
                    this.moving = this.moving.filter(arr => arr.join("") !== MOVES.RIGHT.join(""));
                    this.keyDown[KEY.D] = false; 
                    break;
                case KEY.LEFT:
                    this.moving = this.moving.filter(arr => arr.join("") !== MOVES.LEFT.join(""));
                    this.keyDown[KEY.LEFT] = false; 
                    break;
                case KEY.RIGHT: 
                    this.moving = this.moving.filter(arr => arr.join("") !== MOVES.RIGHT.join(""));
                    this.keyDown[KEY.RIGHT] = false; 
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

export default GameView;
