import { TRequest } from '../../types.ts';
import { TCategory } from './common.ts';

export type TGetSiblingsByIdRequest = TRequest<null, Array<TCategory>>