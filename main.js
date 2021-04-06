song = "";
song2 = "";

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function preload(){

    song = loadSound("Julie and the Phantoms Cast - Bright (1).mp3");
    song2 = loadSound("Julie_and_the_Phantoms_Cast_-_Wake_Up.mp3");
}

function draw(){

    image(video, 0 , 0 , 600 , 500);
}

function play(){

    song.play();
}