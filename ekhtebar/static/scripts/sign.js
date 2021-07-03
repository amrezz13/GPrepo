const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

function navigation() {
    let hashname = window.location.hash;
    console.log(hashname);
    if (hashname == "#signin") {
        container.classList.remove("right-panel-active");
    } else if (hashname == "#signup") {
        container.classList.add("right-panel-active");
    }
}

function validateForm() {
    let password = document.forms["signupform"]["password"].value;
    let confirmPassword = document.forms["signupform"]["confirmPassword"].value;
    if (password === confirmPassword) {

        return true;
    } else {
        alert("password dont match");
        return false;
    }
}