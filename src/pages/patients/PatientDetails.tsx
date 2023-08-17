/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from 'react-router-dom'
import { phoneMask } from '../../utils/phone'
import { cnpjCpfMask } from '../../utils/cnpjCpf'

export function PatientDetails() {
    const { id } = useParams()
    const getPatients = JSON.parse(localStorage.getItem("patients"))
    const patientDetails = getPatients.filter((x: any) => x.id === id)

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/patients')
    }

    return (
        <>
            {patientDetails.map((patient: any) => (
                <div>
                    <div className="d-flex align-items-center">
                        <button
                            type="button"
                            className="btn btn-link"
                            style={{
                                textDecoration: 'none'
                            }}
                            onClick={handleClick}
                        >
                            <i
                                className="bi bi-arrow-left-short"
                                style={{
                                    fontSize: '1.5rem'
                                }}
                            />
                        </button>
                        <div
                            className="text-justify"
                            style={{
                                fontSize: 24,
                                fontWeight: 500
                            }}
                        >
                            Detalhes do(a) paciente {patient.name}
                        </div>
                    </div>
                    <div
                        style={{
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'
                        }}
                        className="card mb-3"
                    >
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h6 className="card-title mb-2 font-weight-bold">Nome paciente</h6>
                                    <h5 className="card-subtitle mb-3 text-muted">{patient?.name}</h5>
                                </div>
                                <div className="col">
                                    <h6 className="card-title mb-2 font-weight-bold">CPF</h6>
                                    <h5 className="card-subtitle mb-3 text-muted">{cnpjCpfMask(patient?.cpf)}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h6 className="card-title mb-2 font-weight-bold">E-mail</h6>
                                    <h5 className="card-subtitle mb-3 text-muted">{patient?.email}</h5>
                                </div>
                                <div className="col">
                                    <h6 className="card-title mb-2 font-weight-bold">Telefone</h6>
                                    <h5 className="card-subtitle mb-3 text-muted">{phoneMask(patient?.phone)}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="mb-3">Histórico de consultas</h4>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Código</th>
                                    <th scope="col">Situação</th>
                                    <th scope="col">Data</th>
                                    <th scope="col">Preço</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>000001</td>
                                    <td>Alguma situação</td>
                                    <td>30/08/2023</td>
                                    <td>R$ 180,00</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>000002</td>
                                    <td>Alguma outra situação</td>
                                    <td>30/08/2023</td>
                                    <td>R$ 180,00</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Total</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td style={{ color: '#2dc034', fontWeight: 500 }}>R$ 360,00</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            ))}
        </>
    )
}