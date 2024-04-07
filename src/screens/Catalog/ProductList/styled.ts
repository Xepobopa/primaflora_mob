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

export const Title = styled(Text)`
  color: white;
  font-size: 40px;
  font-weight: bold;
`

export const SubTitle = styled(Text)`
  color: antiquewhite;
  font-size: 35px;
  font-weight: normal;
`

export const CatalogListMainView = styled(ScrollView)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const BackButton = styled(TouchableOpacity)`
  padding: 10px 20px;
  width: 100%;
  background-color: crimson;
  align-items: center;
`

export const RowContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`