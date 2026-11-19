// Conexión única a PostgreSQL.
// Los datos NUNCA van escritos aquí: se leen de DATABASE_URL (.env local o
// variables de entorno de Vercel/Neon).
require('dotenv').config();
const { Pool } = require('pg');

// La integración de Neon en Vercel puede guardar la cadena con distintos
// nombres según cómo se cree. Aceptamos los más habituales.
const connectionString =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.NEON_DATABASE_URL;

if (!connectionString) {
  console.warn(
    'Falta DATABASE_URL (o POSTGRES_URL / NEON_DATABASE_URL). Define la cadena de conexión de PostgreSQL.'
  );
}

// Neon y Supabase exigen SSL. En un PostgreSQL local se puede poner DB_SSL=false.
const usarSSL = process.env.DB_SSL !== 'false';

// Un pool reutiliza conexiones entre peticiones. En Vercel conviene usar la
// cadena "pooler" de Neon (termina en -pooler) para no agotar el límite.
const pool = new Pool({
  connectionString,
  ssl: usarSSL ? { rejectUnauthorized: false } : false,
  max: 5,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

pool.on('error', (err) => {
  console.error('Error inesperado en PostgreSQL:', err.message);
});

module.exports = pool;
