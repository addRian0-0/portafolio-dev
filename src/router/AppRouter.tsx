import { Route, Routes, BrowserRouter } from "react-router-dom";
import PortafolioApp from "../PortafolioApp";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PortafolioApp />} />
      </Routes>
    </BrowserRouter>
  )
}