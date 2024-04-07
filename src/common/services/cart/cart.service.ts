import { apiPrivate } from '../../api';
import { TDeleteCartItem, TGetAllCartItemsByUserId, TPatchUpdateCartItem, TPostCreateCartItem } from './types';

export class CartService {
    static async postCreate(data: TPostCreateCartItem['payload']): Promise<TPostCreateCartItem['response']> {
        console.log('productId to add: ', data.productId);
        return apiPrivate.post('/cart', {
            quantity: 1,
            productId: data.productId,
            userId: "e8ab2bbf-4c07-4550-b819-069bb27b073e"
        });
    }

    static async getAll(): Promise<TGetAllCartItemsByUserId['response']> {
        return apiPrivate.get('/cart/getAll');
    }

    static async patchUpdate(data: TPatchUpdateCartItem['payload']): Promise<TPatchUpdateCartItem['response']> {
        return apiPrivate.patch(`/cart/${data.params.userUuid}`, { data: data.payload });
    }

    static async delete(params: TDeleteCartItem['payload']): Promise<TDeleteCartItem['response']> {
        console.log('"', params.uuid, '"');
        return apiPrivate.delete(`/cart/${params.uuid}`);
    }
}