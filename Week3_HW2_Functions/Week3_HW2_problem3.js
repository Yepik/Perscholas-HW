// Create an array of at least five Student objects 
//with the following properties: name, activity, gender
// - Filter all those students who are into swimming
// - Filter all those students who are in the activity
// entered by the user. For example, if the user enters "Basketball" display only students with basketball as their activity 
// student= {
//     studentName:,
//     activities:,
//     gender:,
//     getGender: function(){
//         return this.gender
//     },
//     getActivities: function(){
//         return this.activities 
//     },
//     getName: function(){
//         return this.studentName 
//     },
// }
student= [{studentName:"Chris",activities:["Swimming","Basketball","Soccer"],gender:"M"},
{studentName:"Mary",activities:["Soccer","Volleyball"],gender:"F"},
{studentName:"Chad",activities:["Football","Basketball"],gender:"M"},
{studentName:"Tom",activities:["Volleyball","Soccer"],gender:"M"},
{studentName:"Elisa",activities:["Volleyball", "Basketball"],gender:"F"},
{studentName:"Nora",activities:["Soccer","Swimming"],gender:"F"},
{studentName:"Nancy",activities:["Swimming","Volleyball","Soccer"],gender:"F"},
{studentName:"Dora",activities:["Volleyball","Swimming"],gender:"F"},
{studentName:"Jack",activities:["Soccer","Football"],gender:"M"},
{studentName:"Cory",activities:["Volleyball"],gender:"M"}]

const printArrayOfObjects = (arrayOfObjects,tagId) =>{
    let outputString = "<table id='tableOutputProblem3'><tr><th>Student's Name</th><th>Activites</th><th>Gender</th></tr>";
    arrayOfObjects.map(object => outputString += `<tr><td>${object.studentName}</td> <td>${object.activities.sort().join(',')}</td> <td>${object.gender}</td></tr>`)
    outputString += '</table>'
    document.getElementById(tagId).innerHTML = outputString}
//  student.map(elementitem=> {console.log(elementitem);
//     document.getElementById("test").innerHTML+=elementitem} )
 
//filter by activity
const filterByActivity = (inputArrayOfStudent,activityToMatch) => inputArrayOfStudent.filter(object =>{
    for(let i = 0; object.activities.length > i; i++){
        if(object.activities[i].toLowerCase()== activityToMatch.toLowerCase())
        return true
    }
    return false
})
printArrayOfObjects(student,'outputForProblem3');