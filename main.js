song1="";
song2="";
Song1_status="";
Song2_status="";
score_rightwrist=0;
score_leftwrist=0;
rightwrist_x=0;
rightwrist_y=0;
leftwrist_x=0;
leftwrist_Y=0;
function preload(){
song1=loadSound("jungkook&jimin.mp3");
song2=loadSound("blackpink.mp3");

}
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);

}
function modelloaded(){
    console.log("posenet is initilized");

}
function gotposes(results){
if(results.length>0) {
console.log(results);
score_rightwrist=results[0].pose.keypoints[10].score;
score_leftwrist=results[0].pose.keypoints[9].score;
rightwrist_x=results[0].pose.rightWrist.x;
rightwrist_y=results[0].pose.rightWrist.y;
leftwrist_x=results[0].pose.leftWrist.x;
leftwrist_y=results[0].pose.leftWrist.y;
}
}

function draw(){
image(video,0,0,600,500);

}
function start(){
song.play();
}