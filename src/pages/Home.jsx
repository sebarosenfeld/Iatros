import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { misImagenes } from "../assets/Data";

function Home() {
  return (
    <>
      <section className="w-full">
        {/* Sección de Texto con Padding Vertical para separar del Navbar y el Carousel */}
        <div className="w-full bg-white pt-12 pb-16 md:pt-16 md:pb-10 text-center">
          <div className="max-w-7xl mx-auto px-6">
            {/* Título Principal */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Insumos Médicos Profesionales
            </h1>

            {/* Línea decorativa azul */}
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>

            {/* Párrafo descriptivo */}
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Equipamiento de alta gama diseñado para el cuidado y bienestar de
              los pacientes.
            </p>
          </div>
        </div>

        {/* Contenedor del Carousel sin márgenes laterales para que ocupe todo el ancho */}
        <div className="w-full pb-20">
          <Carousel imagenes={misImagenes} />
        </div>
      </section>
    </>
  );
}

export default Home;
