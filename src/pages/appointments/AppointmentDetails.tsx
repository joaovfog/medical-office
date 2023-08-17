/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from 'react-router-dom'
import { formatDate } from '../../utils/date'
import { formatCurrency } from '../../utils/currency'

export function AppointmentDetails() {
    const { id } = useParams()
    const getAppointments = JSON.parse(localStorage.getItem("appointments"))
    const appointmentDetails = getAppointments.filter((x: any) => x.id === id)

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/appointments')
    }

    console.log(appointmentDetails)

    return (
        <>
            {appointmentDetails.map((appointment: any) => (
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
                        <h3>Detalhes da consulta</h3>
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
                                    <h5 className="card-subtitle mb-3 text-muted">{appointment?.patientsName}</h5>
                                </div>
                                <div className="col">
                                    <h6 className="card-title mb-2 font-weight-bold">Data</h6>
                                    <h5 className="card-subtitle mb-3 text-muted">{formatDate(appointment?.date)}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h6 className="card-title mb-2 font-weight-bold">Preço</h6>
                                    <h5 style={{ color: '#2dc034' }} className="card-subtitle mb-3">
                                        {formatCurrency(appointment?.price)}
                                    </h5>
                                </div>
                                <div className="col">
                                    <h6 className="card-title mb-2 font-weight-bold">Observação</h6>
                                    <h5 className="card-subtitle mb-3 text-muted">{appointment?.observation}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="mb-3">Histórico de consultas do paciente</h4>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Código</th>
                                    <th scope="col">Situação</th>
                                    <th scope="col">Data</th>
                                    <th scope="col">Valor</th>
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