import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartElem, TInitialState } from './types';
import { EStoreReducer } from '../../types.ts';
import { TUser } from '../../../common/services';

const initialState: TInitialState = {
    user: null,
}

export const slice = createSlice({
    name: EStoreReducer.user,
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<TUser>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        }
    }
});

export const userSliceActions = slice.actions;

export default slice.reducer;