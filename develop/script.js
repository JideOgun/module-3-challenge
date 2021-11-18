// Assignment Code
var generateBtn = document.querySelector("#generate");

// generate random password
let Char = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
var generatePassword = function(){
  randvalues = Math.floor(Math.random() * 128);
  values = (Char.charAt(randvalues));
  
  return values;
 }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
   //add password to textbox/display area
document.getElementById("password").value = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
