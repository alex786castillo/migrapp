# MigrApp

Guía práctica para migrantes venezolanos en Colombia: trámites de regularización, documentos, empleo y a dónde acudir. La app orienta, no tramita: no recibe ni guarda documentos.

## Estructura

- `frontend/` – React 18 + React Router 6 + react-bootstrap. Toda la información es pública; la cuenta es opcional.
- `backend/` – Express + PostgreSQL (registro, inicio de sesión y asistente con IA).
- El asistente usa Google Gemini. La clave vive **solo en el backend**, nunca en el navegador.

## Requisitos

- Node.js 18 o superior
- Git
- PostgreSQL 14 o superior (local, Neon o Supabase)
- Una API key gratuita de [Google AI Studio](https://aistudio.google.com/apikey) (solo para el chat)

## Puesta en marcha

```bash
git clone https://github.com/alex786castillo/migrapp.git
cd migrapp
```

### Base de datos

1. Crea una base de datos PostgreSQL gratis en [Neon](https://neon.tech) (recomendado) o Supabase.
2. Abre el **SQL Editor** del proveedor y ejecuta el contenido de `backend/db/schema.sql`.
3. Copia `backend/.env.example` a `backend/.env` y completa `DATABASE_URL`.
   - En Neon usa la cadena que termina en `-pooler` (pensada para serverless).
   - Para un PostgreSQL local sin SSL, pon `DB_SSL=false`.

### Backend

```bash
cd backend
npm install
npm run dev        # http://localhost:4001
```

Comprueba que responde: `http://localhost:4001/api/health`.

### Frontend (funciona solo, sin base de datos)

```bash
cd frontend
npm install
npm start          # abre http://localhost:3000
```

Para apuntar a otro backend, crea `frontend/.env` con:

```bash
REACT_APP_API_URL=http://localhost:4001/api
```

## El asistente

- Endpoint: `POST /api/ia/chat` con `{ mensaje, historial }`.
- La información que usa está en `backend/data/contexto.js`, resumida de `frontend/src/data/tramites.js` y las demás secciones. **Si cambia la guía, actualiza ese archivo.**
- Sin `GEMINI_API_KEY`, el endpoint responde 503 y la app sigue funcionando; el chat muestra el aviso.
- Tiene límite de 30 preguntas cada 10 minutos por IP y un máximo de 1000 caracteres por pregunta.
- Las preguntas se envían a Google para generar la respuesta. La interfaz avisa que no se escriban datos personales.

## Despliegue gratis en Vercel

Se usan **dos proyectos de Vercel** sobre el mismo repositorio: uno para el frontend y otro para el backend. La base de datos va en **Neon**.

### 1. Base de datos (Neon)

1. Entra en [neon.tech](https://neon.tech), crea un proyecto y copia la cadena de conexión **pooler**.
2. Ejecuta `backend/db/schema.sql` en el **SQL Editor** de Neon.

También puedes crearla desde Vercel: **Storage → Create Database → Neon**.

### 2. Backend en Vercel

1. **Add New → Project** e importa este repositorio.
2. **Root Directory:** `backend`.
3. Variables de entorno:
   - `DATABASE_URL` = cadena de Neon (con `?sslmode=require`).
   - `DB_SSL` = `true`.
   - `CORS_ORIGIN` = `http://localhost:3000,https://TU-FRONTEND.vercel.app`.
   - `GEMINI_API_KEY` = tu clave de Google AI Studio.
   - `GEMINI_MODEL` = `gemini-2.5-flash` (opcional).
4. **Deploy**. Anota la URL, por ejemplo `https://migrapp-api.vercel.app`.
5. Prueba `https://migrapp-api.vercel.app/api/health`.

### 3. Frontend en Vercel

1. **Add New → Project** e importa el mismo repositorio.
2. **Root Directory:** `frontend`.
3. Variable de entorno:
   - `REACT_APP_API_URL` = `https://migrapp-api.vercel.app/api`.
4. **Deploy**. La URL pública será algo como `https://migrapp.vercel.app`.

`frontend/vercel.json` incluye la regla de React Router para que recargar `/documentos` o `/asistente` no dé 404.

> Cada vez que cambies `REACT_APP_API_URL` hay que volver a desplegar el frontend: Create React App incrusta las variables en el build.

## Seguridad

- Las contraseñas se guardan con **bcrypt**, nunca en texto plano.
- El correo se normaliza a minúsculas y tiene índice único.
- El login devuelve un mensaje genérico para no revelar si un correo existe.
- No hay endpoint público que liste usuarios.
- `CORS_ORIGIN` limita qué dominios pueden llamar a la API.
- La sesión del frontend guarda solo datos públicos en `localStorage`; no es un token de autenticación. Para una app real habría que añadir JWT o cookies de sesión.

## Flujo de trabajo con Git

```bash
git pull                     # traer cambios antes de empezar
git add .
git commit -m "qué cambió"
git push                     # subir al terminar
```

## Contenido

Los trámites vigentes están en `frontend/src/data/tramites.js` con la fecha de verificación. Revisar y actualizar cuando cambie la normativa (Migración Colombia, Cancillería).

La guía para la presentación del proyecto está en [`GUIA-PRESENTACION.md`](GUIA-PRESENTACION.md).
