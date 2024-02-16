
const FPS = 30; // frames per second

// set up the canvas
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// set up the game loop
let speed = 0; // world speed


class BG {
    constructor() {
        this.x = 0;
        this.img = new Image();
        this.img.src = "bg/bg.png";
        this.img.onload = () => {
            this.draw();
        }
    }
    draw() {
        this.x -= speed;
        if (this.x <= -canvas.width) {
            this.x = 0;
        }
        ctx.drawImage(this.img, this.x, 0, canvas.width, canvas.height);
        ctx.drawImage(this.img, this.x + canvas.width, 0, canvas.width, canvas.height);

    }
}
const bg = new BG();

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.width = 250;
        this.height = 250;
        this.frame = 0;
        this.animation = "Idle";
        this.animations = {
            Dead: {
                frames: 15,
                images: []
            },
            Idle: {
                frames: 15,
                images: []
            },
            Jump: {
                frames: 15,
                images: []
            },
            Run: {
                frames: 15,
                images: []
            },
            Walk: {
                frames: 15,
                images: []
            }
        }
        this.loadImages();
        //run sound
        this.runningSound = new Audio();
        this.runningSound.src = "sounds/running.mp3";
        //jump sound
        this.jumpSound = new Audio();
        this.jumpSound.src = "sounds/jump.mp3";
        //dead sound
        this.deadSound = new Audio();
        this.deadSound.src = "sounds/dead.mp3";
    }
    loadImages() {
        Object.entries(this.animations).forEach((animation) => {
            for (let i = 1; i <= animation[1].frames; i++) {
                let img = new Image();
                img.src = `player\\${animation[0]} (${i}).png`;
                this.animations[animation[0]].images.push(img);
            }
        });
    }
    draw() {
        // this.frame = (this.frame + 1) % this.animations.Idle.frames;
        if (!(this.animation == "Dead" && this.frame == 14)) {
            this.frame++;
        }
        if (this.frame == this.animations[this.animation].frames) {
            this.frame = 0;
            // this.runningSound.currentTime = 1.02;
        }
        //speedY
        if (this.speedY > 0 && this.y < 160) {
            this.y += this.speedY;
        }
        if (this.speedY < 0 && this.y > 40) {
            this.y += this.speedY;
        }

        //zoom based on y (200 to ...)
        //implement if after implementing jump
        if (this.animation != "Jump") {
            let zoom = this.y - 40;
            this.width = 200 + zoom;
            this.height = 200 + zoom;
            //set running sound volume
            this.runningSound.volume = 0.2 + (zoom / 500);
        }



        //draw image on canvas
        ctx.drawImage(
            this.animations[this.animation].images[this.frame],
            this.x,
            this.y,
            this.width,
            this.height,
        );
        //draw the collision box border box
        ctx.strokeStyle = "red";
        // ctx.strokeRect(this.x, this.y+this.height/1.3, this.width/3 , this.height/8);
        //detect collision
        if (this.x + this.width / 3 > obstacle.x && this.x < obstacle.x + obstacle.width && this.y + this.height / 1.3 < obstacle.y + obstacle.height && this.y + this.height / 1.3 + this.height / 8 > obstacle.y) {
            //if not dead
            if (!(this.animation == "Dead")) {
                speed = 0;
                this.frame = 0;
                this.animation = "Dead";
                //stop running sound
                this.runningSound.pause();
                //play dead sound once
                this.deadSound.play();                
            }
            //display Game Over
            ctx.fillStyle = "black";
            ctx.font = "50px Arial";
            ctx.textAlign = "center";
            ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
            //display score
            ctx.font = "30px Arial";
            ctx.fillText("Score: " + score.points, canvas.width / 2, canvas.height / 2 + 50);
        }

        //play footstep sound
        if ((this.animation == "Run" && (this.frame == 0))) {
            this.runningSound.loop = true;            
            this.runningSound.play();
        }
    }

}
const player = new Player(100, 100);

// Start button
class Button {
    constructor() {
        this.show = true;
        this.width = 200;
        this.height = 100;
        this.img = new Image();
        this.img.src = "bg/start.png";
        this.img.onload = () => {
            this.draw();
        }
    }

    draw() {
        if (this.show) {
            ctx.drawImage(this.img, canvas.width / 2 - this.width / 2, canvas.height / 2 - this.height / 2, this.width, this.height);
        }
    }

}
const startButton = new Button();

// -----------------------------------------
// Obstacles
class Obstacle {
    constructor() {
        this.x = canvas.width;
        this.y = 300;
        this.width = 100;
        this.height = 100;
        this.imgs = [];
        this.loadImages();
        this.img = 0;
    }

    loadImages() {
        for (let i = 1; i <= 4; i++) {
            let img = new Image();
            img.src = `Stone/Stone ${i}.png`;
            this.imgs.push(img);
        }
    }

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    draw() {
        this.x -= speed;
        if (this.x < 0 - this.width) {
            this.x = canvas.width;
            this.img = this.randomNumber(0, 3);
            this.y = 300 + this.randomNumber(-100, 100);
            //every time the obstacle is reset, speed is increased
            speed += 1;
            player.runningSound.playbackRate += 0.01;
            score.points++;
        }
        ctx.drawImage(this.imgs[this.img], this.x, this.y, this.width, this.height);
    }
}

const score = {
    points: 0,
    draw: function () {
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.textAlign = "left";
        ctx.fillText("Score: " + this.points, 30, 480);
    }
}

const obstacle = new Obstacle();

//Game loop
setInterval(function () {
    //clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //draw the background
    bg.draw();
    //draw the obstacle
    obstacle.draw();
    //draw the player
    player.draw();
    //draw the start button
    startButton.draw();
    //draw the score
    score.draw();
}
    , 1000 / FPS);

//event listeners
document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") {
        player.speedY = -10;
    }
    if (e.key == "ArrowDown") {
        player.speedY = 10;
    }
    //jump on space
    if (e.key == " ") {
        player.animation = "Jump";
        // player.runningSound.pause();
        player.jumpSound.play();

        player.y -= 50;
        player.frame = 0;
        setTimeout(() => {
            player.y += 50;
            player.animation = "Run";

        }, 500);
    }


});

document.addEventListener("keyup", (e) => {
    if (e.key == "ArrowUp") {
        player.speedY = 0;
    }
    if (e.key == "ArrowDown") {
        player.speedY = 0;
    }



});

//canvas click event
canvas.addEventListener("click", (e) => {
    let x = e.clientX - canvas.getBoundingClientRect().left;
    let y = e.clientY - canvas.getBoundingClientRect().top;
    //clientX and clientY are the coordinates of the mouse pointer relative to the top-left corner of the document.
    //getBoundingClientRect() returns the size of an element and its position relative to the document.
    //by subtracting the left and top of the canvas from the clientX and clientY, we get the coordinates of the mouse pointer relative to the top-left corner of the canvas.
    if (
        x > canvas.width / 2 - startButton.width / 2 &&
        x < canvas.width / 2 + startButton.width / 2 &&
        y > canvas.height / 2 - startButton.height / 2 &&
        y < canvas.height / 2 + startButton.height / 2) {
        speed = 10;
        startButton.show = false;
        player.animation = "Run";
    }
});
