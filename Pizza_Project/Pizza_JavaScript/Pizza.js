/*Initializes our string so it can get passed from function to function,
growing line by line into a full receipt */
function getReceipt() {
    let receiptText = "<h3> Your Order:</h3>";
    let totalPrice = 0;
    let sizePrice = 0;
    let sizeArray = document.getElementsByClassName("size");
    let selectedSize;
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            receiptText = receiptText + selectedSize + "<br>";
        }
    }

    switch (selectedSize) {
        case "Personal Pizza":
            sizePrice = 6;
            break;
        case "Small Pizza":
            sizePrice = 8;
            break;
        case "Medium Pizza":
            sizePrice = 10;
            break;
        case "Large Pizza":
            sizePrice = 14;
            break;
        case "Extra Large Pizza":
            sizePrice = 16;
            break;
    }

    totalPrice = sizePrice;
    console.log(selectedSize + " = $" + sizePrice + ".00");
    console.log("size receiptText: " + receiptText);
    console.log("subtotal: $" + totalPrice + ".00");
    getTopping(totalPrice, receiptText);
}

/*Checks what toppings were selected, adds them to the receipt text,
counts total price, shows receipt text and total price on the web page */
function getTopping(totalPrice, receiptText) {
    let toppingTotal = 0;
    let selectedToppings = [];
    let toppingsArray = document.getElementsByClassName("toppings");
    let veggiesArray = document.getElementsByClassName("veggies");

    for (let i = 0; i < veggiesArray.length; i++) {
        if (veggiesArray[i].checked) {
            selectedToppings.push(veggiesArray[i].value);
            console.log("selected topping item: (" + veggiesArray[i].value + ")");
            receiptText = receiptText + veggiesArray[i].value + "<br>";
        }
    }

    for (let j = 0; j < toppingsArray.length; j++) {
        if (toppingsArray[j].checked) {
            selectedToppings.push(toppingsArray[j].value);
            console.log("selected topping item: (" + toppingsArray[j].value + ")");
            receiptText = receiptText + toppingsArray[j].value + "<br>";
        }
    }

    let toppingCount = selectedToppings.length;

    if (toppingCount > 1) toppingTotal = toppingCount - 1;
    else toppingTotal = 0;

    totalPrice = totalPrice + toppingTotal;
    console.log("total selected toping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping =  $" + toppingTotal + ".00");
    console.log("topping  receiptText: " + receiptText);
    console.log("Purchase Total: $" + totalPrice + ".00");

    document.getElementById("showText").innerHTML = receiptText;
    document.getElementById("showPrice").innerHTML =
        "<h3>Total: <strong>$" + totalPrice + ".00" + "</strong></h3>";
}
