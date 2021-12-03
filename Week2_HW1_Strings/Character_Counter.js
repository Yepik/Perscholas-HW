let prompt = require("prompt-sync")(); // created user input from console
//Solution for number 2 Write a program to find how many letters, numbers, and special characters are in a user entered string.
//48-57 for digit in unicode 65-90 for cap letter 97-122 for lower case

let userInputString = prompt("Problem 2: Enter your sentence or word  ;]");
let countChar = 0;
let countNum = 0;
let countSpecial = 0;
for (let iterator = userInputString.length - 1; iterator >= 0; iterator--) {
  if (
    (userInputString.charCodeAt(iterator) >= 65 &&
      userInputString.charCodeAt(iterator) <= 90) ||
    (userInputString.charCodeAt(iterator) >= 97 &&
      userInputString.charCodeAt(iterator) <= 122)
  ) {
    // a way with using regular expresions if (/[A-Za-z]/gi.test(userInputString.charAt(iterator))) {
    countChar++;
  } else if (
    userInputString.charCodeAt(iterator) >= 48 &&
    userInputString.charCodeAt(iterator) <= 57
  ) {
    // using regular expression else if (/\d/.test(userInputString.charAt(iterator))) {
    countNum++;
  } else {
    countSpecial++;
  }
}
console.log(
  `You have entered ${userInputString} and it contains of ${countChar} characters, ${countSpecial}  special characters and ${countNum} numbers`
);
