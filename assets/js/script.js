// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGene();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "_", "{", "|", "}", "]",]
var password = []

function validator() {
  var howManyNumbers = parseInt(prompt("Enter a number between 8 and 128"))
  var actualPassword = ""
  if (howManyNumbers < 8 || howManyNumbers > 128) {
    alert("Please use between 8 and 128 characters!")
    return validator();
  }
  for (var i = 0; i < howManyNumbers; i++) {
    // console.log('hello ... is it me')
    var arrPosition = Math.floor(Math.random() * password.length)
    var charNumbers = Math.floor(Math.random() * password[arrPosition].length)
    actualPassword += password[arrPosition][charNumbers]
  }
  console.log(actualPassword)
  return actualPassword
}

function passwordGene() {
  var upper = confirm("Would you like your password to contain Uppercase characters?")
  var lower = confirm("Would you like your password to contain Lowercase characters?")
  var nums = confirm("Would you like your password to contain Number characters?")
  var specialChar = confirm("Would you like your password to contain Special characters?")
  var howManyNumbers = parseInt(prompt("Enter a number between 8 and 128"))
  var actualPassword = ""

  if (upper === true) {
    password.push(upperCase)
  };

  if (lower === true) {
    password.push(lowerCase)
  };

  if (nums === true) {
    password.push(numbers)
  };

  if (specialChar === true) {
    password.push(special)
  };

  if (howManyNumbers < 8 || howManyNumbers > 128) {
    alert("Please use between 8 and 128 characters!")
    return validator();
  }

  console.log(password)

  for (var i = 0; i < howManyNumbers; i++) {
    // console.log('hello ... is it me')
    var arrPosition = Math.floor(Math.random() * password.length)
    var charNumbers = Math.floor(Math.random() * password[arrPosition].length)
    actualPassword += password[arrPosition][charNumbers]
  }
  console.log(actualPassword)
  return actualPassword
}