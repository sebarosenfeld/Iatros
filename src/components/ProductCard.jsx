import React from 'react';

const ProductCard = ({ producto }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col md:flex-row w-full">
      
      {/* Contenedor de Imagen Optimizado para Mobile */}
      <div className="w-full md:w-64 h-48 md:h-auto overflow-hidden bg-gray-50/50 p-4 flex-shrink-0 flex items-center justify-center">
        <img
          src={producto.imagen}
          alt={producto.nombreProducto}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Contenido del Texto */}
      <div className="p-6 flex flex-col justify-center flex-grow">
        <div className="flex flex-col mb-2">
          <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-1">
            {producto.categoria}
          </span>
          <h3 className="text-gray-900 font-bold text-xl leading-tight">
            {producto.nombreProducto}
          </h3>
        </div>

        <div className="w-10 h-0.5 bg-blue-100 mb-3 rounded-full"></div>

        <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
          {producto.descripcion}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;