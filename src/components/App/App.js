import React, { Component } from 'react';
import logo from '../../logo.svg';

import Text from '../Text';
import Button from '../Button';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app--header">
          <img src={logo} className="app--logo" alt="logo" />
          <h1 className="app--title">Welcome to React</h1>
        </header>
        <div className="app-intro">
          <Text text="EXAMPLE DEFAULT TEXT" type="text" />
          <Text text="EXAMPLE POSITIVE TEXT" type="text text--positive" />
          <Text text="EXAMPLE NEGATIVE TEXT" type="text text--negative" />
          <Button text="EXAMPLE DEFAULT BUTTON" type="btn" action="button" />
          <Button text="EXAMPLE STRONG POSITIVE BUTTON" type="btn btn--strong btn--positive" action="button" />
          <Button text="EXAMPLE NEGATIVE BUTTON" type="btn btn--negative" action="button" />
        </div>
      </div>
    );
  }
}

export default App;
