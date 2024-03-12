import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TCatalogStack } from './types.ts';
import { ScreenNavigationOptions } from '../options.ts';
import { EScreens } from '../../screens.ts';
import { CatalogScreens } from '../../../screens/Catalog';

const Stack = createNativeStackNavigator<TCatalogStack>();

const CatalogStack = () => {
    return (
        <Stack.Navigator screenOptions={ScreenNavigationOptions}>
            {/*                 or ETabs                      */}
            <Stack.Screen name={EScreens.CatalogMain} component={CatalogScreens.Main} />
        </Stack.Navigator>
    );
};

export default CatalogStack;