import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    console.log('Constructor');
    super(props);
    this.state = {
      counter: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  componentDidMount() {
    console.log('Component Did Mount');
    console.log('-----------------');
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log('Component Did Update');
    console.log('-----------------');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
    console.log('----------------------');
  }

  componentDidCatch(error, info) {
    console.log('Component Did Catch');
    this.setState({ error, info });
  }

  incrementCounter() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  decrementCounter() {
    this.setState(({ counter }) => ({
      counter: counter - 1,
    }));
  }

  render() {
    console.log('Render');
    const { counter } = this.state;
    // const { mount } = this.props;

    if (this.state.error) {
      return <div>We have encounter an error</div>;
    }

    return (
      <div className="flex flex-col gap-2">
        <div className="space-x-2">
          <button
            type="button"
            className="text-lg px-2 py-1 bg-indigo-500 rounded hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={this.incrementCounter}
          >
            Increment
          </button>
          <button
            type="button"
            className="text-lg px-2 py-1 bg-emerald-500 rounded hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={this.decrementCounter}
          >
            Decrement
          </button>
        </div>
        <div className="text-3xl">Counter: {counter}</div>
      </div>
      //   <>
      //     {mount === false ? null : (
      //       <div className="flex flex-col gap-2">
      //         <div className="space-x-2">
      //           <button
      //             type="button"
      //             className="text-lg px-2 py-1 bg-indigo-500 rounded hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      //             onClick={this.incrementCounter}
      //           >
      //             Increment
      //           </button>
      //           <button
      //             type="button"
      //             className="text-lg px-2 py-1 bg-emerald-500 rounded hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      //             onClick={this.decrementCounter}
      //           >
      //             Decrement
      //           </button>
      //         </div>
      //         <div className="text-3xl">Counter: {counter}</div>
      //       </div>
      //     )}
      //   </>
    );
  }
}
