import { TRequest } from '../../types.ts';
import { TCartItem } from './common.ts';

export type TPostCreateCartItem = TRequest<TPayload, TCartItem>

type TPayload = {
    quantity: number,
    productId: string,
    userId: string
}