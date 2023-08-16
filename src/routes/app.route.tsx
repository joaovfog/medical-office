import { Route, Routes } from 'react-router-dom'

import { Appointments, Dashboard, Patients } from '../pages'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/patients' element={<Patients />} />
            <Route path='/appointments' element={<Appointments />} />
        </Routes>
        // <>
        //     <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        //         <li className="nav-item">
        //             <a href="/" className="nav-link align-middle px-0">
        //                 <span className="ms-1 d-none d-sm-inline">Dashboard</span>
        //             </a>
        //         </li>
        //         <li>
        //             <a href="/patients" className="nav-link px-0 align-middle">
        //                 <span className="ms-1 d-none d-sm-inline">Pacientes</span></a>
        //         </li>
        //         <li>
        //             <a href="/appointments" className="nav-link px-0 align-middle">
        //                 <span className="ms-1 d-none d-sm-inline">Consultas</span></a>
        //         </li>
        //     </ul>
        //     <Route path='/' Component={Dashboard} />
        // </>
    )
}