import {SectionList} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {Header} from "../../components/Header";
import {StatisticsCard} from "../../components/StatisticsCard";
import {Button} from "../../components/Button";
import {MealCard} from "../../components/MealCard";

import {Container, Section, Title} from "./styles";

export function Home() {
    const navigation = useNavigation();

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

    function handleOpenStatistics() {
        navigation.navigate('statistics');
    }

    function handleOpenNewMeal() {
        navigation.navigate('new');
    }

    return (
        <Container>
            <Header/>
            <StatisticsCard onPress={handleOpenStatistics}/>

            <Title>Refeições</Title>
            <Button
                title="Nova refeição"
                onPress={handleOpenNewMeal}
            />

            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                    <MealCard time="20:00" meal="X-tudo" status="SECONDARY" />
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Section>{title}</Section>
                )}
                contentContainerStyle={DATA.length === 0 && {flex: 1}}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}