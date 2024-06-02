// meteors
let meteorArray = [];
let meteorWidth = 40;
let meteorHeight = 40;
let meteorImg;

meteorImg = new Image();
meteorImg.src = "materials/Meteorit.png";

function spawnMeteor() {
    let randomX = Math.floor(Math.random() * (boardWidth - meteorWidth));
    let meteor = {
        img: meteorImg,
        x: randomX,
        y: -meteorHeight,
        width: meteorWidth,
        height: meteorHeight,
        velocityY: 1.75 // kecepatan meteor jatuh
    };
    meteorArray.push(meteor);
} 
