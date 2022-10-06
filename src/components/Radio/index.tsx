import { Container } from "./style";

type RadioProps = {
    label: string,
    name: string,
    value: string
}

export function Radio(props: RadioProps) {
    return (
        <Container>
            <label>
                <input type="radio" name={props.name} />
                {props.label}
            </label>
        </Container>
    );
}