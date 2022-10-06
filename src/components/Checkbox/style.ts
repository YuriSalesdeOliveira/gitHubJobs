import styled from "styled-components";

export const Container = styled.div`

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
            margin-right: 5px;
            -moz-appearance:none;
            -webkit-appearance:none;
            -o-appearance:none;
            border: 1px solid var(--color-gray);
            border-radius: 2px;

            &:checked {
                background-color: var(--color-primary);
            }
        }
    }

`;