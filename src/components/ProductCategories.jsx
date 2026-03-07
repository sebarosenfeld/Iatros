const categories = [
  { name: "Descartables", path: "/descartables" },
  { name: "Pañales", path: "/panales" },
  { name: "Curaciones", path: "/curaciones" },
  { name: "Oxigenoterapia", path: "/oxigenoterapia" },
]

import { Link } from "react-router-dom"

export default function ProductCategories(){

  return(

    <section id="productos" className="products-section">

      <h2 className="products-title">Categorías de Productos</h2>

      <div className="products-grid">

        {categories.map((c,i)=>(

          <Link
            to={c.path}
            key={i}
            style={{ textDecoration: "none" }}
          >
            <div className="product-card">
              <h3 className="product-card-title">{c.name}</h3>
            </div>
          </Link>

        ))}

      </div>

    </section>

  )

}