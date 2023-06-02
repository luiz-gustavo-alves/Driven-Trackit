import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body *  {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
    }

    body {
        background-color: #F4F4F4;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;