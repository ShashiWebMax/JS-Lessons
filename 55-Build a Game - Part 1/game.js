
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
        this.frame++;
        if (this.frame == this.animations[this.animation].frames) {
            this.frame = 0;
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
        if(this.animation != "Jump"){
            let zoom = this.y - 40;
            this.width = 200 + zoom;
            this.height = 200 + zoom;
        }

        //draw image on canvas
        ctx.drawImage(
            this.animations[this.animation].images[this.frame],
            this.x,
            this.y,
            this.width,
            this.height
        );
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



setInterval(function () {
    //clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //draw the background
    bg.draw();
    //draw the player
    player.draw();
    //draw the start button
    startButton.draw();
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
