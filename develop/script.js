// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array of characters 
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


//prompt variables
var lengthprompt = "";
var symbolprompt;
var numberprompt;
var uppercaseprompt;
var lowercaseprompt;


function generatePassword() {
  var lengthprompt = prompt('How long would you like your password to be ?');

  while (lengthprompt <=7 || lengthprompt >= 128) {
    alert('You need to enter a number between 8 and 128!');
    var lengthprompt = prompt('How long would you like your password to be ?')
  }
  alert (`You will have ${lengthprompt} characters in your password`);
 
  var numberprompt = confirm('Would you like to include numbers ? Click ok for yes and cancel for no');
  var symbolprompt = confirm('Would you like to add symbols Click ok for yes and cancel for no?');
  var uppercaseprompt = confirm('Would you like to add uppercase Click ok for yes and cancel for no?');
  var lowercaseprompt = confirm('Would you like to add lowercase Click ok for yes and cancel for no?');

// if no answer is inputed
while (numberprompt === false && uppercaseprompt === false && lowercaseprompt === false && symbolprompt === false) {
  alert('You need to put in at least one parameter');
  var numberprompt = confirm('Would you like to include numbers ? Click ok for yes and cancel for no');
  var symbolprompt = confirm('Would you like to add symbols Click ok for yes and cancel for no?');
  var uppercaseprompt = confirm('Would you like to add uppercase Click ok for yes and cancel for no?');
  var lowercaseprompt = confirm('Would you like to add lowercase Click ok for yes and cancel for no?');
}

// changing the characters in the strings based on the user input
var characters = [];

if (numberprompt === true) { 
  characters = characters.concat(numbers)
}
if(symbolprompt === true) {
   characters = characters.concat(symbols)
 }
if(uppercaseprompt === true) {
  characters = characters.concat(uppercase)
}
if(lowercaseprompt === true) {
  characters = characters.concat(lowercase)
}
console.log(characters);

// Loop generating random characters
var randChar = '';
for( var i = 0; i < lengthprompt; i++){
  randChar += characters[Math.floor(Math.random() * characters.length)]
}
return randChar;
}





// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




