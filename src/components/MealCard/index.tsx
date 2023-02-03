import {Container, Meal, Status, StatusTypeStyleProps, Time} from "./styles";

type Props = {
    time: string;
    meal: string;
    status: StatusTypeStyleProps;
}

export function MealCard({time, meal, status = 'PRIMARY'}: Props) {
    return (
        <Container>
            <Time>{time}</Time>
            <Meal>{meal}</Meal>
            <Status type={status} ></Status>
        </Container>
    )
}