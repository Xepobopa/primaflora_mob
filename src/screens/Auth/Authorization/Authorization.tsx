import React, { useState } from 'react';
import { InfoLink, Input, MainView, NextButton, Title } from '../Registration/styled.ts';
import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { AuthorizationFormView, PlainText, RowContainer } from './styled.ts';
import { EScreens } from '../../../navigation/screens.ts';
import { Service } from '../../../common/services';
import axios from 'axios';
import { AsyncStorageService } from '../../../common/services/asyncStorage/asyncStorage.service.ts';
import { useNavigation } from '../../../common/hooks/useNavigation';
import { ETab } from '../../../navigation/tabs';
import { useAuth } from '../../../common/hooks/useAuth/useAuth.ts';
import { LOGIN_DEV, PASSWORD_DEV } from '@env';

export const Authorization = () => {
    const { setUserData } = useAuth();
    const { navigate } = useNavigation();
    const [isLogInAsDev, setIsLogInAsDev] = useState<boolean>(false);
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const toggleSwitch = () => setIsLogInAsDev(previousState => !previousState);

    const moveToRegScreen = () => {
        navigate(EScreens.AuthRegistration);
    };

    const logInAsDev = async () => {
        try {
            console.log('[INFO] DEV LOGIN! Hello!')
            const res = await Service.AuthService.postSignIn(
                {
                    login: LOGIN_DEV,
                    password: PASSWORD_DEV,
                }
            );
            console.log('User: ', res.data.user);

            await AsyncStorageService.setAccessToken(res.data.accessToken);
            await AsyncStorageService.setRefreshToken(res.data.refreshToken);
            setUserData(res.data.user);
            console.log('User data saved locally!');


            navigate(ETab.Main);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                console.error(e.toJSON());
            }
        }
    }

    const onNext = async () => {
        if (isLogInAsDev) {
            await logInAsDev();
            return;
        }

        try {
            const res = await Service.AuthService.postSignIn({ login, password });
            console.log('User: ', res.data.user);

            await AsyncStorageService.setAccessToken(res.data.accessToken);
            await AsyncStorageService.setRefreshToken(res.data.refreshToken);
            setUserData(res.data.user);
            console.log('User data saved locally!');


            navigate(ETab.Main);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                console.error(e.toJSON());
            }
        }
    };

    return (
        <MainView>
            <Title>Log In</Title>
            <AuthorizationFormView>
                <View style={{ gap: 20 }}>
                    <Input placeholder={'Login'} placeholderTextColor={'lightgray'}
                           onChangeText={newText => setLogin(newText)} />
                    <Input placeholder={'Password'} placeholderTextColor={'lightgray'} secureTextEntry
                           onChangeText={newText => setPassword(newText)} />
                    <TouchableOpacity onPress={moveToRegScreen}>
                        <InfoLink>Don't have an account yet? Click here to create it!</InfoLink>
                    </TouchableOpacity>
                    <RowContainer>
                        <PlainText>Log in as a Dev</PlainText>
                        <Switch
                            style={{ alignSelf: 'flex-start' }}
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isLogInAsDev ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor='#3e3e3e'
                            onValueChange={toggleSwitch}
                            value={isLogInAsDev}
                        />
                    </RowContainer>
                </View>
                <NextButton onPress={onNext}><Text>Next</Text></NextButton>
            </AuthorizationFormView>
        </MainView>
    );
};