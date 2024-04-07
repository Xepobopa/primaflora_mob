import { TBasicDataBaseData } from '../../types.ts';
import { TProduct } from '../../product';

export type TCartItem = {
    quantity: number;
    product: TProduct;
} & TBasicDataBaseData;