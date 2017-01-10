import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import persistState from 'redux-localstorage';
import { reducer as formReducer } from 'redux-form';

import * as reducers from './reducers';

const reducer = combineReducers({
  ...reducers,
  form: formReducer,
});

const createStoreWithMiddlewares = compose(
  applyMiddleware(thunkMiddleware),
  // applyMiddleware(logoutOnInvalidAuthHeader),
  persistState(['session']),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore);

export default createStoreWithMiddlewares(reducer);
