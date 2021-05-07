var car1,wall1,wall2,wall3,car2,car3,car4,wall4;
var speed1,speed2,speed3,speed4;

function setup() {
  createCanvas(1600,800);
  car1=createSprite(100, 40, 30, 30);
  car1.shapeColor="blue"
  car2=createSprite(100,140,30,30);
  car2.shapeColor="blue"
  car3=createSprite(100,240,30,30);
  car3.shapeColor="blue"
  car4=createSprite(100,340,30,30)
  car4.shapeColor="blue"
  speed1=Math.round(random(20,120))
  speed2=Math.round(random(20,120))
  speed3=Math.round(random(20,120))
  speed4=Math.round(random(20,120))
  weight1=Math.round(random(200,800))
  weight2=Math.round(random(200,800))
  weight3=Math.round(random(200,800))
  weight4=Math.round(random(200,800))
  wall1=createSprite(1000,40,10,60)
  wall1.shapeColor="white"
  wall2=createSprite(1000,140,10,60)
  wall2.shapeColor="white"
  wall3=createSprite(1000,240,10,60)
  wall3.shapeColor="white"
  wall4=createSprite(1000,340,10,60)
  wall4.shapeColor="white"
  a=createSprite(width/2,85,width,10)
  b=createSprite(width/2,185,width,10)
  c=createSprite(width/2,285,width,10)
  d=createSprite(width/2,385,width,10)
  a.shapeColor="purple"
  b.shapeColor="purple"
  c.shapeColor="purple"
  d.shapeColor="purple"

  car1.velocityX=speed1;
  car2.velocityX=speed2;
  car3.velocityX=speed3;
  car4.velocityX=speed4;

  
  


}

function draw() {
  background("black");  
 
  if (wall1.x-car1.x<(wall1.width/2)+(car1.width/2)){
    car1.velocityX=0

    var deformation1=(speed1*speed1*weight1/45000)

    if (deformation1>0 && deformation1<50){

    car1.shapeColor="green"

    }
    
    if (deformation1>=50 && deformation1<100){
    
    car1.shapeColor="yellow"

  }

    if (deformation1>=100){
      car1.shapeColor="red"
    }

}


  if (wall2.x-car2.x<=(car2.width/2)+(wall2.width/2)){
     
      car2.velocityX=0;

    var deformation2=(speed2*speed2*weight2)/45000

      if (deformation2>0 && deformation2<50){

        car2.shapeColor="green"
      }

      if (deformation2>=50 && deformation2<100){


        car2.shapeColor="yellow"

      }

      if (deformation2>=100){
        car2.shapeColor="red"
      }
     
      

  }
  
  if (wall3.x-car3.x<=(wall3.width/2)+(car3.width/2)){
    car3.velocityX=0;

     var deformation3=(weight3*speed3*speed3/(45000))

    console.log(deformation3)

    if (deformation3>0 && deformation3<50){
   
      car3.shapeColor="green"

    }

    if (deformation3>=50 && deformation3<100){

     car3.shapeColor="yellow"

    }

    if (deformation3>=100){
      car3.shapeColor="red"


    }

  }


   if (wall4.x-car4.x<=(car4.width/2)+(wall2.width)){

   car4.velocityX=0;

   var deformation4=weight4*speed4*speed4/45000

   if (deformation4>0 && deformation4<50){
     car4.shapeColor="green"
   }


   if (deformation4>=50 && deformation4<100){
     car4.shapeColor="yellow"
   }

   if (deformation4>=100){
     car4.shapeColor="red"
   }

   }






  drawSprites();
  textSize(30)
  fill("cyan")
  text("Deformation = (Speed of car * Speed of car * Weight of car) / 45000",200,460)
  fill("green")
  text("Deformation range : 0 - 50 : Safe",250,520)
  fill("yellow")
  text("Deformation range : 50 - 100 : Moderate Risk",250,580)
  fill("red")
  text("Deformation range : >100 : High Risk",250,640)
  textSize(25)
  fill(car1.shapeColor)
  text("Weight = " +weight1,1100,30)
  text("Speed of car = "+speed1,1100,60);
  text("Deformation = "+deformation1,300,45)
  fill(car2.shapeColor)
  text("Weight = "+weight2,1100,130)
  text("Speed of car = "+speed2,1100,160);
  text("Deformation = "+deformation2,300,145)
  fill(car3.shapeColor)
  text("Weight = "+weight3,1100,230)
  text("Speed of car = "+speed3,1100,260);
  text("Deformation = "+deformation3,300,245)
  fill(car4.shapeColor)
  text("Weight = "+weight4,1100,330)
  text("Speed of car = "+speed4,1100,360);
  text("Deformation = "+deformation4,300,345)
}