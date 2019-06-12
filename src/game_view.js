import * as Util from './util';
import {KEY, MOVES} from './constants';

export default class GameView {
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
            case KEY.A: 
                this.moving.push(MOVES.LEFT)
                console.log(this.moving)
                this.paddle.setVel(this.moving[this.moving.length - 1]);
                this.keyDown[KEY.A] = true;
                break;
            case KEY.D: 
                this.moving.push(MOVES.RIGHT)
                console.log(this.moving)
                this.paddle.setVel(this.moving[this.moving.length - 1]);
                this.keyDown[KEY.D] = true;
                break;
            case KEY.LEFT: 
                this.moving.push(MOVES.LEFT)
                console.log(this.moving)
                this.paddle.setVel(this.moving[this.moving.length - 1]);
                this.keyDown[KEY.LEFT] = true;
                break;
            case KEY.RIGHT: 
                this.moving.push(MOVES.RIGHT)
                console.log(this.moving)
                this.paddle.setVel(this.moving[this.moving.length - 1]);
                this.keyDown[KEY.RIGHT] = true;
                break;
        }
    }

    handleKeyUp(e){
        switch(e.keyCode){
            case KEY.A:
                this.moving = this.moving.filter(arr => arr.join("") !== MOVES.LEFT.join(""));
                console.log(this.moving)
                this.keyDown[KEY.A] = false; 
                break;
            case KEY.D: 
                this.moving = this.moving.filter(arr => arr.join("") !== MOVES.RIGHT.join(""));
                console.log(this.moving)
                this.keyDown[KEY.D] = false; 
                break;
            case KEY.LEFT:
                this.moving = this.moving.filter(arr => arr.join("") !== MOVES.LEFT.join(""));
                console.log(this.moving)
                this.keyDown[KEY.LEFT] = false; 
                break;
            case KEY.RIGHT: 
                this.moving = this.moving.filter(arr => arr.join("") !== MOVES.RIGHT.join(""));
                console.log(this.moving)
                this.keyDown[KEY.RIGHT] = false; 
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


