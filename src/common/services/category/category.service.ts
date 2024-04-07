import { apiPrivate } from '../../api';
import { TCategory, TGetChildrenCategoriesByNameRequest, TPostCreateCategoryRequest } from './types';
import { TGetSiblingsByIdRequest } from './types/getSiblingsById.ts';

export class CategoryService {
    static async postCreate(data: TPostCreateCategoryRequest['payload']): Promise<TPostCreateCategoryRequest['response']> {
        return apiPrivate.post('/categories/create', data)
    }

    static async getChildren(category: string): Promise<TGetChildrenCategoriesByNameRequest['response']> {
        return apiPrivate.get(`/categories/getChildrenOnly/${category}`);
    }

    static async getChildrenById(id: number): Promise<TGetChildrenCategoriesByNameRequest['response']> {
        return apiPrivate.get(`/categories/getChildrenOnlyById/${id}`);
    }

    static async getSiblingsById(id: number): Promise<TGetSiblingsByIdRequest['response']> {
        return apiPrivate.get(`/categories/getSiblingsById/${id}`);
    }
}