import { TBasicDataBaseData } from '../../types.ts';

export type TProduct = {
    photo_url: string;
    title: string;
    desc: string;
    price_currency: number;
    price_points: number;
    percent_discount: number;
    rating: number;
} & TBasicDataBaseData;