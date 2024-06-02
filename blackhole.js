function spawnBlackHole() {
    if (score > 400) {
        let blackHole = {
            img: new Image(),
            x: Math.random() * (boardWidth - 40) + 20,
            y: 0,
            width: 40,
            height: 40,
            velocityY: 1
        };
        blackHole.img.src = "materials/blackhole.png";
        blackHoleArray.push(blackHole);
    }
}