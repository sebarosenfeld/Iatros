import React from 'react';

const ProductCard = ({ producto }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col md:flex-row w-full">
      
      {/* Contenedor de Imagen (A la izquierda en PC, arriba en Mobile) */}
      <div className="w-full md:w-64 aspect-square md:aspect-auto overflow-hidden bg-gray-50/50 p-6 flex-shrink-0">
        <img
          src={producto.imagen}
          alt={producto.nombreProducto}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Contenido del Texto (A la derecha) */}
      <div className="p-6 flex flex-col justify-center flex-grow">
        <div className="flex flex-col mb-3">
          <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-1">
            {producto.categoria}
          </span>
          <h3 className="text-gray-900 font-bold text-xl md:text-2xl leading-tight">
            {producto.nombreProducto}
          </h3>
        </div>

        {/* Línea decorativa sutil (alineada a la izquierda) */}
        <div className="w-12 h-1 bg-blue-100 mb-4 rounded-full"></div>

        <p className="text-gray-500 text-base leading-relaxed">
          {producto.descripcion || "Información detallada sobre este insumo médico de alta calidad disponible para entrega inmediata."}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;