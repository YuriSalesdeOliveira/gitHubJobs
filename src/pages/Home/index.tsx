import { Header } from "../../components/Header";
import { Search } from "./style";
import backgroundImage from "../../assets/images/search.png";
import { InputSearch } from "../../components/InputSearch";
import { Jobs } from "../../components/Jobs";

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

            <Jobs />
        </>
    );
}