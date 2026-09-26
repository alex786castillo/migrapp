-- Crea la base de datos y la tabla de usuarios de MigrApp.
-- Ejecutar una sola vez en MySQL Workbench (o: mysql -u root -p < schema.sql)
CREATE DATABASE IF NOT EXISTS migrapp;
USE migrapp;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  correo VARCHAR(150) NOT NULL UNIQUE,
  contraseña VARCHAR(255) NOT NULL,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
