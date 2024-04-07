import React from 'react';
import {
    BackButton,
    Discount,
    MainContainer,
    Price,
    ProductMainView,
    RowContainer,
    SubTitle,
    TestButton,
    Title,
} from './styled.ts';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TCatalogStack } from '../../../navigation/stacks';
import { EScreens } from '../../../navigation/screens.ts';
import { useNavigation } from '../../../common/hooks/useNavigation';
import { Service } from '../../../common/services';
import { useTypedSelector } from '../../../store/tools.ts';
import { getUserSelector } from '../../../store/modules';
import axios from 'axios';

export const Product = () => {
    const { goBack } = useNavigation();
    const { user } = useTypedSelector(getUserSelector);
    const { product } = useRoute<RouteProp<TCatalogStack, EScreens.ProductMain>>().params;

    const likeButtonPressed = () => {
        Service.LikesService.setLike({ productUuid: product.uuid }).catch(err => console.log(err.response));
    };

    const moveToCardButtonPressed = async () => {
        if (!user) {
            return Alert.alert('Empty Store!', 'User in store is empty! Thus cant get user id for request!');
        }

        console.log('product.uuid -> ', product.uuid);
        console.log('user.uuid -> ', user.uuid);

        try {
            const res = await Service.CartService.postCreate({
                productId: product.uuid,
                userId: user.uuid,
                quantity: 1,
            });
            console.log('RES: ', res.data);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                console.log(e.response?.data);
            }
        }
    };

    const onBackPress = () => {
        goBack();
    };

    return (
        <ProductMainView contentContainerStyle={{ justifyContent: 'space-between' }}>
            <MainContainer>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: product.photo_url }}
                        style={styles.image} />
                </View>
                <Title>{product?.title || 'Loading...'}</Title>
                <SubTitle>{product.desc}</SubTitle>
                <RowContainer>
                    {
                        product.percent_discount !== 0 ?
                            <RowContainer>
                                <Price
                                    style={{ textDecorationLine: 'line-through' }}>{product.price_currency} грн.</Price>
                                <Discount>{product.price_currency * (1 - product.percent_discount)} грн.</Discount>
                            </RowContainer> :
                            <Price>{product.price_currency} грн.</Price>
                    }
                    <TestButton><Text>Придбати</Text></TestButton>
                </RowContainer>
                <RowContainer>
                    <TestButton onPress={likeButtonPressed}><Text>Like</Text></TestButton>
                    <TestButton onPress={moveToCardButtonPressed}><Text>Add to the cart</Text></TestButton>
                </RowContainer>
            </MainContainer>
            <BackButton onPress={onBackPress}><Text>Back</Text></BackButton>
        </ProductMainView>
    );
};


const styles = StyleSheet.create({
    catalogListMainView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    FlatlistStyles: {
        flexWrap: 'wrap',
    },
    imageContainer: {
        height: 500,
        width: '100%',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
});