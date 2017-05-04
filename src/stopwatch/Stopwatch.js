import React, { Component } from 'react';
import Controls from '../controls/Controls';

class Stopwatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      originalCentisecs: 0,
      originalSecs: 0,
      centisecs: 0,
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
      self.setState(self.state.centisecs === 99 ? {secs: self.state.secs + 1, centisecs: 0} : {centisecs: self.state.centisecs + 1}); 
    }, 10);
    this.setState({intervalId: id});
  }

  onStop() {
    clearInterval(this.state.intervalId);
  }

  onReset() {
    this.setState({secs: this.state.originalSecs, centisecs: this.state.originalCentisecs});
  }

  render() {
    return (
      <div className="timer">
        <p>{this.state.secs}s {this.state.centisecs < 10 ? "0" + this.state.centisecs : this.state.centisecs}</p>
        <Controls onReset={this.onReset} onStart={this.onStart} onStop={this.onStop}/>
      </div>
    );
  }
}

export default Stopwatch;
