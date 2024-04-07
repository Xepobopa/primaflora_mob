import rootReducer from './reducer.ts';

export type TRootState = ReturnType<typeof rootReducer>

export enum EStoreReducer {
    user = 'user',
}