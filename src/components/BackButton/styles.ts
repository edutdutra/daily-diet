import styled from "styled-components/native";
import {ArrowLeft} from "phosphor-react-native";
import {TouchableOpacity} from "react-native";

export const Container = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
  top: 45px;
  
  width: 24px;
  height: 24px;
`;

export const Icon = styled(ArrowLeft).attrs(({theme}) => ({
    size: 24,
}))`
`