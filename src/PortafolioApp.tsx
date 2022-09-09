import CardPresentation from "./components/CardPresentation";
import CardInfo from "./components/CardInfo";
import Navbar from "./components/Navbar";
import CardHabilidades from "./components/CardHabilidades";

export default function PortafolioApp() {
    return (
        <>
            <Navbar />
            <CardPresentation />
            <CardInfo />
            <CardHabilidades />
        </>
    )
}
