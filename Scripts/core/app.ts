// IIFE - Immediately Invoked Function Expression
(function () {

  // Ryan Quigley
  // 200239087
  // Georgian College
  // COMP-1073

  let canvas: HTMLElement;
  let canvasWidth: number;
  let canvasHeight: number;
  let canvasHalfWidth: number;
  let canvasHalfHeight: number;
  let stage: createjs.Stage;
  let die1: number;
  let die1Label: objects.Label;
  let die2: number;
  let die2Label: objects.Label;
  let roll: number;
  let rollButton: objects.Button;
  let firstDie: objects.Button;
  let secondDie: objects.Button;

  function Start(): void {

    canvas = document.getElementById("canvas");

    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);
    stage.enableMouseOver(20);

    Main(); // call the main function
  }

  /**
   * 
   * 
   * @param {createjs.Event} event 
   */
  function Update(event: createjs.Event): void {
    stage.update();
  }


  function Main(): void {

    canvasWidth = window.innerWidth * 1.5;
    canvasHeight = window.innerHeight * 1.5;
    canvasHalfWidth = canvasWidth * 0.5;
    canvasHalfHeight = canvasHeight * 0.5;

    // Dice Labels
    die1Label = new objects.Label("0", "30px", "Times New Roman", "#000000", canvasHalfWidth - 100, canvasHalfHeight, false);
    stage.addChild(die1Label);
    die2Label = new objects.Label("0", "30px", "Times New Roman", "#000000", canvasHalfWidth + 300, canvasHalfHeight, false);
    stage.addChild(die2Label);

    // Dice Images
    firstDie = new objects.Button("../../Assets/images/blank.png", canvasHalfWidth - 200, canvasHalfHeight - 250, false, canvasHalfWidth * 0.1, canvasHalfHeight * 0.1);
    stage.addChild(firstDie);
    secondDie = new objects.Button("../../Assets/images/blank.png", canvasHalfWidth + 200, canvasHalfHeight - 250, false, 1, 1);
    stage.addChild(secondDie);

    // Places the Roll button
    rollButton = new objects.Button("../../Assets/images/rollButton.png", canvasHalfWidth + 100, canvasHalfHeight + 100, true, 150, 50);
    stage.addChild(rollButton);

    // When the Roll button is pushed, call the Roll function
    rollButton.on("click", function (event: createjs.MouseEvent) {
      Roll();
    })

    canvas.setAttribute("width", canvasWidth.toString());
    canvas.setAttribute("height", canvasHeight.toString());
  }

    // Creates the dice roll
    function randomNumber() {
      roll = Math.floor(Math.random() * 6) + 1;
      return roll;
    }

    function Roll() { // Rolls the dice
      die1 = randomNumber();
      die2 = randomNumber();

      // Different dice roll causes different image and label
      switch (die1) {
        case 1: {
          firstDie = new objects.Button("../../Assets/images/1.png", canvasHalfWidth - 200, canvasHalfHeight - 250, false, canvasHalfWidth * 0.1, canvasHalfHeight * 0.1);
          stage.addChild(firstDie);
          die1Label.text = "1";
        } break;
        case 2: {
          firstDie = new objects.Button("../../Assets/images/2.png", canvasHalfWidth - 200, canvasHalfHeight - 250, false, canvasHalfWidth * 0.1, canvasHalfHeight * 0.1);
          stage.addChild(firstDie);
          die1Label.text = "2";
        } break;
        case 3: {
          firstDie = new objects.Button("../../Assets/images/3.png", canvasHalfWidth - 200, canvasHalfHeight - 250, false, canvasHalfWidth * 0.1, canvasHalfHeight * 0.1);
          stage.addChild(firstDie);
          die1Label.text = "3";
        } break;
        case 4: {
          firstDie = new objects.Button("../../Assets/images/4.png", canvasHalfWidth - 200, canvasHalfHeight - 250, false, canvasHalfWidth * 0.1, canvasHalfHeight * 0.1);
          stage.addChild(firstDie);
          die1Label.text = "4";
        } break;
        case 5: {
          firstDie = new objects.Button("../../Assets/images/5.png", canvasHalfWidth - 200, canvasHalfHeight - 250, false, canvasHalfWidth * 0.1, canvasHalfHeight * 0.1);
          stage.addChild(firstDie);
          die1Label.text = "5";
        } break;
        case 6: {
          firstDie = new objects.Button("../../Assets/images/6.png", canvasHalfWidth - 200, canvasHalfHeight - 250, false, canvasHalfWidth * 0.1, canvasHalfHeight * 0.1);
          stage.addChild(firstDie);
          die1Label.text = "6";
        } break;
      }

      // Different dice roll causes different image and label
      switch (die2) {
        case 1: {
          secondDie = new objects.Button("../../Assets/images/1.png", canvasHalfWidth + 200, canvasHalfHeight - 250, false, 1, 1);
          stage.addChild(secondDie);
          die2Label.text = "1";
        } break;
        case 2: {
          secondDie = new objects.Button("../../Assets/images/2.png", canvasHalfWidth + 200, canvasHalfHeight - 250, false, 1, 1);
          stage.addChild(secondDie);
          die2Label.text = "2";
        } break;
        case 3: {
          secondDie = new objects.Button("../../Assets/images/3.png", canvasHalfWidth + 200, canvasHalfHeight - 250, false, 1, 1);
          stage.addChild(secondDie);
          die2Label.text = "3";
        } break;
        case 4: {
          secondDie = new objects.Button("../../Assets/images/4.png", canvasHalfWidth + 200, canvasHalfHeight - 250, false, 1, 1);
          stage.addChild(secondDie);
          die2Label.text = "4";
        } break;
        case 5: {
          secondDie = new objects.Button("../../Assets/images/5.png", canvasHalfWidth + 200, canvasHalfHeight - 250, false, 1, 1);
          stage.addChild(secondDie);
          die2Label.text = "5";
        } break;
        case 6: {
          secondDie = new objects.Button("../../Assets/images/6.png", canvasHalfWidth + 200, canvasHalfHeight - 250, false, 1, 1);
          stage.addChild(secondDie);
          die2Label.text = "6";
        } break;
      }
    }

    
  // window binding events
  window.onload = Start;

})();
