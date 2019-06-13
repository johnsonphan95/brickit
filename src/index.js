import { GAME_WIDTH, GAME_HEIGHT } from './constants';
import GameView from './game_view';

const brickit = document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    const ctx = canvasEl.getContext("2d");
   
    canvasEl.width = GAME_WIDTH; 
    canvasEl.height = GAME_HEIGHT;
    
    // const game = new Game(); 
    new GameView(ctx).start();
});

removeEventListener("DOMContentLoaded", brickit);

