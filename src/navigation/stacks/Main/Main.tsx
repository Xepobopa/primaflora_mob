import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TMainStack } from './types.ts';
import { ScreenNavigationOptions } from '../options.ts';
import { ETab } from '../../tabs';
import MainTab from '../../tabs/Main/Main.tsx';
import { AuthStack } from '../Auth';
import { useTypedSelector } from '../../../store/tools.ts';
import { getUserSelector } from '../../../store/modules';

const Stack = createNativeStackNavigator<TMainStack>();

const MainStack = () => {
    const { user } = useTypedSelector(getUserSelector);

    // TODO: remove it
    useEffect(() => {
        console.log('[STORE.user]: ', user);
    }, [user]);

    // const user = true;
    const isAuth = user ? ETab.Main : ETab.Auth;
    return (
        <Stack.Navigator screenOptions={ScreenNavigationOptions} initialRouteName={isAuth}>
            <Stack.Screen name={ETab.Main} component={MainTab} />
            <Stack.Screen name={ETab.Auth} component={AuthStack} />
        </Stack.Navigator>
    );
};

export default MainStack;