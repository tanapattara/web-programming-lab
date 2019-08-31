import React from "react";

function Inputform(props) {
  return (
    <div className="col-4">
      <form onSubmit={e => props.onHandleSubmit(e)}>
        <input
          className="form-control"
          type="text"
          value={props.todo}
          onChange={e => props.setTodo(e.target.value)}
        />
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Add
        </button>
      </form>
    </div>
  );
}

export default Inputform;
