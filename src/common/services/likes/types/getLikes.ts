import { TBasicDataBaseData, TRequest } from '../../types.ts';
import { TProduct } from '../../product';

export type TGetLikes = TRequest<null, TResponse[]>

type TResponse = {
    product: TProduct
} & TBasicDataBaseData