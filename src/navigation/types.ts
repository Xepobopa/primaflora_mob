import { TCatalogStack, THomeStack, TLikedStack, TMainStack, TProfileStack } from './stacks';
import { TAuthStack } from './stacks/Auth';
import { TMainTab } from './tabs/Main/types.ts';
import { NavigatorScreenParams, ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TCartStack } from './stacks/Cart';

export type TScreens = TMainStack &
    THomeStack &
    TCartStack &
    TAuthStack &
    TLikedStack &
    TProfileStack &
    TCatalogStack &
    TMainTab

export type TScreenProps<Screen extends keyof TScreens> = RouteProp<TScreens, Screen>

export type TScreenNavigation<Screen extends keyof TScreens> =
    NativeStackNavigationProp<TScreens, Screen>

export type TNavigationScreenParams<
    TStack extends ParamListBase,
    TStackParams = undefined,
> = NavigatorScreenParams<TStack> | TStackParams
