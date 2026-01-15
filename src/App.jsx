import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Descartables from "./pages/Descartables";
import Oxigenoterapia from "./pages/Oxigenoterapia";
import Contacto from "./pages/Contacto";
import NavBar from "./components/navBar";
import WhatsAppButton from "./components/WhatsappButton";
import Panales from "./pages/Panales";
import Curaciones from "./pages/Curaciones";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
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
