import React, { Component } from 'react';
import Menu from './menu/Menu';
import Timer from './timer/Timer';
import Stopwatch from './stopwatch/Stopwatch';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      app: "timer"
    };
    this.changeApp = this.changeApp.bind(this);
  }

  changeApp(app) {
    this.setState({app: app});
  }

  render() {
    return (
      <div>
        <Menu onClick={this.changeApp}/>
        {this.state.app === "timer" ? <Timer/> : <Stopwatch/>}
      </div>
    );
  }
}

export default App;