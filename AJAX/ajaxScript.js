function getMessage() {
    //STEP1: Setup the XML HTTP Request object
    let ajaxRequest = new XMLHttpRequest();

    //Get input of name to display to user after  request has been made
    let inputValue = document.getElementById("fullName").value;
    //Function to display user input value once request has been made
    ajaxRequest.onload = function () {
        document.getElementById("thankYouMessage").innerHTML =
            "Thank you " + inputValue[0].toUpperCase() + inputValue.slice(1) + " for signing up!";
    };

    //STEP:2 Prepare the type of request and what to request from the server
    ajaxRequest.open("GET", "response.html", true);

    //STEP3: Defines the AJAX response callback method that
    //establishes whether the response was seccessful and where
    //the data should be displayed
    ajaxRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("content").innerHTML = ajaxRequest.responseText;
        }
    };

    //STEP:4 Send the request
    ajaxRequest.send();
}
