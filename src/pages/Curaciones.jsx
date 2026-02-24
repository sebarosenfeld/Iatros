import Products from "../data/Products";
import ProductCard from "../components/ProductCard";
import HeaderView from "../components/HeaderView";
import FooterContact from "../components/FooterContact";

function Curaciones() {
  const curaciones = Products.filter((p) => p.categoria === "Curaciones");

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Cabecera Profesional - Estilo Unificado */}
      <HeaderView
        titulo="Equipos para curación de heridas"
        descripcion="Insumos estériles y soluciones avanzadas diseñadas para la protección, limpieza y cicatrización efectiva de heridas."
      />

      {/* Listado de Productos (Formato Vertical) */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {curaciones.length > 0 ? (
          <div className="flex flex-col gap-8">
            {curaciones.map((p) => (
              <ProductCard key={p.id} producto={p} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-20 text-center border border-dashed border-gray-300">
            <p className="text-gray-400 text-lg">
              No se encontraron productos de curación en este momento.
            </p>
          </div>
        )}
      </main>

      <FooterContact
        titulo="¿Buscás algún insumo específico?"
        descripcion="Contamos con una amplia variedad de gasas, vendas y apósitos especiales. No dudes en consultarnos."
      />
    </div>
  );
}

export default Curaciones;
