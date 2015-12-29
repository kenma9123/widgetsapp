import { combineReducers } from 'redux';
import widgets from './widgets';
import forms from './forms';
import user from './user';

const rootReducer = combineReducers({
  widgets,
  forms,
  user
});

export default rootReducer;
