// Assignment code here

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var capitals = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','x','Y','Z'];

var numbers = [1,2,3,4,5,6,7,8,9];

var characters = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','{','}','[',']','?','>','<','.',',','~'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = pass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  passPool = [];
  newPass = [];

  var pslength = prompt("how long would you like your password to be? Please choose a number between 8 and 128");
    if(!pslength){
      alert("please enter a number between 8 and 128");
      return;
    } else if(pslength < 8 || pslength > 128){
      alert("outside range, please choose a number between 8 and 128");
      return;
    }
    if (confirm("do you want Lower case letters in your password?") === true){
        passPool.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');

  }
    if (confirm("do you want Upper case letters in your password?")== true){
        passPool.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','x','Y','Z');

  }
    if (confirm("do you want Symbols letters in your password?")== true){
        passPool.push(1,2,3,4,5,6,7,8,9);

  }
    if (confirm("do you want Numbers letters in your password?")== true){
        passPool.push('!','@','#','$','%','^','&','*','(',')','-','_','=','+','{','}','[',']','?','>','<','.',',','~');

  }
    for (let index = 0; index <= pslength; index++){
        var randomNumber = Math.floor(Math.random() * passPool.length);
        newPass.push(passPool[randomNumber]);
        pass = newPass.join("");
  }
      
}   