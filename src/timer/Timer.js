import React, { Component } from 'react';
import Controls from '../controls/Controls';

class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      originalMins: 5,
      originalSecs: 0,
      mins: 5,
      secs: 0,
      intervalId: undefined
    };

    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onStart() {
    const self = this;
    const id = setInterval(function() {
      if (self.state.mins > 0 || self.state.secs > 0) {
        self.setState(self.state.secs > 0 ? {secs: self.state.secs - 1} : {mins: self.state.mins - 1, secs: 59}); 
      }
    }, 1000);
    this.setState({intervalId: id});
  }

  onStop() {
    clearInterval(this.state.intervalId);
  }

  onReset() {
    this.setState({mins: this.state.originalMins, secs: this.state.originalSecs});
  }

  render() {
    return (
      <div className="timer">
        <p>{this.state.mins}m {this.state.secs < 10 ? "0" + this.state.secs : this.state.secs}s</p>
        <Controls onReset={this.onReset} onStart={this.onStart} onStop={this.onStop}/>
      </div>
    );
  }
}

export default Timer;
