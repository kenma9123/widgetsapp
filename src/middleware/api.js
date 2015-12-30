import reqwest from 'reqwest';
import async from 'async';
import { isArray } from 'lodash/lang';

const API_ROOT = 'https://api.jotform.com/';
const S3_ROOT = 'http://localhost/React/widgetsapp/server/server.php';
const API_ROOT_MOCK = '/test/mock/forms.json';

// Fetches an API response
function callApi(endpoint) {
  endpoint += '&noV3=true';

  return reqwest({
    url: endpoint,
    crossOrigin: true
  });
}

// guide http://rackt.org/redux/docs/recipes/ReducingBoilerplate.html
export default store => next => action => {

  const { types, endpoint = false } = action;

  // if no endpoint, its not an api action
  if (!endpoint) {
    return next(action);
  }

  if (
    !isArray(types) ||
    types.length !== 3 ||
    !types.every(type => typeof type === 'string')
  ) {
    throw new Error('Expected an array of three string types.');
  }

  // console.log('API middleware', action);

  const [ requestType, successType, failureType ] = types;

  // call request action
  store.dispatch({
    type: requestType
  });

  // call specific action for results
  return callApi(endpoint).then(
    response => next({
      type: successType,
      response: response
    }),
    error => next({
      type: failureType,
      error: error
    })
  );
}
