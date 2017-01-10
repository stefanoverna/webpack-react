import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { IntlProvider } from 'react-intl';

import Component from './BaseComponent';
import App from './App';
import * as messages from '../messages';

@connect(state => ({ locale: state.ui.locale }))

export default class EntryPoint extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
  }

  render() {
    const { locale } = this.props;

    return (
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
      >
        <Router history={browserHistory}>
          <Route path="/" component={App} />
        </Router>
      </IntlProvider>
    );
  }
}
