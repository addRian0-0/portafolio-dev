import { useState } from "react";
import personitaimg from "../assets/programacion.png";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { languagesimgs } from "../helpers/assets-imgs";
import Tooltip from '@mui/material/Tooltip';

import { IHabilidades } from "../interfaces/Habilidades";
import { tecFront } from "../helpers/assets-imgs";

export default function CardHabilidades() {

    const [secHab, setSectionHabilidad] = useState<IHabilidades>(tecFront);
    const [section, setSection] = useState<string>("Vanilla");

    const changeSection = (sectionChange: string) => {
        setSection(sectionChange);
    }

    return (
        <div id="habilidades" className="card-habilidades">
            <h2>Mis habilidades como...</h2>
            <div className="habilidades-info">
                <div className="arrow" >
                    <KeyboardArrowLeftIcon sx={{ fontSize: "42px" }} />
                </div>
                <div className="main">
                    <div className="title">
                        <div className="img">
                            <img src={personitaimg} alt="" />
                        </div>
                        <h3>{secHab.title}</h3>
                        <ul>
                            {
                                secHab.sections.map(sec => {
                                    return <li key={sec}
                                        onClick={() => changeSection(sec)}
                                        className={section === sec ? "li-selected " : ""} >
                                        {sec}
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="content">
                        {
                            secHab.tecnologias.map((tec, index) => {
                                return tec.section === section ?
                                    <div className={`animate__animated animate__fadeInDown`} key={tec.nombre} >
                                        <Tooltip title={tec.nombre.toUpperCase()} followCursor>
                                            <img src={tec.link} alt={tec.nombre} />
                                        </Tooltip>
                                    </div> : ""
                            })
                        }

                    </div>
                </div>
                <div className="arrow">
                    <KeyboardArrowRightIcon sx={{ fontSize: "42px" }} />
                </div>
            </div>
        </div >
    )
}
