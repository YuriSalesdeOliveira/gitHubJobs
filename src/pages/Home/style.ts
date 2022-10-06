import styled from "styled-components";

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