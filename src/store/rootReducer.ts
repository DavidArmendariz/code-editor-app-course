import { combineReducers } from 'redux';
import darkModeReducer from './dark-mode/reducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
});

export default rootReducer;
