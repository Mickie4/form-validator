let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2')

//Show input error message
function showError(input, message) {
    let formControl = input.parentElement;
    formControl.className = "form-control error";
    let small = formControl.querySelector("small");
    small.innerText = message;
}

//Show success outline

// Check email is valid

function isValidEmail(email, value) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function showSuccess(input) {
    let formControl = input.parentElement;
    formControl.className = "form-control success";
}

//Event Listeners
form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (username.value === "") {
        showError(username, "Username is required")
    } else {
        showSuccess(username);
    }

    if (email.value === "") {
        showError(email, "Email is required")
    } else if (!isValidEmail(email.value)) {
        showError(email, "Email is not valid");
    } else {
        showSuccess(email);
    }

    if (password.value === "") {
        showError(password, "Password is required")
    } else {
        showSuccess(password);
    }

    if (password2.value === "") {
        showError(password2, "Password is required")
    } else {
        showSuccess(password2);
    }

})