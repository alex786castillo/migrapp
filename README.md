# MigrApp

Guía práctica para migrantes venezolanos en Colombia: trámites de regularización, documentos, empleo y a dónde acudir. La app orienta, no tramita: no recibe ni guarda documentos.

## Estructura

- `frontend/` – React 18 + React Router 6 + react-bootstrap. Toda la información es pública; la cuenta es opcional.
- `backend/` – Express + MySQL (solo para registro e inicio de sesión).

## Requisitos

- Node.js 18 o superior
- Git
- MySQL 8 (solo si vas a usar registro/inicio de sesión)

## Puesta en marcha

```bash
git clone https://github.com/alex786castillo/migrapp.git
cd migrapp
```

### Frontend (funciona solo, sin base de datos)

```bash
cd frontend
npm install
npm start          # abre http://localhost:3000
```

### Backend (opcional)

1. Crear la base de datos ejecutando `backend/db/schema.sql` en MySQL Workbench.
2. Crear el archivo `backend/.env` a partir de `backend/.env.example` con tu contraseña de MySQL.
3. Arrancar:

```bash
cd backend
npm install
npm start          # Server on port 4001 / Base de datos conectada!
```

## Flujo de trabajo con Git

```bash
git pull                     # traer cambios antes de empezar
git add .
git commit -m "qué cambió"
git push                     # subir al terminar
```

## Contenido

Los trámites vigentes están en `frontend/src/data/tramites.js` con la fecha de verificación. Revisar y actualizar cuando cambie la normativa (Migración Colombia, Cancillería).
