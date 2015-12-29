import * as types from '../constants/ActionTypes';

/**
 * Widget related action creators
 */
export function toggleWidget(id) {
  return { type: types.TOGGLE_WIDGET, id };
}

/**
 * Form related action creators
 */
export function toggleForm(id) {
  return { type: types.TOGGLE_FORM, id };
}

/**
 * will fetch form using the API
 * for this to be catch by api middleware
 * pass types as one of the object properties
 */
export function fetchForms(user) {
  return {
    types: [types.FORMS_FETCH, types.FORMS_SUCCESS, types.FORMS_FAILURE],
    endpoint: `user/forms?apiKey=${user.apikey}&limit=20`
  };
}