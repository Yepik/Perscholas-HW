export default function Question(props) {
  return (
    <div className="Question">
      <h3 className="orange">Category:<span className="white">{props.category.title}</span></h3>
      <h3 className="orange">Value:<span className="white">{props.jeoperdy.value}</span></h3>
      {props.hideQuestion ? null : (
        <h2 className="orange">
          {" "}
          What is <span className="white">{props.question}</span>
        </h2>
      )}
      <h2 className="orange">
        {" "}
        Answer :<span className="white">{props.answer}</span>
      </h2>
      <button
        disabled={!props.didAnswer}
        className="btn-question"
        onClick={() => {
          console.log(props.setJeoperdy)
          props.getData(props.setQuestion, props.setAnswer, props.setJeoperdy,props.setCategory);
          props.dispatchHideQuestion({ type: "new question", payload: true });
          props.setDidAnswer(false);
        }}
      >
        Get Next Question
      </button>
      <button
        className="btn-question"
        onClick={() =>
          props.dispatchHideQuestion({ type: "hideQuestion", payload: !props.hideQuestion })
        }
      >
        Reveal the question
      </button>
    </div>
  );
}
