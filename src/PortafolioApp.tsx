import CardPresentation from "./components/CardPresentation";
import CardInfo from "./components/CardInfo";
import Navbar from "./components/Navbar";
import CardHabilidades from "./components/CardHabilidades";
import Herramientas from "./components/Herramientas";
import CardProyectos from "./components/CardProyectos";
import Footer from "./components/Footer";

export default function PortafolioApp() {
    return (
        <>
            <Navbar />
            <CardPresentation />
            <CardInfo />
            <CardHabilidades />
            <Herramientas />
            <CardProyectos />
            <Footer />
        </>
    )
}
