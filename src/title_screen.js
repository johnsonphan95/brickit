import { IMAGES, GAME_WIDTH, GAME_HEIGHT } from './constants'

class titleScreen {
    constructor(){
        this.imageCount = 0;
        this.counter = 0;
    }

    image(){
        let image = IMAGES.logo[this.imageCount];
        return image;
    }

    draw(ctx){

        if (this.counter === 9){
            ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
            ctx.drawImage(this.image(), 0, GAME_HEIGHT/20);
            this.imageCount = (this.imageCount + 1) % 87;
            ctx.beginPath();
    
            // draw press enter to play
            ctx.strokeStyle = "rgba(255, 255, 255)";
            ctx.fillStyle = "rgba(255, 255, 255)";
            ctx.textAlign = "center";
            ctx.font = "30px Monaco"
            ctx.shadowColor = "rgba(255, 255, 255)";
            ctx.shadowBlur = 0;
            ctx.fillText("PRESS       TO PLAY", GAME_WIDTH / 2, 250);
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

export default titleScreen; 

