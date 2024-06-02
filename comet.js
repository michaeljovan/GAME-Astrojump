function spawnComet() {
    if (score > 700) {
        let cometWidth = 50;
        let cometHeight = 50;
        let cometX = Math.random() > 0.5 ? -cometWidth : boardWidth;
        let cometY = Math.random() * boardHeight / 2;
        let cometVelocityX = cometX < 0 ? 2 : -2;
        let cometImg = new Image();
        cometImg.src = "materials/saturnus.png"; 

        let comet = {
            img: cometImg,
            x: cometX,
            y: cometY,
            width: cometWidth,
            height: cometHeight,
            velocityX: cometVelocityX
        };
        cometArray.push(comet);
    }
}

