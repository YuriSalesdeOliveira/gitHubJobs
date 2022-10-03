import styled from "styled-components";

type ContainerProps = {
    width: string,
    height: string
}

export const Container = styled.div<ContainerProps>`
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};

    input {
        width: 100%;
        height: 100%;
        padding-left: 15px;
        padding-right: 115px;
        border-radius: 4px;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
        background-color: var(--color-light);
    }

    button {
        cursor: pointer;
        position: absolute;
        width: 100px;
        height: 35px;
        right: 3px;
        top: 50%;
        transform: translateY(-50%);
        text-shadow: 0 0 2px 2px var(--color-light);
        color: var(--color-light);
        border-radius: 4px;
        background-color: var(--color-highlight);

        transition: all linear .2s;

        &:hover {
            background-color: var(--color-primary);
        }
    }
`;