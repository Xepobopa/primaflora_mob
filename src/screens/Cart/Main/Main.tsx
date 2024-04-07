import React, { useEffect, useState } from 'react';
import { BigInfoText, Header, ListContainer, MainView, SmallInfoText, Title } from './styled.ts';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { TProduct } from '../../../common/services/product';
import { Service } from '../../../common/services';
import { useNavigation } from '../../../common/hooks/useNavigation';
import { EScreens } from '../../../navigation/screens.ts';
import axios from 'axios';
import { TCartItem } from '../../../common/services/cart';
import { CartListElem } from './components/CartListElem';

const screenWidth = Dimensions.get('window').width;

export const Main = () => {
    const navigation = useNavigation();
    const [cart, setCart] = useState<Array<TCartItem>>([]);

    const fetchData = async () => {
        try {
            const res = await Service.CartService.getAll();
            setCart(res.data);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                console.log('isAxios!');
            }
            console.log(e);
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Fetching user likes...');
            fetchData();
        });

        return unsubscribe;
    }, [navigation]);

    const onProductPress = (product: TProduct) => {
        navigation.navigate(EScreens.ProductMain, { product, path: [] });
    };

    const getLikesGlobalPrice = (): number => {
        if (cart.length === 0) return 0;

        let price = 0;
        for (const cartElem of cart) {
            price += cartElem.product.price_currency;
        }

        return price;
    };

    const onLikeProductRemove = (uuid: string) => {
        console.log('Dont delete it! Cart elem uuid -> ', uuid);

        // remove from local list
        setCart(prevState => prevState.filter(prod => prod.uuid !== uuid));

        // remove from database
        Service.CartService.delete({ uuid }).catch(err => console.log(err));
    };

    return (
        <MainView>
            <Header>
                <Title>Cart</Title>
                <SmallInfoText>Available: {cart.length} </SmallInfoText>
                <SmallInfoText>Sum: {getLikesGlobalPrice()} $ ( without discount )</SmallInfoText>
            </Header>

            <ListContainer>
                {
                    cart.length !== 0 ? (
                        <ScrollView>
                            {cart.map(elem => (
                                <TouchableOpacity onPress={() => onProductPress(elem.product)} key={elem.uuid}>
                                    <CartListElem
                                        cartElem={elem}
                                        elemWidth={screenWidth}
                                        onRemove={onLikeProductRemove} />
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    ) : <BigInfoText>Empty List</BigInfoText>
                }
            </ListContainer>
        </MainView>
    );
};

const styles = StyleSheet.create({
    FlatlistStyles: {
        flexWrap: 'wrap',
    },
});