import React, { Component } from 'react';
import Counter from './components/Counter';
export default class App extends Component {
  render() {
    return (
      <div className="h-screen flex items-center justify-center">
        <Counter />
      </div>
    );
  }
}
