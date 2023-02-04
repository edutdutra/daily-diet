import {Container, Percentage, Title} from "./styles";

export function StatisticsPercentage() {
    const percentage = 90.86

    return (
        <Container>
            <Percentage>{percentage.toString().replace('.', ',')}%</Percentage>
            <Title>das refeições dentro da dieta</Title>
        </Container>
    )
}