import React, { useState } from "react";
import logo from "./img/logo.jpg";
import "./App.css";

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
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Todo Application
        </a>
      </nav>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <form onSubmit={e => onHandleSubmit(e)}>
              <input
                className="form-control"
                type="text"
                onChange={e => setTodo(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Add
              </button>
            </form>
          </div>
          <div className="col-8">
            <ul className="list-group">
              {todos.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
