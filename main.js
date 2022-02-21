objects=[];
status="";
function preload(){

}

function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    image=createCapture(VIDEO);
    image.hide();
    image.size(500,400);
}

function start(){
    objectdetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    var object_name=document.getElementById("Input").value;
}
    
function modelLoaded(){
    console.log("model has loaded");
    status=true;
}

function gotresults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
    image(image,0,0,500,400);
}