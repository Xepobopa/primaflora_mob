import { TRequest } from '../../types.ts';
import { TCartItem } from './common.ts';

export type TDeleteCartItem = TRequest<TPayload, any>

type TPayload = {
    uuid: string;
}