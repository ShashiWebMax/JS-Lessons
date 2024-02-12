//load canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const BACKGROUND_COLOR = "#000000";

let worldSpeed = 0;


class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.frame = 0;
        this.currentAnimation = 'Idle'

        this.animations = {
            Idle: {
                frames: 15,
                images: [],
            },
            Dead: {
                frames: 15,
                images: [],
            },
            Jump: {
                frames: 15,
                images: [],
            },
            Run: {
                frames: 15,
                images: [],
            },
            Walk: {
                frames: 15,
                images: [],
            }
        };
        this.loadImages();
    }
    loadImages(params) {
        Object.entries(this.animations).forEach((animation) => {
            // console.log(animation[1])
            for (let i = 1; i <= animation[1].frames; i++) {
                let img = new Image();
                img.src = `player\\${animation[0]} (${i}).png`;
                this.animations[animation[0]].images.push(img);
            }
        });
    }
    draw() {
        //draw image on canvas
        this.frame = (this.frame + 1) % this.animations.Idle.frames;

        if (this.speedY > 0 && this.y < 300) {
            this.y += this.speedY;
        }
        if (this.speedY < 0 && this.y > 100) {
            this.y += this.speedY;
        }


        ctx.drawImage(
            this.animations[this.currentAnimation].images[this.frame],
            this.x,
            this.y,
            200,
            200
        );

    }
}

const player = new Player(100, 100);

class Background {
    constructor() {
        this.x = 0;
        this.y = 150;
        this.road = new Image();
        this.road.src = 'bg/battleground.png';
        this.frame = 0;

        this.bgX = 0;
        this.bg = new Image();
        this.bg.src = 'bg/back_decor.png';

        this.land = new Image();
        this.land.src = 'bg/back_land.png';

    }

    draw() {
        //ground
        ctx.drawImage(
            this.road,
            this.x,
            this.y,
            canvas.width,
            canvas.height);
        ctx.drawImage(
            this.road,
            this.x + canvas.width,
            this.y,
            canvas.width,
            canvas.height);


        //land 
        ctx.drawImage(
            this.land,
            this.bgX,
            50,
            canvas.width,
            canvas.height);
        ctx.drawImage(
            this.land,
            this.bgX + canvas.width,
            50,
            canvas.width,
            canvas.height);

        
        //trees
        ctx.drawImage(
            this.bg,
            this.x,
            100,
            canvas.width,
            canvas.height);
        ctx.drawImage(
            this.bg,
            this.x + canvas.width,
            100,
            canvas.width,
            canvas.height);
        
        this.bgX -= worldSpeed*0.9;
        if (this.bgX <= -canvas.width) {
            this.bgX = 0;
        }        

        this.x -= worldSpeed;
        if (this.x <= -canvas.width) {
            this.x = 0;
        }

        //box to hide the top

        ctx.fillStyle = '#254938';
        ctx.fillRect(0, 0, canvas.width, 100);
        


    }
}

const bg = new Background();

setInterval(() => {
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bg.draw();
    player.draw();

}, 1000 / 30)


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        worldSpeed = 10;
        player.currentAnimation = 'Run';
    }
    if (event.key === 'ArrowDown') {
        player.speedY = 10;
    }
    if (event.key === 'ArrowUp') {
        player.speedY = -10;
    }
    //jump
    if (event.key === ' ') {
        let previousAnimation = player.currentAnimation;
        player.currentAnimation = 'Jump';
        //jump player
        player.y = player.y - 30;
        player.frame = 0;
        setTimeout(() => {
            player.y = player.y + 30;
            player.currentAnimation = previousAnimation;
        }, 500);


    }


});

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowRight') {
        worldSpeed = 0;
        player.currentAnimation = 'Idle';
    }

    if (event.key === 'ArrowDown') {
        player.speedY = 0;
    }
    if (event.key === 'ArrowUp') {
        player.speedY = 0;
    }



});