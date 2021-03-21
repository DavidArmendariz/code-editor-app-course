import { combineReducers } from 'redux';
import darkModeReducer from './dark-mode/reducer';
import filesReducer from './files/reducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  files: filesReducer,
});

export default rootReducer;
