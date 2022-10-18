const Question = (props) => {
  return (
    <div className="card question">
      <div className="card-body">
        <div className="card-text">
          {props.param1} X {props.param2}
        </div><hr />
        <div className="card-text">
          <label htmlFor="answer">Answer</label><br />
          <input type="number" name="answer" />
        </div>
      </div>
    </div>
  );
};

export default Question;
