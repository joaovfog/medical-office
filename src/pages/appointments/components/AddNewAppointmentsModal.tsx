import { useState } from "react"
import { toast } from "react-toastify"

export function AddNewAppointmentModal({ onSave }: any) {
    const patients = JSON.parse(localStorage.getItem("patients"))

    const [selectedPatient, setSelectedPatient] = useState(patients[0].name)
    const [patientsName, setPatientsName] = useState('')
    const [observation, setObservation] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')

    const onSubmit = (e: any) => {
        e.preventDefault()

        onSave({ patientsName: selectedPatient, observation, date, price })

        setPatientsName('')
        setPrice('')
        setObservation('')

        toast.success('Consulta cadastrada com sucesso!')
    }

    const handleSelectedPatient = (e: any) => {
        setSelectedPatient(e.target.value)
    }

    return (
        <div className="modal fade" id="addNewAppointmentModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form onSubmit={onSubmit}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cadastro de consulta</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <select
                                    className="form-select"
                                    value={selectedPatient}
                                    onChange={handleSelectedPatient}
                                >
                                    {patients?.map((patient: any) => {
                                        return (
                                            <option key={patient.id} value={patient.name}>{patient.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="observation" className="form-label">Observação</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="observation"
                                    value={observation}
                                    onChange={(e) => setObservation(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date">Data</label>
                                <input  
                                    type="date" 
                                    className="form-control" 
                                    id="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Preço</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-primary btn-sm">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}