canvas = document.getElementById("myCanvas");
stx = canvas.getContext("2d");

images_array=["544e4exds.jpeg","hahaha4.jpeg","hing1.jpeg","runfrom3.jpeg"];
randomnumber=Math.floor(Math.random()*4);
console.log(randomnumber);

roverwidth = 100;
roverheight = 90;

roverx = 10;
rovery = 10;

background_image = images_array[randomnumber];
console.log("background_image= "+background_image);
rover_image = "rover.png";

function add() {
  background_imgtag = new Image();
  background_imgtag.onload = uploadbackground;
  background_imgtag.src = background_image;

  rover_imgtag = new Image();
  rover_imgtag.onload = uploadrover;
  rover_imgtag.src = rover_image;
}

function uploadbackground() {
  stx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
  stx.drawImage(rover_imgtag, roverx, rovery, roverwidth, roverheight);
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
  keypress = e.keyCode;
  console.log(keypress);
  if (keypress == "38") {
    up();
    console.log("up");
  }
  if (keypress == "40") {
    down();
    console.log("down");
  }
  if (keypress == "37") {
    left();
    console.log("left");
  }
  if (keypress == "39") {
    right();
    console.log("right");
  }

  function up() {
    if (rovery >= 0) {
      rovery = rovery - 10;
      console.log(
        "when up arrow key is pressed,x= " + roverx + " y= " + rovery
      );
      uploadbackground();
      uploadrover();
    }
  }
  function down() {
    if (rovery <= 500) {
      rovery = rovery + 10;
      console.log(
        "when down arrow key is pressed,x= " + roverx + " y= " + rovery
      );
      uploadbackground();
      uploadrover();
    }
  }
  function left() {
    if (roverx >= 0) {
      roverx = roverx - 10;
      console.log(
        "when left arrow key is pressed,x= " + roverx + " y= " + rovery
      );
      uploadbackground();
      uploadrover();
    }
  }
  function right() {
    if (roverx <= 700) {
      roverx = roverx + 10;
      console.log(
        "when right arrow key is pressed,x= " + roverx + " y= " + rovery
      );
      uploadbackground();
      uploadrover();
    }
  }
}





