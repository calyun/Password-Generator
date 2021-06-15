// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   // var password = generatePassword();
  var passwordText = document.querySelector("#password");
//   // Setting Password Length


//     //Setting included character types

//   var passwordArray = ["a", "b", "c", "A", "B", "C", "1", "2", "3", "!", "@", "#"]
//   // var lcArray = ["a", "b", "c"]
//   // var ucArray = ["A", "B", "C"]
//   // var nArray = ["1", "2", "3"]
//   // var sArray = ["!", "@", "#"]
//   console.log(passwordArray)

//   
//   // if (lowerCase == "Yes") {
//   //   passwordArray + lcArray
//   // }
//   
//   // if (upperCase == "Yes") {
//   //   passwordArray + ucArray
//   // }
//   
//   // if (numeric == "Yes") {
//   //   passwordArray + nArray
//   // }
//   var special = window.prompt("Would you like to include special? (Yes or No)")
//   // if (special == "Yes") {
//   //   passwordArray + sArray
//   // }
//   // passwordText.value = password;

//   

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
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
  var newChars = lC.concat(uC, nu, sp);
  console.log(newChars);
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  //for loop to randomly generate password
  for (i=0;i<(passwordLength);i++) {
    var c = Math.floor(Math.random()*chars.length + 1);
    actualPassword += chars.charAt(c);
  }
  console.log(actualPassword);
  console.log(actualPassword.length);
  passwordText.innerHTML = actualPassword

  return actualPassword;
  
}