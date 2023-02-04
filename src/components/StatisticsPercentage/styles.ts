import styled, {css} from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  max-height: 120px;
  min-height: 120px;
  
  align-items: center;
  justify-content: center;
`
export const Percentage = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
  text-align: center;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `};
  text-align: center;
`;
