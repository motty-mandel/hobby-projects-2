// Assignment Code
var generateBtn = document.querySelector("#generate");

var min = 8;
var max = 128;


const upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const upperArray = upperCase.split("");
const lowerCase = ("abcdefghijklmnopqrstuvwxyz");
const lowerArray = lowerCase.split("");
const numbers = ("0123456789");
const numbersArray = numbers.split("");
const symbols = ("!#$%&'()*+,-./");
const symbolsArray = symbols.split("");

// Write password to the #password input
function getPasswordOptions() {
    let password = document.querySelector('#password');

    let passwordLength = prompt("How long do you want your password to be? Min. amount 8, max. amount 128.");
    if (passwordLength >= 8 && passwordLength <= 128) {
        console.log("length is good")
    } else if (passwordLength === null) {
        return;
    } else {
        window.confirm("Remember: Min amount 8, max amount 128");
        return;
    }
    
    let addUpper = confirm("Do you want to include uppercase letters?");
    if (addUpper) {
        console.log("uppercase worked");
    } else {
        console.log("no uppercase");
    }

    let addLower = confirm("Do you want to include lowercase letters?");
    if (addLower) {
        console.log("lowercase worked");
    } else {
        console.log("no lowercase");
    }
    
    let addNumbers = confirm("Do you want to include numbers?");
    if (addNumbers) {
        console.log("numbers worked");
    } else {
        console.log("no numbers");
    }
    
    let addSymbols = confirm("Do you want to include symbols?");
    if (addSymbols) {
        console.log("symbols worked");
    } else {
        console.log("no symbols");
    }

    
    var passwordOptions = {
        upper: addUpper,
        length: passwordLength, 
        symbols: addSymbols,
        lower: addLower,
        numbers: addNumbers
    }
    
    return passwordOptions;
}


function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomElement = arr[randomIndex];

    return randomElement;
}

function generatePassword() {
    var options = getPasswordOptions();
    var result = [];
    var concatCharacters = [];
    var randomCharacters = [];
    if (!options) return null;
    if (options.upper) {
        concatCharacters = concatCharacters.concat(upperArray);
        console.log(concatCharacters);
        randomCharacters.push(getRandom(upperArray));
        console.log(randomCharacters);
    } 
    for (var i = 0; i < options.length; i++) {
        var concatCharacters = getRandom(concatCharacters);
        result.push(concatCharacters);
    }
    for (var i = 0; i < randomCharacters.length; i++) {
        result[i] = randomCharacters[i];
    }
    return result.join("");

    
}

var generateBtn = document.querySelector("#generate");
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
