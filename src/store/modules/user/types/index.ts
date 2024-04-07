import { TUser } from '../../../../common/services';

export type CartElem = {
    quantity: number;
    productId: string;
}

export type TInitialState = {
    user: TUser | null;
}