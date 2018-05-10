import React, { Component } from "react";

export default class Discussion extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Discussion"
    };
  }

  render() {
    return <h1>{this.state.pageTitle}</h1>;
  }
}
