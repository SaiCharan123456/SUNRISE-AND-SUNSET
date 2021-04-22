const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;

function preload() {
      getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg){
    background(backgroundImg);
}
    // add condition to check if any background image is there to add
    /*getBackgroundImg();
    fill("BLACK");
    textSize(30);
    text("TIME : 5 AM",200,100);*/
    Engine.update(engine);

    if(hour < 12){
        fill("BLACK");
        textSize(30);
        text("TIME : "+hour % 12+" AM",200,100);
    }else{
        fill("BLACK");
        textSize(30);
        text("TIME : "+hour % 12+" PM",200,100);
    }
    // write code to display time in correct format here
//console.log((hour >= 00 && hour <= 02))   //bg = "sunset11.png";
//})
   // text("TIME : "+hour % 12+" AM",200,100);
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson=await response.json();
    //console.log(responseJson);
    var dateTime = responseJson.datetime;
   // console.log(dateTime);
     hour =dateTime.slice(11,13);
    //console.log(hour);
    if(hour >= 04 && hour <= 06){
        fill("BLACK");
        textSize(30);
        text("TIME : 5 AM",200,100);
    bg = "sunrise1.png";
    }
    else if(hour >= 06 && hour <= 08){
        fill("BLACK");
        textSize(30);
        text("TIME : 7 AM",200,100);
        bg = "sunrise2.png";
    }
    else if(hour >= 08 && hour <= 10){
        fill("BLACK");
        textSize(30);
        text("TIME : 9 AM",200,100);
        bg = "sunrise3.png";
    }
    else if(hour >= 10 && hour <= 12){
        fill("BLACK");
        textSize(30);
        text("TIME : 11 AM",200,100);
        bg = "sunrise4.png";
    }
    else if(hour >= 12 && hour <= 14){
        fill("BLACK");
        textSize(30);
        text("TIME : 1 PM",200,100);
        bg = "sunrise5.png";
    }
    else if(hour >= 14 && hour <= 16){
        fill("BLACK");
        textSize(30);
        text("TIME : 3 PM",200,100);
        bg = "sunrise6.png";
    }
    else if(hour >= 16 && hour <= 18){
        fill("BLACK");
        textSize(30);
        text("TIME : 5 PM",200,100);
        bg = "sunset7.png";
    }
    else if(hour >= 18 && hour <= 20){
        
        bg = "sunset8.png";
        fill("BLACK");
        textSize(30);
        text("TIME : 7 PM",200,100);
    }
    else if(hour >= 20 && hour <= 22){
       fill("BLACK");
        textSize(30);
        text("TIME : 9 PM",200,100);
        bg = "sunset9.png";         
        
    }
    else if(hour >= 22 && hour <= 00){
        fill("BLACK");
        textSize(30);
        text("TIME : 11 PM",200,100);
        bg = "sunset10.png";
    }
    else if(hour >= 00 && hour <= 02){
        
        bg = "sunset11.png";
    }
    else if(hour >= 02 && hour <= 04){
        fill("BLACK");
        textSize(30);
        text("TIME : 3 AM",200,100);
        bg = "sunset12.png";
    }
    backgroundImg = loadImage(bg);
    }
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here


