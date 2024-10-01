import { Landing } from "./pages/Landing.tsx";
import "./assets/global.css";
import { Theme } from "./utils/GlobalInterfaces.ts"

import { ThemeProvider, createGlobalStyle } from "styled-components";


const theme: Theme = {
    colors: {
        blue: '#1da1f2',
        black: '#14171a',
        darkGrey: '#657786',
        grey: '#aab8c2',
        lightGrey: '#e1e8ed',
        white: '#f5f8fa',
        error: 'red'
    }
}

const GlobalStyle = createGlobalStyle `
    *{
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 500;
    }
`

export const App = () => {


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Landing />
        </ThemeProvider>
    );
}
