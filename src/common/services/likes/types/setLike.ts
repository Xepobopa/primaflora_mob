import { TRequest } from '../../types.ts';
import { TLike } from './common.ts';

export type TSetLike = TRequest<TPayload, TLike>

type TPayload = {
    productUuid: string;
}