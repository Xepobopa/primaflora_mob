import styled from 'styled-components';
import { Text, TouchableOpacity, View } from 'react-native';

export const Item = styled(View)`
  border: 1px black solid;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 55px;
  margin: 5px;
  background-color: rgba(255, 255, 255, 0.2);
`

export const CatalogItemText = styled(Text)`
  color: black;
  font-size: 20px;
  font-weight: bold;
`