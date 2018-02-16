import React, { Component } from 'react';
import logo from '../../logo.svg';

import Text from '../Text';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <div className="app-intro">
          <Text text="EXAMPLE DEFAULT TEXT" />
          <Text text="EXAMPLE POSITIVE TEXT" type="text-positive" />
          <Text text="EXAMPLE NEGATIVE TEXT" type="text-negative" />
        </div>
      </div>
    );
  }
}

export default App;
