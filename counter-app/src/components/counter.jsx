import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/50",
  };
  render() {
    return (
      <div>
        <img className="img-thumbnail" src={this.state.imageUrl} alt="picsum" />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
      </div>
    );
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h4>Zero</h4> : count;
  }
}

export default Counter;
