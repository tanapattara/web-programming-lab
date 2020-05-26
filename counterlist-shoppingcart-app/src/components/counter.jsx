import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <h4>{this.props.counter.name}</h4>
          <p>{this.props.counter.discription}</p>
        </div>
        <div className="text-right">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            className="btn btn-success btn-sm m-2"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            <i className="material-icons">add</i>
          </button>
          <button className="btn btn-warning btn-sm m-2">
            <i className="material-icons">remove</i>
          </button>
          <button className="btn btn-danger btn-sm m-2">
            <i className="material-icons">delete</i>
          </button>
        </div>
      </li>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-pill m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
