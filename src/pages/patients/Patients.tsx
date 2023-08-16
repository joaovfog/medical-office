export function Patients() {
    return (
        <>
            <h3>Pacientes</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nome do paciente</th>
                        <th scope="col">Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>João Vitor Fogaça</td>
                        <td>(00) 00000-0000</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Laura Kornalewski</td>
                        <td>(00) 00000-0000</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Antônio Carlos</td>
                        <td>(00) 00000-0000</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}