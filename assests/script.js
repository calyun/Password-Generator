// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // Setting Password Length

  var passwordLength = window.prompt("How long should you password be? (8-128 Characters)")
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    console.log("input not valid");
    return;
  } else {
    console.log(passwordLength)
    console.log("its gucci")
    //Setting included character types
  var charactertype = window.prompt("Please type all character types you would like to include. (Lowercase, Uppercase, Numeric, Special)")
  console.log(charactertype);
  } if (charactertype == "Lowercase", "Uppercase", "Numeric", "Special") {
    console.log("s'all goodman");
  } else {
    console.log("sus");
    return;
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
