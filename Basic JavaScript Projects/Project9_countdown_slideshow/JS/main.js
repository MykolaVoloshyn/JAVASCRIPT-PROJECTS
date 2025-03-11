let slideIndex = 1;
showSlide(slideIndex);

function showAnotherSlide(n) {
    /*Calls showSlide function and gives it another argument to show another
    picture*/
    showSlide((slideIndex += n));
}

function currentSlide(n) {
    /*Calls showSlide function and gives it an argument equal to the position
    of the .dot element*/
    showSlide((slideIndex = n));
}

function showSlide(n) {
    /* Changes styling parameters of .my-slides element and 
    adds/removes class name 'activ' to element that 
    already have class name 'dot'*/
    let i;
    let slides = document.getElementsByClassName("my-slides");
    let dots = document.getElementsByClassName("dot");

    /* If statements check if taken argument is bigger/smaller then number of 
    pictures in the slideshow and reassign a value of the variable slideIndex
     for displaying of pictures to stay in loop. */
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    //Changes display property to none for every .my-slides element
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //Removes class name 'active' from every element that has class name 'dot'
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //Changes display property to 'block' for the current img container
    slides[slideIndex - 1].style.display = "block";
    /*Adds class name 'active' for the .dot element that has the same
    position number that the current picture*/
    dots[slideIndex - 1].className += " active";
}

function countdown() {
    //Gets the user-inputted number of seconds and calls the function 'tick'
    let seconds = document.getElementById("seconds").value;

    function tick() {
        //Decreases the number by 1 and updates it in the .timer element
        seconds = seconds - 1;
        document.getElementById("timer").innerHTML = seconds;
        let time = setTimeout(tick, 1000);

        //Stops the timer if when countdown reaches -1
        if (seconds == -1) {
            alert("Time is up!");
            clearTimeout(time);
            document.getElementById("timer").innerHTML = "";
        }
    }

    tick();
}
