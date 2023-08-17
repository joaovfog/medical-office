interface ContentProps {
    children: React.ReactNode
}

export function Content(props: ContentProps) {
    const { children } = props
    
    return (
        <div
            className="w-75"
        >
            {children}
        </div>
    )
}