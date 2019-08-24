import React from "react";
import logo from "./img/logo.jpg";
import "./App.css";

function App() {
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
            <input className="form-control" type="text" />
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Add
            </button>
          </div>
          <div className="col-8">
            <ul className="list-group">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
