
var length = "";
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")"];

function getRandomElement(x) {
  var randomIndex = Math.floor(Math.random() * x.length);
  var element = x[randomIndex];
  return element;
}

function generatePassword() {
  var length = parseInt(window.prompt("Enter the number of characters to use for your password (a number between 8 - 126"));
  if (Number.isNaN(length)) {
     window.alert("Please enter a number");
     return null;
  }
  if (length < 8 || length > 126) {
    window.alert("Your password length needs to be between 8 and 126 characters long");
     return null;
  }
  
  var userLowerCase = confirm("Do you want lower case letters in your password?");
  var userUpperCase = confirm("Do you want uppercase letters in your passsword?");
  var userNumbers = confirm("Do you want numbers in your password?");
  var userSpecialCharacters = confirm("Do you want special characters in your password?");
  
  if(lowerCase === false && upperCase === false && numbers === false && specialCharacters === false) {
     window.alert("Please select at least one variable");
     return null;
   }    
   var passwordVariables = {
     userlength:length, 
     userLowerCase:userLowerCase,
     userUpperCase:userUpperCase,
     userNumbers:userNumbers,
     userSpecialCharacters:userSpecialCharacters,
   }
   var result = [];
   var possibleCharacters = [];
   var chosenCharacters = [];

   if(!passwordVariables) return null;
   if(passwordVariables.userLowerCase) {
     possibleCharacters = possibleCharacters.concat(lowerCase);
     chosenCharacters.push(getRandomElement(lowerCase));
   }
   if(passwordVariables.userUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    chosenCharacters.push(getRandomElement(upperCase));
   }
   if(passwordVariables.userNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    chosenCharacters.push(getRandomElement(numbers));
   }
   if(passwordVariables.userSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    chosenCharacters.push(getRandomElement(specialCharacters));
   }
   for (var i = 0; i < passwordVariables.userlength; i++) {
    console.log(passwordVariables.userlength);
    var possibleCharac = getRandomElement(possibleCharacters);
    result.push(possibleCharac);
   }
   for (var i = 0; i < chosenCharacters.length; i++) {
    result[i] = chosenCharacters[i];
    console.log(chosenCharacters.length);
   } 
   return result.join("");
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


generateBtn.addEventListener("click", writePassword);


