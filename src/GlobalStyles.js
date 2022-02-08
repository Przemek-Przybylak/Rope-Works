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
        background-image: url("https://i.ibb.co/D7KMTm3/20211222-102946.jpg");
        background-position: center;
        background-size: cover;
        background-attachment: fixed 
    };
`;
