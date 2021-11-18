// Assignment Code
var generateBtn = document.querySelector("#generate");

// generate random password


function generatePassword (length) { 
  
  var result = '';
  var Char = 'ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+';
  var charLength = Char.length;
  for ( var i = 0; i < length; i++ ) {
    result += Char.charAt(Math.floor(Math.random() * charLength));   
  }
  return result;
}

 
// Write password to the #password input
function writePassword() 
{
  //Length prompt 1
  var lengthprompt = window.prompt('How long would you like your password to be?');


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

   //add password to textbox/display area
document.getElementById("password").value = generatePassword(lengthprompt);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);