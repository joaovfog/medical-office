interface ContentProps {
    children: React.ReactNode
}

export function Content(props: ContentProps) {
    const { children } = props
    
    return (
        <div>{children}</div>
    )
}