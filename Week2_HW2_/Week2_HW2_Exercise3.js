//Write a program to find the longest element in a string array.
const findLongestStringElement = inputArray=>{
    let longestElement = ""
    let longestElementIndex = 0
    let indexCounter = -1
    return inputArray.map((element, index)=> {
        indexCounter++
        if(longestElement.length<element.length){
            longestElementIndex=indexCounter
            longestElement=element
        }
    document.getElementById('displayAttribute_exercise3').innerHTML=`The longest string is ${longestElement} and it is at index ${longestElementIndex}`
})}