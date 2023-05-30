import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body *  {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;