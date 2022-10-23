import { Header } from "../../components/Header";
import { Aside, CitiesList, Container, JobsList, Search, Title } from "./style";
import backgroundImage from "../../assets/images/search.png";
import { InputSearch } from "../../components/InputSearch";
import { Footer } from "../../components/Footer";
import { Checkbox } from "../../components/Checkbox";
import { Radio } from "../../components/Radio";
import { Link } from "react-router-dom";
import { Job } from "../../components/Job";
import { useEffect, useState } from "react";
import API from "../../services/API"

type Job = {
    identity: number,
    image: string,
    author: string,
    title: string,
    tagCollection: string[],
    city: string,
    createdAt: string
}

export function Home() {

    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {

        const listJobs = async () => {

            const jobs = await API.getJobs();

            setJobs(jobs);
        }

        listJobs()

    }, [])


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
                    {jobs.map((job, key) => (
                        <Link key={key} to={`/tabalho/${job.identity}`}>
                            <Job
                                image={job.image}
                                author={job.author}
                                title={job.title}
                                tagCollection={job.tagCollection}
                                city={job.city}
                                createdAt={job.createdAt} />
                        </Link>
                    ))}
                </JobsList>

            </Container>

            <Footer />
        </>
    );
}