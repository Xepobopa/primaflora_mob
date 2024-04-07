import React, { useEffect, useState } from 'react';
import { BackButton, CatalogMainView, RowContainer, Title } from './styled.ts';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Service } from '../../../common/services';
import { TProduct } from '../../../common/services/product';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TCatalogStack } from '../../../navigation/stacks';
import { EScreens } from '../../../navigation/screens.ts';
import { TCategory } from '../../../common/services/category/types';
import { Product } from './components/CatalogItem/Product.tsx';
import { useNavigation } from '../../../common/hooks/useNavigation';

// TODO: make PATH functionality
// const PathLink = ({ text, screen }: IPathLinkParams) => {
//     const { navigate } = useNavigation();
//
//     const onLinkPress = () => {
//         navigate(EScreens.ProductMain, null);
//     }
//
//     return (
//         <TouchableOpacity>
//
//         </TouchableOpacity>
//     )
// }

export const ProductList = () => {
    const { goBack, navigate } = useNavigation();
    const [productList, setProductList] = useState<Array<TProduct>>([]);
    const [categoryInfo, setCategoryInfo] = useState<TCategory>();

    const { categoryId, path } = useRoute<RouteProp<TCatalogStack, EScreens.CatalogProductList>>().params;

    useEffect(() => {
        Service.ProductService.getAllByQuery({ categoryId })
            .then(res => {
                setProductList(res.data.products);
                setCategoryInfo({ name: res.data.name, id: res.data.id } as TCategory);
            })
            .catch((err) => console.log('[REQUEST ERROR]: ', err.response));
    }, []);

    const onProductPress = async (product: TProduct) => {
        navigate(EScreens.ProductMain, { product, path });
    };

    const onBackPress = () => {
        goBack();
    };

    return (
        <CatalogMainView>
            <Title>{categoryInfo?.name || 'Loading...'}</Title>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    style={styles.FlatlistStyles}
                    data={productList}
                    renderItem={(item) => {
                        return (
                            <TouchableOpacity onPress={e => onProductPress(item.item)}>
                                <Product product={item.item} />
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item) => item.uuid}
                />
            </View>
            <BackButton onPress={onBackPress}><Text>Back</Text></BackButton>
        </CatalogMainView>
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
});