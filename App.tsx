/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigator from './src/navigation/Navigator.tsx';
import { Provider } from 'react-redux';
import store from './src/store/store.ts';

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
}


export default App;
