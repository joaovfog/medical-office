import { useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'

import { Appointments, Dashboard, PatientDetails, Patients } from '../pages'

export function AppRoutes() {
    const [patients, setPatients] = useState([])
    const id = useParams()
    console.log(id)

    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/patients' element={<Patients patients={patients} />} />
            <Route path='/patients/:id/details' element={<PatientDetails />} />
            <Route path='/appointments' element={<Appointments />} />
        </Routes>
    )
}