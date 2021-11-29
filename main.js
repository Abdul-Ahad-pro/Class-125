noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    
    canvas=createCanvas(550,500);
    canvas.position(550,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    background('#b3ff1a');
    document.getElementById("square_sides").innerHTML=" The Length and Width Of The Square Is " + difference + " px ";
    fill('#ff0066');
    stroke('#ffff00');
    square(noseX,noseY,difference);
}

function modelLoaded() {
    console.log('poseNet is initialized')
}

function gotPoses(results) {
  if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX,noseY"+noseX+noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftWrist and rightWrist"+leftWristX+rightWristX+difference);
  }
}