import {SectionList} from "react-native";
import {Container, Section, Title} from "./styles";

import {Header} from "../../components/Header";
import {StatisticsCard} from "../../components/StatisticsCard";
import {Button} from "../../components/Button";
import {MealCard} from "../../components/MealCard";

export function Home() {

    const DATA = [
        {
            title: '12.08.22',
            data: ['Pizza', 'Burger', 'Risotto', 'Risotto'],
        },
        {
            title: '11.08.22',
            data: ['French Fries', 'Onion Rings', 'Fried Shrimps', 'Risotto'],
        },
    ];

    return (
        <Container>
            <Header/>
            //ToDo - Refatorar Statistics Card para utilizar o componente StatisticsPercentage
            <StatisticsCard/>

            <Title>Refeições</Title>
            <Button title="Nova refeição"/>

            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                    <MealCard time="20:00" meal="X-tudo" status="SECONDARY" />
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Section>{title}</Section>
                )}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}