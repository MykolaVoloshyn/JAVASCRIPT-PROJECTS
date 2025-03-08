// function rideFunction() {
//     var height, canRide;
//     height = document.getElementById("height").value;
//     canRide = height < 52 ? "You are too short" : "You are tall enough";
//     document.getElementById("ride").innerHTML = canRide + " to ride.";
// }

function isAdult() {
    //Checks if the user is older then 18 year and assigns the appropriate value to the element with the id "vote"
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = age > 17 ? "You can vote!" : "You can't vote!";
    document.getElementById("vote").innerHTML = canVote;
}

function Vehicle(make, model, year, color) {
    //An object constructor
    this.Vehicle_Make = make;
    this.Vehicle_Model = model;
    this.Vehicle_Year = year;
    this.Vehicle_Color = color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trial Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    //Displays the fields of the Class Erik within the element with the id "keywords-and-constructions"
    document.getElementById("keywords-and-constructions").innerHTML =
        "Erik drives a " +
        Erik.Vehicle_Color +
        "-colored " +
        Erik.Vehicle_Model +
        " manufactured in " +
        Erik.Vehicle_Year +
        ".";
}

function Person(first, last, age, eyecolor) {
    //An object constructor
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}
var Lily = new Person("Lily", "Oldrin", 28);

function showInfo() {
    //Displays the fields of the Class Lily within the element with the id "new-and-this"
    document.getElementById("new-and-this").innerHTML =
        Lily.firstName +
        " " +
        Lily.lastName +
        " is " +
        Lily.age +
        " years old.";
}

function countFunction() {
    document.getElementById("nested-function").innerHTML = count(); //Displays result of count function within the element with the id "new-and-this"
    function count() {
        var startingPoint = Math.random(); //Assign a random number to the variable
        const multiplyByHundret = () => {
            startingPoint *= 100; //Multiplies the variable by 100
        };
        multiplyByHundret();
        return startingPoint;
    }
}
