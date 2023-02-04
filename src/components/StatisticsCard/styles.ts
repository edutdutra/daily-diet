import styled from 'styled-components/native';
import {TouchableOpacity} from "react-native";
import {ArrowUpRight} from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 102px;

  border-radius: 8px;

  padding: 20px 16px;
  margin-top: 32px;
  margin-bottom: 40px;

  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};

  align-items: center;
  justify-content: center;

  position: relative;
`;


export const Icon = styled(ArrowUpRight).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`