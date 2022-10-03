import { Container } from "./style";

type CheckboxProps = {
    label: string,
    name: string
}

export function Checkbox(props: CheckboxProps) {
    return (
        <Container>
            <label>
                <input type="checkbox" name={props.name} />
                {props.label}
            </label>
        </Container>
    );
}