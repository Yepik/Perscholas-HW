//Write a program to add up all the elements of a number array.
const addAllElements = inputArray =>{ let sum = 0;
    inputArray.map((element)=>{return sum+=Number(element)})
    document.getElementById('displayAttribute_exercise1').innerHTML=sum}