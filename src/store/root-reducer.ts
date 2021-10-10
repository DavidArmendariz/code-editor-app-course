import { combineReducers } from 'redux';
import darkModeReducer from './slices/dark-mode/darkMode';
import filesReducer from './slices/files/files';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const combinedReducers = combineReducers({
  darkMode: darkModeReducer,
  files: filesReducer,
});

const rootReducer = persistReducer(persistConfig, combinedReducers);

export default rootReducer;