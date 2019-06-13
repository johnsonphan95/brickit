import { IMAGES, GAME_WIDTH, GAME_HEIGHT } from './constants'

class titleScreen {
    constructor() {
        this.imageCount = 0;
        this.counter = 0;
    }

    image() {
        let image = IMAGES.logo[this.imageCount];
        return image;
    }

    draw(ctx, score) {

        if (this.counter === 9) {
            ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
            ctx.drawImage(this.image(), 0, GAME_HEIGHT / 20);
            this.imageCount = (this.imageCount + 1) % 87;
            ctx.beginPath();

            // draw press enter to play
            ctx.strokeStyle = "rgba(255, 255, 255)";
            ctx.fillStyle = "rgba(255, 255, 255)";
            ctx.textAlign = "center";
            ctx.font = "30px Monaco"
            ctx.shadowColor = "rgba(255, 255, 255)";
            ctx.shadowBlur = 0;
            ctx.fillText("PRESS       TO PLAY AGAIN", GAME_WIDTH / 2, 550);
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

export default titleScreen;

