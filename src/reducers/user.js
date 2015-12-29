const USER_LOGGEDIN = 'USER_LOGGEDIN';
const USER_LOGOUT = 'USER_LOGOUT';

// for testing recreate apikey.json with
// {apikey:<value>}
let apikey = require('../../config/apikey.json');
export default function user(state = {
  isLoggedIn: true,
  details: {},
  apikey: apikey.apikey
}, action) {
  switch (action.type) {
    case USER_LOGGEDIN:
      return {...state, isLoggedIn: true, details: action.details, apikey: action.apikey};
    case USER_LOGOUT:
      return {...state, isLoggedIn: false, details: {}, apikey: ''};
    default:
      return state;
  }
}
