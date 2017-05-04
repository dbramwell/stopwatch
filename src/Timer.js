import React, { Component } from 'react';
import Controls from './controls/Controls';

class Timer extends Component {
  render() {
    return (
      <div className="timer">
        <p>5m 00s</p>
        <Controls/>
      </div>
    );
  }
}

export default Timer;
