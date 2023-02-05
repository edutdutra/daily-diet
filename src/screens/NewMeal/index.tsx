import {
    ButtonContainer,
    Container,
    Form, FormContainer,
    Label,
    OptionButton,
    OptionStatus,
    OptionText,
    RowContainer,
    RowItem,
    Title
} from "./styles";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {BackButton} from "../../components/BackButton";

export function NewMeal() {
    return (
        <Container>
            <BackButton />
            <Title>Nova refeição</Title>

            <FormContainer>

                <Form>
                    <Label>Nome</Label>
                    <Input/>

                    <Label>Descrição</Label>
                    <Input multiline height={120} textAlignVertical="top" numberOfLines={4}/>

                    <RowContainer>
                        <RowItem>
                            <Label>Data</Label>
                            <Input/>
                        </RowItem>

                        <RowItem>
                            <Label>Hora</Label>
                            <Input/>
                        </RowItem>
                    </RowContainer>

                    <Label>Está dentro da dieta?</Label>
                    <RowContainer>
                        <OptionButton>
                            <OptionStatus type="SUCCESS"/>
                            <OptionText>Sim</OptionText>
                        </OptionButton>

                        <OptionButton>
                            <OptionStatus type="FAIL"/>
                            <OptionText>Não</OptionText>
                        </OptionButton>
                    </RowContainer>

                </Form>

                <ButtonContainer>
                    <Button title="Cadastrar refeição"/>
                </ButtonContainer>

            </FormContainer>

        </Container>
    )
}