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
    // toggleGrig();


    // TODO 2 - Create Platforms
    createPlatform(400, 400, 25, 150,);
    createPlatform(300, 640, 25, 100);
    createPlatform(345, 525, 50, 25);
    createPlatform(525, 400, 125, 25);
    createPlatform(550, 625, 200, 25);
    createPlatform(550, 570, 25, 170);
    // TODO 3 - Create Collectables
    createCollectable("database", 500, 500);
    createCollectable("database", 700, 250);
    createCollectable("database", 200, 250);

    
    // TODO 4 - Create Cannons

    createCannon("bottom", 700, 1000);
    createCannon("right", 550, 1500);
    createCannon("top", 475, 2000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
