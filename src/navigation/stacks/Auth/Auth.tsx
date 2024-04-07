import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TAuthStack } from './types.ts';
import { ScreenNavigationOptions } from '../options.ts';
import { EScreens } from '../../screens.ts';
import { AuthScreens } from '../../../screens/Auth';

const Stack = createNativeStackNavigator<TAuthStack>()

export const AuthStack = () => {
    return (
       <Stack.Navigator screenOptions={ScreenNavigationOptions}>
           <Stack.Screen name={EScreens.AuthRegistration} component={AuthScreens.Registration}/>
           <Stack.Screen name={EScreens.AuthAuthorization} component={AuthScreens.Authorization}/>
       </Stack.Navigator>
    );
};