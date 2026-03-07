import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Descartables from "./pages/Descartables";
import Oxigenoterapia from "./pages/Oxigenoterapia";
import Contacto from "./pages/Contacto";
import NavBar from "./components/NavBar";
import WhatsAppButton from "./components/WhatsappButton";
import Panales from "./pages/Panales";
import Curaciones from "./pages/Curaciones";
import DynamicTitle from "./components/DynamicTitle";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <DynamicTitle />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/descartables" element={<Descartables />} />
        <Route path="/oxigenoterapia" element={<Oxigenoterapia />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/panales" element={<Panales />} />
        <Route path="/curaciones" element={<Curaciones />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
