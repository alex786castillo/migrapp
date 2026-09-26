// Contenido de la guía "Regularízate".
// Cada trámite tiene la misma forma para que la tarjeta se dibuje igual siempre.
// Verificado con fuentes oficiales y prensa el 25-sep-2026. Actualizar "verificado".

export const VERIFICADO = "25 de septiembre de 2026";

export const tramites = [
  {
    id: "visa-v",
    nombre: "Visa V – Visitante Especial",
    resumen:
      "La opción principal hoy para adultos venezolanos que ya están en Colombia sin papeles.",
    paraQuien: [
      "Venezolanos mayores de edad que entraron a Colombia antes del 4 de diciembre de 2024.",
      "Que no hayan tenido PPT ni otro permiso anterior.",
      "Sin antecedentes penales ni orden de deportación.",
    ],
    requisitos: [
      "Certificado de verificación y compromiso que expide Migración Colombia (primer paso).",
      "Carta firmada explicando qué haces o piensas hacer en Colombia, con soportes.",
      "Pasaporte venezolano si lo tienes. Si no, se explica en la carta: no es obligatorio.",
    ],
    donde: "En línea, en el sitio de la Cancillería (cancilleria.gov.co), oficina Bogotá – Visas.",
    costo: "Aprox. 148.000 COP (estudio + expedición) más la cédula de extranjería (~267.000 COP).",
    vigencia: "2 años. Permite trabajar formalmente y afiliarse a salud y pensión.",
    plazo: "Se puede solicitar hasta el 14 de marzo de 2027.",
    enlace: "https://www.cancilleria.gov.co/tramites_servicios/visa",
    estado: "abierto",
  },
  {
    id: "pep-tutor",
    nombre: "PEP-Tutor",
    resumen:
      "Para el papá, la mamá o el cuidador de un niño o niña venezolano que ya tiene PPT.",
    paraQuien: [
      "Padres, madres, representantes legales o custodios de un menor venezolano.",
      "El menor debe tener un PPT expedido antes del 31 de diciembre de 2023.",
    ],
    requisitos: [
      "Formulario Único de Trámites (FUT) en línea.",
      "Cita presencial en Migración Colombia para validar documentos y tomar huellas.",
      "Documento de identidad venezolano y prueba del parentesco (registro civil, idealmente apostillado).",
    ],
    donde: "Migración Colombia, con cita previa.",
    costo: "Gratis en esta fase.",
    vigencia: "Permite trabajar de forma formal o independiente y acceder a salud y educación.",
    plazo: "Hasta el 31 de diciembre de 2026.",
    enlace: "https://www.migracioncolombia.gov.co",
    estado: "abierto",
  },
  {
    id: "ppt",
    nombre: "PPT – Permiso por Protección Temporal",
    resumen:
      "Ya no se puede pedir siendo adulto. Sigue abierto solo para niños, niñas y adolescentes.",
    paraQuien: [
      "Menores venezolanos matriculados en un colegio o en programas del ICBF.",
      "Adultos: si ya lo tienes, sigue vigente. Si no, esta ruta está cerrada desde 2023.",
    ],
    requisitos: [
      "Certificado de matrícula o vinculación al ICBF.",
      "Formulario Único de Trámites (FUT) y cita en Migración Colombia.",
    ],
    donde: "Migración Colombia.",
    costo: "Gratis la primera vez. Duplicado: 20.000 COP.",
    vigencia: "Hasta el año 2031 para quien ya lo tiene. Con 5 años de PPT y pasaporte vigente puedes pedir visa de residente.",
    plazo: "Sin fecha límite para menores.",
    enlace: "https://www.migracioncolombia.gov.co",
    estado: "menores",
  },
  {
    id: "pip-ptp",
    nombre: "Entrar hoy: PIP y prórroga PTP",
    resumen:
      "Lo que recibes al entrar por un puesto de control. Sirve para estar, no para trabajar.",
    paraQuien: ["Cualquier venezolano que entra hoy a Colombia por un paso oficial."],
    requisitos: [
      "Pasaporte venezolano, vigente o vencido hasta 10 años después de su vencimiento.",
      "Por vía terrestre suele aceptarse la cédula venezolana; confirma antes de viajar.",
      "Formulario Check-Mig, pasaje de salida y muestra de recursos.",
    ],
    donde: "Se sella al entrar. La prórroga (PTP) se pide en línea antes de que venza el PIP.",
    costo: "PIP gratis. PTP: 150.000 COP (2026).",
    vigencia: "90 días, ampliables a máximo 180 días por año calendario.",
    plazo: "Pedir la prórroga al menos 5 días hábiles antes de que venza el PIP.",
    enlace: "https://www.migracioncolombia.gov.co",
    estado: "abierto",
    alerta: "Con PIP o PTP no puedes trabajar. Para trabajar necesitas visa, PEP-Tutor o PPT.",
  },
  {
    id: "visas",
    nombre: "Visas ordinarias (M y R)",
    resumen: "Si tienes contrato, estudias, tienes pareja colombiana o llevas años con PPT.",
    paraQuien: [
      "Visa M: trabajo con contrato, estudiante, cónyuge o padre de colombiano, entre otras.",
      "Visa R: residente. Por ejemplo, 5 años continuos con PPT y pasaporte vigente.",
    ],
    requisitos: ["Pasaporte vigente.", "Soportes según el tipo de visa."],
    donde: "En línea, en el sitio de la Cancillería.",
    costo: "Varía por tipo de visa.",
    vigencia: "Según la visa (de 1 a 3 años la M; 5 años la R).",
    plazo: "Sin fecha límite.",
    enlace: "https://www.cancilleria.gov.co/tramites_servicios/visa",
    estado: "abierto",
  },
];

// Preguntas del asistente "¿Cuál me sirve?"
export const preguntas = [
  {
    id: "menorConPPT",
    texto: "¿Eres papá, mamá o cuidador de un niño o niña venezolana que tiene PPT?",
    si: "pep-tutor",
  },
  {
    id: "antesDic2024",
    texto: "¿Estás en Colombia desde antes del 4 de diciembre de 2024 y nunca tuviste PPT?",
    si: "visa-v",
  },
  {
    id: "contrato",
    texto: "¿Tienes contrato de trabajo, estudias, o tienes pareja o hijo colombiano?",
    si: "visas",
  },
];
