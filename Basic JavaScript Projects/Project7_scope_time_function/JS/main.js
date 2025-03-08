let globalletiable = 77; //Assigning a value to a variable

function myFunction1() {
    //Returns a local variable
    let localletiable = 22;
    return localletiable;
}
function myFunction2() {
    //Tries to access a local variable from another function
    let num = ++localletiable;
    return num;
}
console.log(myFunction2());

function getTime() {
    //Displays a greeting depending on the time of day
    let time, greeting;

    time = new Date().getHours();

    if (6 <= time && time <= 11) {
        greeting = "Good morning!";
    } else if (12 <= time && time <= 18) {
        greeting = "Good afternoon!";
    } else if (19 <= time && time <= 23) {
        greeting = "Good evening!";
    } else {
        greeting = "Good night!";
    }

    document.getElementById("greeting").innerHTML = greeting;
}

function getAge() {
    //Displays a message depending on user's age
    let age = document.getElementById("age").value;

    if (age >= 16) {
        var permission = "You can get a driving license.";
    } else {
        var permission = "You can not get a driving license.";
    }

    document.getElementById("how-old").innerHTML = permission;
}
