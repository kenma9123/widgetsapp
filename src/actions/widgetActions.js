import * as types from '../constants/ActionTypes';

/**
 * Widget related action creators
 */
export function toggleWidget(widget) {
  return {
    steps: [
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
 * Picker related actions
 */
export function pickerSelectWidget(widget) {
  return {
    type: types.SELECT_WIDGET,
    widget
  };
}

export function getPickerSelectedWidget() {
  return {
    type: types.GET_SELECTED_WIDGET
  };
}