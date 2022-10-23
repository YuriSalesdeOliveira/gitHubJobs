import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import API from "../../services/API";
import { DateUtils } from "../../utils/DateUtils";
import { About, ArrowLeftIcon, Article, Aside, BackPageButton, City, Container, CreatedAt, Description, Main, PlanetIcon, Tag, Title, TitleContainer, Warning, WatchIcon } from "./style";

type Job = {
    image: string,
    author: string,
    title: string,
    tagCollection: string[],
    city: string,
    createdAt: string
}

export function Job() {

    const { identity } = useParams<string>();
    const [job, setJob] = useState<Job>({
        image: '',
        author: '',
        title: '',
        tagCollection: [],
        city: '',
        createdAt: ''
    } as Job);

    useEffect(() => {
        const listJob = async () => {

            const job = await API.getJobByIdentity(String(identity));

            setJob(job[0]);
        }

        listJob()
    }, []);

    return (
        <>
            <Header />

            <Container>

                <Aside>
                    <Link to="/">
                        <BackPageButton>
                            <ArrowLeftIcon />
                            <span>Back to search</span>
                        </BackPageButton>
                    </Link>

                    <Warning>
                        <h3>How to apply</h3>

                        <p>
                            Please email a copy of your resume and online
                            portfolio to wes@kasisto.com & CC eric@kasisto.com
                        </p>
                    </Warning>

                </Aside>

                <Main>
                    <TitleContainer>
                        <Title>Front-End Software Engineer</Title>
                        {job.tagCollection.map((tag, key) => (
                            <Tag key={key}>{tag}</Tag>
                        ))}
                    </TitleContainer>

                    <CreatedAt>
                        <WatchIcon />
                        {DateUtils.dateDiffInDays(new Date(parseInt(job.createdAt) * 1000), new Date()) + ' Days'}
                    </CreatedAt>

                    <About>
                        <img src={job.image} />

                        <Description>
                            <span>{job.author}</span>
                            <City>
                                <PlanetIcon />
                                {job.city}
                            </City>
                        </Description>
                    </About>

                    <Article>
                        <p>Humanizing Digital Experiences®</p>

                        <p>
                            Kasisto’s Digital Experience Platform, KAI, is designed for financial institutions to deliver the industry’s most amazing
                            Conversational AI powered intelligent virtual assistants to their customers. KAI is open and extensible, and also fluent in the
                            language of banking and finance. From simple retail transactions to the complex demands of corporate banks and wealth
                            management, financial institutions can deliver meaningful digital interactions with KAI that help build their digital brand.
                        </p>

                        <p>
                            Financial institutions around the world use KAI, including DBS Bank, J.P. Morgan, Mastercard, Standard Chartered, TD Bank, and
                            Manulife Bank among others. They chose KAI for its proven track record to drive business results while improving customer
                            experiences. The platform is used by millions of consumers around the world, all the time, across multiple channels, in different
                            languages, and is optimized for performance, scalability, security, and compliance.
                        </p>

                        <p>
                            This position
                        </p>

                        <p>
                            We are looking for a Full-Stack, client side software engineer to help build and integrate responsive chat interfaces, analytics
                            dashboards and reporting tools.
                        </p>

                        <p>
                            What you’ll be doing
                        </p>

                        <p>
                            Working closely with clients and internal engineering, product and design teams to gather requirements Building and
                            integrating front-end applications with CSS, HTML, Javascript, jQuery, Vue.js, Webpack, Handlebars.js, LESS, Backbone,
                            Python, Django and Java Working to improve user experience and functionality for tools Writing testable code utilizing
                            common front-end unit and BDD testing frameworks What you need for this position
                        </p>

                        <p>
                            3+ years in client-side web development with CSS, HTML, Javascript and jQuery Proven, full-stack front-end experience using
                            Python and Django Other Modern Web Framework(s) experience is a plus (React, Vue, Angular, Ember) Experience working
                            collaboratively to build scalable, modular, production software in an Agile environment Experience using RESTful
                            json services Node.js and API development familiarity is plus D3.js is a plus
                        </p>

                        <p>
                            What we offer:
                        </p>

                        <p>
                            Competitive compensation package Ground floor opportunity within rapidly growing tech startup Great collaborative team
                            environment Full Benefits Fun perks
                        </p>

                        <p>
                            Location - NYC, Flatiron District
                        </p>

                        <p>
                            We welcome your cover letter with a description of your previous complete experience and your resume. Applicants must be
                            authorized to work in the US as we are unable to sponsor. Kasisto is an equal opportunity employer.
                        </p>
                    </Article>

                </Main>

            </Container>

            <Footer />
        </>
    );
}