import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
    };
    *, ::after, ::before {
        box-sizing: inherit;
    };
    body {
        overflow-y: scroll;
        font-family: 'Lato', sans-serif;
        transition: 300ms;
    };
`;
