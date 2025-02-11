$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrig();


    // TODO 2 - Create Platforms

createPlatform(500, 625);
createPlatform(300, 700, 25, 50);
createPlatform(365, 675, 50, 25);
createPlatform(525, 625, 120, 25);
createPlatform(725, 625, 25, 250);
createPlatform(800, 700, 25, 50);
createPlatform(550, 595, 25, 50);

    // TODO 3 - Create Collectables

createCollectable(type.db, 525, 675);
createCollectable(type.db, 650, 550);
createCollectable(type.db, 875, 750);

    
    // TODO 4 - Create Cannons

createCannon("bottom", 700, 1000);
createCannon("right", 550, 1000);
createCannon("top", 475, 1000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
