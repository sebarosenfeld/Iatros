import productos from "../data/productos";
import ProductCard from "./productCard";

function ProductList() {
  return (
    <div className="grid">
      {productos.map(p => (
        <ProductCard key={p.id} producto={p} />
      ))}
    </div>
  );
}

export default ProductList;
