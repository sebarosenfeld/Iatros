export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">Distribución de Insumos Médicos</h1>

        <p className="hero-subtitle">
          {/* Ajustado según el texto exacto de la imagen */}
          Productos médicos para clinices, profesionales y cuidado domiciliiario
        </p>

        <div className="hero-tags">
          <span className="hero-tag">Pañales</span>
          <span className="hero-tag">Apósitos</span>
          <span className="hero-tag">Gasas</span>
          <span className="hero-tag">Incontinencia</span>
          <span className="hero-tag">Sistemas VAC</span>
          <span className="hero-tag">Equipos Respiratorios</span>
        </div>

        <div className="hero-buttons">
          <a href="https://wa.me/5491144280904" className="btn-primary">
            {/* Si quieres el icono de WhatsApp, deberías sumarlo aquí */}
            Consultar por WhatsApp
          </a>

          <a href="#productos" className="btn-secondary">
            Ver productos
          </a>
        </div>
      </div>
    </section>
  );
}
