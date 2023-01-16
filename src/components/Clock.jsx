import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const { date } = this.state;

    return (
      <div className="font-mono">
        <h1>Hello World!</h1>
        <h2>It is {date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
