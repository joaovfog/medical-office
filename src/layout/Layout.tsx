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
                <div className="col d-flex justify-content-end mt-5 me-5">
                    <Content>{children}</Content>
                </div>
            </div>
        </div>
    )
}