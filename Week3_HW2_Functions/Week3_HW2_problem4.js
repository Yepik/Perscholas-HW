// 4. Traverse through an array (either number or string array) and display each value with their index position using Array.map method
// HINT: For index, take a look at the Syntax and Parameters sections in the MDN Doc (Links to an external site.) for Array.map
const traverseThroughArray = (array,idTag)=>{let outputString = '<table><tr><th>Index</th><th>Element of an array</th></tr>'; array.map((element,id)=>outputString += `<tr><td>${id}   -</td> <td>${element}</td></tr> `);outputString +="</table>";document.getElementById(idTag).innerHTML = outputString}

