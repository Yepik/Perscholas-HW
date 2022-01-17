import React, { useState } from 'react';

import Student from './Student/Student'
import './Main.css'
// start of functional component Main called by Layout
// @param props : StudentData
export default function Main(props){
    const [students, setStudents] = useState(props.studentData)
    return (
        <div className="Main">
            {students.map((student,index)=>{return <Student student={student} key={index}/>})}
        </div>
    )
}