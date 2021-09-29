import AsyncStorage from '@react-native-async-storage/async-storage';
import persistCombineReducers from 'redux-persist/lib/persistCombineReducers';
import persistReducer from 'redux-persist/lib/persistReducer';
import kittenSlice from './kittenSlice';

/** Common persist nested store */

const commonConfig = {
  version: 1,
  storage: AsyncStorage,
  // There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
  timeout: undefined,
};

/** AppStore */
const persistConfig = {
  ...commonConfig,
  key: 'root',
  whitelist: [],
};

const appStorePersistConfig = {
  ...commonConfig,
  key: 'kittenSlice',
  whitelist: ['kittenList'],
};

/** All reducer here */
const allReducers = {
  kittenSlice: persistReducer(appStorePersistConfig, kittenSlice),
};

export default persistCombineReducers(persistConfig, allReducers);
