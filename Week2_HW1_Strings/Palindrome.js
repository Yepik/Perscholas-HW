let prompt = require("prompt-sync")(); // created user input from console
// Solution for number 1 Write a program to find if a user entered string is a palindrome or not (for example "racecar" is a palindrome)
let userInputToTestPalendrome = prompt(
  "Problem 1: Enter your palindrome sentence or word to test ;] \n:"
);
userInputToTestPalendrome ===
userInputToTestPalendrome.split("").reverse().join("")
  ? console.log(`the string ${userInputToTestPalendrome} is palindrome`)
  : console.log(`the string ${userInputToTestPalendrome} is not palindrome`);