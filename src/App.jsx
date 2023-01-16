import React, { Component } from 'react';
import Clock from './components/Clock';
export default class App extends Component {
  render() {
    return (
      <div className="h-screen flex items-center justify-center">
        <Clock />
      </div>
    );
  }
}
