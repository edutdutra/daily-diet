import {ButtonTypeStyleProps, Container, PlusIcon, Title} from "./styles";
import {TouchableOpacityProps} from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;

}

export function Button({title, type = 'PRIMARY', ...rest}: Props) {

    return (
        <Container
            type={type}
            {...rest}
        >
            <PlusIcon />

            <Title type={type}>
                {title}
            </Title>

        </Container>
    )
}