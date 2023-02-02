import styled, {css} from 'styled-components/native';
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
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `};
`;

export const Percentage = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Icon = styled(ArrowUpRight).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.GREEN_DARK,
}))`
`