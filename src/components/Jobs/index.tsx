import { Checkbox } from "../Checkbox";
import { InputSearch } from "../InputSearch";
import jobImage from "../../assets/images/job.webp";
import {
    Aside,
    Container,
    Job,
    JobBottom,
    JobBottomRight,
    JobCity,
    JobCreatedAt,
    JobDescription,
    JobsList,
    JobTag,
    PlanetIcon,
    Title,
    WatchIcon
} from "./style";
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

                {/* <CitiesList>

                </CitiesList> */}

            </Aside>

            <JobsList>
                <Link to="/job/33282">
                    <Job>
                        <img src={jobImage} />

                        <JobDescription>
                            <span>Kasisto</span>
                            <h3>Front-End Software Engineer</h3>
                            <JobBottom>
                                <JobTag>Full time</JobTag>
                                <JobBottomRight>
                                    <JobCity>
                                        <PlanetIcon />
                                        New York
                                    </JobCity>
                                    <JobCreatedAt>
                                        <WatchIcon />
                                        5 days ago
                                    </JobCreatedAt>
                                </JobBottomRight>
                            </JobBottom>
                        </JobDescription>
                    </Job>
                </Link>
            </JobsList>

        </Container>
    );

}