import React from 'react';
import { BigButton, ListItem, ListSectionHeader, TestText, TestView } from './styled.ts';
import { Service, TUser } from '../../../common/services';
import { useTypedSelector } from '../../../store/tools.ts';
import { getUserSelector } from '../../../store/modules';
import { SectionList, Text } from 'react-native';
import { AsyncStorageService } from '../../../common/services/asyncStorage/asyncStorage.service.ts';
import { userSliceActions } from '../../../store/modules/user/reducer.ts';
import { useNavigation } from '../../../common/hooks/useNavigation';
import { ETab } from '../../../navigation/tabs';

type TShowProfileDataProps = {
    user: TUser | null
}

const ShowProfileData = ({ user }: TShowProfileDataProps) => {
    return (
        <SectionList
            sections={[
                {
                    title: 'User data',
                    data: [
                        `ID: ${user?.id}`,
                        `UUID: ${user?.uuid}`,
                        `Login: ${user?.login}`,
                        `Email: ${user?.email}`,
                        `Name: ${user?.name}`,
                        `Phone: ${user?.phone}`,
                        `Is Activated: ${user?.is_activated}`,
                        `Created At: ${user?.createdAt}`,
                        `Updated At: ${user?.updatedAt}`,
                    ],
                },
            ]}
            renderItem={(item) => <ListItem>{item.item}</ListItem>}
            renderSectionHeader={({ section }) => (
                <ListSectionHeader>{section.title}</ListSectionHeader>
            )}
            keyExtractor={item => `basicListEntry-${item}`}
        />
    );
};

export const Main = () => {
    const { user } = useTypedSelector(getUserSelector);
    const { navigate } = useNavigation();

    const onLogOut = async () => {
        await Service.AuthService.postLogOut();        // 1. Send logout request

        // just delete old access token or await AsyncStorageService.setAccessToken('empty string')
        await AsyncStorageService.deleteAccessToken(); // 2. Empty access token
        console.log('[AsyncStore]: cleared Access token');

        userSliceActions.clearUser();                  // 3. Clear user from storage
        console.log('[STORE.user]: clear');

        navigate(ETab.Auth);                      // 4. Move to Auth tab
    };

    return (
        <TestView>
            <TestText>Profile Main</TestText>
            <ShowProfileData user={user} />
            <BigButton onPress={onLogOut}><Text>Log out</Text></BigButton>
        </TestView>
    );
};