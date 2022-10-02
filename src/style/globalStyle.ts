import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, button, input {
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
`;

export const Wrapper = css`
    width: 1200px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1200px) {
        width: 100%;
    }
`;