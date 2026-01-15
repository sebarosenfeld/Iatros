import products from "../data/Products";
import ProductCard from "../components/productCard";

function Descartables() {
  const descartables = products.filter(
    p => p.categoria === "Descartables"
  );

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Cabecera Profesional */}
      <header className="bg-white border-b border-gray-200 pt-12 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Insumos Descartables
          </h1>
          <p className="mt-3 text-gray-500 text-lg max-w-2xl">
            Material descartable de alta calidad para procedimientos médicos y cuidados de higiene profesional.
          </p>
          <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>
      </header>

      {/* Listado de Productos (Uno debajo del otro) */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {descartables.length > 0 ? (
          <div className="flex flex-col gap-8">
            {descartables.map(p => (
              <ProductCard key={p.id} producto={p} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-20 text-center border border-dashed border-gray-300">
            <p className="text-gray-400 text-lg">No hay productos disponibles en esta categoría.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Descartables;