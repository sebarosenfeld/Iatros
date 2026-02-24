// src/components/FooterContact.jsx
const FooterContact = ({ titulo, descripcion }) => {
  return (
    <section className="max-w-4xl mx-auto px-6 pb-20">
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">{titulo}</h2>
          <p className="text-slate-400 mb-6 max-w-md">
            {descripcion}
          </p>
          <a 
            href="https://wa.me/541144280904"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105"
          >
            Hablar con un especialista
          </a>
        </div>
        {/* Círculos decorativos de fondo */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default FooterContact;