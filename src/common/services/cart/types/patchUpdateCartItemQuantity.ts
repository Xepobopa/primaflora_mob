import { TRequest } from '../../types.ts';
import { TCartItem } from './common.ts';

export type TPatchUpdateCartItem = TRequest<TPayload, any>

type TPayload = {
    payload: Partial<Pick<TCartItem, 'quantity'>>;
    params: {
        userUuid: string;
    }
}