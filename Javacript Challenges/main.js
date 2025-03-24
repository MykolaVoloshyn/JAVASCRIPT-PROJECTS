//Removes .fade-out class from the body element when webpage
//is loaded. It makes the page to fade in after itsocntent is loaded
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.body.classList.remove("fade-out");
    }, 1000);
});

//POPUP FORM
function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("myForm").style.animation = "formPopupGrowth 1s";
}

function closeForm() {
    document.getElementById("myForm").style.animation = "formPopupShrink 1s";
    setTimeout(() => {
        document.getElementById("myForm").style.display = "none";
    }, 900);
}

//SLIDE SHOW
$(document).ready(function () {
    $("#slideshow > div:gt(0)").hide();

    setInterval(function () {
        $("#slideshow > div:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slideshow");
    }, 3000);
});
