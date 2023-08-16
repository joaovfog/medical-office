export function Appointments() {
    return (
        <>
            <h3>Consultas</h3>
            <input className="form-control" type="text" placeholder="Pesquisar consulta" />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nome do paciente</th>
                        <th scope="col">Data/Hora</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>João Vitor Fogaça</td>
                        <td>16/08/2023 - 13:30</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Laura Kornalewski</td>
                        <td>16/08/2023 - 14:15</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Antônio Carlos</td>
                        <td>16/08/2023 - 15:40</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}