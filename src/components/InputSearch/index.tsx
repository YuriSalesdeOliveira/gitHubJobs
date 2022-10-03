import { Container } from "./style";

type InputSearchProps = {
    width: string,
    height: string,
    type: string,
    name: string,
    placeholder: string,
    button: string|false
}

export function InputSearch(props: InputSearchProps) {
    return (
        <Container width={props.width} height={props.height}>
            <input type={props.type} name={props.name} placeholder={props.placeholder} />
            {props.button && <button>{props.button}</button>}
        </Container>
    );
}