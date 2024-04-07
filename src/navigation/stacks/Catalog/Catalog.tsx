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
            <Stack.Screen name={EScreens.CatalogMain} component={CatalogScreens.Main} />
            <Stack.Screen name={EScreens.CatalogProductList} component={CatalogScreens.ProductList} />
            <Stack.Screen name={EScreens.ProductMain} component={CatalogScreens.Product} />
        </Stack.Navigator>
    );
};

export default CatalogStack;