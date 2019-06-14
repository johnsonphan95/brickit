import { IMAGES, SOUNDS } from './constants';

export const loadContent = (callback) => {
    let count = 0; // number of content loaded
    let total = 0;

    const sprites = 87;
    const sounds = 3;

    for (let i = 0; i <= sprites; i++) {
        total += 1;

        let img = new Image();
        img.onload = loaded;
        img.src = `dist/images/title/title${i}.png`;
        IMAGES.logo.push(img);
    }
    
    // for (let i = 0; i <= sounds; i++){
    //     total += 1; 

    //     let snd = new Audio(); 
    //     snd.src = `dist/sounds/sound${i}.mp3`;
    //     snd.oncanplaythrough = loaded; 
    //     SOUNDS.sound.push(snd);
    // }

    // Once all images have been fully loaded, will initiate callback, which in this
    // case will be inside the start() function inside GameView
    function loaded() {
        
        count++;
        if (count >= total) {
            callback();
        }
    }
}


