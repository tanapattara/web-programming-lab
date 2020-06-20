import React, { Component } from "react";
import Counter from "./counter";

class Counterlist extends Component {
  state = {
    counterlist: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
    ],
  };
  render() {
    return (
      <div>
        <button className="btn-warning btn-sm m-2" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counterlist.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
  handleReset = () => {
    const _counterlist = this.state.counterlist.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ _counterlist });
  };
  handleIncrement = (counter) => {
    const counterlist = [...this.state.counterlist];
    const index = counterlist.indexOf(counter);
    counterlist[index] = { ...counter };
    counterlist[index].value++;
    this.setState({ counterlist });
  };
}

export default Counterlist;
