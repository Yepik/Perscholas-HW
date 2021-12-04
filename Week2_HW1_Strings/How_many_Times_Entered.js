let prompt = require("prompt-sync")(); // created user input from console
// solution for number 3 Write a program to find how many times a user entered word occurs in given string
let userInputToCheck = prompt(`Enter word to be checked : `);
//given string
let stringToBeChecked =
  "This is the string string string string to be checked. Do not worry string this string will eventualy end. We are learning how to code so do not be afraid to fail. Know this you are learning and no one will be able to tell you that you are not a programmer. On top of that you are the greatest programmer on this earth. Therefore lets do this. ";
let workingVersionOfTheString = stringToBeChecked.split(" ");
let counterRepetition = 0;
while (workingVersionOfTheString.length !== 0) {
  if (workingVersionOfTheString.pop() == userInputToCheck) counterRepetition++;
}
console.log(
  `For Problem 3 the word ${userInputToCheck} repeats ${counterRepetition}`
);