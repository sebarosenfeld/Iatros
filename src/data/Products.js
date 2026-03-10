import imagenPanalNino from "../assets/imgPanales/imagen-panal-niño.webp";
import imagenPanalJuvenilChico from "../assets/imgPanales/imagen-panal-juvenil-chico.webp";
import imagenPanalJuvenilMediano from "../assets/imgPanales/imagen-panal-juvenil-mediano.webp";
import imagenPanalAdultoGrande from "../assets/imgPanales/imagen-panal-adulto-grande.webp";
import imagenPanalAdultoGrandeRecto from "../assets/imgPanales/adultoGrandeRecto.jfif";
import imagenPanalAdultoExtraGrande from "../assets/imgPanales/imagen-panal-adulto-extra-grande.webp";
import imagenPanalAdultoExtraGrandeRecto from "../assets/imgPanales/imagen-panal-adulto-extra-grande-recto.webp";
import imagenPanalApositosIncontinencia from "../assets/imgPanales/apositosIncontinencia.jfif";
import imagenPanalRefuerzaPanal from "../assets/imgPanales/refuerzaPanal.jfif";
import imagenPanalPlenitud from "../assets/imgPanales/Plenitud.jpg";
import imagenZaleas from "../assets/imgPanales/zaleas.jfif";
import imagenApositos from "../assets/imgDescartables/apositos.jfif";
import imagenGasas from "../assets/imgDescartables/gasas.jfif";
import imagenGuantesEsteriles from "../assets/imgDescartables/guantesEsteriles.jfif";
import imagenGuantesLatex from "../assets/imgDescartables/guantesLatex.jfif";
import imagenGuantesNitrilo from "../assets/imgDescartables/guantesNitrilo.jfif";
import imagenJeringas from "../assets/imgDescartables/jeringas.jfif";
import imagenTelaHipoalergenica from "../assets/imgDescartables/telaHipoalergenica.jfif";
import imagenConcentrador from "../assets/imgOxigenoterapia/concentrador.jfif";
import imagenConcentradorPortatil from "../assets/imgOxigenoterapia/concentradorPortatil.jfif";
import imagenTuboOxigeno from "../assets/imgOxigenoterapia/tanqueOxigeno.jfif";
import imagenVasoHumidificador from "../assets/imgOxigenoterapia/vasoHumidificador.jfif";
import imagenCanulaNasal from "../assets/imgOxigenoterapia/canulaNasal.jfif";
import imagenCpap from "../assets/imgOxigenoterapia/Cpap.jfif";
import imagenBpap from "../assets/imgOxigenoterapia/Bpap.jfif";
import imagenVac from "../assets/imgCuraciones/SistemaVac.jpeg";
import imagenReservorio from "../assets/imgCuraciones/Reservorio.jfif";
import imagenEsponja from "../assets/imgCuraciones/Esponja.jfif";

const products = [
  {
    id: 1,
    nombreProducto: "Niño",
    descripcion: "Tamaño de 0 a 5kg.",
    precio: 1000,
    categoria: "Panales",
    imagen: imagenPanalNino,
  },
  {
    id: 2,
    nombreProducto: "Juvenil - chico",
    descripcion: "Tamaño de 5 a 10kg.",
    precio: 1500,
    categoria: "Panales",
    imagen: imagenPanalJuvenilChico,
  },
  {
    id: 3,
    nombreProducto: "Juvenil - mediano",
    descripcion: "Tamaño de 10 a 20kg.",
    precio: 2000,
    categoria: "Panales",
    imagen: imagenPanalJuvenilMediano,
  },
  {
    id: 4,
    nombreProducto: "Adulto Grande Elastizado",
    descripcion: "Tamaño de 20 a 50kg.",
    precio: 2500,
    categoria: "Panales",
    imagen: imagenPanalAdultoGrande,
  },
  {
    id: 5,
    nombreProducto: "Adulto Grande Elastizado Recto",
    descripcion: "Tamaño de 20 a 50kg.",
    precio: 2500,
    categoria: "Panales",
    imagen: imagenPanalAdultoGrandeRecto,
  },
  {
    id: 6,
    nombreProducto: "Adulto Extra Grande Elastizado",
    descripcion: "Tamaño de 50 a 100kg.",
    precio: 3000,
    categoria: "Panales",
    imagen: imagenPanalAdultoExtraGrande,
  },
  {
    id: 7,
    nombreProducto: "Adulto Extra Grande Elastizado Recto",
    descripcion: "Tamaño de 50 a 100kg.",
    precio: 3000,
    categoria: "Panales",
    imagen: imagenPanalAdultoExtraGrandeRecto,
  },
  {
    id: 8,
    nombreProducto: "Apositos para incontinencia",
    descripcion: "Compresas absorbentes con gel superabsorbente, cubierta hipoalergénica para la piel y capa exterior impermeable.",
    precio: 3000,
    categoria: "Panales",
    imagen: imagenPanalApositosIncontinencia,
  },
  {
    id: 9,
    nombreProducto: "Refuerza pañal",
    descripcion: "Apósito absorbente extra que se coloca dentro de un pañal para aumentar su capacidad de absorción.",
    precio: 3000,
    categoria: "Panales",
    imagen: imagenPanalRefuerzaPanal,
  },
  {
    id: 10,
    nombreProducto: "Zaleas",
    descripcion: "Protectores absorbentes para camas y superficies. Poseen una tela suave hipoalergénica y base impermeable para proteger sábanas y colchones.",
    precio: 3500,
    categoria: "Panales",
    imagen: imagenZaleas,
  },
  {
    id: 11,
    nombreProducto: "Apositos",
    descripcion: "Material estéril utilizado para cubrir una herida, protegiéndola de infecciones.",
    precio: 3000,
    categoria: "Descartables",
    imagen: imagenApositos,
  },
  {
    id: 12,
    nombreProducto: "Gasas",
    descripcion: "Pequeñas mallas de tejidos estériles diseñadas para limpiar, cubrir y proteger las heridas.",
    precio: 3000,
    categoria: "Descartables",
    imagen: imagenGasas,
  },
  {
    id: 13,
    nombreProducto: "Guantes esteriles",
    descripcion: "Ayudan a evitar la transmisión de gérmenes patógenos por contacto directo e indirecto.",
    precio: 3000,
    categoria: "Descartables",
    imagen: imagenGuantesEsteriles,
  },
  {
    id: 14,
    nombreProducto: "Guantes de latex",
    descripcion: "Permite obtener comodidad del soporte textil y una buena resistencia al desgarro.",
    precio: 3000,
    categoria: "Descartables",
    imagen: imagenGuantesLatex,
  },
  {
    id: 15,
    nombreProducto: "Guantes de nitrilo",
    descripcion: "Equipo de protección personal hecho de caucho sintético, ideal para personas alérgicas al látex.",
    precio: 3000,
    categoria: "Descartables",
    imagen: imagenGuantesNitrilo,
  },
  {
    id: 16,
    nombreProducto: "Jeringas",
    descripcion: "Instrumentos médicos estériles de un solo uso. Disponibles en varias medidas.",
    precio: 3000,
    categoria: "Descartables",
    imagen: imagenJeringas,
  },
  {
    id: 17,
    nombreProducto: "Tela hipoalergénica",
    descripcion: "Tejido diseñado para minimizar reacciones alérgicas, fabricado con materiales naturales suaves.",
    precio: 3000,
    categoria: "Descartables",
    imagen: imagenTelaHipoalergenica,
  },
  {
    id: 18,
    nombreProducto: "Concentrador de oxígeno",
    descripcion: "Dispositivo médico que filtra el aire ambiente y entrega oxígeno enriquecido (90-95%).",
    precio: 3000,
    categoria: "Oxigenoterapia",
    imagen: imagenConcentrador,
  },
  {
    id: 19,
    nombreProducto: "Concentrador de oxígeno portatil",
    descripcion: "Dispositivo compacto que permite movilidad a pacientes mediante baterías recargables.",
    precio: 3000,
    categoria: "Oxigenoterapia",
    imagen: imagenConcentradorPortatil,
  },
  {
    id: 20,
    nombreProducto: "Tubo de oxígeno",
    descripcion: "Recipiente de alta presión esencial para situaciones sin luz ya que no requiere conexión eléctrica.",
    precio: 3000,
    categoria: "Oxigenoterapia",
    imagen: imagenTuboOxigeno,
  },
  {
    id: 21,
    nombreProducto: "Cpap",
    descripcion: "Tratamiento efectivo para la apnea obstructiva del sueño mediante presión de aire suave.",
    precio: 3000,
    categoria: "Oxigenoterapia",
    imagen: imagenCpap,
  },
  {
    id: 22,
    nombreProducto: "Bpap",
    descripcion: "Ventilación no invasiva que suministra aire con dos niveles de presión distintos.",
    precio: 3000,
    categoria: "Oxigenoterapia",
    imagen: imagenBpap,
  },
  {
    id: 23,
    nombreProducto: "Vaso humidificador",
    descripcion: "Agrega humedad al flujo de oxígeno para prevenir la sequedad de las vías respiratorias.",
    precio: 3000,
    categoria: "Oxigenoterapia",
    imagen: imagenVasoHumidificador,
  },
  {
    id: 24,
    nombreProducto: "Canula nasal",
    descripcion: "Tubo flexible para suministrar oxígeno de forma cómoda y no invasiva.",
    precio: 3000,
    categoria: "Oxigenoterapia",
    imagen: imagenCanulaNasal,
  },
  {
    id: 25,
    nombreProducto: "Sistema Vac",
    descripcion: "Usa presión negativa para acelerar la curación de heridas crónicas o complejas.",
    precio: 3000,
    categoria: "Curaciones",
    imagen: imagenVac,
  },
  {
    id: 26,
    nombreProducto: "Reservorio",
    descripcion: "Recipientes de recolección de exudado para la Terapia de Cierre Asistido por Vacío (VAC).",
    precio: 3000,
    categoria: "Curaciones",
    imagen: imagenReservorio,
  },
  {
    id: 27,
    nombreProducto: "Esponja",
    descripcion: "Conjunto estéril diseñado para aplicarse en heridas complejas y promover la cicatrización.",
    precio: 3000,
    categoria: "Curaciones",
    imagen: imagenEsponja,
  },
  {
    id: 7,
    nombreProducto: "Plenitud Protect Extra Grande",
    descripcion: " Diseñada para la incontinencia de moderada a intensa, ofreciendo la máxima absorción y un ajuste cómodo similar a la ropa interior real.",
    precio: 3000,
    categoria: "Panales",
    imagen: imagenPanalPlenitud,
  },
];

export default products;