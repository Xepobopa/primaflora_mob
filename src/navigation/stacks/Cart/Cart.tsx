import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TCartStack } from './types.ts';
import { ScreenNavigationOptions } from '../options.ts';
import { EScreens } from '../../screens.ts';
import { CartScreen } from '../../../screens/Cart';

const Stack = createNativeStackNavigator<TCartStack>();

const CartStack = () => {
    return (
        <Stack.Navigator screenOptions={ScreenNavigationOptions}>
            <Stack.Screen name={EScreens.CartMain} component={CartScreen.Main} />
        </Stack.Navigator>
    );
};

export default CartStack;