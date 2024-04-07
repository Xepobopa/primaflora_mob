import styled from 'styled-components';
import { View } from 'react-native';

export const MainView = styled(View)<{ width: number }>`
  width: ${props => props.width}px;
  height: 250px;
  align-items: center;
  justify-content: center;
`

export const RowContainer = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`