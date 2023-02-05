import {useTheme} from "styled-components/native";
import {useNavigation} from "@react-navigation/native";

import {Container, Icon} from "./styles";


type Props = {
    type?: 'DEFAULT' | 'PRIMARY' | 'SECONDARY'
}

export function BackButton({type = 'DEFAULT'}: Props) {
    const {COLORS} = useTheme();
    const navigation = useNavigation();

    function handleGoBack() {
        console.log('teste')
        navigation.goBack();
    }

    return (
        <Container onPress={handleGoBack}>
            <Icon
                color={type === 'PRIMARY' ? COLORS.GREEN_DARK : type === 'SECONDARY' ? COLORS.RED_DARK : COLORS.GRAY_2}
            />
        </Container>
    )
}