import React, { useEffect, useState } from 'react';
import { BigInfoText, Header, ListContainer, MainView, SmallInfoText, Title } from './styled.ts';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { TProduct } from '../../../common/services/product';
import { Service } from '../../../common/services';
import { LikedListElem } from './components/LikedListElem';
import { useNavigation } from '../../../common/hooks/useNavigation';
import { EScreens } from '../../../navigation/screens.ts';
import { TLikeElem } from './types.ts';
import axios from 'axios';

const screenWidth = Dimensions.get('window').width;

export const Main = () => {
    const navigation = useNavigation();
    const [likes, setLikes] = useState<Array<TLikeElem>>([]);

    const fetchData = async () => {
        try {
            const res = await Service.LikesService.getLikes();
            setLikes(res.data);
        } catch (e) {
            if (axios.isAxiosError(e)){
                console.log(e.response?.data);
            }
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
        if (likes.length === 0) return 0;

        let price = 0;
        for (const like of likes) {
            price += like.product.price_currency;
        }

        return price;
    };

    const onLikeProductRemove = (likeUuid: string) => {
        // remove from local list
        setLikes(prevState => prevState.filter(prod => prod.uuid !== likeUuid));

        // remove from database
        Service.LikesService.deleteLike({ likeUuid: likeUuid }).catch(err => console.log(err));
    };

    return (
        <MainView>
            <Header>
                <Title>Liked</Title>
                <SmallInfoText>Available: {likes.length} </SmallInfoText>
                <SmallInfoText>Sum: {getLikesGlobalPrice()} $ ( without discount )</SmallInfoText>
            </Header>

            <ListContainer>
                {
                    likes.length !== 0 ? (
                        <ScrollView>
                            {likes.map(elem => (
                                <TouchableOpacity onPress={() => onProductPress(elem.product)} key={elem.uuid}>
                                    <LikedListElem
                                        likeElem={elem}
                                        elemWidth={screenWidth}
                                        onRemove={onLikeProductRemove}/>
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