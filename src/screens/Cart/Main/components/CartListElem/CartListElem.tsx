import React from 'react';
import { ICartListElemProps } from './types.ts';
import { MainView, RowContainer } from './styles.ts';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const CartListElem = ({ cartElem, elemWidth, onRemove }: ICartListElemProps) => {
    const truncate = (str: string) => {
        return str.length > 32 ? str.substring(0, 32) + '...' : str;
    };

    return (
        <MainView width={elemWidth}>
            <RowContainer>
                <Image style={styles.image} source={{ uri: cartElem.product.photo_url }} />
                <View style={{ width: elemWidth / 2.3, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.plainText}>{truncate(cartElem.product.title)}</Text>
                        <Text style={styles.plainText}>{cartElem.product.price_currency} UAH</Text>
                        <Text style={styles.plainText}># {cartElem.quantity}</Text>
                    </View>

                    <TouchableOpacity onPress={() => onRemove(cartElem.uuid)}>
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