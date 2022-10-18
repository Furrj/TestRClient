import Question from "./Question";

const Questions = (props) => {
  return (
    <div className="questionsCont">
      {props.questions.map((question) => {
        return (
          <Question
            key={question.id}
            question={question}
          />
        );
      })}
    </div>
  );
};

export default Questions;
