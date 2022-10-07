import { Header } from "../../components/Header";
import { Aside, CitiesList, Container, JobsList, Search, Title } from "./style";
import backgroundImage from "../../assets/images/search.png";
import { InputSearch } from "../../components/InputSearch";
import { Footer } from "../../components/Footer";
import { Checkbox } from "../../components/Checkbox";
import { Radio } from "../../components/Radio";
import { Link } from "react-router-dom";
import jobImage from "../../assets/images/job.webp";
import { Job } from "../../components/Job";

export function Home() {
    return (
        <>
            <Header>
                <Search backgroundImage={backgroundImage}>
                    <InputSearch
                        width="790px"
                        height="40px"
                        type="text"
                        name="search"
                        placeholder="Title, companies, expertise or benefits"
                        button="Search" />
                </Search>
            </Header>

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

            <Footer />
        </>
    );
}