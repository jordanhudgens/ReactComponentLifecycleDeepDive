import React, { Component } from "react";

export default class Workflow extends Component {
  // First
  constructor() {
    super();
    this.state = {};
    console.log("constructor");
  }

  // Second
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
  }

  // Fourth
  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    console.log("button clicked");
    this.setState({ pageTitle: "Workflow" });
  };

  // Third
  render() {
    console.log("render");

    return (
      <div>
        <h1>Workflow</h1>

        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
