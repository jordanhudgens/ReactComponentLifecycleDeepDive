import React, { Component } from "react";

const DiscussionMessage = props => {
  return <div>{props.msg}</div>;
};

const DiscussionList = props => {
  const allMessages = props.messages.map(message => {
    return <DiscussionMessage msg={message} />;
  });

  return allMessages;
};

export default class Discussion extends Component {
  constructor() {
    super();

    const messages = ["Some message", "Another message"];

    this.state = {
      pageTitle: "Discussion",
      messages: messages
    };
  }

  componentDidMount() {
    console.log("hey....");
    this.setState({ pageTitle: "New Title" });
  }

  render() {
    const { pageTitle } = this.state;

    return (
      <div>
        <h1>{pageTitle}</h1>
        <DiscussionList messages={this.state.messages} />
      </div>
    );
  }
}
