import React, { useState } from 'react';
import Students from "../../Data/Data"
import Student from './Student/Student'
import './Main.css'
export default function Main(){
    const [students, setStudents] = useState(Students)
    console.log(students)
    return (
        <div className="Main">
            {students.map((student,index)=>{return <Student student={student} key={index}/>})}
        </div>
    )
}