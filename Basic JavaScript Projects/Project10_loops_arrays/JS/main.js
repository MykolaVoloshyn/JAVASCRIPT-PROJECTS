function callLoop() {
    //Assigns a string value created in while loop to .loop element
    let digit = "";
    let startPoint = 0;
    while (startPoint < 11) {
        digit += " / " + startPoint;
        startPoint++;
    }
    document.getElementById("loop").innerHTML = digit;
}

let instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumplet", "Flute"];
let content = "";
function forLoop() {
    //Goes through each element in the 'instruments' array and adds it to 'content'
    for (let i = 0; i < instruments.length; i++) {
        content += instruments[i] + "<br>";
    }

    document.getElementById("list-of-instruments").innerHTML = content;
}

function arrayFunction() {
    //Creates s list of car brands and assigns a string value to .array element
    let carBrands = [];
    carBrands[0] = "Audy";
    carBrands[1] = "BMW";
    carBrands[2] = "Peugeot";
    carBrands[3] = "Volkswagen";
    carBrands[4] = "Toyota";
    carBrands[5] = "Lamborgini";
    carBrands[6] = "Reno";
    document.getElementById("array").innerHTML =
        carBrands[3] + " is the most popular car brend in Europe.";
}

//Creates a JS object
let student = {
    name: "Edgar Alan",
    surname: "Po",
    major: "Poetry",
    year: "Third",
    address: ["Main Road 4836", "Boston", "MA", "51046"],
};
