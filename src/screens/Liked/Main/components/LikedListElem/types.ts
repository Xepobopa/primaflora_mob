import { TLikeElem } from '../../types.ts';

export interface ILikedListElemProps {
    likeElem: TLikeElem;
    elemWidth: number;
    onRemove: (likeUuid: string) => void;
}