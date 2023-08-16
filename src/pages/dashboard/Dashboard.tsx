export function Dashboard() {
    return (
        <>
            <h3>Bem-vindo(a) de volta, Dr. João!</h3>
            <div className="row mt-4">
                <div className="col--12 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">N° agendamentos do dia</h5>
                            <h3 className="card-subtitle mt-2 text-muted">7</h3>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">N° pacientes atendidos no dia</h5>
                            <h3 className="card-subtitle mt-2 text-muted">3</h3>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-sm-12 mt-4">
                    <div className="card">
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">Faturamento do dia</h5>
                            <h3 className="card-subtitle mt-2 text-muted">R$ 675,50</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}