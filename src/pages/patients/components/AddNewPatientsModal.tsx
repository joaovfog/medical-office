import { useState } from "react"

export function AddNewPatientsModal({ onSave }: any) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [phone, setPhone] = useState('')

    const onSubmit = (e: any) => {
        e.preventDefault()

        onSave({ name, phone, cpf, email })

        setName('')
        setEmail('')
        setCpf('')
        setPhone('')
    }

    return (
        <div className="modal fade" id="addNewPatientModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form onSubmit={onSubmit}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cadastro de paciente</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nome completo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">E-mail</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cpf" className="form-label">CPF</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="cpf"
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Telefone</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
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