//Write a program to find the longest element in a string array.
inputValue=document.getElementById('inputAttribute_Exercise3').value.split(' ')
let longestElement = ""
let longestElementIndex = 0
const findLongestStringElement = inputArray=> inputArray.map((element, index)=> {
    if(longestElement.length<element.length){
        longestElementIndex=index
        longestElement=element
    }
    document.getElementById('displayAttribute_exercise3').innerHTML=`The longest string is ${longestElement} and it is at index ${longestElementIndex}`
})