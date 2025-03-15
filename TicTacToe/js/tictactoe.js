let activePlayer = "X"; //Keeps track of whose turn it is

let selectSquares = []; //Stores an array of moves to determine win condition

let animationLoop;

function checkIfSquareIsEmpty(squareNumber) {
    /*Goes through the selectSquares array and checks if chosen square number
    is not in the array*/
    if (!selectSquares.some((element) => element.includes(squareNumber))) {
        return true;
    }
}

//This function is for placing X or O in a square
function placeXOrO(squareNumber) {
    /*This condition ensures a square hasn't been selected already
    The some() method is used to check each element of the selectSquare
    array to see if it contains the square number clicked on*/
    if (checkIfSquareIsEmpty(squareNumber)) {
        //This variable retrieves the HTML element id that was clicked
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === "X") {
            //If activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = "url(images/X.jpg)";
            //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            //If activePlayer is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = "url(images/O.jpg)";
        }
    }

    //squareNumber and activePlayer are concatenated together and added to array
    selectSquares.push(squareNumber + activePlayer);
    //This calls a function to check for any win condition
    checkWinCondition();
    //This condition is for changing the active player
    if (activePlayer === "X") {
        activePlayer = "O";
    } else {
        activePlayer = "X";
    }
    //This function plays placement sound
    audio("./media/place.mp3");
    //This condition checks to see if it's the computer's turn
    if (activePlayer === "O") {
        disableClick();
        //This function waits 1 sec before the computer place an image and enables click
        setTimeout(function () {
            computersTurn();
        }, 1000);
    }
}

//This function results in a random square being selected by the computer
function computersTurn() {
    //This boolean is needed for our while loop
    let success = false;
    //This variable stores a random number 0 - 8
    let pickASquare;
    //This condition allows our whike loop to keep trying if a square is selected already
    while (!success) {
        //A random number between 0 and 8 is selected
        pickASquare = String(Math.floor(Math.random() * 9));
        //If the random number evaluated returns true, the square hasn't been selected yet
        if (checkIfSquareIsEmpty(pickASquare)) {
            placeXOrO(pickASquare);
            success = true;
        }
    }
}

/*This function parses the selectedSquares array to search for win conditions.
drawLine() function is called to draw a line on the screen if the condition is met.*/
function checkWinCondition() {
    if (arrayIncludes("0X", "1X", "2X")) drawWinLine(50, 100, 558, 100);
    else if (arrayIncludes("3X", "4X", "5X")) drawWinLine(50, 304, 558, 304);
    else if (arrayIncludes("6X", "7X", "8X")) drawWinLine(50, 508, 558, 508);
    else if (arrayIncludes("0X", "3X", "6X")) drawWinLine(100, 50, 100, 558);
    else if (arrayIncludes("1X", "4X", "7X")) drawWinLine(304, 50, 304, 558);
    else if (arrayIncludes("2X", "5X", "8X")) drawWinLine(508, 50, 508, 558);
    else if (arrayIncludes("6X", "4X", "2X")) drawWinLine(100, 508, 510, 90);
    else if (arrayIncludes("0X", "4X", "8X")) drawWinLine(100, 100, 520, 520);
    else if (arrayIncludes("0O", "1O", "2O")) drawWinLine(50, 100, 558, 100);
    else if (arrayIncludes("3O", "4O", "5O")) drawWinLine(50, 304, 558, 304);
    else if (arrayIncludes("6O", "7O", "8O")) drawWinLine(50, 508, 558, 508);
    else if (arrayIncludes("0O", "3O", "6O")) drawWinLine(100, 50, 100, 558);
    else if (arrayIncludes("1O", "4O", "7O")) drawWinLine(304, 50, 304, 558);
    else if (arrayIncludes("2O", "5O", "8O")) drawWinLine(508, 50, 508, 558);
    else if (arrayIncludes("6O", "4O", "2O")) drawWinLine(100, 508, 510, 90);
    else if (arrayIncludes("0O", "4O", "8O")) drawWinLine(100, 100, 520, 520);
    //This condition ckecks for a tie. If none of the above conditions are met
    //and 9 squares are selected the code executes
    else if (selectSquares.length >= 9) {
        audio("./media/tie.mp3");

        setTimeout(function () {
            resetGame();
        }, 1000);
    }
    //This function checks if an array includes 3 strings. it's used to check for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectSquares.includes(squareA);
        const b = selectSquares.includes(squareB);
        const c = selectSquares.includes(squareC);
        //If the 3 variables we pass are all included in our array then true is returned
        //and our else if condition executes the drawWinLine() function
        if (a === true && b === true && c === true) {
            return true;
        }
    }
}

//This function makes our body element temporarily unclickable
function disableClick() {
    document.body.style.pointerEvents = "none"; //Makes our body unclickable
    setTimeout(function () {
        document.body.style.pointerEvents = "auto";
    }, 1000);
}

/*This function takes a string parametr of the path you set earlier for
placement sound(./media/place.mp3) */
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play(); //play() method allows to play the assigned audio file
}

//This function utilizes HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById("win-lines");
    //This line gives us access to methods and properties to use on canvas
    const canvasContent = canvas.getContext("2d");

    let x1, x2, y1, y2, x, y;
    x1 = coordX1;
    x2 = coordX2;
    y1 = coordY1;
    y2 = coordY2;
    x = x1; //Stores temporary x axis data we update in our animation loop
    y = y1; //Stores temporary x axis data we update in our animation loop

    //This function interacts with the canvas
    function animateLineDrawing() {
        //This variable creates a loop
        animationLoop = requestAnimationFrame(animateLineDrawing);
        //Clears content from the last loop iteration
        canvasContent.clearRect(0, 0, 608, 608);
        canvasContent.beginPath();
        canvasContent.moveTo(x1, y1); // Moves us to line's starting point
        canvasContent.lineTo(x, y); //Indicates the line's endpoint
        canvasContent.lineWidth = 10;
        canvasContent.strokeStyle = "rgba(70, 255, 33, 0.8)"; //Sets line's color
        canvasContent.stroke(); //Draws everything we laid out above

        //Checks if we've reached the endpoints
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) x += 10; //Adds 10 to the previous end x endpoint
            if (y < y2) y += 10; //Adds 10 to the previous end y endpoint
            //This condition is necessary for the squares 6, 4, 2 win condition
            if (x >= x2 && y >= y2) cancelAnimationFrame(animationLoop);
        }

        //This condition is necessary for the squares 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) x += 10;
            if (y > y2) y -= 10;
            if (x > x2 && y <= y2) cancelAnimationFrame(animationLoop);
        }
    }

    //This function clears our canvas after win line was drawn
    function clear() {
        const animationLoop = requestAnimationFrame(clear); //Starts animation loop
        canvasContent.clearRect(0, 0, 608, 608); // Clears canvas
        cancelAnimationFrame(animationLoop); //Stops animation loop
    }

    disableClick(); //Disallows cleck while the win sound is playing
    audio("./media/winGame.mp3"); //Plays the win sound
    animateLineDrawing(); //Calls main animation loop
    setTimeout(function () {
        clear();
        resetGame();
    }, 1000); //Waits 3 sec, then clears the canvas, reset the game, and allows clicking again
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }
    cancelAnimationFrame(animationLoop);
    const canvas = document.getElementById("win-lines");
    const c = canvas.getContext("2d");
    c.clearRect(0, 0, 608, 608);
    selectSquares = [];
}
