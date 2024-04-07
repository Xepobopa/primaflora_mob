import styled from 'styled-components';
import { Text, View } from 'react-native';

export const MainView = styled(View)`
  background-color: brown;
  flex: 1;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  padding-top: 30px;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
`

export const Header = styled(View)`
  width: 100%;
`

export const Title = styled(Text)`
  color: white;
  font-size: 32px;
  font-weight: bold;
  align-self: flex-start;
`

export const BigInfoText = styled(Text)`
  color: white;
  font-size: 40px;
  font-weight: bold;
`

export const SmallInfoText = styled(Text)`
  color: white;
  font-size: 16px;
  font-weight: bold;
`

export const ListContainer = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`