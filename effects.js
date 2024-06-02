let starImage = new Image();
starImage.src = "materials/bintang.png"; 
let starSize = 20; 

function initializeOrbitalStars() {
    orbitalStars = [];
    let numberOfStars = 5;
    let radius = 30;
    for (let i = 0; i < numberOfStars; i++) {
        // Include a size property for each star
        orbitalStars.push({
            angle: (i / numberOfStars) * (2 * Math.PI),
            radius: radius,
            speed: 0.05,
            size: starSize // Set the size of the star
        });
    }
}