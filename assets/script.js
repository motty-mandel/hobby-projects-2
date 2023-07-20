// Assignment Code
var generateBtn = document.querySelector("#generate");

var allChars = [];

// Write password to the #password input
function writePassword() {
    var password = document.querySelector('#password');

    const passwordLength = prompt("How long do you want your password to be? Min. amount 8, max. amount 128.");
    if (passwordLength >= 8 && passwordLength <= 128) {
        console.log(passwordLength)
    } else if (passwordLength === null) {
        return;
    } else {
        window.confirm("Remember: Min amount 8, max amount 128");
        return;
    };
    
    const addUpper = confirm("Do you want to include uppercase letters?");
    if (addUpper) {
        var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        console.log("uppercase worked");
    } else {
        console.log("no uppercase");
    };

    const addLower = confirm("Do you want to include lowercase letters?");
    if (addLower) {
        var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
        console.log("lowercase worked");
    } else {
        console.log("no lowercase");
    };
    
    const addNumbers = confirm("Do you want to include numbers?");
    if (addNumbers) {
        var numbers = "0123456789".split("");
        console.log("numbers worked");
    } else {
        console.log("no numbers");
    };
    
    const addSymbols = confirm("Do you want to include symbols?");
    if (addSymbols) {
        var symbols = "!#$%&'()*+,-./".split("");
        console.log("symbols worked");
    } else {
        console.log("no symbols");
    };
    
    console.log(allChars);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
