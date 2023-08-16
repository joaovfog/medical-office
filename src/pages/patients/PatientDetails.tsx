import { phoneMask } from "../../utils/phone";

export function PatientDetails({ name, phone }: any) {
    return (
        <div className="card mb-2">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <h5 className="card-title mb-2">{name}</h5>
                <h6 className="card-subtitle mb-3 text-muted">{phoneMask(phone)}</h6>
                <button className="btn btn-link card-text text-muted">Ver mais</button>
            </div>
        </div>
    )
}