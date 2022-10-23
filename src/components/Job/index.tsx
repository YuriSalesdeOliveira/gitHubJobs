import { DateUtils } from "../../utils/DateUtils";
import { Bottom, BottomLeft, BottomRight, City, Container, CreatedAt, Description, PlanetIcon, Tag, WatchIcon } from "./style";

type JobProps = {
    image: string,
    author: string,
    title: string,
    tagCollection: string[],
    city: string,
    createdAt: string
}

export function Job(props: JobProps) {

    return (
        <Container>
            <img src={props.image} />

            <Description>
                <span>{props.author}</span>
                <h3>{props.title}</h3>
                <Bottom>
                    <BottomLeft>
                        {props.tagCollection.map((tag, key) => (
                            <Tag key={key}>{tag}</Tag>
                        ))}
                    </BottomLeft>
                    <BottomRight>
                        <City>
                            <PlanetIcon />
                            {props.city}
                        </City>
                        <CreatedAt>
                            <WatchIcon />
                            {DateUtils.dateDiffInDays(new Date(parseInt(props.createdAt) * 1000), new Date()) + ' Days'}
                        </CreatedAt>
                    </BottomRight>
                </Bottom>
            </Description>
        </Container>
    );
}