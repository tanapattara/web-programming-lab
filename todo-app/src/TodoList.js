import React from "react";

function TodoList(props) {
  return (
    <div className="col-8">
      <ul className="list-group list-group-item-action">
        {props.todos.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
