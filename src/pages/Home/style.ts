import styled from "styled-components";
import { Wrapper } from "../../style/globalStyle";

type SearchProps = {
    backgroundImage: string
}

export const Search = styled.section<SearchProps>`
    width: 100%;
    height: 138px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding: 0 20px;
    border-radius: 8px;
    background: url(${props => props.backgroundImage}) center no-repeat;
`;

export const Container = styled.div`
    ${Wrapper}
    display: grid;
    grid-template-columns: 370px 1fr;
    gap: 30px;
`;

export const Aside = styled.div`
    width: 100%;
`;

export const Title = styled.h3`
    margin-top: 30px;
    margin-bottom: 15px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: var(--color-gray);
`;

export const CitiesList = styled.div`
    margin-top: 30px;
`;

export const JobsList = styled.div`

`;