import Products from "../data/Products";
import ProductCard from "../components/ProductCard";
import HeaderView from "../components/HeaderView";
import FooterContact from "../components/FooterContact";

function Panales() {
  const panales = Products.filter((p) => p.categoria === "Panales");

  return (
    <div className="min-h-screen bg-gray-50/50">
      <HeaderView
        titulo="Pañales"
        descripcion="Soluciones de alta calidad para el cuidado y la comodidad."
      />

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

      <FooterContact
        titulo="¿Dudas sobre talles o absorción?"
        descripcion="Contamos con una amplia variedad de modelos. Consultanos para encontrar la mejor opción para el cuidado de tu familiar."
      />
    </div>
  );
}

export default Panales;
