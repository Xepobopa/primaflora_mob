import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TProfileStack } from './types.ts';
import { ScreenNavigationOptions } from '../options.ts';
import { EScreens } from '../../screens.ts';
import { ProfileScreens } from '../../../screens/Profile';

const Stack = createNativeStackNavigator<TProfileStack>();

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={ScreenNavigationOptions}>
            <Stack.Screen name={EScreens.ProfileMain} component={ProfileScreens.Main} />
        </Stack.Navigator>
    );
};

export default ProfileStack;