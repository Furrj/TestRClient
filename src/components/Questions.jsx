import Question from "./Question";

const Questions = (props) => {
  return (
    <div className="questionsCont">
      {props.questions.map((question) => {
        return (
          <Question
            key={question.id}
            param1={question.param1}
            param2={question.param2}
          />
        );
      })}
    </div>
  );
};

export default Questions;
