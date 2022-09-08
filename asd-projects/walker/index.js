/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "LEFT":37,
    "RIGHT": 39,
    "UP":38,
    "DOWN": 40,
    "ENTER": 13
  }

  var locateX = 0;
  var locateY = 0;
  var speedX = 0;
  var speedY = 0;

  var $walkerLocationX;
  var $walkerLocationY;
  var boardWidth = board.width;
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
 // $(document).on('keypress', checkPosition);                          //check the location of the game item and stop it when it reaches the edge
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    
    repositionGameItem();
    redrawGameItem();
    checkPosition();
  }
  //X Axis
  //if the x axis is greater than the width of the board
    //stop at board width
  //if the x axis is less than the width of the board
    //stop at board width

  //Y Axis
  //if the y axis is greater than the height of the board
    //stop at the board height
  //if the y axis is less than the height of the board
    //stop at the board height
  
  //stop X axis  
  function checkPosition(event){
    $walkerLocationX = $("#walker").css("left", event.pageX);
    $walkerLocationY = $("#walker").css("top", event.pageY);

    if($walkerLocationX >= boardWidth) {
        speedX = 0;
      } else if($walkerLocationX <= 0) {
        speed = 0;
      }
    //stop  Y axis
    if($walkerLocationY >= boardWidth) {
      speedY = 0;
    } else if($walkerLocationY <= 0) {
      speedY = 0;
    }
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    
    if(event.which === KEY.ENTER) {
      console.log(boardWidth);
    } else if(event.which === KEY.DOWN) {
      speedY = 5;
    } else if(event.which === KEY.UP) {
      speedY = -5;
    } else if(event.which === KEY.LEFT) {
      speedX = -5;
    } else if(event.which === KEY.RIGHT) {
      speedX = 5;
    }
  }

  function handleKeyUp(event) {
    
    if(event.which === KEY.ENTER) {
      console.log("enter pressed");
    } else if(event.which === KEY.DOWN) {
      speedY = 0;
    } else if(event.which === KEY.UP) {
      speedY = 0;
    } else if(event.which === KEY.LEFT) {
      speedX = 0;
    } else if(event.which === KEY.RIGHT) {
      speedX = 0;
    }
  }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameItem() {
    //access the box on its x axis and move it by whatever value speed currently holds
    locateX += speedX;
    //access the box on its y axis and move it by whatever value speed currently holds
    locateY += speedY;
  }

  function redrawGameItem() {
    $("#walker").css("left", locateX); //draw the box in the new location
    $("#walker").css("top", locateY); //draw the box in the new location
  }




 // End of runProgram function 
}
