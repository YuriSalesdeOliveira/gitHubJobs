import { Link } from "react-router-dom";
import { Container, Title } from "./style";

type HeaderProps = {
    children?: JSX.Element
}

export function Header(props: HeaderProps) {
    return (
        <Container>
            <Title>Github <span>Jobs</span></Title>

            {props.children ? props.children : null}
        </Container>
    );
}