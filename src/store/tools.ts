import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TRootState } from './types.ts';

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;