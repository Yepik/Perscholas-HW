export default function Question(props) {
  return (
    <div className="Question">
      <h3>Category:{props.jeoperdy.category.title}</h3>
      <h3>Value:{props.jeoperdy.value}</h3>
      {props.hideQuestion ? null : (
        <h2>
          {" "}
          What is <span>{props.question}</span>
        </h2>
      )}
      <h2>
        {" "}
        Answer :<span>{props.answer}</span>
      </h2>
      <button
        disabled={!props.didAnswer}
        className="btn-question"
        onClick={() => {
          props.getData(props.setQuestion, props.setAnswer, props.setJeoperdy);
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
