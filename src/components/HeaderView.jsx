// src/components/HeaderView.jsx
const HeaderView = ({ titulo, descripcion }) => {
  return (
    <header className="bg-white border-b border-gray-200 pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          {titulo}
        </h1>
        {descripcion && (
          <p className="mt-3 text-gray-500 text-lg max-w-2xl">
            {descripcion}
          </p>
        )}
        <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
      </div>
    </header>
  );
};

export default HeaderView;