import styled from 'styled-components';
import { Text, TouchableOpacity, View } from 'react-native';

export const TestView = styled(View)`
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

export const ListItem = styled(Text)`
  padding: 10px;
  font-size: 18px;
  height: 44px;
  color: black;
  font-weight: 600;
  background-color: whitesmoke;
`

export const ListSectionHeader = styled(Text)`
  padding: 2px 10px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  background-color: rgb(213, 213, 213);
`

export const BigButton = styled(TouchableOpacity)`
  padding: 10px 20px;
  width: 100%;
  background-color: crimson;
`