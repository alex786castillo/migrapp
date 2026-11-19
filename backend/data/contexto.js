// Contexto que recibe el asistente de IA.
// Fuente: frontend/src/data/tramites.js, Preguntas.jsx, Documentos.jsx,
// Empleo.jsx, DondeIr.jsx y Ayuda.jsx.
// Si cambia la guía de la app, actualizar también este texto.

const contexto = `
MigrApp es una guía práctica para migrantes venezolanos en Colombia. No
realiza trámites, no recibe documentos y no guarda información personal.
Orienta y enlaza a las fuentes oficiales.

Fecha de verificación de la guía: 25 de septiembre de 2026.

=== TRÁMITES DE REGULARIZACIÓN ===

1) Visa V – Visitante Especial
- Para: venezolanos mayores de edad que entraron a Colombia antes del 4 de
  diciembre de 2024 y nunca tuvieron PPT, sin antecedentes penales ni orden de
  deportación.
- Requisitos: certificado de verificación y compromiso que expide Migración
  Colombia (primer paso); carta firmada explicando qué hace o piensa hacer en
  Colombia, con soportes; pasaporte venezolano si lo tiene (si no, se explica
  en la carta: no es obligatorio).
- Dónde: en línea en la Cancillería (cancilleria.gov.co), oficina Bogotá – Visas.
- Costo aproximado: 148.000 COP (estudio + expedición) más la cédula de
  extranjería (~267.000 COP).
- Vigencia: 2 años. Permite trabajar formalmente y afiliarse a salud y pensión.
- Plazo: hasta el 14 de marzo de 2027.
- Enlace: https://www.cancilleria.gov.co/tramites_servicios/visa

2) PEP-Tutor
- Para: papá, mamá, representante legal o cuidador de un niño o niña
  venezolano que tenga PPT expedido antes del 31 de diciembre de 2023.
- Requisitos: Formulario Único de Trámites (FUT) en línea; cita presencial en
  Migración Colombia para validar documentos y tomar huellas; documento de
  identidad venezolano y prueba del parentesco (registro civil, idealmente
  apostillado).
- Dónde: Migración Colombia, con cita previa.
- Costo: gratis en esta fase.
- Vigencia: permite trabajar de forma formal o independiente y acceder a salud
  y educación.
- Plazo: hasta el 31 de diciembre de 2026.
- Enlace: https://www.migracioncolombia.gov.co

3) PPT – Permiso por Protección Temporal
- Ya no se puede pedir siendo adulto. Sigue abierto solo para niños, niñas y
  adolescentes matriculados en un colegio o en programas del ICBF.
- Adultos que ya lo tienen: sigue vigente hasta 2031. Con 5 años de PPT y
  pasaporte vigente se puede pedir visa de residente.
- Requisitos para menores: certificado de matrícula o vinculación al ICBF;
  Formulario Único de Trámites (FUT) y cita en Migración Colombia.
- Costo: gratis la primera vez. Duplicado: 20.000 COP.
- Enlace: https://www.migracioncolombia.gov.co

4) Entrar hoy: PIP y prórroga PTP
- Lo que se recibe al entrar por un puesto de control oficial. Sirve para
  estar en el país, NO para trabajar.
- Requisitos: pasaporte venezolano vigente o vencido hasta 10 años después de
  su vencimiento; por vía terrestre suele aceptarse la cédula venezolana;
  Formulario Check-Mig, pasaje de salida y muestra de recursos.
- Dónde: se sella al entrar. La prórroga (PTP) se pide en línea antes de que
  venza el PIP.
- Costo: PIP gratis. PTP: 150.000 COP (2026).
- Vigencia: 90 días, ampliables a máximo 180 días por año calendario.
- Plazo: pedir la prórroga al menos 5 días hábiles antes de que venza el PIP.
- Alerta: con PIP o PTP no se puede trabajar. Para trabajar se necesita visa,
  PEP-Tutor o PPT.

5) Visas ordinarias (M y R)
- Visa M: trabajo con contrato, estudiante, cónyuge o padre de colombiano,
  entre otras.
- Visa R: residente. Por ejemplo, 5 años continuos con PPT y pasaporte
  vigente.
- Requisitos: pasaporte vigente y soportes según el tipo de visa.
- Dónde: en línea en la Cancillería.
- Costo: varía por tipo de visa.
- Vigencia: de 1 a 3 años la M; 5 años la R.
- Enlace: https://www.cancilleria.gov.co/tramites_servicios/visa

=== DOCUMENTOS VENEZOLANOS EN COLOMBIA ===
- Pasaporte venezolano vencido: sirve hasta 10 años después de su vencimiento
  para ingreso, salida y trámites migratorios.
- Cédula de identidad venezolana: sirve vigente o vencida para identificación,
  PEP-Tutor y pasos terrestres.
- Partida de nacimiento / registro civil: sirve si está apostillada en
  Venezuela; prueba parentesco (PEP-Tutor) y visas de familia.
- Título de bachiller o universitario: sirve apostillado para estudiar o
  ejercer; los universitarios requieren convalidación en el Ministerio de
  Educación.
- Licencia de conducir venezolana: solo temporalmente como turista; con visa
  se debe homologar.
MigrApp no recibe ni guarda documentos.

=== TRABAJO ===
- Se puede trabajar formalmente con PPT vigente, PEP-Tutor (formal o
  independiente) y Visa V, visa M o R.
- NO se puede trabajar con PIP / PTP (sello de turista).
- Dónde buscar: Servicio Público de Empleo (serviciodeempleo.gov.co) y
  Computrabajo (computrabajo.com.co).
- Antes de una entrevista: hoja de vida corta (1 página), sin foto
  obligatoria, con teléfono colombiano; tener claro el número de permiso o
  visa; con contrato formal la empresa debe afiliar a salud (EPS) y pensión.

=== DÓNDE IR (directorio) ===
- Migración Colombia – Medellín: Calle 19 #80A-40, Belén.
- Cruz Roja – Medellín.
- Integrate Medellín: atención a migrantes.
- Famicove – Medellín: salud.
- Americares – Valledupar: salud.
La app tiene filtros por tipo de lugar y ciudad en la sección "Dónde ir".

=== PREGUNTAS FRECUENTES ===
- ¿Puedo trabajar con el sello de turista (PIP)? No. Para trabajar
  formalmente se necesita PPT, PEP-Tutor o una visa.
- Soy adulto y no tengo PPT, ¿qué puedo hacer? Si entró antes del 4 de
  diciembre de 2024, la Visa V Visitante Especial es la opción principal
  (hasta el 14 de marzo de 2027). Si es cuidador de un menor con PPT, el
  PEP-Tutor.
- ¿Mi pasaporte vencido sirve? Sí. Colombia acepta el pasaporte venezolano
  hasta 10 años después de vencido.
- ¿Mis hijos pueden estudiar sin papeles? Sí. El colegio no puede negar la
  matrícula por falta de documentos, y estar matriculado permite pedir el PPT
  del menor.
- ¿MigrApp hace trámites por mí? No. Orienta y lleva a la página oficial.
  Nunca pide ni guarda documentos.

=== AYUDA URGENTE ===
- Emergencias (policía, ambulancia, bomberos): 123.
- Línea de atención a migrantes – Migración Colombia: (601) 605 5454.
- Defensoría del Pueblo: (601) 314 7300.
- Línea 155 – violencia contra la mujer: 155.
- ACNUR Colombia: help.unhcr.org/colombia.
En la app, la sección "Ayuda urgente" permite tocar los números para llamar.

=== SECCIONES DE LA APP ===
Inicio, Regularízate (trámites), Documentos, Empleo, Dónde ir, Preguntas
frecuentes, Ayuda urgente y Asistente.
`;

module.exports = contexto;
