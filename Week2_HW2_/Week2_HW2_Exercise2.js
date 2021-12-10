//Write a program to look for the user input in an array.
// When it finds the first occurrence, display the value and the index of that valued
let inputArray = document.getElementById("inputAttribute_Exercise2").value.split(" ")
let findFirstOccurrence = (inputArray, lookFor) => document.getElementById('displayAttribute_exercise2').innerHTML=inputArray.indexOf(lookFor)+1;
