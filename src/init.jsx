import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import EntryPoint from './components/EntryPoint';

ReactDOM.render(
  <Provider store={store}>
    <EntryPoint />
  </Provider>,
  document.getElementById('root'),
);

