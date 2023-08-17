import { useNavigate } from 'react-router-dom'

import { phoneMask } from "../../utils/phone";

export function PatientCard({ id, name, phone }: any) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/patients/${id}/details`)
    }

    return (
        <div
            style={{
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'
            }}
            className="card mb-3"
        >
            <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title mb-2">{name}</h5>
                <h6 className="card-subtitle mb-3 text-muted">{phoneMask(phone)}</h6>
                <button
                    type="button"
                    className="btn btn-link card-text text-muted"
                    onClick={handleClick}
                >
                    Ver mais
                </button>
            </div>
        </div>
    )
}