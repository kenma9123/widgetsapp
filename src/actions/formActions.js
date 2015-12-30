import * as types from '../constants/ActionTypes';

/**
 * Form related action creators
 */
export function toggleForm(form) {
  return {
    steps: [
      {
        type: types.TOGGLE_FORM,
        id: form.id
      },
      {
        type: types.SELECT_FORM,
        form
      }
    ]
  };
}

/**
 * will fetch form using the API
 * for this to be catch by api middleware
 * pass types as one of the object properties
 */
export function fetchForms(user) {
  return {
    types: [types.FORMS_FETCH, types.FORMS_SUCCESS, types.FORMS_FAILURE],
    endpoint: `https://api.jotform.com/user/forms?apiKey=${user.apikey}&limit=20`
  };
}

export function pickerSelectForm(form) {
  return {
    type: types.SELECT_FORM,
    form
  };
}

export function getPickerSelectedForm() {
  return {
    type: types.GET_SELECTED_FORM
  };
}
