const passwordBox = document.getElementById("password");
const genreateButton = document.getElementById("generate");
const lenght = 12;

const upeerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "!@#$%^&*()_+={}[]<>/,";

const allVal = upeerCase + lowerCase + numbers + symbol;

function generatePassowrd(){

    let password = "";
    while (lenght > password.length) {
        password += allVal[Math.round(Math.random() * allVal.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}

genreateButton.addEventListener("click", generatePassowrd);