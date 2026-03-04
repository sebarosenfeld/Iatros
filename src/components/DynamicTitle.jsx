import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const titles = {
      "/": "Insumos médicos",
      "/contacto": "Contacto",
      "/curaciones": "Curaciones",
      "/descartables": "Descartables",
      "/oxigenoterapia": "Oxigenoterapia",
      "/pañales": "Pañales",
    };

    const pageName = titles[path] || "Iatros";

    document.title = `Iatros - ${pageName} `;
  }, [location]);

  return null;
}

export default DynamicTitle;