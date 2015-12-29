const USER_LOGGEDIN = 'USER_LOGGEDIN';
const USER_LOGOUT = 'USER_LOGOUT';

export default function user(state = {
  isLoggedIn: true,
  details: {},
  apikey: '4cf8b41e95cd56c492594bb245ac2ffb'
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
