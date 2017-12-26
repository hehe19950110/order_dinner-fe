import * as React from 'react';
import { Button } from 'antd';
import '../static/style/App.less';

const logo: any = require('../static/img/logo.svg');

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Button>按钮</Button>
      </div>
    );
  }
}

export default App;
