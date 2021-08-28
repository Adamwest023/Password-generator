// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Generate password function
function generatePassword() {
  var userNumber = 1000;
  
  while(userNumber >= 128 || userNumber <= 8 || isNaN(userNumber)) {
    var userInput = prompt("How many characters would you like (between 8-128)");
    var userNumber = userInput;
  }
  
  // variable for password criteria
  var capitalLetter = confirm("Would you like to use captial letters?");
    var capitalArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
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

    if (capitalLetter === false && lowerCaseLetters === false && number === false && special === false) {
      alert("Must pick at least one catagory");
      generatePassword();
    }



  var finalPass = ""

  for(i=0;i<userInput;i++){
    var randomNumber = Math.floor(Math.random() * possibleChars.length);
    var randomChar = possibleChars[randomNumber]
    finalPass+=randomChar
  }

  return finalPass;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);