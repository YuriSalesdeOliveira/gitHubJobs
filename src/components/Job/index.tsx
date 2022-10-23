import { Bottom, BottomRight, City, Container, CreatedAt, Description, PlanetIcon, Tag, WatchIcon } from "./style";

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
                    {props.tagCollection.map((tag, key) => (
                        <Tag key={key}>{tag}</Tag>
                    ))}
                    <BottomRight>
                        <City>
                            <PlanetIcon />
                            {props.city}
                        </City>
                        <CreatedAt>
                            <WatchIcon />
                            {props.createdAt}
                        </CreatedAt>
                    </BottomRight>
                </Bottom>
            </Description>
        </Container>
    );
}