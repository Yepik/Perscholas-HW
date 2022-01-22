export default function Score(props) {
  
    return (
    <div className="Score">
      <h2 className="orange">Score:<span className="white">{props.score}</span></h2>
      <button
        disabled={props.didAnswer}
        onClick={() => {
          props.setScore(props.score+props.jeoperdy.value);
          props.setDidAnswer(true)
        }}
      >
        add
      </button>
      <button
        disabled={props.didAnswer}
        onClick={() => {
            props.setScore(props.score - props.jeoperdy.value);
            props.setDidAnswer(true);
        }}
      >
        sub
      </button>
      <button onClick={() => props.setScore(0)}>reset</button>
    </div>
  );
}
