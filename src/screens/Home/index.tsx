import {Container, Title} from "./styles";
import {Header} from "../../components/Header";
import {StatisticsCard} from "../../components/StatisticsCard";
import {Button} from "../../components/Button";
import {MealCard} from "../../components/MealCard";

export function Home() {
    return (
        <Container>
            <Header />
            <StatisticsCard />

            <Title>Refeições</Title>
            <Button title="Nova refeição"/>

            <MealCard />
        </Container>
    )
}