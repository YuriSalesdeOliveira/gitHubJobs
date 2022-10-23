import styled, { css } from "styled-components";
import { CgArrowLongLeft } from "react-icons/cg"
import { Wrapper } from "../../style/globalStyle";
import { MdOutlineWatchLater } from "react-icons/md";
import { GiEarthAmerica } from "react-icons/gi";

export const Container = styled.div`
    ${Wrapper}
    display: grid;
    grid-template-columns: 270px 1fr;
    gap: 30px;
`;

export const Aside = styled.aside`
    width: 100%;
`;

export const BackPageButton = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 14px;
    color: var(--color-highlight);
`;

export const ArrowLeftIcon = styled(CgArrowLongLeft)`
    margin-right: 10px;
`;

export const Warning = styled.div`
    max-width: 80%;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: var(--color-primary);

    h3 {
        margin-bottom: 10px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 14px;
        color: var(--color-gray);
    }
`;

export const Main = styled.main``;

export const TitleContainer = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

export const Title = styled.h2`
    font-weight: 700;
    font-size: 24px;
    color: var(--color-primary);
`;

export const Tag = styled.span`
    user-select: none;
    margin-left: 10px;
    padding: 5px;
    font-weight: 700;
    font-size: 12px;
    color: var(--color-primary);
    border-radius: 4px;
    border: 1px solid var(--color-primary);
`;

export const CreatedAt = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 12px;
    color: var(--color-gray);
`;

export const iconCSS = css`
    font-size: 15px;
    margin-right: 7px;
    color: var(--color-gray);
`;

export const WatchIcon = styled(MdOutlineWatchLater)`${iconCSS}`;

export const About = styled.div`
    display: flex;
    margin-bottom: 30px;

    img {
        max-width: 55px;
        max-height: 55px;
        margin-right: 10px;
        border-radius: 4px;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 5px;

    span {
        font-weight: 700;
        font-size: 18px;
        color: var(--color-primary);
    }
`;

export const City = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 12px;
    color: var(--color-gray);
`;

export const PlanetIcon = styled(GiEarthAmerica)`${iconCSS}`;

export const Article = styled.article`
    p {
        color: var(--color-primary);
        margin-bottom: 30px;
    }
`;