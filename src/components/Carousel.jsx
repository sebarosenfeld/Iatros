import React, { useState, useEffect } from "react";

const Carousel = ({ imagenes }) => {
  const [indiceActual, setIndiceActual] = useState(0);

  // Funciones para navegar
  const slideSiguiente = () => {
    setIndiceActual((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  const slideAnterior = () => {
    setIndiceActual((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  // Autoplay cada 2 segundos
  useEffect(() => {
    const intervalo = setInterval(slideSiguiente, 2000);
    return () => clearInterval(intervalo);
  }, [indiceActual]); // Se reinicia el timer cada vez que el índice cambia

  return (
    <div className="relative w-full overflow-hidden bg-gray-100">
      {/* Contenedor de Imágenes */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${indiceActual * 100}%)` }}
      >
        {imagenes.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={img}
              className="w-full h-auto max-h-[500px] object-contain block mx-auto"// 'block' elimina espacios fantasma abajo
              alt={`Banner ${index}`}
            />
          </div>
        ))}
      </div>

      {/* Flecha Izquierda */}
      <button
        onClick={slideAnterior}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition"
      >
        &#10094; {/* Símbolo < */}
      </button>

      {/* Flecha Derecha */}
      <button
        onClick={slideSiguiente}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition"
      >
        &#10095; {/* Símbolo > */}
      </button>

      {/* Indicadores (Puntitos) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {imagenes.map((_, index) => (
          <div
            key={index}
            onClick={() => setIndiceActual(index)}
            className={`cursor-pointer transition-all w-3 h-3 rounded-full ${
              indiceActual === index ? "bg-white p-1" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
