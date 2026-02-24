import products from "../data/Products";
import ProductCard from "../components/ProductCard";
import HeaderView from "../components/HeaderView";
import FooterContact from "../components/FooterContact";

function Descartables() {
  const descartables = products.filter(
    p => p.categoria === "Descartables"
  );

  return (
    <div className="min-h-screen bg-gray-50/50">
      <HeaderView 
        titulo="Insumos Descartables" 
        descripcion=" Material descartable de alta calidad para procedimientos médicos y cuidados de higiene profesional." 
      />

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

        <FooterContact
        titulo="¿Buscás insumos para tu clínica o consultorio?"
        descripcion="Contamos con stock permanente de materiales estériles y descartables de alta calidad. Garantizá la máxima higiene en cada procedimiento con nuestro asesoramiento."
      />

    </div>
  );
}

export default Descartables;