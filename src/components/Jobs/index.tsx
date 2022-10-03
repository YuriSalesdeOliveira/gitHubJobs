import { Checkbox } from "../Checkbox";
import { InputSearch } from "../InputSearch";
import { Aside, Container, Title } from "./style";

export function Jobs() {

    return (
        <Container>

            <Aside>
                <Checkbox label="Full time" name="full_time" />

                <Title>Location</Title>

                <InputSearch
                    width="100%"
                    height="40px"
                    type="text"
                    name="search_city"
                    placeholder="City, state, zip code or country"
                    button={false} />
            </Aside>

            {/* <JobsList>
                <Job>
                    <Image />
                    <Author>Kasisto</Author>
                    <JobTitle>Front-End Software Engineer</JobTitle>
                    <Tag name="Full time" />
                    <City>
                        <Icon />
                        New York
                    </City>
                    <CreatedAt>
                        <Icon />
                        5 days ago
                    </CreatedAt>
                </Job>
                <Paginator></Paginator>
            </JobsList> */}

        </Container>
    );

}