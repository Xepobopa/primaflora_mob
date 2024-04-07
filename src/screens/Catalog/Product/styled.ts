import styled from 'styled-components';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export const ProductMainView = styled(ScrollView)`
  background-color: brown;
  flex: 1;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  //align-items: center;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const Title = styled(Text)`
  color: white;
  font-size: 40px;
  font-weight: bold;
`

export const SubTitle = styled(Text)`
  color: antiquewhite;
  font-size: 20px;
  font-weight: normal;
`

export const BackButton = styled(TouchableOpacity)`
  padding: 10px 20px;
  width: auto;
  background-color: crimson;
  align-items: center;
`

export const Price = styled(Text)`
  color: blanchedalmond;
  font-size: 35px;
  font-weight: bold;
`

export const Discount = styled(Text)`
  color: blanchedalmond;
  font-size: 35px;
  font-style: italic;
  font-weight: bold;
`

export const RowContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const MainContainer = styled(View)`
  margin: 20px;
`

export const TestButton = styled(TouchableOpacity)`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px 20px;
  border: 1px black solid;
  border-radius: 10px;
`