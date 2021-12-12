const clickMeToRevealProblem=(tagClass)=>{
    for(let i=0;i<document.getElementsByClassName(tagClass).length;i++)
    {
        document.getElementsByClassName(tagClass)[i].style.display='flex'
    }
    };
const turnOffTheButton = tagId=> document.getElementById(tagId).style.display="none"
//not working as intended
// const printToHtMLOptionForDropdown = (studentArray, idTag) =>{
//     let returnString="<input list='browsers' name='myBrowser'  /><datalist> "
//     for(let i = 0 ; i<Object.keys(studentArray[0]).length;i++){
//         returnString+= `<option> ${studentArray[0].keys()[i]}</option>`
//     }
//     returnString+= "</datalist>"
//     console.log(returnString)
//     document.getElementById(idTag).innerHTML=returnString
//     } 
