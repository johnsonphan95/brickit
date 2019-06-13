import { IMAGES } from './constants';

export const loadImages = (callback) => {
    let count = 0; // number of images loaded
    let total = 0;

    const sprites = 87;

    for (let i = 0; i <= sprites; i++) {
        total += 1;

        let img = new Image();
        img.onload = loaded;
        img.src = `dist/images/title/title${i}.png`;
        IMAGES.logo.push(img);
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

