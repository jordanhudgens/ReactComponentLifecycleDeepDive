import React, { Component } from "react";

const DiscussionMessage = props => {
  return <div>{props.msg}</div>;
};

class DiscussionList extends Component {
  constructor() {
    super();

    const messages = ["Some message", "Another message"];

    this.state = {
      messages: this.allMessages(messages)
    };
  }

  allMessages = messages =>
    messages.map(message => {
      return (
        <div>
          <DiscussionMessage
            key={`Message-${String(new Date())}`}
            msg={message}
          />
        </div>
      );
    });

  componentDidMount() {
    this.messageAdder = setInterval(() => {
      console.log("hey from the auto generated element....");
      this.setState({
        messages: this.state.messages.concat([<div>Another one...</div>])
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.messageAdder);
  }

  render() {
    return this.state.messages;
  }
}

export default class Discussion extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Discussion",
      currentTime: String(new Date())
    };
  }

  componentDidMount() {
    console.log("hey from the parent....");

    this.liveTime = setInterval(() => {
      this.setState({
        currentTime: String(new Date())
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.liveTime);
  }

  render() {
    const { pageTitle } = this.state;

    return (
      <div>
        <h1>{pageTitle}</h1>
        <DiscussionList />
        <div>{this.state.currentTime}</div>
      </div>
    );
  }
}
