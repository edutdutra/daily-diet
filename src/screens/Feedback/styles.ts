import styled, {css} from "styled-components/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {TouchableOpacity} from "react-native";

type Props = {
  type: 'SUCCESS' | 'FAIL'
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  padding: 24px;

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text<Props>`
  ${({theme, type}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `};
  margin-bottom: 8px;
`

export const FeedbackText = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
  height: 42px;
`

export const ImagePng = styled.Image`
  margin-top: 40px;
  margin-bottom: 32px;
`

export const HomeButton = styled(TouchableOpacity)`
  flex: 1;
  max-height: 50px;
  min-height: 50px;
  border-radius: 6px;
  background-color: ${({theme}) => theme.COLORS.GRAY_2};
  align-items: center;
  justify-content: center;
  
  padding: 16px 24px;
`;

export const ButtonTitle = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `};
`;

//
// export const FeedbackTextBold = styled.Text`
//   ${({theme}) => css`
//     font-size: ${theme.FONT_SIZE.MD}px;
//     font-family: ${theme.FONT_FAMILY.BOLD};
//     color: ${theme.COLORS.GRAY_1};
//   `};
// `