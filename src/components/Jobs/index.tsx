import { Checkbox } from "../Checkbox";
import { InputSearch } from "../InputSearch";
import { Aside, Container, JobsList, Title } from "./style";
import { Job } from "../Job";
import jobImage from "../../assets/images/job.webp";

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

                {/* <CitiesList>

                </CitiesList> */}

            </Aside>

            <JobsList>
                <Job
                    image={jobImage}
                    author="Kasisto"
                    title="Front-End Software Engineer"
                    tag="Full time"
                    city="New York"
                    createdAt="5 days ago" />
            </JobsList>

        </Container>
    );

}