objects=[];
status="";
function preload(){
video=createVideo("video.mp4");
}

function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    video.hide();
}

function start(){
    objectdetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}