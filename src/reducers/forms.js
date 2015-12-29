import * as types from '../constants/ActionTypes';
import { filter } from 'lodash/collection';

export default function forms(state = {
  isFetching: false,
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
        formList: action.response
      }
    default:
      return state;
  }
}
