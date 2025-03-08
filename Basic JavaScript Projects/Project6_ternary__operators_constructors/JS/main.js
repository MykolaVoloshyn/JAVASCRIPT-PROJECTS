// function rideFunction() {
//     var height, canRide;
//     height = document.getElementById("height").value;
//     canRide = height < 52 ? "You are too short" : "You are tall enough";
//     document.getElementById("ride").innerHTML = canRide + " to ride.";
// }

function isAdult() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = age > 17 ? "You can vote!" : "You can't vote!";
    document.getElementById("vote").innerHTML = canVote;
}

function Vehicle(make, model, year, color) {
    this.Vehicle_Make = make;
    this.Vehicle_Model = model;
    this.Vehicle_Year = year;
    this.Vehicle_Color = color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trial Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
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
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}
var Lily = new Person("Lily", "Oldrin", 28);

function showInfo() {
    document.getElementById("new-and-this").innerHTML =
        Lily.firstName +
        " " +
        Lily.lastName +
        " is " +
        Lily.age +
        " years old.";
}

function countFunction() {
    document.getElementById("nested-function").innerHTML = count();
    function count() {
        var startingPoint = Math.random();
        const multiplyByHundret = () => {
            startingPoint *= 100;
        };
        multiplyByHundret();
        return startingPoint;
    }
}
