import React from "react";

function Contacto() {
  // Configuración del Mapa
  const googleMapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.3868600000004!2d-58.483489!3d-34.543787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb69c2688863f%3A0xc66517a6a70a373b!2sWashington%203506%2C%20C1430%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar";

  // Lógica para enviar el mail
  const handleEnviarMail = (e) => {
    e.preventDefault();

    // Capturamos los datos del formulario usando los nombres de los campos
    const formData = new FormData(e.target);
    const nombre = formData.get("user_name");
    const emailCliente = formData.get("user_email");
    const mensaje = formData.get("user_message");

    const emailDestino = "andyrosenfeld52@gmail.com";
    const asunto = `Consulta Web Iatros - ${nombre}`;

    // Armamos el cuerpo del mensaje con saltos de línea
    const cuerpoMail = `Nombre: ${nombre}%0D%0AEmail: ${emailCliente}%0D%0A%0D%0AMensaje:%0D%0A${mensaje}`;

    // Abrimos el gestor de correo
    window.location.href = `mailto:${emailDestino}?subject=${encodeURIComponent(
      asunto
    )}&body=${cuerpoMail}`;
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Cabecera Profesional */}
      <header className="bg-white border-b border-gray-200 pt-12 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Contacto
          </h1>
          <p className="mt-3 text-gray-500 text-lg max-w-2xl">
            Estamos para asesorarte. Escribinos por presupuestos, compras
            mayoristas o consultas técnicas.
          </p>
          <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Columna 1: Formulario e Información */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envianos un mensaje via mail
              </h2>

              <form onSubmit={handleEnviarMail} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="user_name"
                    type="text"
                    required
                    placeholder="Nombre completo"
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                  />
                  <input
                    name="user_email"
                    type="email"
                    required
                    placeholder="Correo electrónico"
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                  />
                </div>
                <textarea
                  name="user_message"
                  required
                  placeholder="¿En qué podemos ayudarte?"
                  rows="5"
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-100 active:scale-95"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Tarjetas de Datos Rápidos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://wa.me/541144280904"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-6 rounded-2xl text-white hover:bg-blue-700 transition-colors group"
              >
                <p className="text-blue-100 text-sm">Ventas WhatsApp</p>
                <p className="text-xl font-bold">+54 11 4428-0904</p>
              </a>
              <a
                href="mailto:andyrosenfeld52@gmail.com"
                className="bg-white p-6 rounded-2xl text-gray-900 border border-gray-100 shadow-sm hover:border-blue-200 transition-colors group flex flex-col justify-center"
              >
                <p className="text-blue-600 text-sm font-bold uppercase tracking-wider">
                  Email Directo
                </p>
                {/* Bajamos a text-base y quitamos el break-all */}
                <p className="text-base font-bold text-gray-800 truncate">
                  andyrosenfeld52@gmail.com
                </p>
              </a>
              <div className="bg-gray-900 p-6 rounded-2xl text-white">
                <p className="text-gray-400 text-sm">Horarios de Atención</p>
                <p className="text-lg font-semibold">Lun a Vie: 9 a 18hs</p>
              </div>
            </div>
          </div>

          {/* Columna 2: Mapa y Ubicación Física */}
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 h-[450px] overflow-hidden">
              <iframe
                title="Ubicación Iatros - Saavedra"
                src={googleMapsUrl}
                className="w-full h-full rounded-xl"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  Nuestra Dirección
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Washington 3506, Saavedra,
                  <br />
                  C1430 Ciudad Autónoma de Buenos Aires.
                </p>
                <a
                  href="https://www.google.com/maps?q=Washington+3506+Saavedra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm font-bold mt-2 inline-block hover:underline"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contacto;
