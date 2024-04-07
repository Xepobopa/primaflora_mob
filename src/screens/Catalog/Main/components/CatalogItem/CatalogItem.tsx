import { ICatalogItemProps } from './types.ts';
import { CatalogItemText, Item } from './styles.ts';
import { StyleSheet } from 'react-native';

export const CatalogItem = ({ catalog }: ICatalogItemProps) => {
    return (
        <Item>
            <CatalogItemText>{catalog.name}</CatalogItemText>
        </Item>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
});