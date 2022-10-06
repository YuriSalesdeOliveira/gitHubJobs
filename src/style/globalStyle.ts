import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --color-background: #f6f7fb;
        --color-light: #ffffff;
        --color-primary: #334680;
        --color-primary01: #4e68ba;
        --color-gray: #b9bdcf;
        --color-highlight: #1e86ff;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, button, input {
        outline: none;
        border: 0;
        background: none;
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    body {
        background-color: var(--color-background);
    }

    ul {
        list-style: none;
    }
`;

export const Wrapper = css`
    width: 1200px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1200px) {
        width: 95%;
    }
`;