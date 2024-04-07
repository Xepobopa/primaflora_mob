import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { REDUX_KEY } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EStoreReducer } from './types.ts';
import rootReducer from './reducer.ts'

const whitelist: string[] = [EStoreReducer.user];

const persistedReducer = persistReducer({
      key: REDUX_KEY,
      storage: AsyncStorage,
      whitelist
   },
    rootReducer
);

const store = configureStore({
   reducer: persistedReducer,
   devTools: true
});

export default store;