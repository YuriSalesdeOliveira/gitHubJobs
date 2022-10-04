import styled, { css } from "styled-components";
import { Wrapper } from "../../style/globalStyle";
import { GiEarthAmerica } from "react-icons/gi";
import { MdOutlineWatchLater } from "react-icons/md";

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

export const JobsList = styled.div`

`;

export const Job = styled.div`

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

export const JobDescription = styled.div`
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

export const JobBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const JobTag = styled.span`
    padding: 5px;
    font-weight: 700;
    font-size: 12px;
    border-radius: 4px;
    border: 1px solid var(--color);
`;

export const JobBottomRight = styled.div`
    display: flex;
    align-items: center;
`;

const IconCSS = css`
    font-size: 15px;
    margin-right: 7px;
    color: var(--color-gray);
`;

const JobBottomRightItens = css`
    display: flex;
    align-items: center;
    margin-left: 25px;
    font-weight: 500;
    font-size: 12px;
    color: var(--color-gray);
`;

export const JobCity = styled.div`${JobBottomRightItens}`;
export const PlanetIcon = styled(GiEarthAmerica)`${IconCSS}`;

export const JobCreatedAt = styled.div`${JobBottomRightItens}`;
export const WatchIcon = styled(MdOutlineWatchLater)`${IconCSS}`;