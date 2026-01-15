import Products from "../data/Products";
import ProductCard from "../components/ProductCard";

function Panales() {
  const panales = Products.filter((p) => p.categoria === "Panales");

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header de la Categoría */}
      <header className="bg-white border-b border-gray-200 pt-12 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Pañales
          </h1>
          <p className="text-gray-500 text-lg">
            Soluciones de alta calidad para el cuidado y la comodidad.
          </p>
          <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>
      </header>

      {/* Grid de Productos - Ahora forzado a 1 columna */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8">
          {" "}
          {/* 'grid-cols-1' hace que se apilen */}
          {panales.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Panales;
