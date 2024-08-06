//your parameter variables go here!

let cherryLX=40
let cherryLY=50




 
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 100;
  pWallpaper.grid_settings.cell_height = 100;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(245, 83, 199); //pink
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  let cherryLX=40 
  let cherryLY=50

  stroke (40, 84, 43) // green for stem stroke
  fill (201, 12, 22) //red fill for cherries
  
  line (cherryLX, cherryLY, cherryLY, cherryLX-20) // cherry stem left
  line (cherryLY+10, cherryLY, cherryLY, cherryLX-20) // cherry stem right 
  
  
  fill (201, 12, 22) //red fill for cherries
  stroke (201, 12, 22) // red stroke for cherries
  ellipse (cherryLX,cherryLY,cherryLX-20, cherryLX-20); // cherry left
  ellipse (cherryLY+10,cherryLY,cherryLX-20, cherryLX-20); // cherry right 

}




