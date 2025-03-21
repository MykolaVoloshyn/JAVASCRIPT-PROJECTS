function dataUpdate() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "ajax_challenge_response.txt", true);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("content").innerHTML = this.responseText;
        }
    };

    xhr.send();
}
