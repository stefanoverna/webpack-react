import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Component from './BaseComponent';
import { create as createSession } from '../actions/session';

@connect()

export default class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(createSession());
  }

  render() {
    return (
      <div>
        {this.t('hello')}
      </div>
    );
  }
}
