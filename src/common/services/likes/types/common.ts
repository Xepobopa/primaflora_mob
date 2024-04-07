import { TBasicDataBaseData, TUser } from '../../types.ts';
import { TProduct } from '../../product';

export type TLike = {
    user: TUser,
    product: TProduct,
} & TBasicDataBaseData;