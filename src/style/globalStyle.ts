import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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

    body {
        background-color: #f6f7fb;
    }

    ul {
        list-style: none;
    }

    :root {
        --color-light: #ffffff;
        --color-primary: #334680;
        --color-gray: #b9bdcf;
        --color-highlight: #1e86ff;
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