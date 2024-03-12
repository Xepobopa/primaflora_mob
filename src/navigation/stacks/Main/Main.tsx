import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TMainStack } from './types.ts';
import { ScreenNavigationOptions } from '../options.ts';
import { ETab } from '../../tabs';
import MainTab from '../../tabs/Main/Main.tsx';
import { AuthStack } from '../Auth';

const Stack = createNativeStackNavigator<TMainStack>();

const MainStack = () => {
    const user = true;

    // TODO: check if user authed

    const isAuth = user ? ETab.Main : ETab.Auth;
    return (
        <Stack.Navigator screenOptions={ScreenNavigationOptions} initialRouteName={isAuth}>
            <Stack.Screen name={ETab.Main} component={MainTab} />
            <Stack.Screen name={ETab.Auth} component={AuthStack} />
        </Stack.Navigator>
    );
};

export default MainStack;