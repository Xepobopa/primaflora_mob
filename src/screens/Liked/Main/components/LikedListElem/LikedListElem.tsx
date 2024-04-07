import React from 'react';
import { ILikedListElemProps } from './types.ts';
import { MainView, RowContainer } from './styles.ts';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const LikedListElem = ({ likeElem, elemWidth, onRemove }: ILikedListElemProps) => {
    const truncate = (str: string) => {
        return str.length > 32 ? str.substring(0, 32) + '...' : str;
    };

    return (
        <MainView width={elemWidth}>
            <RowContainer>
                <Image style={styles.image} source={{ uri: likeElem.product.photo_url }} />
                <View style={{ width: elemWidth / 2.3, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.plainText}>{truncate(likeElem.product.title)}</Text>
                        <Text style={styles.plainText}>{likeElem.product.price_currency} UAH</Text>
                    </View>

                    <TouchableOpacity onPress={() => onRemove(likeElem.uuid)}>
                        <Text>Remove</Text>
                    </TouchableOpacity>
                </View>
            </RowContainer>
        </MainView>
    );
};

const styles = StyleSheet.create({
    plainText: {
        color: 'white',
        fontSize: 10,
        fontWeight: '500',
        overflow: 'hidden',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 15,
        margin: 0,
    },
});