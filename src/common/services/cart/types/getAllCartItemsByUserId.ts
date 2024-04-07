import { TRequest } from '../../types.ts';
import { TCartItem } from './common.ts';

export type TGetAllCartItemsByUserId = TRequest<any, TCartItem[]>