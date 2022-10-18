const Question = (props) => {
  return (
    <div className="card question m-3">
      <div className="card-body">
        <div className="card-text">
          {props.question.param1} X {props.question.param2}
        </div><hr />
        <div className="card-text">
          <label htmlFor="answer">Answer</label><br />
          <input type="number" name="answer" /><br />
          <button className="mt-2">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Question;
