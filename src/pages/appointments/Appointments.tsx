/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"

import { v4 as uuidv4 } from 'uuid'

import { AppointmentCard } from "."
import { AddNewAppointmentModal } from "./components/AddNewAppointmentsModal"

export function Appointments() {
    const [appointments, setAppointments] = useState<any>([])

    const getAppointments = JSON.parse(localStorage.getItem("appointments"))

    const addNewAppointment = (appointment: any) => {
        const id = uuidv4()
        const newAppointment = { id, ...appointment }

        setAppointments([...appointments, newAppointment])

        console.log(newAppointment)

        localStorage.setItem('appointments', JSON.stringify([...appointments, newAppointment]))
    }

    useEffect(() => {
        if (getAppointments == null) {
            setAppointments([])
        } else {
            setAppointments(getAppointments)
        }
    }, [])

    return (
        <>
            <h3>Consultas</h3>
            <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
                <div className="d-flex align-items-center gap-3 w-50">
                    <input className="form-control" type="text" placeholder="Pesquisar consulta" />
                    <button
                        type="button"
                        className="btn rounded-circle"
                    >
                        <i className="bi bi-filter"></i>
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#addNewAppointmentModal"
                    >
                        Adicionar
                    </button>
                </div>
            </div>

            {appointments.length === 0 ? (
                <div className="d-flex justify-content-center mt-5">
                    <h5>Não há consultas cadastradas, que tal adicionar uma nova?</h5>
                </div>
            ) : appointments.map((patient: any) => (
                <AppointmentCard key={patient.id} {...patient} />
            ))}

            <AddNewAppointmentModal onSave={addNewAppointment} />
        </>
    )
}