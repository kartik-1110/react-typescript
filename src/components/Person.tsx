type PersonType = {
    name: {
        first: string
        last: string
    }
}
export const Person = (props: PersonType) => {
    return (
        <div>{props.name.first} {props.name.last}</div>
    )
}