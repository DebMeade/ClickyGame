import React from "react";
import "./Counter.css"

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState ({count: this.state.count + 1});
  };

  handleReset = () => {
    this.setState({count: 0});
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">Click Counter!
        </div>
        <div className="card-body">
        <p className="card-text">Click Count: {this.state.count}</p>
        <button className="btn btn-primary"onClick={this.handleIncrement}>Increment</button>
        {" "}
        <button className="btn btn-info"onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    )
  }

}

export default Counter;