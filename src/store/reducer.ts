import { combineReducers } from '@reduxjs/toolkit';
import { EStoreReducer } from './types.ts';
import { userReducer } from './modules';

export default combineReducers({
    [EStoreReducer.user]: userReducer,
})