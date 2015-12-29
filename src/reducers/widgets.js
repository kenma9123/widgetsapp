import * as types from '../constants/ActionTypes';
import { filter } from 'lodash/collection';
import * as reducerData from '../constants/ReducerData';

const initialState = {
  selectedWidget: {},
  widgetList: reducerData.WIDGET_LIST
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
