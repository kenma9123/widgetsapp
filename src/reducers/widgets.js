import * as types from '../constants/ActionTypes';
import { filter } from 'lodash/collection';

let widgetList = require('../../config/widgets.json');
const initialState = {
  selectedWidget: {},
  widgetList: widgetList
};

export default function widgets(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_WIDGET:
      return {
        ...state,
        selectedWidget: filter(state.widgetList, (widget) =>
          (widget.id === action.id)
        )[0]
      };
    default:
      return state;
  }
}
