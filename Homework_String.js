/*Write a program to find if a user entered string is a palindrome or not (for example "racecar" is a palindrome)
Write a program to find how many letters, numbers, and special characters are in a user entered string.
Write a program to find how many times a user entered word occurs in given string
Make a calculator using switch/case and take a user input to perform any calculation. If user enters any value other than 1-5, display a message 'Invalid Option' and end the program.
                                                                                        MENU

                                                                                  1. Add

                                                                                  2. Subtract

                                                                                  3. Multiply

                                                                                  4. Divide

                                                                                  5. Exit

 

BONUS: Capitalize the first letter of each word in a given string (or user entered string/sentence)
*/
let prompt = require("prompt-sync")(); // created user input from console
// Solution for number 1 Write a program to find if a user entered string is a palindrome or not (for example "racecar" is a palindrome)
let userInputToTestPalendrome = prompt(
  "Problem 1: Enter your palindrome sentence or word to test ;]"
);
userInputToTestPalendrome ===
userInputToTestPalendrome.split("").reverse().join("")
  ? console.log(`the string ${userInputToTestPalendrome} is palindrome`)
  : console.log(`the string ${userInputToTestPalendrome} is not palindrome`);
//Solution for number 2 Write a program to find how many letters, numbers, and special characters are in a user entered string.
let userInputString = prompt("Problem 2: Enter your sentence or word  ;]");
let countChar = 0;
let countNum = 0;
let countSpecial = 0;
for (let iterator = userInputString.length - 1; iterator >= 0; iterator--) {
  if (/[A-Za-z]/gi.test(userInputString.charAt(iterator))) {
    countChar++;
  } else if (/\d/.test(userInputString.charAt(iterator))) {
    countNum++;
  } else {
    countSpecial++;
  }
}
console.log(
  `You have entered ${userInputString} and it contains of ${countChar} characters, ${countSpecial}  special characters and ${countNum} numbers`
);
// solution for number 3 Write a program to find how many times a user entered word occurs in given string
let userInputToCheck = prompt(`Enter word to be checked`);
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
// part of nr.4
let userChoiceOfOperation = Number(
  prompt(
    `Please Enter\n 1 for addition \n 2 for subtration \n 3 for multiplication \n 4 for division\n 5 for exit`
  )
);
switch (userChoiceOfOperation) {
  case 1: {// addition block open 
    console.log("you chose an addition");
    let userInput = "";//user input number
    let isNum = /^\d+$/.test(userInput);// test if an
    let numbersUsed = [];
    let sum = 0;
    do {
      userInput = prompt("Enter your number to add: ");
      isNum = /^\d+$/.test(userInput);
      if (!isNum) {
        break;
      }
      numbersUsed.push(userInput);
      sum += Number(userInput);
      console.log(
        `The sum of numbers ${numbersUsed.join(" + ")} is ${sum}`
      );
    } while (userInput != "" || isNum);
    console.log(`Thank you`)
    break;
  }//addition block close
  case 2: {
    console.log("you chose an subtraction");
    let userInput = "";
    let isNum = /^\d+$/.test(userInput);
    let numbersUsed = [];
    let difference = 0;
    userInput = prompt("Enter your number to subtract: ");
    isNum = /^\d+$/.test(userInput);
    if (!isNum) {
        break;
    }
    difference= Number(userInput);
    numbersUsed.push(userInput);
    while (userInput != "" || isNum) {
      userInput = prompt("Enter your number to subtract: ");
      isNum = /^\d+$/.test(userInput);
      if (!isNum) {
        break;
      }
      numbersUsed.push(userInput);
      difference -= Number(userInput);
      console.log(
        `The Difference of numbers ${numbersUsed.join(" - ")} is ${difference}`
      );
    } 
    console.log(`Thank you`)
    break;
  }
  case 3: {
    let userInput = "";
    let isNum = /^\d+$/.test(userInput);
    let numbersUsed = [];
    let product = 1;
    do {
      userInput = prompt("Enter your number to multiply: ");
      isNum = /^\d+$/.test(userInput);
      if (!isNum) {
        break;
      }
      numbersUsed.push(userInput);
      product *= Number(userInput);
      console.log(
        `The product of numbers ${numbersUsed.join(" * ")} is ${product}`
      );
    } while (userInput != "" || isNum);
    console.log(`Thank you`)
    break;
  }
  case 4: {
    console.log("you chose an Division");
    let userInput = "";
    let isNum = /^\d+$/.test(userInput);
    let numbersUsed = [];
    let quotient = 0;
    userInput = prompt("Enter your number to divide: ");
    isNum = /^\d+$/.test(userInput);
    if (!isNum) {
        break;
    }
    quotient= Number(userInput);
    numbersUsed.push(userInput);
    while (userInput != "" || isNum) {
      userInput = prompt("Enter your number to divide: ");
      isNum = /^\d+$/.test(userInput);
      if (!isNum) {
        break;
      }
      numbersUsed.push(userInput);
      quotient /= Number(userInput);
      console.log(
        `The quotient of numbers ${numbersUsed.join(" / ")} is ${quotient}`
      );
    }
    console.log('Thanks for using')
    break;
  }
  case 5: {
    console.log("You chose exit GoOd bye sad to see you go");
    break;
  }
  default: {
    console.log("You chose exit GoOd bye sad to see you go");
  }
}
