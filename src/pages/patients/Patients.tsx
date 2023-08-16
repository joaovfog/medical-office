/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"

import { v4 as uuidv4 } from 'uuid'

import { AddNewPatientsModal } from "./components/AddNewPatientsModal"
import { PatientDetails } from "."

export function Patients() {
    const [patients, setPatients] = useState<any>([])

    const getPatients = JSON.parse(localStorage.getItem("patients"))

    const addNewPatient = (patient: any) => {
        const id = uuidv4()
        const newPatient = { id, ...patient }

        setPatients([...patients, newPatient])

        localStorage.setItem('patients', JSON.stringify([...patients, newPatient]))
    }

    useEffect(() => {
        if (getPatients == null) {
            setPatients([])
        } else {
            setPatients(getPatients)
        }
    }, [])

    return (
        <>
            <h3>Pacientes</h3>
            <div className="row mb-3">
                <div className="col-sm-8">
                    <div className="d-flex justify-content-between gap-3">
                        <input className="form-control" type="text" placeholder="Pesquisar paciente" />
                        <i className="bi bi-filter"></i>
                    </div>
                </div>
                <div className="col-sm-4">
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addNewPatientModal"
                    >
                        Adicionar
                    </button>
                </div>
            </div>
            {patients.map((patient: any) => (
                <PatientDetails key={patient.id} {...patient} />
            ))}

            <AddNewPatientsModal onSave={addNewPatient} />
        </>
    )
}