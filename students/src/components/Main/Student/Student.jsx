import Score from './Score/Score'
import './Student.css'
export default function Student(props){
    return (
        <div className="Student">
            <h2 className="StudentName">Name: {props.student.name}</h2>
            <h2>Bio: </h2><p className="bio">{props.student.bio}</p>
            <div className="Scores">
            {props.student.scores.map((score,index )=> <Score score={score} index={index} key={index} />)}
            </div>
        </div>
    )
}