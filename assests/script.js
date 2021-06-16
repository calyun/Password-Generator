// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

  var passwordText = document.querySelector("#password");

//function to create password
function writePassword() {
  //user input for password length
  var passwordLength = window.prompt("How long should you password be? (8-128 Characters)")
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Enter valid password");
    return;
  } else {
    console.log(passwordLength)
    console.log("its gucci")
  }

  //lets user pick which characters to include  
  var lowerCase = window.prompt("Would you like to include lowercase? (Yes or No)")
  var upperCase = window.prompt("Would you like to include uppercase? (Yes or No)")
  var numeric = window.prompt("Would you like to include numeric? (Yes or No)")
  var special = window.prompt("Would you like to include special? (Yes or No)")

  //Checks to see if at least one character type is selected
  if ((lowerCase !== "Yes")&&(upperCase !== "Yes")&&(numeric !== "Yes")&&(special !== "Yes")){
  window.alert("Please select at least one character type.")
  return
  }

  var actualPassword = "";
  var lC = []
  if (lowerCase == "Yes") {
    lC.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  }
  var uC = []
  if (upperCase == "Yes") {
    uC.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
  }
  var nu = []
  if (numeric == "Yes") {
    nu.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0")
  };
  var sp = [];
  if (special == "Yes") {
    sp.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")")
  };
  var chars = lC.concat(uC, nu, sp);
  console.log(chars);
  console.log(chars.length);

  //for loop to randomly generate password
  for (var i = 0; i < passwordLength; i++) {
    actualPassword += chars[Math.floor(Math.random() * chars.length)]
  };

  //just checkin thangs
  console.log(actualPassword);
  console.log(actualPassword.length);

  //plus generated password into html
  passwordText.innerHTML = actualPassword;

  return actualPassword;
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);