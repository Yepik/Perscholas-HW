//Write a program to look for the user input in an array.
// When it finds the first occurrence, display the value and the index of that valued
//function takes in input as array and string and displays in index.html
let findFirstOccurrence = (inputArray, lookFor) => document.getElementById('displayAttribute_exercise2').innerHTML=`Position of the value ${lookFor} starts at ${inputArray.indexOf(lookFor)+1}`;
function findFirstOccurrance(inputArray, lookFor){
    let iterator=0
    while(iterator<inputArray.length){
        if(inputArray[iterator]==lookFor){
            return [true, iterator++];
        }
        else iterator++
    }
    
}