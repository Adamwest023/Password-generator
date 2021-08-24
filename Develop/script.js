// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var userNumber = 1000;
  
  while(userNumber > 128) {
    var userInput = prompt("give me a number smaller than 128");
    var userNumber = parseInt(userInput);
  }

  var capitalLetter = confirm("Would you like to use captial letters?");
    var capitalArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H']
    var lowerCaseLetters = confirm("Would you like to use lowercase letters?");
    var lowerCaseArr = capitalArr.map(capitalArr => capitalArr.toLowerCase());
    var number = confirm("Would you like to use numbers?");
    var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var special = confirm("Would you like to use special characters?");
    var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '?']
    var possibleChars = []
    
    if(capitalLetter == true){
      possibleChars = possibleChars.concat(capitalArr)
    }
    
    if(lowerCaseLetters == true && capitalLetter == true) {
      possibleChars = possibleChars.concat(capitalArr).concat(lowerCaseArr)
    }
    
    if(lowerCaseLetters == true && capitalLetter == true && number == true) {
      possibleChars = possibleChars.concat(capitalArr).concat(lowerCaseArr).concat(numbersArr)
    }
    
    if(special == true) {
      possibleChars = possibleChars.concat(specialCharArr)
    }



  var finalPass = ""

  for(i=0;i<userInput;i++){
    var randomNumber = Math.floor(Math.random() * possibleChars.length);
    var randomChar = possibleChars[randomNumber]
    finalPass+=randomChar
  }

  return finalPass;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
