import React, { useEffect, useState } from 'react';
import { BackButton, CatalogMainView, TestText } from './styled.ts';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CatalogItem } from './components/CatalogItem';
import { TCategory } from '../../../common/services/category/types';
import { Service } from '../../../common/services';
import { AxiosError } from 'axios';
import { useNavigation } from '../../../common/hooks/useNavigation';
import { EScreens } from '../../../navigation/screens.ts';

export const Main = () => {
    const { navigate } = useNavigation();
    const [catalog, setCatalog] = useState<Array<TCategory>>([]);
    const [path, setPath] = useState<Array<string>>(['CATALOG']);

    useEffect(() => {
        Service.CategoryService.getChildren('CATALOG')
            .then(res => setCatalog(res.data))
            .catch((err: AxiosError) => console.log('[REQUEST ERROR]: ', err.response?.data));
        setPath(['CATALOG']);
    }, []);

    const onCategoryPress = async (category: TCategory) => {
        const res = await Service.CategoryService.getChildren(category.name);

        // if current catalog doesn't have any subcatalogs, then show products of this catalog on other screen
        if (res.data.length === 0) {
            // move to the Product screen, that will show all needed products
            navigate(EScreens.CatalogProductList, { categoryId: category.id, path });
            return;
        }

        setCatalog(res.data);

        setPath(prevState => [...prevState, category.name]);
    }

    const onBackPress = async () => {
        if (catalog[0]?.parent && path.length > 1) {
            const res = await Service.CategoryService.getSiblingsById(catalog[0].parent);
            setCatalog(res.data);

            setPath(prevState => prevState.slice(0, -1));
        }
    }

    return (
        <CatalogMainView>
            <TestText>Catalog Main</TestText>
            <BackButton onPress={onBackPress}><Text style={{ fontSize: 16, fontWeight: '500' }}>Back</Text></BackButton>
            <Text style={{ fontSize: 16 }}>Path: {path.join(' > ')}</Text>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    style={styles.FlatlistStyles}
                    data={catalog}
                    renderItem={(item) => {
                        return (
                            <TouchableOpacity onPress={e => onCategoryPress(item.item)}>
                                <CatalogItem catalog={item.item} />
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.uuid}
                />
            </View>
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