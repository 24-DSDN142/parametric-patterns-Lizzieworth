//your parameter variables go here!

var Fruit = 1 // if statement 
//  1 = Orange , 2 = Apple

var BG = 1 // if statement 
//  1 = Sparkles , 2 = Bubbles

var Melon = 1// if statement 
// 1 = watermelom,, 2 = cantalope  

var SparkleX=75; // Controls sparkle X position
var SparkleY=25; // controlls sparkle Y position
var CherryX=40 // controll cherry x position
var CherryY=50  // controlls cherry y position
var MelonX = 22 // controlls watermelon and cantelope x position
var MelonY = 25 // controlls watermelon and cantelope y position
var DiamondX = 10 // controlls small diamond shape x 
var DiamondY = 10 // controlls small diamond shape y
var RainbowX = 50 // controlls rainboe x position
var RainbowY = 100 // controlls rainbow y position
var SparklebgX=87  // controlls all of the background smaller diamond shapes x
var SparklebgY=45 // controlls all of the background smaller diamond shapes y
var BubbleX = 10 // controlls the bubble shapes x 
var BubbleY = 50 // controlls bubble shape y
var OrangeX = 35 // controlls x position of orange and apple
var OrangeY = 5 // controlls y position of orange and apple 
var SunX = 50 // controlls position of sun
var SunY = 95 // controlls position of sun





//(DEVELOP_GLYPH)  GRID_WALLPAPER


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER)  ;
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 100;
  pWallpaper.grid_settings.cell_height = 100;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(13, 164, 252); //blue 
}

 
function my_symbol(x, y) { // do not rename this function. Treat this similarly to a Draw function
 
  
  drawSparkle (SparkleX, SparkleY)


  if (BG<=1){
    
    drawSparkleBG (SparklebgX, SparklebgY)
  }
  else {
 
    drawBubbles (BubbleX, BubbleY)
  }

  drawRainbow (RainbowX, RainbowY);
  
  drawCherry (CherryX,CherryY);

  drawMelonA (MelonX, MelonY)

  drawMelonB (MelonX, MelonY)
  
  if (Melon<=1){
  
    drawMelonA (MelonX, MelonY)
  }
  else {
  
    drawMelonB (MelonX, MelonY)
  }

  drawDiamond (DiamondX,DiamondY)


  if (Fruit <=1){
    
    drawOrange (OrangeX, OrangeY)
   }
   else {
   
     drawApple (OrangeX, OrangeY)
    }
 

  drawSun (SunX, SunY)
  
  




}





function drawCherry(CherryX, CherryY){

  
  fill(40, 84, 43) // greef for leaf on cherry 
  stroke(13, 164, 252) // same pink as BG

  ellipse(CherryX+16, CherryY-28, 11, 5) //size of leaf

  stroke (40, 84, 43) // green for stem stroke
  fill (201, 12, 22) //red fill for cherries

  line (CherryX, CherryY, CherryX+10, CherryY-30) // cherry stem left
  line (CherryX+20, CherryY, CherryX+10, CherryY-30) // cherry stem right 


  fill (201, 12, 22) //red fill for cherries
  stroke (201, 12, 22) // red stroke for cherries

  ellipse (CherryX ,CherryY, 20, 20); // cherry left
  ellipse (CherryX+20, CherryY, 20, 20); // cherry right 

}




function drawSparkle(SparkleX,SparkleY){
 
  fill(255) // centre of the sparkle 
  stroke (255)
  ellipse (SparkleX,SparkleY,30,30) // ellipse in middle 

  fill (13, 164, 252); //blue
  stroke (13, 164, 252); //blue

  ellipse (SparkleX-15,SparkleY-15,60-30,10+20) 
  ellipse (SparkleX+15,SparkleY-15,60-30,10+20)
  ellipse (SparkleX-15,SparkleY+15,60-30,10+20)
  ellipse (SparkleX+15,SparkleY+15,60-30,10+20)

}


function drawMelonA(MelonX, MelonY){
  
  
    fill (245, 22, 104) //watermelon pink 
    stroke(18, 120, 42)
  
    ellipse(MelonX,MelonY,30, 30) //watermelon body 
  
    fill (13, 164, 252)
    stroke(13, 164, 252)
  
    rect(MelonX-15,MelonY-15,30,15) //cutting off top half of wateremelon
    
    fill (48, 31, 37)
    stroke (48, 31, 37)
  
    ellipse (MelonX-5,MelonY+3,0.5,1) //watermelon seeds 
    ellipse (MelonX,MelonY+3,0.5,1)
    ellipse (MelonX+5,MelonY+3,0.5,1)

}



function drawMelonB(MelonX, MelonY) {

  
  
    fill (245, 168, 15) //cantelope orange  
    stroke(18, 120, 42)
  
    ellipse(MelonX, MelonY, 30, 30) //cantelope body 
    
    fill (13, 164, 252)
    stroke(13, 164, 252)
  
    rect(MelonX-15,MelonY-15,30,15) //cutting off top half of cantelope
    
    fill (13, 164, 252)
    stroke (13, 164, 252)

    ellipse(MelonX,MelonY-2,18,18)


}

function drawDiamond (DiamondX, DiamondY){



  fill (255)
  stroke (255)
  ellipse (DiamondX, DiamondY, 10, 10)

  fill (13, 164, 252); //blue
  stroke (13, 164, 252); //blue

  ellipse (DiamondX-5, DiamondY-5, 10, 10)
  ellipse (DiamondX+5, DiamondY-5, 10, 10)
  ellipse (DiamondX+5, DiamondY+5, 10, 10)
  ellipse (DiamondX-5, DiamondY+5, 10, 10)
}

function drawRainbow(RainbowX, RainbowY){


fill (247, 25, 25) //red
stroke (247, 25, 25)
ellipse (RainbowX, RainbowY, 95, 95)


fill  (252, 152, 3)  //orange
stroke (252, 152, 3)
ellipse (RainbowX, RainbowY, 90, 90)

fill  (255, 234, 3) // yellow
stroke (255, 234, 3)
ellipse (RainbowX, RainbowY, 85, 85)


fill  (7, 227, 29) //green 
stroke (7, 227, 29)
ellipse (RainbowX, RainbowY, 80, 80)

fill  (7, 187, 242) //blue
stroke (7, 187, 242)
ellipse (RainbowX, RainbowY, 75, 75)

fill  (198, 9, 227) // purple
stroke (198, 9, 227)
ellipse (RainbowX, RainbowY, 70, 70)

fill  (13, 164, 252) //blue
stroke (13, 164, 252)
ellipse (RainbowX, RainbowY, 65, 65)


fill  (13, 164, 252) //blue for rect
stroke (13, 164, 252)
rect (RainbowX-49, RainbowY, RainbowX+48, RainbowY)
}


function drawSparkleBG(SparkbgX, sparkbgY){


fill(255)
  stroke(255)
  ellipse (15,50, 20, 20) // diamond left 

 fill (3, 164, 252)
 stroke(3, 164, 252)
 ellipse (SparklebgX-62, SparklebgY+15, 20, 20) 
 ellipse (SparklebgX-82, SparklebgY+15, 20, 20)
 ellipse (SparklebgX-62, SparklebgY-5, 20, 20)
 ellipse (SparklebgX-82, SparklebgY-5, 20, 20)


 fill (255)
 stroke (255)
 ellipse (87, 45, 10, 10) // diamond right 

 fill (13, 164, 252); //blue
 stroke (13, 164, 252); //blue
 ellipse (SparklebgX-5, SparklebgY-5, 10, 10)
 ellipse (SparklebgX+5, SparklebgY-5, 10, 10)
 ellipse (SparklebgX+5, SparklebgY+5, 10, 10)
 ellipse (SparklebgX-5, SparklebgY+5, 10, 10)


 fill (13, 164, 252); //blue
 stroke (13, 164, 252); //blue
 ellipse (SparklebgX-5, SparklebgY-5, 10, 10)
 ellipse (SparklebgX+5, SparklebgY-5, 10, 10)
 ellipse (SparklebgX+5, SparklebgY+5, 10, 10)
 ellipse (SparklebgX-5, SparklebgY+5, 10, 10)

}


function drawBubbles(BubbleX, BubbleY){


  fill  (198, 9, 227) // purple
  stroke (255)
  ellipse (BubbleX+5, BubbleY, 15, 15) 

  fill  (250, 50, 197) // pink
  stroke (255)
  ellipse (BubbleX, BubbleY+10, 10, 10)

  fill  (245, 105, 184) // light pink
  stroke (255)
  ellipse (BubbleX, BubbleY-8, 7, 7)


  fill  (250, 50, 197) // pink
  stroke (255)
  ellipse (BubbleX+77, BubbleY-5, 15, 15) 

  fill  (198, 9, 227) // purple
  stroke (255)
  ellipse (BubbleX+70, BubbleY, 10, 10) 

  fill  (245, 105, 184) // light pink
  stroke (255)
  ellipse (BubbleX+80, 60, 9, 9)

}

function drawOrange(OrangeX, OrangeY){



  stroke (40, 84, 43) // green for stem stroke
  fill (40, 84, 43)

  line (OrangeX, OrangeY+9, 37, 5)

  ellipse (OrangeX, OrangeY, 2, 1) // orange leaf 


  fill (250, 123, 12) //orange body 
  stroke (250, 123, 12)

  ellipse (OrangeX, OrangeY+9, 12, 12)

}

function drawApple (OrangeX, OrangeY){

  stroke (40, 84, 43) // green for stem stroke
  fill (40, 84, 43)

  line (OrangeX, OrangeY+9, 37, 5)

  ellipse (OrangeX, OrangeY, 2, 1) // orange leaf 


  fill (237, 5, 43) //apple body 
  stroke (237, 5, 43)

  ellipse (OrangeX, OrangeY+9, 12, 12)
}

function drawSun (SunX, SunY) {



  fill  (255, 234, 3) // yellow
  stroke (255, 234, 3)

  ellipse (SunX, 99, 30, 32)

  line (SunX, SunY, 50, 75)
  line (SunX, SunY, 39, 77)
  line (SunX, SunY, 32, 82)
  line (SunX, SunY, 28, 88)
  line (SunX, SunY, 26, 96)

  line (SunX, SunY, 50, 75)
  line (SunX, SunY, 61, 77)
  line (SunX, SunY, 68, 82)
  line (SunX, SunY, 73, 88)
  line (SunX, SunY, 75, 96)

  fill (13, 164, 252)
  stroke(13, 164, 252)
  
  rect (SunX-49, SunY, 99, 99)
}


