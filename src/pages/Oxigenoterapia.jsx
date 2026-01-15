import products from "../data/Products";
import ProductCard from "../components/productCard";

function Oxigenoterapia() {
  const oxigeno = products.filter(
    p => p.categoria === "Oxigenoterapia"
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header con estilo Médico/Tecnológico */}
      {/* Cabecera Profesional - Estilo Unificado */}
      <header className="bg-white border-b border-gray-200 pt-12 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Oxigenoterapia
          </h1>
          <p className="mt-3 text-gray-500 text-lg max-w-2xl">
            Equipamiento especializado para el soporte respiratorio, diseñado para garantizar pureza y flujo constante en el cuidado del paciente.
          </p>
          <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>
      </header>

      {/* Listado de Productos */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {oxigeno.length > 0 ? (
          <div className="space-y-8"> {/* space-y-8 da un respiro perfecto entre filas */}
            {oxigeno.map(p => (
              <ProductCard key={p.id} producto={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <svg className="w-16 h-16 text-slate-200 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <p className="text-slate-400 font-medium">No hay equipos disponibles en este momento.</p>
          </div>
        )}
      </main>

      {/* Sección de Asistencia Técnica (Muy importante en esta categoría) */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">¿Necesitás asesoramiento técnico?</h2>
            <p className="text-slate-400 mb-6 max-w-md">
              La elección del equipo de oxígeno adecuado es vital. Nuestros especialistas están listos para ayudarte.
            </p>
            <a 
              href="https://wa.me/541144280904"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105"
            >
              Hablar con un especialista
            </a>
          </div>
          {/* Círculos decorativos de fondo */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}

export default Oxigenoterapia;