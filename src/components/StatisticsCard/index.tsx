import {Container, Icon, Percentage, Title} from "./styles";

export function StatisticsCard() {
    const percentage = 90.86

    return (
        <Container>
            <Icon/>
            <Percentage>{percentage.toString().replace('.', ',')}%</Percentage>
            <Title>das refeições dentro da dieta</Title>
        </Container>
    )
}