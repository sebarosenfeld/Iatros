import Products from "../data/Products";
import ProductCard from "../components/productCard";

function Curaciones() {
  const curaciones = Products.filter(
    p => p.categoria === "Curaciones"
  );

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Cabecera Profesional - Estilo Unificado */}
      <header className="bg-white border-b border-gray-200 pt-12 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Equipos para curación de Heridas
          </h1>
          <p className="mt-3 text-gray-500 text-lg max-w-2xl">
            Insumos estériles y soluciones avanzadas diseñadas para la protección, limpieza y cicatrización efectiva de heridas.
          </p>
          <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>
      </header>

      {/* Listado de Productos (Formato Vertical) */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {curaciones.length > 0 ? (
          <div className="flex flex-col gap-8">
            {curaciones.map(p => (
              <ProductCard key={p.id} producto={p} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-20 text-center border border-dashed border-gray-300">
            <p className="text-gray-400 text-lg">No se encontraron productos de curación en este momento.</p>
          </div>
        )}
      </main>

      {/* Banner de Contacto - Cierre de página */}
      <footer className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white border border-blue-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-gray-900">¿Buscás algún insumo específico?</h3>
            <p className="text-gray-500">Contamos con una amplia variedad de gasas, vendas y apósitos especiales.</p>
          </div>
          <a 
            href="https://wa.me/541144280904" 
            className="w-full md:w-auto text-center bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
          >
            Consultar Stock
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Curaciones;