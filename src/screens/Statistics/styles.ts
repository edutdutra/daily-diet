import styled, {css} from "styled-components/native";

import {SafeAreaView} from "react-native-safe-area-context";
import {ArrowLeft} from "phosphor-react-native";
import {View} from "react-native";

type Props = {
    type: 'SUCCESS' | 'FAIL'
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
  
  position: relative;
`

export const GeneralStatisticsContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  border-radius: 20px;
  padding: 24px;
`

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
  margin-top: 10px;
  margin-bottom: 23px;
  text-align: center;
`;

export const LargerCard = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_6};
  border-radius: 8px;
  
  max-height: 90px;
  min-height: 90px;
  
  margin-bottom: 12px;
  padding: 16px;
`

export const InfosContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`

export const SmallCard = styled(View)<Props>`
  flex: 1;
  background-color: ${({theme, type}) => type === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  
  border-radius: 8px;
  
  max-height: 100px;
  min-height: 100px;
  
  max-width: 160px;
  min-width: 160px;
  
  margin-bottom: 12px;
  padding: 16px;
`

export const DataNumber = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
  text-align: center;
`

export const DataText = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `};
  text-align: center;
`

