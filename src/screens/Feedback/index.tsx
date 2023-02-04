import {ButtonTitle, Container, FeedbackText, HomeButton, ImagePng, Title} from "./styles";

import feedbackSuccessPng from "../../assets/feedback-success.png";
import feedbackFailPng from "../../assets/feedback-fail.png";


export function Feedback() {
    const isSuccess = true

    return (
        <Container>

            {
                isSuccess ? (
                    <>
                        <Title type="SUCCESS">Continue assim!</Title>
                        <FeedbackText>Você continua dentro da dieta. Muito bem!</FeedbackText>
                        <ImagePng source={feedbackSuccessPng}/>
                    </>
                ) : (
                    <>
                        <Title type="FAIL">Que pena!</Title>
                        <FeedbackText>Você saiu da dieta dessa vez, mas continue se esforçando e não desista!</FeedbackText>
                        <ImagePng source={feedbackFailPng}/>
                    </>
                )
            }

            <HomeButton>
                <ButtonTitle>
                    Ir para a página inicial
                </ButtonTitle>
            </HomeButton>
        </Container>
    )
}