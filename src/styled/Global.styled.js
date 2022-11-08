import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html {
        height:100%;
        font-size: 62.5%;

        // colors bg
        --clr-bg-light:#FFFFFF;
        --bg-body: rgba(32, 32, 32, 1);
        --bg-body-image: radial-gradient(30% 30% ellipse at bottom center, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 100%);

        // colors fonts
        --clr-font-light:#FFFFFF;
        scroll-behavior: smooth;
        overflow-y: scroll;
    }

    body {
        font-family: 'Poppins', sans-serif;
        min-height: 100%;
        font-size: 1.6rem;
        color:var(--clr-font-light);
        background-color: var(--bg-body);
        background-image: var(--bg-body-image);
    }

    button {
        cursor:pointer;
    }

`

export default GlobalStyle;