import React, { useState } from 'react';
import { InfoLink, Input, MainView, NextButton, RegistrationFormView, Title } from './styled.ts';
import { Text, TouchableOpacity, View } from 'react-native';
import { Service } from '../../../common/services';
import axios from 'axios';
import { EScreens } from '../../../navigation/screens.ts';
import { useNavigation } from '../../../common/hooks/useNavigation';
import { ETab } from '../../../navigation/tabs';
import { useAuth } from '../../../common/hooks/useAuth/useAuth.ts';

// -------------------
// WATCH JIRA!!!!!!!!!
// -------------------

export const Registration = () => {
    const { setUserData } = useAuth();
    // TODO: set types on useNavigation
    const { navigate } = useNavigation();
    const [name, setName] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [password1, setPassword1] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');
    const [phoneAllowed, setPhoneAllowed] = useState<boolean>(false);
    const [consultationAllowed, setConsultationAllowed] = useState<boolean>(false);

    const moveToLogInScreen = () => {
        // redirect to log in screen
        navigate(EScreens.AuthAuthorization);
    };

    const onNext = async () => {
        try {
            const res = await Service.AuthService.postSignUp({
                name,
                phone,
                email,
                login,
                password1,
                password2,
                phone_allowed: phoneAllowed,
                consultation_allowed: consultationAllowed,
            });
            console.log(res.data);

            setUserData(res.data);
            navigate(EScreens.AuthAuthorization);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                console.error(e.toJSON());
                if (e.response) {
                    console.error(e?.response.data.message);
                }
            }
        }
    };

    return (
        <MainView>
            <Title>Auth Reg</Title>
            <RegistrationFormView>
                <View style={{ gap: 20 }}>
                    <Input
                        placeholder={'ФИО'}
                        placeholderTextColor={'lightgray'}
                        onChangeText={text => setName(text)} />
                    <Input
                        placeholder={'Пошта'}
                        placeholderTextColor={'lightgray'}
                        onChangeText={text => setEmail(text)} />
                    <Input
                        placeholder={'Номер телефону (+380971234567)'}
                        placeholderTextColor={'lightgray'}
                        onChangeText={text => setPhone(text)} />
                    <Input
                        placeholder={'Логін (особистий номер в компанії)'}
                        placeholderTextColor={'lightgray'}
                        onChangeText={text => setLogin(text)} />
                    <Input
                        secureTextEntry
                        placeholder={'Пароль'}
                        placeholderTextColor={'lightgray'}
                        onChangeText={text => setPassword1(text)} />
                    <Input
                        secureTextEntry
                        placeholder={'Підтвердити пароль'}
                        placeholderTextColor={'lightgray'}
                        onChangeText={text => setPassword2(text)} />
                    <TouchableOpacity onPress={moveToLogInScreen}>
                        <InfoLink>Already has account? Click here to log in!</InfoLink>
                    </TouchableOpacity>
                </View>
                <NextButton onPress={onNext}><Text>Next</Text></NextButton>
            </RegistrationFormView>
        </MainView>
    );
};