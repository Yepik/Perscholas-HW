let prompt = require("prompt-sync")(); // created user input from console
// Solution for number 1 Write a program to find if a user entered string is a palindrome or not (for example "racecar" is a palindrome)
//get user input from console and store it in variable userInputToTestPalindrome
let userInputToTestPalindrome = prompt(
  "Problem 1: Enter your palindrome sentence or word to test ;] \n:"
);
//check if the user input is a palindrome and display appropriate message.
userInputToTestPalindrome ===
userInputToTestPalindrome.split("").reverse().join("")
  ? console.log(`the string ${userInputToTestPalindrome} is palindrome`)
  : console.log(`the string ${userInputToTestPalindrome} is not palindrome`);