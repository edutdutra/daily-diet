import {Container} from "./styles";
import {TextInputProps} from "react-native";

type Props = TextInputProps & {
    height?: number
}

export function Input({height = 48, ...rest}: Props) {
    return (
        <Container height={height} {...rest} />
    )
}