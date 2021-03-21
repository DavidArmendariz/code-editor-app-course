import { combineReducers } from 'redux';
import darkModeReducer from './reducers/dark-mode/reducer';
import filesReducer from './reducers/files/reducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  files: filesReducer,
});

export default rootReducer;
