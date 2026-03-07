import panal from "../assets/imgPanales/imagen-panal-adulto-extra-grande.webp"
import vac from "../assets/imgCuraciones/SistemaVac.jpeg"
import concentrador from "../assets/imgOxigenoterapia/concentrador.jfif"
import bpap from "../assets/imgOxigenoterapia/BpapYCpap.png"

const products = [
  {
    name: "Pañales para adultos",
    image: panal
  },
  {
    name: "Sistema VAC",
    image: vac
  },
  {
    name: "Concentrador de oxígeno",
    image: concentrador
  },
  {
    name: "Bpap y Cpap",
    image: bpap
  }
]

export default function FeaturedProducts() {

  return (

    <section className="products-section">

      <h2 className="products-title">Productos Destacados</h2>

      <div className="products-grid">

        {products.map((p, i) => (
          <div className="product-card" key={i}>

            <img
              src={p.image}
              alt={p.name}
              className="product-card-image"
            />

            <h3 className="product-card-title">
              {p.name}
            </h3>

            <a
              className="product-card-button"
              href="https://wa.me/5491144280904"
            >
              Consultar
            </a>

          </div>
        ))}

      </div>

    </section>

  )

}