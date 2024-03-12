import { ETab } from '../../tabs';

export type TMainStack = {
    //          NAME                        PARAMS OR undefined
    // [EStacks.(some stack)]: TNavigationScreenParams<TNameStack>
    [ETab.Main]: undefined,
    [ETab.Auth]: undefined
}