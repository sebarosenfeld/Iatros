import products from "../data/Products";
import ProductCard from "../components/ProductCard";
import HeaderView from "../components/HeaderView";
import FooterContact from "../components/FooterContact";

function Oxigenoterapia() {
  const oxigeno = products.filter((p) => p.categoria === "Oxigenoterapia");

  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderView
        titulo="Oxigenoterapia"
        descripcion="Equipamiento especializado para el soporte respiratorio, diseñado para garantizar pureza y flujo constante en el cuidado del paciente."
      />

      {/* Listado de Productos */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {oxigeno.length > 0 ? (
          <div className="space-y-8">
            {" "}
            {/* space-y-8 da un respiro perfecto entre filas */}
            {oxigeno.map((p) => (
              <ProductCard key={p.id} producto={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <svg
              className="w-16 h-16 text-slate-200 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <p className="text-slate-400 font-medium">
              No hay equipos disponibles en este momento.
            </p>
          </div>
        )}
      </main>

      <FooterContact
        titulo="¿Necesitás asesoramiento técnico?"
        descripcion="La elección del equipo de oxígeno adecuado es vital. Nuestros especialistas están listos para ayudarte."
      />
    </div>
  );
}

export default Oxigenoterapia;
