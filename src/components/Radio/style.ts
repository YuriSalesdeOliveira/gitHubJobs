import styled from "styled-components"

export const Container = styled.div`

    margin-bottom: 15px;

    label {
        cursor: pointer;
        display: flex;
        align-items: flex-end;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: var(--color-primary);

        input {
            width: 18px;
            height: 18px;
            margin-right: 10px;
            padding: 2px;
            -moz-appearance:none;
            -webkit-appearance:none;
            -o-appearance:none;
            border: 2px solid var(--color-background);
            box-shadow: 0 0 1px 1px var(--color-primary);
            border-radius: 50%;

            &:checked {
                background-color: var(--color-primary);
            }
        }
    }
`;