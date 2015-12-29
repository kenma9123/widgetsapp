import { combineReducers } from 'redux';
import widgets from './widgets';
import forms from './forms';
import user from './user';
import picker from './picker';

const rootReducer = combineReducers({
  widgets,
  forms,
  user,
  picker
});

export default rootReducer;
