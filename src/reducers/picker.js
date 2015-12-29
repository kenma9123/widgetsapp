import * as types from '../constants/ActionTypes';
import { filter } from 'lodash/collection';

export default function picker(state = {
  widget: {},
  form: {},
}, action) {
  switch (action.type) {
    case types.SELECT_WIDGET:
      return {
        ...state,
        widget: action.widget
      };
    case types.SELECT_FORM:
      return {
        ...state,
        form: action.form
      };
    case types.GET_SELECTED_WIDGET:
      return state.widget;
    case types.GET_SELECTED_FORM:
      return state.form;
    default:
      return state;
  }
}
