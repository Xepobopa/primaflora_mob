import { EScreens } from '../../screens.ts';
import { TCatalogProductListScreenParams } from '../../../screens/Catalog/ProductList';
import { TProductScreenProps } from '../../../screens/Catalog/Product';

export type TCatalogStack = {
    [EScreens.CatalogMain]: undefined,
    [EScreens.CatalogProductList]: TCatalogProductListScreenParams,
    [EScreens.ProductMain]: TProductScreenProps,
}