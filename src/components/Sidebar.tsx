export function Sidebar() {
    return (
        <div style={{ backgroundColor: '#5A72CB' }} className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline text-white">Logo</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="/" className="nav-link align-middle px-0">
                            <i className="bi bi-clipboard-data text-white fs-5"></i> <span className="ms-1 d-none d-sm-inline text-white fs-6">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/patients" className="nav-link px-0 align-middle">
                            <i className="bi bi-people text-white fs-5"></i> <span className="ms-1 d-none d-sm-inline text-white fs-6">Pacientes</span>
                        </a>
                    </li>
                    <li>
                        <a href="/appointments" className="nav-link px-0 align-middle">
                            <i className="bi bi-calendar2-event text-white fs-5"></i> <span className="ms-1 d-none d-sm-inline text-white fs-6">Consultas</span>
                        </a>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    )
}