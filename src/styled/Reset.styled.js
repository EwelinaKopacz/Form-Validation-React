import { createGlobalStyle } from "styled-components";

const ResetStyle = createGlobalStyle`

    *,*::before, *::after {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: inherit;
        font-weight: normal;
    }

    html {
        box-sizing: border-box;
    }

    ul {
        list-style: none;
    }

    a {
        margin: 0;
        padding: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
        color:none;
        text-decoration: none;
    }
    img{
        max-width: 100%;
    }

`
export default ResetStyle;
