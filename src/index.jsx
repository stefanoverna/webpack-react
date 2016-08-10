import React from 'react';
import { render } from 'react-dom';

require('../styles/main.sass');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }

  render() {
    const { counter } = this.state;

    return <p>Hello React! {counter}</p>;
  }
}

render(<App />, document.getElementById('app'));
