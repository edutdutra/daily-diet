import styled, {css} from "styled-components/native";
import {View} from "react-native";

export type StatusTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: StatusTypeStyleProps;
}

export const Container = styled.View`
  width: 100%;
  height: 50px;

  flex-direction: row;
  align-items: center;
  margin-top: 8px;

  padding-left: 12px;

  border-color: ${({theme}) => theme.COLORS.GRAY_5};
  border-width: 1px;
  border-radius: 6px;
`

export const Time = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
  
  max-height: 16px;
  min-height: 16px;
  
  margin-right: 12px;
  padding-right: 12px;

  border-right-color: ${({theme}) => theme.COLORS.GRAY_4};
  border-right-width: 1px;
`

export const Meal = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `};
  flex: 1;
`

export const Status = styled(View)<Props>`
  height: 14px;
  width: 14px;
  border-radius: 999px;
  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  
  margin-right: 16px;
`