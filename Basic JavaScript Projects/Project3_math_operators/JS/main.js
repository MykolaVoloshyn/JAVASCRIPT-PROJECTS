function addNumbers() {
    //Adds two numbers
    var addition = 7 + 1;
    document.getElementById("addition").innerHTML = "7 + 1 = " + addition;
}

function subtractNumbers() {
    //Subtracts two numbers
    var subtraction = 78 - 36;
    document.getElementById("subtraction").innerHTML =
        "78 - 36 = " + subtraction;
}

function multiplicateNumbers() {
    //Multiply two numbers
    var multiplication = 11 * 12;
    document.getElementById("multiplication").innerHTML =
        "11 * 12 = " + multiplication;
}

function divideUsingModulusOperator() {
    //Divide two numbers with the Modulus operator
    var division = 961 % 113;
    document.getElementById("division").innerHTML =
        "When you divide 961 by 113 you have a reminder of: " + division;
}

function multipleOperations() {
    var simpleMath = ((7 + 1) * 41) / 15 - 8;
    document.getElementById("math").innerHTML =
        "7 plus 1, multiplied by 41, divided by 15 and then subtracted by 8 equals " +
        simpleMath;
}

function getRandomNumber() {
    //Assign a randon number using the method 'ramdom' of the Math object
    var rundomNumber = Math.random();
    document.getElementById("random").innerHTML =
        "This is a random number: " + rundomNumber;
}

function incrementNumber() {
    //Increment number 8
    var number = 8;
    number++;
    document.getElementById("increment").innerHTML = number;
}

function decrementNumber() {
    //Decrement number 8
    var number = 8;
    document.getElementById("decrement").innerHTML = --number;
}
