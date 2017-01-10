import { createReducer } from 'redux-act';
import { create, destroy } from '../actions/session';

const initialState = {
  bearerToken: null,
};

export default createReducer({

  [create.receive]: (state, { response }) => ({
    bearerToken: response.token,
  }),

  [destroy]: () => initialState,

}, initialState);

