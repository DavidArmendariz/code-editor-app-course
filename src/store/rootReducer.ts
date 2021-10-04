import { combineReducers } from 'redux';
import darkModeReducer from './reducers/dark-mode/darkMode';
import filesReducer from './reducers/files/files';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  files: filesReducer,
});

export default rootReducer;
