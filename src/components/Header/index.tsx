import {Container, Logo, UserPhoto} from "./styles";

import logoPng from "../../assets/logo.png";

export function Header() {
    return (
        <Container>
            <Logo source={logoPng} />
            <UserPhoto source={{uri: 'https://github.com/edutdutra.png'}}/>
        </Container>
    )
}