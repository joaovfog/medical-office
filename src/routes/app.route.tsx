import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import {
    AppointmentDetails,
    Appointments,
    Dashboard,
    PatientDetails,
    Patients
} from '../pages'

export function AppRoutes() {
    const [patients, setPatients] = useState([])

    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/patients' element={<Patients patients={patients} />} />
            <Route path='/patients/:id/details' element={<PatientDetails />} />
            <Route path='/appointments' element={<Appointments />} />
            <Route path='/appointments/:id/details' element={<AppointmentDetails />} />
        </Routes>
    )
}