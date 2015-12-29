import * as types from '../constants/ActionTypes';
import { filter } from 'lodash/collection';

export default function forms(state = {
  isFetching: false,
  error: {},
  selectedForm: {},
  formList: []
}, action) {
  switch (action.type) {
    case types.TOGGLE_FORM:
      return {
        ...state,
        selectedForm: filter(state.formList, (form) =>
          (form.id === action.id)
        )[0]
      };
    case types.FORMS_FETCH:
      return {
        ...state,
        isFetching: true
      };
    case types.FORMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        formList: action.response.content
      }
    case types.FORMS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
