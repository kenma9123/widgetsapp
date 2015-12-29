import reqwest from 'reqwest';
import async from 'async';
import { forEach } from 'lodash/collection';
import { isObject } from 'lodash/lang';

const API_ROOT = 'https://api.jotform.com/';
const S3_ROOT = 'http://localhost/React/widgetsapp/server/server.php';
const API_ROOT_MOCK = '/test/mock/forms.json';

// Fetches an API response
function callApi(endpoint) {
  let fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? (API_ROOT + endpoint) : endpoint;
  fullUrl += '&noV3=true';

  // remove this on production
  // fullUrl = API_ROOT_MOCK;

  return reqwest({
    url: fullUrl,
    crossOrigin: true
  });
}

// guide http://rackt.org/redux/docs/recipes/ReducingBoilerplate.html
export default store => next => action => {
  // console.log('API middleware', store.getState(), action);

  const { types, endpoint, callapi = false } = action;

  // if no multiple types, its just a normal action
  // no api request needed
  if (typeof types === 'undefined') {
    return next(action);
  }

  // for types that contains action creators
  forEach(types, (act) => {
    if (isObject(act)) {
      store.dispatch(act);
    }
  });

  if (!callapi) {
    return;
  }

  // api action should have an endpoint
  if (typeof endpoint === 'undefined') {
    throw new Error('Expected endpoint to be defined.');
  }

  const [ requestType, successType, failureType ] = types;

  // call request action
  next({
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
