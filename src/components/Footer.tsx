import Telegram from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <div  className="footer" >
            <div id="contacto" className="container">
                <div>
                    <a href="https://www.linkedin.com/in/ithan-addrian/">
                        <LinkedInIcon sx={{ fontSize: "32px" }} />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/addRian0-0/">
                        <GitHubIcon sx={{ fontSize: "32px" }} />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/c_addriann/">
                        <InstagramIcon sx={{ fontSize: "32px" }} />
                    </a>
                </div>
                <div>
                    <a href="https://t.me/Ithanf">
                        <Telegram sx={{ fontSize: "32px" }} />
                    </a>
                </div>
                <div>
                    <a href="mailto:addrianun@gmail.com">
                        <AlternateEmailIcon sx={{ fontSize: "32px" }} />
                    </a>
                </div>
            </div>
        </div>
    )
}
