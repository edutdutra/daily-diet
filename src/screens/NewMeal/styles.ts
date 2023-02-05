import styled, {css} from "styled-components/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {TouchableOpacity, View} from "react-native";

type Props = {
  type: 'SUCCESS' | 'FAIL'
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_5};
  padding-top: 24px;
  position: relative;
`

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
  text-align: center;
  margin-bottom: 24px;
`

export const FormContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  border-radius: 20px;
  padding: 40px 24px
`


export const Form = styled.View`
  flex: 1;
`

export const Label = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `};
  margin-bottom: 4px;
`

export const RowContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const RowItem = styled.View`
  max-width: 160px;
  min-width: 160px;
  flex: 1;
`

export const OptionButton = styled(TouchableOpacity)`
  height: 50px;
  width: 160px;
  
  align-items: center;
  justify-content: center;

  ${({theme}) => css`
    background-color: ${theme.COLORS.GRAY_6};
  `};
  flex-direction: row;
  margin-top: 4px;
  border-radius: 6px;
`

export const OptionText = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`

export const OptionStatus = styled(View)<Props>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 999px;
  background-color: ${({theme, type}) => type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const ButtonContainer = styled.View`
  padding-bottom: 24px;
`