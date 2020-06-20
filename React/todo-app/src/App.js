import React, { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import Inputform from "./Inputform";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onHandleSubmit = e => {
    e.preventDefault();
    if (todo != "") {
      todos.push(todo);
      console.log(todos);
      setTodo("");
    }
  };

  return (
    <div>
      <Header />
      <br />
      <div className="container">
        <div className="row">
          <Inputform
            todo={todo}
            onHandleSubmit={onHandleSubmit}
            setTodo={setTodo}
          />
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
