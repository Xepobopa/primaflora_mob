import { TRequest } from '../../types.ts';
import { TProduct } from './common.ts';
import { TCategory } from '../../category/types';

export type TGetProductsByQuery = TRequest<TPayload, TResponse>

type TPayload = {
    categoryId?: number | null,
    categoryName?: string | null,
}

type TResponse = {
    products: Array<TProduct>
} & TCategory;