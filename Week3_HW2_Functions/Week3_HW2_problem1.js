// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// function maxOfThree takes  array as argument 
//and returns largest number by compating all elements in array
const maxOfThree = inputArray=>{ 
    let largest=0;
    inputArray.map(element=>{
        if(Number(element)>=largest)
        largest=Number(element)})
        return largest;
}