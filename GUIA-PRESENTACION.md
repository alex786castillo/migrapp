# Guía para presentar MigrApp

## 1. Checklist de los requisitos

| Requisito | Cómo se cumple |
|---|---|
| **Aplicación publicada en una URL de internet** | Frontend en Vercel (`https://migrapp.vercel.app`) + backend en Vercel (`https://migrapp-api-co.vercel.app`) + PostgreSQL en Neon. Nada corre en tu computador durante la presentación. |
| **Responsive (computador y celular)** | Bootstrap 5 + una hoja de estilos propia con medidas flexibles (`clamp`), menú colapsable y tabla de documentos que se convierte en tarjetas en móvil. El chat también se apila en pantallas pequeñas. |
| **Repositorio en GitHub con mínimo 10 commits** | El repositorio ya supera los 20 commits. Verifícalo con `git log --oneline` o en la pestaña **Commits** de GitHub. |
| **Explicar el código** | Esta guía incluye un guion con los tres puntos que suelen preguntar: componente reutilizado, cómo llegan los datos y la ruta de Express del formulario. |

## 2. Arquitectura (para dibujar en el tablero)

```
Navegador
   │
   ├── React (Vercel) ── frontend/
   │        │
   │        └── axios ──> Express (Vercel) ── backend/
   │                          │
   │                          ├── PostgreSQL (Neon)  → usuarios
   │                          └── Google Gemini       → respuestas del chat
   │
   └── El navegador nunca ve la clave de Gemini ni la de la base de datos.
```

- **Frontend:** React 18, React Router 6 y react-bootstrap.
- **Backend:** Express con tres rutas principales:
  - `POST /api/usuarios/registro`
  - `POST /api/usuarios/autenticacion`
  - `POST /api/ia/chat`
- **Base de datos:** PostgreSQL con una tabla `usuarios` (contraseña guardada con bcrypt).
- **IA:** Google Gemini, con un contexto propio de MigrApp (no navega en internet).

## 3. Guion de demostración (5–7 minutos)

1. **Abrir la URL pública** (no localhost). Mostrar que carga en el celular o con la ventana achicada.
2. **Inicio:** explicar que la app es pública y que la cuenta es opcional.
3. **Regularízate:** mostrar las tarjetas de trámites y abrir una.
4. **Documentos:** mostrar la tabla y cómo se apila en móvil.
5. **Empleo / Dónde ir:** mostrar los filtros de ciudad y categoría.
6. **Asistente:** hacer 2–3 preguntas:
   - «¿Puedo trabajar con PIP?» → debe decir que no.
   - «¿Hasta cuándo puedo pedir la Visa V?» → 14 de marzo de 2027.
   - «Soy papá de un niño con PPT» → PEP-Tutor.
7. **Registro y login:** crear una cuenta, iniciar sesión y mostrar «Mi cuenta».
8. **Cerrar** recordando que la app orienta y no tramita ni guarda documentos.

> Antes de presentar, abre `https://migrapp-api-co.vercel.app/api/health` para despertar la función de Vercel si estuvo inactiva.

## 4. Explicar el código: tres respuestas listas

### A. Un componente reutilizado

**`frontend/src/components/Pagina.jsx`**

```jsx
export default function Pagina({ titulo, descripcion, children }) {
  return (
    <>
      <header className="pagina__cabecera">
        <h1 className="pagina__titulo">{titulo}</h1>
        {descripcion && <p className="pagina__descripcion">{descripcion}</p>}
      </header>
      {children}
    </>
  );
}
```

- Antes, la cabecera (`<h1>` + descripción) estaba copiada en 7 páginas.
- Ahora todas usan `<Pagina titulo="..." descripcion="...">`.
- Ventaja: un solo lugar define el estilo y la estructura; si se cambia la cabecera, cambia en toda la app.
- También se pueden mencionar `Campo.jsx` (etiqueta + input juntos para no romper accesibilidad) y `TarjetaTramite.jsx` (una tarjeta para cada trámite).

### B. Cómo llegan los datos

**`frontend/src/data/tramites.js` → `Regularizate.jsx` → `TarjetaTramite.jsx`**

1. `tramites.js` exporta un arreglo de objetos (`nombre`, `resumen`, `requisitos`, `enlace`, etc.) y `VERIFICADO` con la fecha.
2. `Regularizate.jsx` lo importa y lo recorre con `.map()`.
3. Cada objeto se pasa como prop a `TarjetaTramite`, que dibuja la tarjeta.

```jsx
{tramites.map((tramite) => (
  <TarjetaTramite key={tramite.id} tramite={tramite} />
))}
```

- Los datos son estáticos y viven en el frontend: la información pública no depende de la base de datos.
- La fecha de verificación se muestra para dar transparencia.

### C. La ruta de Express que recibe el formulario

**`backend/routes/usuarios.js` — `POST /api/usuarios/registro`**

1. Recibe `{ nombre, apellido, correo, contrasena }` con `express.json()`.
2. Valida que no falten campos, que el correo tenga formato y que la contraseña tenga entre 8 y 72 caracteres.
3. Convierte la contraseña en hash con **bcrypt** (`bcrypt.hash(contrasena, 10)`).
4. Ejecuta un `INSERT` parametrizado (`$1..$4`), lo que evita inyección SQL.
5. Si el correo ya existe, PostgreSQL devuelve el código `23505` y se responde 409.
6. Responde 201 con un mensaje; el frontend redirige al login.

La ruta de login (`/autenticacion`) busca por correo, compara con `bcrypt.compare` y devuelve los datos públicos del usuario (nunca el hash).

### D. El chat con IA

1. El usuario escribe en `Asistente.jsx`; se envía `POST /api/ia/chat` con la pregunta y los últimos turnos.
2. `backend/routes/ia.js` valida, aplica un límite de peticiones y construye un *prompt* con el contexto de `backend/data/contexto.js`.
3. Llama a Gemini con la clave guardada en una variable de entorno del servidor.
4. Devuelve `{ respuesta }` y el frontend la añade a la conversación.
5. La clave nunca se envía al navegador.

## 5. Preguntas que pueden hacerte

- **¿Por qué PostgreSQL y no MySQL?** Porque Neon ofrece PostgreSQL gratis y se integra con Vercel; el proyecto migró de MySQL a PostgreSQL en la fase de despliegue.
- **¿Dónde están las contraseñas?** En la tabla `usuarios`, en la columna `contrasena_hash`, como hash bcrypt. No se puede recuperar la contraseña original.
- **¿La IA inventa respuestas?** Se le pasó un contexto cerrado y se le instruyó a no inventar; si no sabe algo, debe remitir a la fuente oficial. Aun así, la app avisa que puede equivocarse.
- **¿Qué pasa si se cae la IA?** El chat muestra un error y el resto de la app sigue funcionando.
- **¿Cómo se actualiza la información de trámites?** Se edita `frontend/src/data/tramites.js`; para el asistente se actualiza también `backend/data/contexto.js`.
- **¿Cómo se protege la API?** CORS limitado al dominio del frontend, validación de datos, consultas parametrizadas, bcrypt y límite de peticiones en el chat.
- **¿Qué mejorarían?** Autenticación con JWT o cookies, pruebas automatizadas, panel de administración para editar trámites y un sistema de reseñas o favoritos.

## 6. Antes de presentar

- [ ] URL del frontend abre sin localhost.
- [ ] `/api/health` del backend responde `{ "ok": true }`.
- [ ] Registro y login funcionan.
- [ ] El asistente responde (la clave de Gemini está configurada).
- [ ] La app se ve bien en el celular o con la ventana angosta.
- [ ] El repositorio tiene más de 10 commits.
- [ ] Tienes abiertos los archivos que vas a explicar: `Pagina.jsx`, `tramites.js`, `Regularizate.jsx`, `usuarios.js` e `ia.js`.
