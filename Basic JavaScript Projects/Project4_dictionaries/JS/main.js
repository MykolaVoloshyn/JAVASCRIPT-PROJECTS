function myDictionary() {
    //Creates an object named "Cat" and then deletes its property "age" before assigning it to the element with the id= "dictionary"
    var Cat = {
        name: "Nancy",
        color: "grey",
        age: 2,
    };
    delete Cat.age;
    document.getElementById("dictionary").innerHTML = Cat.age;
}
