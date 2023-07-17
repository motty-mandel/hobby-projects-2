// Assignment Code
var generateBtn = document.querySelector("#generate");

var min = 8;
var max = 128;

const symbols = ("!#$%&'() *+,-./")

// Write password to the #password input
function writePassword() {
    let password = document.querySelector('#password');

    let passwordLength = prompt("How long do you want your password to be? Min. amount 8, max. amount 128.");
    if (passwordLength >= 8 && passwordLength <= 128) {
        console.log("length is good")
    } else if (passwordLength === null) {
        return;
    } else {
        return;
    }

    let addUpper = confirm("Do you want to include uppercase letters?");
    if (addUpper) {
        const upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        const upperArray = upperCase.split("");

        document.getElementById("password").innerHTML = upperArray[Math.floor(Math.random() * upperCase.length)];
    } else {
        console.log("no uppercase");
    }

    let addLower = confirm("Do you want to include lowercase letters?");
    if (addLower) {
        const lowerCase = ("abcdefghijklmnopqrstuvwxyz");
        const lowerArray = lowerCase.split("");

        document.getElementById("password").innerHTML = lowerArray[Math.floor(Math.random() * lowerCase.length)];
    } else {
        console.log("no lowercase");
    }
    
    let addNumbers = confirm("Do you want to include numbers?");
    if (addNumbers) {
        const numbers = ("0123456789");
        const numbersArray = numbers.split("");

        document.getElementById("password").innerHTML = numbersArray[Math.floor(Math.random() * numbers.length)];
    } else {
        console.log("no numbers");
    }
    
    let addSymbols = confirm("Do you want to include symbols?");
    if (addSymbols) {
        const symbols = ("!#$%&'() *+,-./");
        const symbolsArray = symbols.split("");

        document.getElementById("password").innerHTML = symbolsArray[Math.floor(Math.random() * symbols.length)];
        
    } else {
        console.log("no symbols");
    }

    return;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
