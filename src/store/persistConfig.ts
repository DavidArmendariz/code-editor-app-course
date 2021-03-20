import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['darkMode'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
