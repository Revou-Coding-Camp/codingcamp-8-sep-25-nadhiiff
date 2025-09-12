welcomeMessage();

function welcomeMessage(name) {
    let username = prompt("Please enter your name:", "user");
    if (username){
        document.getElementById("welcome-user").innerText = username;
    }
}

function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    } else {
        alert("Thank you for your message, " + name + "!");
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
    }
}
