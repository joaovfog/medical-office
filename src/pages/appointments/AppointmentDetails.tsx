import { formatDate } from "../../utils/date";

export function AppointmentDetails({ patientsName, observation, date }: any) {
    return (
        <div className="card mb-2">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <h5 className="card-title mb-2">{patientsName}</h5>
                <h5 className="card-title mb-2">{formatDate(date)}</h5>
                <h6 className="card-subtitle mb-3 text-muted">{observation}</h6>
                <button className="btn btn-link card-text text-muted">Ver mais</button>
            </div>
        </div>
    )
}