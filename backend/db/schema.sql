-- Esquema de MigrApp para PostgreSQL (Neon, Supabase o local).
-- Ejecutar una sola vez en el SQL Editor de Neon/Supabase.
-- La contraseña se guarda SIEMPRE como hash bcrypt, nunca en texto plano.

CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  correo VARCHAR(150) NOT NULL,
  contrasena_hash VARCHAR(255) NOT NULL,
  creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- El correo no distingue mayúsculas: "Ana@..." y "ana@..." son la misma cuenta.
CREATE UNIQUE INDEX IF NOT EXISTS usuarios_correo_unico
  ON usuarios (LOWER(correo));
