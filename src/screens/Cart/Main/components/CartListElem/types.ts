import { TCartItem } from '../../../../../common/services/cart';


export interface ICartListElemProps {
    cartElem: TCartItem;
    elemWidth: number;
    onRemove: (likeUuid: string) => void;
}