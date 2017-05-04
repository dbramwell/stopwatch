import React, { Component } from 'react';
import Controls from './controls/Controls';

class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mins: 5,
      secs: 0
    };

    this.onStart = this.onStart.bind(this);
  }

  onStart() {
    const self = this;
    setInterval(function() {
      self.setState(self.state.secs > 0 ? {secs: self.state.secs - 1} : {mins: self.state.mins - 1, secs: 59}); 
    }, 1000);
  }

  render() {
    return (
      <div className="timer">
        <p>{this.state.mins}m {this.state.secs < 10 ? "0" + this.state.secs : this.state.secs}s</p>
        <Controls onStart={this.onStart}/>
      </div>
    );
  }
}

export default Timer;
