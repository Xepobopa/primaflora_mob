import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './stacks/Main/Main.tsx';

const Navigator = () => {
    return (
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
    );
};

export default Navigator;