type HeaderPropsType = {
    children: string
}

export const Header = (props: HeaderPropsType) => {
    return <h2>{props.children}</h2>
}