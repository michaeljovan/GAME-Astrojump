function spawnPowerUp() {
    if (score > 400) {
        let powerUp = {
            img: new Image(),
            x: Math.random() * (boardWidth - 20) + 10,
            y: 0,
            width: 40,
            height: 40,
            velocityY: 1
        };
        powerUp.img.src = "materials/bintang.png";
        powerUpArray.push(powerUp);
    }
}

function activatePowerUp() {
    invincible = true;
    setTimeout(() => invincible = false, 5000); //kebal selama 5detik satuan per ms 1000 = 1detik
}