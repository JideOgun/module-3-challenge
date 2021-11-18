// Assignment Code
var generateBtn = document.querySelector("#generate");

// generate random password
let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
var generatePassword = function(){
  return 'ddd';
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
   //add password to textbox/display area
document.getElementById("password").value = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
