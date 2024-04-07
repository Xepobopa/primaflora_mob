import styled from 'styled-components';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export const MainView = styled(View)`
  background-color: brown;
  flex: 1;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  align-items: center;
`

export const Title = styled(Text)`
  color: whitesmoke;
  font-size: 50px;
  font-weight: bold;
  padding-top: 50px;
`

export const PlainText = styled(Text)`
  color: whitesmoke;
  font-size: 14px;
`

export const RowContainer = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const AuthorizationFormView = styled(View)`
  width: 100%;
  padding: 40px 20px;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export const Input = styled(TextInput)`
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px darkgray solid;
  padding: 5px 20px;
  width: 100%;
  color: whitesmoke;
  font-size: 16px;
  font-weight: bold;
`

export const NextButton = styled(TouchableOpacity)`
  width: 100%;
  background-color: darkgray;
  align-items: center;
  padding: 10px;
`