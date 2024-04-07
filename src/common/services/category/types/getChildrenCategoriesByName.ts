import { TRequest } from '../../types.ts';
import { TCategory } from './common.ts';

export type TGetChildrenCategoriesByNameRequest = TRequest<null, Array<TCategory>>