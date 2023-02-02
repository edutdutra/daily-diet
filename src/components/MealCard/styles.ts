import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 50px;
  
  flex-direction: row;
  align-items: center;
  //margin-bottom: 16px;
  
  border-color: ${({theme}) => theme.COLORS.GRAY_5};
  border-width: 1px;
  border-radius: 6px;
`
