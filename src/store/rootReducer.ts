import { combineReducers } from 'redux';
import darkModeReducer from './slices/dark-mode/darkMode';
import filesReducer from './slices/files/files';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  files: filesReducer,
});

export default rootReducer;
