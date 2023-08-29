import { formatCurrency } from "../../utils/currency"
import { formatDate } from "../../utils/date"

const notes = [
    {
        id: "0",
        title: "Título do aviso",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa."
    },
    {
        id: "1",
        title: "Título do aviso",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa."
    },
    {
        id: "2",
        title: "Título do aviso",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa."
    }
]

export function Dashboard() {
    const getAppointments = JSON.parse(localStorage.getItem("appointments"))

    const date = new Date()
    const today = formatDate(date)

    const getTodaysAppointment = getAppointments?.filter((x: any) => formatDate(x.date) === today)

    return (
        <>
            <h4>Bem-vindo(a) de volta, Dr. João!</h4>
            <div className="row g-3 mt-3">
                <div className="col-12 col-md-6 col-sm-12">
                    <div
                        style={{
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'
                        }}
                        className="card"
                    >
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title text-center">N° agendamentos do dia</h5>
                            <h3 className="card-subtitle mt-2 text-muted">{getTodaysAppointment?.length || 0}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-sm-12">
                    <div
                        style={{
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'
                        }}
                        className="card"
                    >
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title text-center">N° pacientes atendidos no dia</h5>
                            <h3 className="card-subtitle mt-2 text-muted">{getTodaysAppointment?.length || 0}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-sm-12">
                    <div
                        style={{
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'
                        }}
                        className="card"
                    >
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title text-center">Faturamento do dia</h5>
                            <h3
                                className="card-subtitle mt-2"
                                style={{
                                    color: '#2dc034'
                                }}
                            >
                                R$ 150,00
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row g-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>Avisos</h4>
                        <button
                            type="button"
                            className="btn btn-outline-primary btn-sm"
                        >
                            Adicionar
                        </button>
                    </div>
                    {notes?.map((note) => (
                        <div className="col-12 col-md-6 col-sm-12" key={note.id}>
                            <div
                                className="card"
                                style={{
                                    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
                                }}
                            >
                                <div className="card-body">
                                    <h5 className="card-title">{note.title}</h5>
                                    <p className="card-text">{note.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}