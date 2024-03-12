import styled from 'styled-components';
import { Text, View } from 'react-native';

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