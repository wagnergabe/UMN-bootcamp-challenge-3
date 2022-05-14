// Assignment code here
//**WHEN prompted for the length of the password**//
//**THEN I choose a length of at least 8 characters and no more than 128 characters**//
function passLength () {
var passwordLength = prompt("please choose between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("please choose between 8 and 128");
    passLength();
  } else (passwordLength === null) {
    alert("Please input a selection");
    passLength();
  }
}



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
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
