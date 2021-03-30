import React from 'react';
import ReactDOM from 'react-dom';

import './aimTrainer.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h1>Chandler's Aim Trainer</h1>;
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
