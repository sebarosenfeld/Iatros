import imagenPanalNino from "../assets/imgPanales/imagen-panal-niño.webp";
import imagenPanalJuvenilChico from "../assets/imgPanales/imagen-panal-juvenil-chico.webp";
import imagenPanalJuvenilMediano from "../assets/imgPanales/imagen-panal-juvenil-mediano.webp";
import imagenPanalAdultoGrande from "../assets/imgPanales/imagen-panal-adulto-grande.webp";
import imagenPanalAdultoExtraGrande from "../assets/imgPanales/imagen-panal-adulto-extra-grande.webp";
import imagenPanalApositosIncontinencia from "../assets/imgPanales/apositosIncontinencia.jfif";
import imagenPanalRefuerzaPanal from "../assets/imgPanales/refuerzaPanal.jfif";
import imagenApositos from "../assets/imgDescartables/apositos.jfif";
import imagenGasas from "../assets/imgDescartables/gasas.jfif";
import imagenGuantesEsteriles from "../assets/imgDescartables/guantesEsteriles.jfif";
import imagenGuantesLatex from "../assets/imgDescartables/guantesLatex.jfif";
import imagenGuantesNitrilo from "../assets/imgDescartables/guantesNitrilo.jfif";
import imagenJeringas from "../assets/imgDescartables/jeringas.jfif";
import imagenTelaHipoalergenica from "../assets/imgDescartables/telaHipoalergenica.jfif";
// import imagenSondasFoley from "../assets/imgDescartables/sondasFoley.jfif";
import imagenConcentrador from "../assets/imgOxigenoterapia/concentrador.jfif";
import imagenConcentradorPortatil from "../assets/imgOxigenoterapia/concentradorPortatil.jfif";
import imagenTuboOxigeno from "../assets/imgOxigenoterapia/tanqueOxigeno.jfif";
import imagenVasoHumidificador from "../assets/imgOxigenoterapia/vasoHumidificador.jfif";
import imagenCanulaNasal from "../assets/imgOxigenoterapia/canulaNasal.jfif";
import imagenCpap from "../assets/imgOxigenoterapia/Cpap.jfif";
import imagenBpap from "../assets/imgOxigenoterapia/Bpap.jfif";
import imagenVac from "../assets/imgCuraciones/Vac.jfif";
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
    nombreProducto: "Adulto",
    descripcion: "Tamaño de 20 a 50kg.",
    precio: 2500,
    categoria: "Panales",
    imagen: imagenPanalAdultoGrande,
  },
  {
    id: 5,
    nombreProducto: "Adulto XG",
    descripcion: "Tamaño de 50 a 100kg.",
    precio: 3000,
    categoria: "Panales",
    imagen: imagenPanalAdultoExtraGrande,
  },
  {
    id: 6,
    nombreProducto: "Apositos para incontinencia",
    descripcion:
      "Compresas absorbentes con gel superabsorbente, cubierta hipoalergénica para la piel y capa exterior impermeable que se adhieren a la ropa interior para retener la orina, mantener la sequedad, prevenir irritaciones y proteger la ropa.",
    precio: 3000,
    categoria: "Panales",
    imagen: imagenPanalApositosIncontinencia,
  },
  {
    id: 7,
    nombreProducto: "Refuerza pañal",
    descripcion:
      "Apósito absorbente extra que se coloca dentro de un pañal para aumentar su capacidad de absorción, especialmente en casos de incontinencia, manteniendo la piel seca gracias a su gel súper absorbente y cubierta hipoalergénica, previniendo así irritaciones.",
    precio: 3000,
    categoria: "Panales",
    imagen: imagenPanalRefuerzaPanal,
  },
  {
    id: 8,
    nombreProducto: "Apositos",
    descripcion:
      "Material estéril utilizado para cubrir una herida, protegiéndola de infecciones y promoviendo la cicatrización.",
    precio: 3000,
    categoria: "Descartables",
    imagen: imagenApositos,
  },
  {
    id: 9,
    nombreProducto: "Gasas",
    descripcion:
      "Pequeñas mallas de tejidos estériles diseñadas para limpiar, cubrir y proteger las heridas.",
    precio: 3000,
    categoria: "Descartables",
    imagen: imagenGasas,
  },
  {
    id: 10,
    nombreProducto: "Guantes esteriles",
    descripcion:
      "Ayudan a evitar la transmisión de gérmenes patógenos por contacto directo e indirecto.",
    precio: 3000,
    categoria: "Descartables",
    imagen: imagenGuantesEsteriles,
  },
  {
    id: 11,
    nombreProducto: "Guantes de latex",
    descripcion:
      "Permite obtener comodidad del soporte textil y una buena resistencia al desgarro.",
    precio: 3000,
    categoria: "Descartables",
    imagen: imagenGuantesLatex,
  },
  {
    id: 12,
    nombreProducto: "Guantes de nitrilo",
    descripcion:
      "Son equipo de protección personal hechos de caucho sintético, ideales para personas alérgicas al látex, que ofrecen alta resistencia a químicos, aceites y perforaciones, proporcionando sensibilidad táctil.",
    precio: 3000,
    categoria: "Descartables",
    imagen: imagenGuantesNitrilo,
  },
  {
    id: 13,
    nombreProducto: "Jeringas",
    descripcion:
      "Instrumentos médicos estériles de un solo uso, fabricadas principalmente en plástico (polipropileno), usadas para administrar medicamentos, extraer fluidos o vacunar. Vienen en medidas de 5ML, 10ML, 20ML, 60ML y 60ML con pico Thomey.",
    precio: 3000,
    categoria: "Descartables",
    imagen: imagenJeringas,
  },
  {
    id: 14,
    nombreProducto: "Tela hipoalergénica",
    descripcion:
      "Tejido diseñado para minimizar reacciones alérgicas, fabricado con materiales naturales suaves (algodón orgánico, lino, bambú, seda) o sintéticos finos (microfibra) y sin químicos irritantes.",
    precio: 3000,
    categoria: "Descartables",
    imagen: imagenTelaHipoalergenica,
  },
  {
    id: 15,
    nombreProducto: "Concentrador de oxígeno",
    descripcion:
      "Dispositivo médico que filtra el aire ambiente, elimina el nitrógeno y entrega oxígeno enriquecido (90-95%) a través de un tubo a pacientes con insuficiencia respiratoria.",
    precio: 3000,
    categoria: "Oxigenoterapia",
    imagen: imagenConcentrador,
  },
  {
    id: 16,
    nombreProducto: "Concentrador de oxígeno portatil",
    descripcion:
      "Dispositivo médico compacto y ligero que aspira aire ambiental, filtra el nitrógeno y entrega oxígeno concentrado (90-95% puro) a través de cánulas o mascarillas, usando baterías recargables para dar independencia y movilidad a pacientes con problemas respiratorios, permitiéndoles llevar su terapia fuera de casa.",
    precio: 3000,
    categoria: "Oxigenoterapia",
    imagen: imagenConcentradorPortatil,
  },
  {
    id: 17,
    nombreProducto: "Tubo de oxígeno",
    descripcion:
      "Recipiente a alta presión que almacena oxígeno, generalmente de acero o aluminio, que se conecta a un regulador y una cánula nasal para liberar oxígeno de forma controlada. Esencial para situaciones sin luz ya que no requiere conexión electrica.",
    precio: 3000,
    categoria: "Oxigenoterapia",
    imagen: imagenTuboOxigeno,
  },
  {
    id: 18,
    nombreProducto: "Cpap",
    descripcion:
      "Máquina que usa una mascarilla sobre la nariz y una presión de aire suave para mantener las vías respiratorias abiertas mientras duermes, siendo el tratamiento más efectivo para la apnea obstructiva del sueño.",
    precio: 3000,
    categoria: "Oxigenoterapia",
    imagen: imagenCpap,
  },
  {
    id: 19,
    nombreProducto: "Bpap",
    descripcion:
      "Tipo de ventilación no invasiva que suministra aire con dos niveles de presión distintos a través de una mascarilla: una presión más alta para ayudar a inhalar (IPAP) y una presión más baja para facilitar la exhalación (EPAP), siendo útil para tratar la apnea del sueño y la insuficiencia respiratoria.",
    precio: 3000,
    categoria: "Oxigenoterapia",
    imagen: imagenBpap,
  },
  {
    id: 20,
    nombreProducto: "Vaso humidificador",
    descripcion:
      "Recipiente médico que se llena con agua destilada y se intercala en el sistema de suministro de oxígeno para agregar humedad al flujo de gas, prevenir la sequedad e irritación de las vías respiratorias del paciente.",
    precio: 3000,
    categoria: "Oxigenoterapia",
    imagen: imagenVasoHumidificador,
  },
  {
    id: 21,
    nombreProducto: "Canula nasal",
    descripcion:
      "Tubo flexible con dos puntas que se insertan en las fosas nasales para suministrar oxígeno suplementario (oxigenoterapia) de forma cómoda y no invasiva, permitiendo al paciente hablar y comer.",
    precio: 3000,
    categoria: "Oxigenoterapia",
    imagen: imagenCanulaNasal,
  },
  {
    id: 22,
    nombreProducto: "Sistema Vac",
    descripcion:
      "Usa presión negativa (succión) para acelerar la curación de heridas crónicas, postquirúrgicas o complejas, retirando fluidos, tejido muerto y estimulando el flujo sanguíneo para formar tejido de granulación.",
    categoria: "Curaciones",
    imagen: imagenVac,
  },
  {
    id: 23,
    nombreProducto: "Reservorio",
    descripcion:
      "Recipientes de recolección de exudado para la Terapia de Cierre Asistido por Vacío (VAC). Recogen líquidos de heridas crónicas o agudas bajo presión negativa para promover la cicatrización, eliminando el exceso de fluidos y estimulando el tejido de granulación.",
    categoria: "Curaciones",
    imagen: imagenReservorio,
  },
  {
    id: 24,
    nombreProducto: "Esponja",
    descripcion:
      "Conjunto estéril de un solo uso que contiene una esponja porosa (poliuretano o PVA), un tubo de drenaje, y láminas adhesivas (film), diseñado para aplicarse en heridas complejas, promover la cicatrización creando micro-estiramiento, eliminar exudado y reducir la infección.",
    categoria: "Curaciones",
    imagen: imagenEsponja,
  },
];

export default products;
