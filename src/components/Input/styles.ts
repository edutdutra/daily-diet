import styled, {css} from "styled-components/native";
import {TextInput} from "react-native";

type Props = {
    height: number;
}

export const Container = styled(TextInput)<Props>`
  width: 100%;
  
  ${({theme}) => css`
    border-color: ${theme.COLORS.GRAY_5};
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
  
  border-width: 1px;
  border-radius: 6px;
  padding: 14px;
  margin-bottom: 24px;
`;