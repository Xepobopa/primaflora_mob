import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { THomeStack } from './types.ts';
import { ScreenNavigationOptions } from '../options.ts';
import { EScreens } from '../../screens.ts';
import { HomeScreens } from '../../../screens/Home';

const Stack = createNativeStackNavigator<THomeStack>();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={ScreenNavigationOptions}>
            <Stack.Screen name={EScreens.HomeMain} component={HomeScreens.Main} />
        </Stack.Navigator>
    );
};

export default HomeStack;