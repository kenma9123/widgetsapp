import * as types from '../constants/ActionTypes';

/**
 * Widget related action creators
 */
export function toggleWidget(widget) {
  return {
    types: [
      {
        type: types.TOGGLE_WIDGET,
        id: widget.id
      },
      {
        type: types.SELECT_WIDGET,
        widget
      }
    ]
  };
}

/**
 * Form related action creators
 */
export function toggleForm(form) {
  return {
    types: [
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
    callapi: true,
    endpoint: `user/forms?apiKey=${user.apikey}&limit=20`
  };
}

/**
 * Picker related actions
 */
export function pickerSelectWidget(widget) {
  return {
    type: types.SELECT_WIDGET,
    widget
  };
}

export function pickerSelectForm(form) {
  return {
    type: types.SELECT_FORM,
    form
  };
}

export function getPickerSelectedWidget() {
  return {
    type: types.GET_SELECTED_WIDGET
  };
}

export function getPickerSelectedForm() {
  return {
    type: types.GET_SELECTED_FORM
  };
}
