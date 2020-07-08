// TITLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let array = [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300];

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // draw bar graph
    ctx.fillStyle = 'orange';
    ctx.strokeStyle = 'grey';
    for (let i = 0; i < array.length; i++) {
        ctx.fillRect(i* (cnv.width / array.length), cnv.height - array[i], cnv.width/array.length, array[i]);
        ctx.strokeRect(i*(cnv.width / array.length), cnv.height - array[i], cnv.width/array.length, array[i]);
    }


    // Request another Animation Frame
    requestAnimationFrame(draw);
}

document.addEventListener('keydown', keyDownHandler);

function keyDownHandler(e) {
    console.log(e.code);
    if (e.code == 'Space') {
        for (let i = 0; i < array.length; i++) {
            array[i] += randomDec(-5, 5);
        }
    } else if (e.code == 'KeyR') {
        for (let i = 0; i < array.length; i++) {
            array[i] = 300;
        }
    }
}