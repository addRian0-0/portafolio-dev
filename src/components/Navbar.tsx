import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, animateScroll as scroll } from "react-scroll";

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
                            to="habilidades"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            Habilidades
                        </Link></li>
                        <li>Proyectos</li>
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
                    <h3>Ithan Flores</h3>
                </div>
            </div>
        </>
    )
}
