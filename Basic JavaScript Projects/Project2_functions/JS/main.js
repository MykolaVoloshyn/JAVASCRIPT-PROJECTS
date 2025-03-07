function changeFont() {
    //Changes color and size of the text within the element with an id="paragraph"
    var color = "red";
    var size = "22px";
    document.getElementById("paragraph").style.color = color;
    document.getElementById("paragraph").style.fontSize = size;
}

function concatenateText() {
    //Concatenate text and assign it to the element with id="concatenate"
    var sentence = "Congratulations!!! ";
    sentence += "You won!!!";
    document.getElementById("concatenate").innerHTML = sentence;
}
