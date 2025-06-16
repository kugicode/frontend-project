const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
//player obj

const player = {
    x: 10,
    y: canvas.height - 40,
    width: 40,
    height: 40,
    velocityX: 0, // Add horizontal movement property
    gravity: 0.5

};

//start movement when key is pressed
document.addEventListener('keydown', (event) => {
    if (event.code === "ArrowRight"){
        player.velocityX = 5;
    }
    else if (event.code === "ArrowLeft"){
        player.velocityX = -5;
    }
});

//stop movement when key is released.
document.addEventListener('keyup', (event) => {
    if (event.code === "ArrowRight" || event.code === "ArrowLeft"){
        player.velocityX = 0;
    }
});


function updateGame(){
    player.x += player.velocityX;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y, player.width, player.height);


    requestAnimationFrame(updateGame);
}

updateGame();