/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"

import { v4 as uuidv4 } from 'uuid'

import { AddNewPatientsModal } from "./components/AddNewPatientsModal"
import { PatientCard } from "."

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
            <h4>Pacientes</h4>
            <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
                <div className="d-flex align-items-center gap-3 w-50">
                    <input className="form-control" type="text" placeholder="Pesquisar paciente" />
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
                        data-bs-target="#addNewPatientModal"
                    >
                        Adicionar
                    </button>
                </div>
            </div>

            {patients.length === 0 ? (
                <div className="d-flex justify-content-center mt-5">
                    <h5>Não há pacientes cadastrados, que tal adicionar um novo?</h5>
                </div>
            ) : patients.map((patient: any) => (
                <PatientCard key={patient.id} {...patient} />
            ))}

            <AddNewPatientsModal onSave={addNewPatient} />
        </>
    )
}