// import {IMAGES} from './constants';

// export const loadImages = (callback) => {
//     let count = 0; // number of images loaded

//     const directions = ["up", "down", "left", "right"];
//     const sprites = 3; 
//     let total = 0;

//     directions.forEach(direction => {
//         // will iterate through loop, i and direction will denote image file to be loaded in an array
//         // located in IMAGES
//         for (let i = 0; i <= sprites; i++){
//             total += 1; 

//             let img = new Image();
//             img.onload = loaded; 
//             img.src = `dist/images/char-${direction}-${i}.png`;
//             IMAGES.player[direction].push(img);
//         }

//         for (let i = 0; i <= sprites; i++){
//             total += 1; 

//             let img = new Image(); 
//             img.onload = loaded; 
//             img.src = `dist/images/creep-${direction}-${i}.png`;
//             IMAGES.creep[direction].push(img);
//         }
//         for (let i = 0; i <= sprites; i++){
//             // debugger
//             total += 1; 

//             let img = new Image(); 
//             img.onload = loaded; 
//             img.src = `dist/images/tile-${i}.png`;
//             IMAGES.traps["bearTrap"].push(img);
//         }


//         // Once all images have been fully loaded, will initiate callback, which in this
//         // case will be inside the start() function inside GameView
//         function loaded() {
//             count ++; 
//             if (count >= total){
//                 callback();
//             }
//         }
//     })
// }

