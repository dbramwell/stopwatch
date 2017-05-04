import React, { Component } from 'react';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: "timer"
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const newActive = this.state.active === "timer" ? "stopwatch" : "timer";
    this.setState({active: newActive});
    this.props.onClick(newActive);
  }

  render() {
    return (
      <div className="menu">
        <button disabled={this.state.active === "timer"} onClick={this.onClick}>TIMER</button>
        <button disabled={this.state.active === "stopwatch"} onClick={this.onClick}>STOPWATCH</button>
      </div>
    );
  }
}

export default Menu;