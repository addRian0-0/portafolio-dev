import { Link, animateScroll as scroll } from "react-scroll";
import NextSection from "./NextSection";

export default function CardInfo() {
    return (

        <div id="acerca" className="card-info" >
            <div className="info">
                <h2>Un poco más de mi...</h2>
                <p>
                    Soy <span>Ithan Adrian Flores Zamora</span>, me percibo como alguien
                    que tiene sus metas claras y con una verdadera pasión por
                    aprender, me gusta brindar mi apoyo como me gustaría recibirlo.
                    Soy alguien que tiene en claro su persona, las malas y buenas
                    actitudes que me conforman y que trata de corregir las malas para mejorar como persona.
                </p>
            </div>
            <NextSection idSection="habilidades" />
        </div>
    )
}
