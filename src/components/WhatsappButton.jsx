import { useLocation } from "react-router-dom";

function WhatsAppButton() {
  const location = useLocation();

  const phoneNumber = "5491144280904";

  const getMessageByPage = () => {
    if (location.pathname === "/descartables") {
      return "Hola, quiero consultar por insumos descartables.";
    }

    if (location.pathname === "/oxigenoterapia") {
      return "Hola, quiero consultar por productos de oxigenoterapia.";
    }

    if (location.pathname === "/contacto") {
      return "Hola, quiero hacer una consulta.";
    }

    return "Hola, quiero consultar por insumos médicos.";
  };

  const message = getMessageByPage();

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
   <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contactar por WhatsApp"
  className="
    fixed bottom-6 right-6 z-50
    flex items-center gap-3
    bg-green-500 hover:bg-green-600
    text-white px-4 py-3
    rounded-full shadow-lg
    transition-transform
    hover:scale-105
    origin-bottom-right
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-6 h-6 shrink-0"
    fill="currentColor"
  >
    <path d="M380.9 97.1C339 55.2 283.2 32 224.8 32 103.3 32 4.8 130.5 4.8 252c0 45.3 11.8 89.5 34.3 128.6L0 480l103.7-37.8c37.8 20.6 80.4 31.5 124.2 31.5h.1c121.5 0 220-98.5 220-220 0-58.4-23.2-114.2-65.1-156.6zM224 438.6c-38.4 0-76-10.3-109-29.8l-7.8-4.6-61.5 22.4 20.6-63.3-5.1-8.2c-21.6-34.3-33-74-33-114.7 0-118.7 96.6-215.3 215.3-215.3 57.5 0 111.6 22.4 152.2 63.1 40.6 40.6 63.1 94.7 63.1 152.2 0 118.7-96.6 215.3-215.3 215.3z"/>
  </svg>

  <span className="hidden sm:block font-semibold">
    Consultanos
  </span>
</a>

  );
}

export default WhatsAppButton;
