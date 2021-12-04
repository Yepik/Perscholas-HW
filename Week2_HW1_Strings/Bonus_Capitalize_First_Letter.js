//BONUS: Capitalize the first letter of each word in a given string (or user entered string/sentence)
let prompt = require("prompt-sync")(); // created user input from console
//create default string if user does not enter any characters
let defautString=" You have not entered string so i am a replacement for it.\n next time try enter something and I will CAPITALIZE the FIRST LETTER FOR you :D."
//user input
let userInputString = prompt("Enter your String I will capitalize the first letter \n: ") || defautString;
//create array from string given
let tempArray = userInputString.split(" ");
//end result String with first letter capital
let endResultString=""
// iterate through the whole array start point 0 and end point array length-1  
for (let iterator = 0 ; iterator < tempArray.length ; iterator++){
    // replace string with string with capital first letter
    tempArray[iterator]=tempArray[iterator].charAt(0).toUpperCase()+tempArray[iterator].slice(1);
}
//convert back to string
endResultString=tempArray.join(' ').toString();
// output to the console
console.log(`Your input with capital first letter is :\n "${endResultString}"`);

