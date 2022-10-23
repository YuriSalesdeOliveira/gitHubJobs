import { GiEarthAmerica } from "react-icons/gi";
import { MdOutlineWatchLater } from "react-icons/md";
import styled, { css } from "styled-components";

export const Container = styled.div`

    --color: var(--color-primary);

    width: 100%;
    height: 115px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    padding: 0 15px;
    color: var(--color);
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    background-color: var(--color-light);

    &:hover {
        --color: var(--color-primary01);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }

    img {
        max-width: 90px;
        max-height: 90px;
        margin-right: 15px;
    }
    `;

export const Description = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    span {
        margin-bottom: 8px;
        font-weight: 700;
        font-size: 12px;
    }

    h3 {
        margin-bottom: 15px;
        font-weight: 400;
        font-size: 18px;
    }
`;

export const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BottomLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;


export const Tag = styled.span`
    user-select: none;
    margin-right: 5px;
    padding: 5px;
    font-weight: 700;
    font-size: 12px;
    border-radius: 4px;
    border: 1px solid var(--color);
`;

export const BottomRight = styled.div`
    display: flex;
    align-items: center;
`;

const IconCSS = css`
    font-size: 15px;
    margin-right: 7px;
    color: var(--color-gray);
`;

const BottomRightItens = css`
    display: flex;
    align-items: center;
    margin-left: 25px;
    font-weight: 500;
    font-size: 12px;
    color: var(--color-gray);
`;

export const City = styled.div`${BottomRightItens}`;
export const PlanetIcon = styled(GiEarthAmerica)`${IconCSS}`;

export const CreatedAt = styled.div`${BottomRightItens}`;
export const WatchIcon = styled(MdOutlineWatchLater)`${IconCSS}`;