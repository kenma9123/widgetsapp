import reqwest from 'reqwest';

const API_ROOT = 'https://api.jotform.com/';
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

export default store => next => action => {
  console.log('API middleware', store, next, action);

  // if no multiple types, its just a normal action
  // no api request needed
  if (typeof action.types === 'undefined') {
    return next(action);
  }

  // console.group(action.type)
  // console.info('dispatching', action)
  // let result = next(action)
  // console.log('next state', store.getState())
  // console.groupEnd(action.type)

  const [ requestType, successType, failureType ] = action.types;

  // call request action
  next({
    type: requestType
  });

  // call specific action for results
  return callApi(action.endpoint).then(
    response => next({
      type: successType,
      response: response.content
    }),
    error => next({
      type: failureType,
      error: error.message || 'Something bad happened'
    })
  );
}
