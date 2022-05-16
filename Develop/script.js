// Assignment code here
//**WHEN prompted for the length of the password**//
//**THEN I choose a length of at least 8 characters and no more than 128 characters**//

var number= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lowerCase = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "F", "G", ",H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"]
//source: https://owasp.org/www-community/password-special-characters

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword; 

  } else {
    passwordTest.value = "";
  }
}



function getPrompts() {
  var choiceArr = [] //Added this array sign, think that fixed the error for the .flat funtion
var characterLength = parseInt(prompt("please choose a length between 8 and 128 characters"));
  if (characterLength < 8 || characterLength > 128 || characterLength === null || (isNaN(characterLength))) {
    alert("please choose a number between 8 and 128");
    getPrompts();
  }

//Psudocode: Make sure user cant use anything outside range, letters, or leave blank

//isNan source:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN"

//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

if (confirm("Would You like any numbers in your password?")) {
choiceArr.concat(number);
alert("You have chosen to include a number");
}
else {alert("no numbers in this password");
}

if (confirm("how about a lower case letter?")) {
choiceArr.concat(lowerCase); 
alert("you have chosen a lowercase letter")
}else {alert("You've skipped on the lower case option")
}

if (confirm("Fancy an uppercase letter?")) {
choiceArr.concat(upperCase);
alert ("You GOT an UPPERCASE in your password")
} else {alert ("No capital letters allowed in this password")
}

if (confirm("Garnish with a $pecial Character?")) {
choiceArr.concat(specialCharacters);
alert("Your password now has extra special in it") 
} else {alert("You're special enough!")
}
return true;
};
 
//.push/.flat source = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

  









                 



