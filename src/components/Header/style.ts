import styled from "styled-components";
import { Wrapper } from "../../style/globalStyle";

export const Container = styled.header`
    ${Wrapper}
    padding: 30px 0;
`;

export const Title = styled.h1`
    user-select: none;
    font-weight: 700;
    font-size: 24px;
    color: #282538;

    span {
        font-weight: 300;
    }
`;