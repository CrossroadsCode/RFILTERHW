function preload() {
clownnose=loadImage('https://i.postimg.cc/nLMnKPZF/moustache-PNG38.png');


}

function setup() {

canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);

}

function draw() {
    image(video, 0,0,300,300);
  /*  fill(255, 0, 0);
    stroke(0, 0, 0);
    circle(nosex, nosey, 20);*/
    image(mustache,nosex-15,nosey-15,30,30);
    
}

function takeSnapshot() {

save('photo.png');

}


function modelLoaded() {

console.log('PoseNet is loaded! Have fun with the filter!');

}

function gotPoses(results) {
if(results.length>0) {

console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log("nosex="+results[0].pose.nose.x);
console.log("nosey="+results[0].pose.nose.y);
}}

nosex=0;

nosey=0;