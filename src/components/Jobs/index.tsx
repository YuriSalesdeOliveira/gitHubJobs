import { Checkbox } from "../Checkbox";
import { InputSearch } from "../InputSearch";
import { Aside, CitiesList, Container, JobsList, Title } from "./style";
import { Job } from "../Job";
import jobImage from "../../assets/images/job.webp";
import { Radio } from "../Radio";
import { Link } from "react-router-dom";

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

                <CitiesList>
                    <Radio label="London" name="city[]" value="00990" />
                    <Radio label="Amsterdam" name="city[]" value="00990" />
                    <Radio label="New York" name="city[]" value="00990" />
                    <Radio label="Berlin" name="city[]" value="00990" />
                </CitiesList>
            </Aside>

            <JobsList>
                <Link to="/tabalho/00990">
                    <Job
                        image={jobImage}
                        author="Kasisto"
                        title="Front-End Software Engineer"
                        tag="Full time"
                        city="New York"
                        createdAt="5 days ago" />
                </Link>
                <Job
                    image={jobImage}
                    author="Kasisto"
                    title="Front-End Software Engineer"
                    tag="Full time"
                    city="New York"
                    createdAt="5 days ago" />

                <Job
                    image={jobImage}
                    author="Kasisto"
                    title="Front-End Software Engineer"
                    tag="Full time"
                    city="New York"
                    createdAt="5 days ago" />

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