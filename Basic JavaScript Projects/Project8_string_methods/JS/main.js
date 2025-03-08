function fullSentence() {
    //Displays a sentence that was made using concatenation
    let firstPart = "This sentence ";
    let secondPart = "was made ";
    let thirdPart = "using concatination.";
    let sentence = firstPart.concat(secondPart, thirdPart);

    document.getElementById("concatenate").innerHTML = sentence;
}

function sliceSentence() {
    //Displays a sliced section of the sentence
    let sentence =
        "Here is a useful link containing a list of JavaScript string methods:";
    let section = sentence.slice(10, 53);

    document.getElementById("slice").innerHTML = section;
}

function showRandomNumber() {
    //Assigns a random number to the variable, takes first 8 digits of it and turn into a string
    let randomNumber = Math.random();

    document.getElementById("random-number").innerHTML = randomNumber
        .toPrecision(8)
        .toString();
}
