import {
    Container,
    Content,
    DateTimeLabel,
    Description,
    InfoContainer,
    Name,
    Status,
    StatusTag,
    StatusText,
    Title
} from "./styles";

import {Button} from "../../components/Button";

export function Meal() {
    return (
        <Container>
            <Title>Refeição</Title>

            <Content>
                <InfoContainer>
                    <Name>Sanduíche</Name>
                    <Description>Sanduíche de pão integral com atum e salada de alface e tomate</Description>

                    <DateTimeLabel>Data e hora</DateTimeLabel>
                    <Description>12/08/2022 às 16:00</Description>

                    <StatusTag>
                        <Status type="SUCCESS"/>
                        <StatusText> dentro da dieta </StatusText>
                    </StatusTag>
                </InfoContainer>

                <Button title="Editar refeição"/>
                <Button title="Excluir refeição" type="SECONDARY"/>
            </Content>
        </Container>
    )
}