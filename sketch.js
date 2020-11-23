var car, wall
var speed, weight

function setup() {

speed = random(55,90)
weight = random(400,1500)

createCanvas(1600,400);
car = createSprite(40, 200, 50, 50);
wall = createSprite(1500,200,60,height/2);
wall.shapeColor = color(80,80,80)
}

function draw() {

background(255,255,255);  
car.velocityX = speed

if(wall.x-car.x <= (wall.width+car.width)/2){

car.velocityX = 0
var deformation = 0.5*speed*speed*weight/2500

if(deformation>80 && deformation<180){

text("good car",100,1400)
car.shapeColor = "orange"
}

if(deformation>180){

text("worst car",100,1400)
car.shapeColor = "red" 

}

if(deformation<80){

text("excellent car",100,1400)
car.shapeColor = "yellow"

}

}

drawSprites();
}