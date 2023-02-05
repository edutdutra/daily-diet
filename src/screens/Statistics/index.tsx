import {
    Container,
    DataNumber, DataText,
    GeneralStatisticsContainer,
    InfosContainer,
    LargerCard,
    SmallCard,
    Title
} from "./styles";
import {StatisticsPercentage} from "../../components/StatisticsPercentage";
import {BackButton} from "../../components/BackButton";


export function Statistics() {
    return (
        <Container>
            <BackButton type="PRIMARY"/>
            <StatisticsPercentage/>

            <GeneralStatisticsContainer>
                <Title>Estatísticas gerais</Title>

                <LargerCard>
                    <DataNumber>22</DataNumber>
                    <DataText>melhor sequência de pratos dentro da dieta</DataText>
                </LargerCard>

                <LargerCard>
                    <DataNumber>109</DataNumber>
                    <DataText>refeições registradas</DataText>
                </LargerCard>

                <InfosContainer>
                    <SmallCard type="SUCCESS">
                        <DataNumber>99</DataNumber>
                        <DataText>refeições dentro da dieta</DataText>
                    </SmallCard>

                    <SmallCard type="FAIL">
                        <DataNumber>10</DataNumber>
                        <DataText>refeições fora da dieta</DataText>
                    </SmallCard>
                </InfosContainer>
            </GeneralStatisticsContainer>
        </Container>
    )
}