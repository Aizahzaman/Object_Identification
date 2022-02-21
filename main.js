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
    if(status!=""){
        objectDetector.detect(image,gotresults);
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status: Objects Detected";
            fill("red");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            if(objects[i].label==object_name){
                image.stop();
                objectDetector.detect(image.gotresults);
                document.getElementById("object_status").innerHTMl=object_name+" Found";
                synth=window.speechSynthesis;
                utter=new SpeechSynthesisUtterance(object_name+" Found");
                synth.speak(utter);
            }
            else{
                document.getElementById("object_status").innerHTML=object_name+" Not Found";
            }
        }
    }
}