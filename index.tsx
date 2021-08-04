import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stepper } from './components';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        <Stepper>
          <Stepper.Step>
            <p>one</p>
          </Stepper.Step>
          <Stepper.Step>
            <p>two</p>
          </Stepper.Step>
          <Stepper.Step>
            <p>three</p>
          </Stepper.Step>
        </Stepper>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
