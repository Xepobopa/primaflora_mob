import { EStoreReducer, TRootState } from '../../types.ts';

export const getUserSelector = (state: TRootState) => state[EStoreReducer.user]