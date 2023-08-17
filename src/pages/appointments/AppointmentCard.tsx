import { useNavigate } from "react-router-dom";

import { formatDate } from "../../utils/date";
import { formatCurrency } from "../../utils/currency";

export function AppointmentCard({ id, patientsName, observation, date, price }: any) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/appointments/${id}/details`)
    }

    return (
        <div
            style={{
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'
            }}
            className="card mb-3"
        >
            <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex align-items-center justify-content-between w-25">
                    <h5 className="card-title mb-2">{patientsName}</h5>
                    <h6 style={{ color: '#2dc034' }} className="card-subtitle">
                        {formatCurrency(price) || 'R$ 0,00'}
                    </h6>
                </div>
                <h5 className="card-title mb-2">{formatDate(date)}</h5>
                <h6 className="card-subtitle mb-3 text-muted text-center">
                    {observation}
                </h6>
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