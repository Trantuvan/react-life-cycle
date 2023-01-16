import React, { Component } from 'react';
import Counter from './components/Counter';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
    };
    this.mountCounter = this.mountCounter.bind(this);
    this.unmountCounter = this.unmountCounter.bind(this);
  }

  mountCounter() {
    this.setState({ mount: true });
  }

  unmountCounter() {
    this.setState({ mount: false });
  }

  render() {
    const { mount } = this.state;
    return (
      <div className="h-screen flex flex-col gap-3 items-center justify-center">
        <div className="space-x-2">
          <button
            type="button"
            className="text-lg px-2 py-1 bg-indigo-500 rounded hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={this.mountCounter}
            disabled={this.state.mount}
          >
            MountCounter
          </button>
          <button
            type="button"
            className="text-lg px-2 py-1 bg-emerald-500 rounded hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={this.unmountCounter}
            disabled={!this.state.mount}
          >
            UnmountCounter
          </button>
        </div>
        {mount === true ? <Counter /> : null}
        {/* <Counter mount={mount} /> */}
      </div>
    );
  }
}
