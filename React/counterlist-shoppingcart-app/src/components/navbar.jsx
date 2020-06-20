import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <i className="material-icons">shopping_cart</i> ShoppingCart
        </a>
        <h4 className="navbar-text">{this.props.total}</h4>
      </nav>
    );
  }
}

export default Navbar;
