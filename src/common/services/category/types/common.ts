import { TBasicDataBaseData } from '../../types.ts';

export type TCategory = {
    name: string,
    parent?: number | null,
} & TBasicDataBaseData