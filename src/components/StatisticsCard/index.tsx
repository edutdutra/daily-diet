import {TouchableOpacityProps} from "react-native";

import {StatisticsPercentage} from "../StatisticsPercentage";

import {Container, Icon} from "./styles";

export function StatisticsCard({...rest}: TouchableOpacityProps) {
    return (
        <Container {...rest}>
            <Icon/>
            <StatisticsPercentage />
        </Container>
    )
}