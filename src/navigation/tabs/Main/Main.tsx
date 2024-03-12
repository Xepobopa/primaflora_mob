import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TMainTab } from './types.ts';
import { ScreenTabOptions } from '../options.ts';
import { EStacks } from '../../stacks';
import HomeStack from '../../stacks/Home/Home.tsx';
import CatalogStack from '../../stacks/Catalog/Catalog.tsx';
import OrderStack from '../../stacks/Order/Order.tsx';
import ProfileStack from '../../stacks/Profile/Profile.tsx';

const Tab = createBottomTabNavigator<TMainTab>();

const MainTab = () => {
    return (
        <Tab.Navigator screenOptions={ScreenTabOptions}>
            <Tab.Screen component={HomeStack} name={EStacks.Home}/>
            <Tab.Screen component={CatalogStack} name={EStacks.Catalog}/>
            <Tab.Screen component={OrderStack} name={EStacks.Order}/>
            <Tab.Screen component={ProfileStack} name={EStacks.Profile}/>
        </Tab.Navigator>
    );
};

export default MainTab;