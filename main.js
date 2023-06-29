s1 = "";
s2 = "";
function preload(){
    s1 = loadSound("music.mp3");
    s2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,500,300,200);
    canvas.position(550,200);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);}