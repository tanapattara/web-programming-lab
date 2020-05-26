import React, { Component } from "react";
import Counter from "./counter";

class Counterlist extends Component {
  render() {
    return (
      <div>
        <div className="text-right">
          <button
            className="btn-danger btn-sm m-4"
            onClick={this.props.onReset}
          >
            Reset
          </button>
        </div>
        <ul className="list-group m-2">
          {this.props.counterlist.map((counter) => (
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={this.props.onIncrement}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Counterlist;
