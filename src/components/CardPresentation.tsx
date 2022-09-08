import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import sisoy from "../assets/yojaja.jpg"

export default function CardPresentation() {
    return (
        <>
            <div className="card-presentation" >
                <div className="presentation-info" >
                    <h2>¡Hola! Soy <span>Ithan Flores</span>.</h2>
                    <p>
                        Desarrollador web Front-end, Back-end o FullStack, llámalo como quieras.
                    </p>
                    <div className="arrow-down">
                        <KeyboardDoubleArrowDownIcon sx={{ fontSize: "64px" }} />
                    </div>
                </div>
                <div>
                    <img src={sisoy} alt="Ithan Flores (yo)" />
                </div>
            </div>
        </>
    )
}
