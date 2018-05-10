import React, { Component } from "react";

export default class Discussion extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Discussion"
    };
  }

  render() {
    const { pageTitle } = this.state;

    return <h1>{pageTitle}</h1>;
  }
}
