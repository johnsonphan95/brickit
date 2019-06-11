import { GAME_WIDTH, GAME_HEIGHT } from './constants';
import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    const ctx = canvasEl.getContext("2d");
   
    canvasEl.width = GAME_WIDTH; 
    canvasEl.height = GAME_HEIGHT;
    
    
    const game = new Game(); 
    new GameView(game, ctx).start();
})

