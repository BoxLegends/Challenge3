// Assignment code here
var letters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var numbers = "1,2,3,4,5,6,7,8,9";
var symobls = "!,@,#,$,%,^,&,*,(,),;,:";
var count = 0;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generateNum = document.querySelector("#numbers");
var generateNum = document.querySelector("#Symbols");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordNum = generatenumbers();
  var passwordSymbol = generateSymbol();
  var passwordText = document.querySelector("#password");

  passwordText.value = password + passwordNum + passwordSymbol;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  
}

function generateNum(){
  
}

function generateSymbol(){

}