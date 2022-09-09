import { Link, animateScroll as scroll } from "react-scroll";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

interface Props {
    idSection: string;
}

export default function NextSection({ idSection }: Props) {
    return (
        <div className="arrow-down">
            <Link
                to={idSection}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
            >
                <KeyboardDoubleArrowDownIcon sx={{ fontSize: "64px" }} />
            </Link>

        </div>
    )
}
