import styled from "styled-components";
import { Wrapper } from "../../style/globalStyle";

export const Aside = styled.div``;

export const Title = styled.h3`
    margin-top: 30px;
`;

export const Container = styled.div`
    ${Wrapper}
    display: grid;
    grid-template-columns: 370px 1fr;
    gap: 30px;
`;