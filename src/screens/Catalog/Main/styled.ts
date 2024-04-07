import styled from 'styled-components';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export const CatalogMainView = styled(View)`
  background-color: brown;
  flex: 1;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  align-items: center;
  justify-content: center;
`

export const TestText = styled(Text)`
  color: white;
  font-size: 50px;
  font-weight: bold;
`

export const CatalogListMainView = styled(ScrollView)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const BackButton = styled(TouchableOpacity)`
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px black solid;
  border-radius: 10px;
`