//Write a program to add up all the elements of a number array.
const arrayInput_exercise1 = document.getElementById("inputAttribute_Exercise1").value.split(" ");
let sum = 0;
const addAllElements = inputArray =>{ let sum = 0;
    inputArray.map((element)=>{return sum+=Number(element)})
    document.getElementById('displayAttribute_exercise1').innerHTML=sum}