let prompt = require("prompt-sync")(); // created user input from console
// Problem 4 with out using functions  created calculator add subtract multiply and divide
/* solution for number 4 Make a calculator using switch/case and take a user input to perform any calculation. If user enters any value other than 1-5, 
display a message 'Invalid Option' and end the program.
                                                                                        MENU

                                                                                  1. Add

                                                                                  2. Subtract

                                                                                  3. Multiply

                                                                                  4. Divide

                                                                                  5. Exit
*/                                                                                  

let userChoiceOfOperation = Number(
    prompt(
      `Please Enter\n 1 for addition \n 2 for subtration \n 3 for multiplication \n 4 for division\n 5 for exit\n : `
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
      console.log("You chose  Invalid Input, GoOd bye Please try again");
    }
  }
  