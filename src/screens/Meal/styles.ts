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

export const Content = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  border-radius: 20px;
  padding: 40px 24px
`

export const InfoContainer = styled.View`
    flex: 1;
`

export const Name = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
  margin-bottom: 8px;
`

export const Description = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `};
  margin-bottom: 24px;
`

export const DateTimeLabel = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
  margin-bottom: 8px;
`

export const StatusTag = styled.View`
  background-color: ${({theme}) => theme.COLORS.GRAY_6};
  border-radius: 1000px;
  padding: 8px 16px;
  flex-direction: row;
  
  min-width: 127px;
  max-width: 144px;
  height: 34px;
  
  align-items: center;
  justify-content: center;
`

export const Status = styled(View)<Props>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 999px;
  background-color: ${({theme, type}) => type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const StatusText = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
  text-align: center;
`