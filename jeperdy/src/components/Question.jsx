import React,{useReducer} from 'react';
import reducerHideQuestion from "../functions/reducerHideQuestion";
export default function Question(props) {
  const [hideQuestion, dispatchHideQuestion] = useReducer(
    reducerHideQuestion,
    true
  );
  return (
    <div className="Question">
      <h3 className="orange">Category:<span className="white">{props.category.title}</span></h3>
      <h3 className="orange">Value:<span className="white">{props.jeoperdy.value}</span></h3>
      {hideQuestion ? null : (
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
          
          props.getData(props.setQuestion, props.setAnswer, props.setJeoperdy,props.setCategory);
          dispatchHideQuestion({ type: "new question", payload: true });
          props.setDidAnswer(false);
        }}
      >
        Get Next Question
      </button>
      <button
        className="btn-question"
        onClick={() =>
          dispatchHideQuestion({ type: "hideQuestion", payload: !hideQuestion })
        }
      >
        Reveal the question
      </button>
    </div>
  );
}
