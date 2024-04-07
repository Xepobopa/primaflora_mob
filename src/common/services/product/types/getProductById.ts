import { TRequest } from '../../types.ts';
import { TProduct } from './common.ts';
import { TCategory } from '../../category/types';

export type TGetProductById = TRequest<TPayload, TProduct | undefined>

type TPayload = {
    uuid: string;
}