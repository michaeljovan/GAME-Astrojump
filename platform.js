// platform
let platformArray = [];
let platformWidth = 100;
let platformHeight = 50;
let platformImg;   


platformImg = new Image();
platformImg.src = "materials/platformbatupng.png";

function placePlatform() {
    platformArray = [];

    // inisiasi platform
    let platform = {
        img: platformImg,
        x: boardWidth / 2,
        y: boardHeight - 50,
        width: platformWidth,
        height: platformHeight
    };

    platformArray.push(platform);
        for (let i = 0; i < 6; i++) { // spawn platform awal
            let randomX = Math.floor(Math.random() * boardWidth * 3 / 4);
            let platform = {
                img: platformImg,
                x: randomX,
                y: boardHeight - 75 * i - 150,
                width: platformWidth,
                height: platformHeight
            };
            platformArray.push(platform);
        }
    }

function newPlatform() { // platform random 
    let randomX = Math.floor(Math.random() * boardWidth * 3 / 4);
    let platform = {
        img: platformImg,
        x: randomX,
        y: -platformHeight,
        width: platformWidth,
        height: platformHeight
    };
    platformArray.push(platform);
} 

    