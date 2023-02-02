import styled, {css} from "styled-components/native";
import {TouchableOpacity} from "react-native";
import {Plus} from "phosphor-react-native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;
  max-height: 50px;
  min-height: 50px;
  
  border-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_1};
  border-width: ${({type}) => type === 'PRIMARY' ? 0 : 1}px;
  border-radius: 6px;

  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7};
  
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<Props>`
  ${({theme, type}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `};
`;

export const PlusIcon = styled(Plus).attrs(({theme}) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))`
  margin-right: 12px;
`