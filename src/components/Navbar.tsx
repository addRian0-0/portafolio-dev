import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, animateScroll as scroll } from "react-scroll";
import cv from "../assets/Ithan-Flores-CV.pdf";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={isOpen ? "sidebar-open" : "sidebar"}>
                <div className="menu">
                    <span onClick={handleClick} >
                        <MenuIcon sx={{ fontSize: "38px" }} />
                    </span>
                    <ul>

                        <li>
                            <Link
                                className="active"
                                to="acerca"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                            >
                                Acerca
                            </Link>
                        </li>

                        <li><Link
                            className="active"

                            to="habilidades"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            Habilidades
                        </Link></li>
                        <li><Link
                            className="active"

                            to="proyectos"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            Proyectos
                        </Link></li>
                        <li><Link
                            className="active"

                            to="contacto"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            Redes y forma de contacto
                        </Link></li>

                        <li>
                            <button className="btn-cv">Descargar CV</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar" >
                <div>
                    <span onClick={handleClick} >
                        <MenuIcon sx={{ fontSize: "38px" }} />
                    </span>
                </div>
                <div>
                    <button className="btn-cv" >
                        <a href={cv} download>Descargar CV</a>
                    </button>
                </div>
            </div>
        </>
    )
}
