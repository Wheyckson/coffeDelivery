import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    } 

    body{
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    button {
        border: none;
        cursor: pointer;
      }
`;
