import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counterlist from "./components/counterlist";

class App extends Component {
  state = {
    counterlist: [
      {
        id: 1,
        value: 0,
        name: "Macbook Air",
        discription: "Memory 8GB, SSD 512GB - ฿42,900.00",
        price: 42900,
      },
      {
        id: 2,
        value: 0,
        name: "Macbook Pro 13'",
        discription: "Memory 16GB, SSD 256GB - ฿59,900.00",
        price: 59900,
      },
      {
        id: 3,
        value: 0,
        name: "Macbook Pro 16'",
        discription: "Memory 16GB, SSD 512GB - ฿75,900.00",
        price: 75900,
      },
    ],
  };
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
  totalCount() {
    let initialValue = 0;
    let sum = this.state.counterlist.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      initialValue
    );
    return sum;
  }
  totalValue() {
    let sum = 0;
    for (const item in this.state.counterlist) {
      if (this.state.counterlist[item].value > 0) {
        sum +=
          this.state.counterlist[item].value *
          this.state.counterlist[item].price;
      }
    }
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "THB",
    });
    return formatter.format(sum);
  }
  render() {
    return (
      <React.Fragment>
        <NavBar total={this.totalValue()} />
        <div className="container">
          <Counterlist
            counterlist={this.state.counterlist}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
