import { Content, Sidebar } from "../components"

interface LayoutProps {
    children: React.ReactNode
}

export function Layout(props: LayoutProps) {
    const { children } = props

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Sidebar />
                <div className="col p-4">
                    <Content>{children}</Content>
                </div>
            </div>
        </div>
    )
}