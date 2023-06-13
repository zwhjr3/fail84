canvas=document.getElementById('canva');
ctx=canvas.getContext("2d");
rover_x = 10;
rover_y = 10;
rover_width = 100;
rover_height = 85;
function add() {
    bimg = new Image();
    bimg.onload = uploadBackground;
    bimg.src = bimg;

    rimg = new Image();
    rimg.onload = uploadrover;
    rimg.src = rimg;
}

function uploadBackground() {
    ctx.drawImage(bimg, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
ctx.drawImage(rimg, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", mykd);

function mykd(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}