import styled from 'styled-components';
import { Text, TouchableOpacity, View } from 'react-native';

export const Item = styled(View)`
  border: 1px black solid;
  width: 200px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.2);
`

export const ItemBottomDataContainer = styled(View)`
  margin: 10px;
  //height: 100px;
`

export const ItemText = styled(Text)`
  color: black;
  font-size: 20px;
  font-weight: bold;
`

export const ItemPrice = styled(Text)`
  color: black;
  font-size: 15px;
  font-weight: 700;
  font-style: italic;
`

export const RowContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`