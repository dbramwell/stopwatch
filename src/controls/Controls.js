import React, { Component } from 'react';

class Controls extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		running: false,
  	};
  	this.onStartClicked = this.onStartClicked.bind(this);
  }

  onStartClicked(event) {
  	if (this.state.running) {
  		this.props.onStop();
  	} else {
  		this.props.onStart();
  	}
  	this.setState({running: !this.state.running});
  }

  render() {
    return (
      <div className="controls">
        <button onClick={this.onStartClicked}>{this.state.running ? "STOP" : "START"}</button>
        <button onClick={this.props.onReset}>RESET</button>
      </div>
    );
  }
}

export default Controls;