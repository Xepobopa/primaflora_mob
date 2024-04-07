import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TLikedStack } from './types.ts';
import { ScreenNavigationOptions } from '../options.ts';
import { EScreens } from '../../screens.ts';
import { LikedScreens } from '../../../screens/Liked';

const Stack = createNativeStackNavigator<TLikedStack>();

const LikedStack = () => {
    return (
        <Stack.Navigator screenOptions={ScreenNavigationOptions}>
            <Stack.Screen name={EScreens.LikedMain} component={LikedScreens.Main} />
        </Stack.Navigator>
    );
};

export default LikedStack;