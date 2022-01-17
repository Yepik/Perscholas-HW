import './Score.css'
export default function Score(props) {
    return(
        <div className="Score">
            <h3 className="scoreProps ScoreTitle">Test {props.index}</h3>
            <h3 className="scoreProps ScoreNum">Score: {props.score.score}</h3>
            <h3 className="scoreProps ScoreDate">Date: {props.score.date}</h3>
        </div>
    )
}