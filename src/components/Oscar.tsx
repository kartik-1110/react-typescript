import React from "react"

type OscarPropsType = {
    children: React.ReactNode
}

export const Oscar = (props: OscarPropsType) => {
    return <h2>{props.children}</h2>
}