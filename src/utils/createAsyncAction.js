import { createAction } from 'redux-act';

export default function createAsyncAction(prefix, promiseFactory, cacheHit) {
  const request = createAction(`[${prefix}/request]`);
  const receive = createAction(`[${prefix}/receive]`);
  const fail = createAction(`[${prefix}/fail]`);

  function asyncActionCreator(params = {}) {
    return (dispatch, getState) => {
      if (cacheHit && !params.force) {
        const hit = cacheHit(params, getState);
        if (hit) {
          return Promise.resolve(hit);
        }
      }

      dispatch(request(params));

      return promiseFactory(params)
        .then((response) => {
          dispatch(receive(Object.assign({ response }, params)));
          return Promise.resolve(response);
        })
        .catch((error) => {
          dispatch(fail(Object.assign({ error }, params)));
          return Promise.reject(error);
        });
    };
  }

  asyncActionCreator.request = request;
  asyncActionCreator.receive = receive;
  asyncActionCreator.fail = fail;

  return asyncActionCreator;
}

