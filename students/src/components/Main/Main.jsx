import React, { useState } from 'react';
import students from "../../Data/Data"
export default function Main(){
    const [students, setStudents] = useState(students)
    console.log(students)
    return (
        <div className="Main">

        </div>
    )
}