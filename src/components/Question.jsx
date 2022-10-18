import { useRef } from "react";

const Question = (props) => {
  const answerRef = useRef();

  const submit = () => {
    if (props.question.correctAnswer === parseInt(answerRef.current.value)) {
      props.addToScore();
    } else {
      console.log("Wrong");
    }

    console.log(props.question.correctAnswer);
    console.log(answerRef.current.value);

    props.submit();
  };

  return (
    <div className="card question m-3">
      <div className="card-body">
        <div className="card-text">
          {props.question.param1} X {props.question.param2}
        </div>
        <hr />
        <div className="card-text">
          <label htmlFor="answer">Answer</label>
          <br />
          <input ref={answerRef} type="float" name="answer" />
          <br />
          <button className="mt-2" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
