const calculator = {
    displayValue: "0",
    firstOperand: null,
    waitSecondOperand: false,
    operator: null,
};

//Modifies values each time a button is clicked
function inputDigit(digit) {
    /*object destructuring assignment in JavaScript. Extracts 
    the displayValue and waitSecondOperand properties from 
    the calculator object. */
    const { displayValue, waitSecondOperand } = calculator;
    //Checks if the waitSecondOperand is true and sets displayValue to
    //the key value that was clicked on
    if (waitSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitSecondOperand = false;
    } else {
        //Overwrites displayValue if the current value is 0 otherwise it adds onto it
        calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
    }
}

//Handles decimal point
function inputDecimal(dot) {
    //Ensures that acidental clicking of the decimal point doesn't cause
    //bugs in the operation
    if (calculator.waitSecondOperand === true) return;
    //Adds a decimal point if displayValue doesn't contain it
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

//Handles operators
function handleOperaotor(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const valueOfInput = parseFloat(displayValue);
    /*Checks if operator already exists and if waitSecondOperand is true
    then updates the operator and exits from the function*/
    if (operator && calculator.waitSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }
    if (firstOperand == null) {
        calculator.firstOperand = valueOfInput;
    }
    //Checks if operator already exists
    else if (operator) {
        const valueNow = firstOperand || 0;
        /*If operator exists, property lookup is performed for the operator
        in the performCalculation object and the function that matches
        the operator is executed*/
        let result = performCalculation[operator](valueNow, valueOfInput);
        result = Number(result).toFixed(9);
        //Will remove any trailing 0's
        result = (result * 1).toString();
        calculator.displayValue = parseFloat(result);
        calculator.firstOperand = parseFloat(result);
    }
    calculator.waitSecondOperand = true;
    calculator.operator = nextOperator;
}

const performCalculation = {
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
    "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
    "=": (firstOperand, secondOperand) => secondOperand,
};
function calculatorReset() {
    calculator.displayValue = "0";
    calculator.firstOperand = null;
    calculator.waitSecondOperand = false;
    calculator.operator = null;
}

function updateDisplay() {
    const display = document.querySelector(".calculator-screen");
    display.value = calculator.displayValue;
}

updateDisplay();

/*Monitors buttos clicks */
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    //The target variable is an object that represent the element that was clicked
    const { target } = event;
    //Ensures only button clicks are processed
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        handleOperaotor(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains("decimal")) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains("all-clear")) {
        calculatorReset();
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
});
