/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"

import { v4 as uuidv4 } from 'uuid'

import { AppointmentDetails } from "."
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
            <div className="row mb-3">
                <div className="col-sm-8">
                    <div className="d-flex justify-content-between gap-3">
                        <input className="form-control" type="text" placeholder="Pesquisar consulta" />
                        <i className="bi bi-filter"></i>
                    </div>
                </div>
                <div className="col-sm-4">
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addNewAppointmentModal"
                    >
                        Adicionar
                    </button>
                </div>
            </div>
            {appointments.map((appointment: any) => (
                <AppointmentDetails key={appointment.id} {...appointment} />
            ))}

            <AddNewAppointmentModal onSave={addNewAppointment} />
        </>
    )
}