import { createAction } from 'redux-act';

import createAsyncAction from '../utils/createAsyncAction';
import { createSession } from '../api/accountApi';

export const destroy = createAction('session/destroy');

export const create = createAsyncAction(
  'session/create',
  ({ data }) => createSession(data),
);

