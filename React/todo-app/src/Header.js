import React from "react";
import logo from "./img/logo.jpg";

function Header() {
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
    </div>
  );
}

export default Header;
