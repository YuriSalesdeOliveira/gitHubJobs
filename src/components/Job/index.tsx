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

    function dateDiffInDays(date: Date, to: Date) {

        const MS_PER_DAY = 1000 * 60 * 60 * 24;

        const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
        const utc2 = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());

        return Math.floor((utc2 - utc1) / MS_PER_DAY);
    }

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
                            {dateDiffInDays(new Date(parseInt(props.createdAt) * 1000), new Date()) + ' Days'}
                        </CreatedAt>
                    </BottomRight>
                </Bottom>
            </Description>
        </Container>
    );
}