import sisoy from "../assets/yo2jaj.jpg"
import NextSection from "./NextSection"

export default function CardPresentation() {
    return (
        <>
            <div className="card-presentation" >
                <div className="presentation-info" >
                    <h2>¡Hola! Soy <span>Ithan Flores</span>.</h2>
                    <p>
                        Desarrollador web Front-end, Back-end o FullStack, llámalo como quieras.
                    </p>
                    <NextSection idSection="acerca" />
                </div>
                <div>
                    <img src={sisoy} alt="Ithan Flores (yo)" />
                </div>
            </div>
        </>
    )
}
