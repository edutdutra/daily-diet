import {StatusBar} from "react-native";
import {ThemeProvider} from "styled-components/native";
import {useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from "@expo-google-fonts/nunito-sans";

import {Loading} from "./src/components/Loading";

import theme from './src/theme';

import {Home} from "./src/screens/Home";
import {Statistics} from "./src/screens/Statistics";
import {NewMeal} from "./src/screens/NewMeal";
import {Feedback} from "./src/screens/Feedback";
import {Meal} from "./src/screens/Meal";


export default function App() {
    const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold});

    return (
        <ThemeProvider theme={theme}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            {fontsLoaded ? <NewMeal/> : <Loading/>}
        </ThemeProvider>
    );
}