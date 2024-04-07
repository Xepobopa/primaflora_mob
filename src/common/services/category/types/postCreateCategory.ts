import { TRequest, TUser } from '../../types.ts';
import { TCategory } from './common.ts';

export type TPostCreateCategoryRequest = TRequest<TPayload, TCategory>

type TPayload = {
    name: string,
    parentId: number
}