// Assignment code here
//**WHEN prompted for the length of the password**//
//**THEN I choose a length of at least 8 characters and no more than 128 characters**//
function passLength () {
var passwordLength = parseIntprompt("please choose between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === null) {
    alert("please choose a number between 8 and 128");
    passLength();
  }
}


//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
var chooseExtras;
var number= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lowerCase = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "F", "G", ",H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"]
//source: https://owasp.org/www-community/password-special-characters

if (confirm("Would You like any numbers in your password?")) {
chooseExtras = true;
alert("You have chosen to include a number");
}
else {alert("no numbers in this password");
}

if (confirm("how about a lower case letter?"))
chooseExtras = lowerCase.push;
alert("you have chosen a lowercase letter")

console.log(chooseExtras)

  








// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
  var passwordCriteria = alert("Welcome to the Password Generator.");
                   alert("For your password, you are going to need to supply:")
                   alert("A password length (between 8 to 128 characters)")
                   alert("at least (1) lowercase, and (1) uppercase character")
                   alert("at least (1) number")
                   alert("and finally at least one special character")
passLength();
smallLetters();
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
