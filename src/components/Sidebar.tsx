export function Sidebar() {
    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline text-dark">Logo</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="/" className="nav-link align-middle px-0">
                            <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/patients" className="nav-link px-0 align-middle">
                            <span className="ms-1 d-none d-sm-inline">Pacientes</span></a>
                    </li>
                    <li>
                        <a href="/appointments" className="nav-link px-0 align-middle">
                            <span className="ms-1 d-none d-sm-inline">Consultas</span></a>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    )
}