import { IProductProps } from './types.ts';
import { Item, ItemBottomDataContainer, ItemPrice, ItemText, RowContainer } from './styles.ts';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Product = ({ product }: IProductProps) => {
    return (
        <Item>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={{ uri: product.photo_url }}
                    resizeMode={'cover'}
                    style={styles.image} />
            </View>
            <ItemBottomDataContainer>
                <ItemText>{product.title}</ItemText>
                <ItemPrice>{product.price_currency} $</ItemPrice>
                <RowContainer>
                    <TouchableOpacity><Text>Like</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Make order</Text></TouchableOpacity>
                </RowContainer>
            </ItemBottomDataContainer>
        </Item>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    imageContainer: {
        height: 290,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
});