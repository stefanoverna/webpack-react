import { createReducer } from 'redux-act';
import { switchLocale } from '../actions/ui';

const initialState = {
  locale: 'it',
};

export default createReducer({
  [switchLocale]: (state, { locale }) => ({ ...state, locale }),
}, initialState);
