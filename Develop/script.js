// Assignment code here
//**WHEN prompted for the length of the password**//
//**THEN I choose a length of at least 8 characters and no more than 128 characters**//
var choiceArr = [] //Added this array sign, think that fixed the error for the .flat funtion
var number= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lowerCase = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "F", "G", ",H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"]
//source: https://owasp.org/www-community/password-special-characters




function getPrompts() {
var characterLength = parseIntprompt("please choose a length between 8 and 128 characters");
  if (characterLength < 8 || characterLength > 128 || characterLength === null || isNan(characterLength)) {
    alert("please choose a number between 8 and 128");
    passLength();
  }
}


//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

function extraCharacters() {
if (confirm("Would You like any numbers in your password?")) {
chooseExtras.push(number);
alert("You have chosen to include a number");
}
else {alert("no numbers in this password");
};

if (confirm("how about a lower case letter?")) {
chooseExtras.push(lowerCase); 
alert("you have chosen a lowercase letter")
}else {alert("You've skipped on the lower case option")
};

if (confirm("Fancy an uppercase letter?")) {
chooseExtras.push(upperCase);
alert ("You GOT an UPPERCASE in your password")
} else {alert ("No capital letters allowed in this password")
};

if (confirm("Garnish with a $pecial Character?")) {
chooseExtras = chooseExtras.push(specialCharacters);
alert("Your password now has extra special in it") 
} else {alert("You're special enough!")
};
chooseExtras.flat()
console.log(chooseExtras);
} 
//.push/.flat source = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

  



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




                 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword{

}