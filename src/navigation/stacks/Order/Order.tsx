import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TOrderStack } from './types.ts';
import { ScreenNavigationOptions } from '../options.ts';
import { EScreens } from '../../screens.ts';
import { OrderScreens } from '../../../screens/Order';

const Stack = createNativeStackNavigator<TOrderStack>();

const OrderStack = () => {
    return (
        <Stack.Navigator screenOptions={ScreenNavigationOptions}>
            <Stack.Screen name={EScreens.OrderMain} component={OrderScreens.Main} />
        </Stack.Navigator>
    );
};

export default OrderStack;