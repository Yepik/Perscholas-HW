const clickMeToRevealProblem=(tagClass)=>{
    for(let i=0;i<document.getElementsByClassName(tagClass).length;i++)
    {
        document.getElementsByClassName(tagClass)[i].style.display='inline'
    }
    };
const turnOfTheButton = tagId=> document.getElementById(tagId).style.display="none"