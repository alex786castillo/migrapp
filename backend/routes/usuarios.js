const { Router } = require('express');
const bcrypt = require('bcryptjs');
const pool = require('../env/env');

const router = Router();

const CORREO_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/usuarios/registro
//   cuerpo { nombre, apellido, correo, contrasena }
//   éxito  201 { mensaje }
//   fallo  400/409/500 { mensaje }
router.post('/registro', async (req, res) => {
  const { nombre, apellido, correo, contrasena } = req.body || {};

  if (!nombre?.trim() || !apellido?.trim() || !correo?.trim() || !contrasena) {
    return res.status(400).json({ mensaje: 'Completa todos los campos.' });
  }

  if (!CORREO_VALIDO.test(correo.trim())) {
    return res
      .status(400)
      .json({ mensaje: 'El correo no tiene un formato válido.' });
  }

  if (contrasena.length < 8 || contrasena.length > 72) {
    return res
      .status(400)
      .json({ mensaje: 'La contraseña debe tener entre 8 y 72 caracteres.' });
  }

  try {
    const hash = await bcrypt.hash(contrasena, 10);

    await pool.query(
      `INSERT INTO usuarios (nombre, apellido, correo, contrasena_hash)
       VALUES ($1, $2, $3, $4)`,
      [
        nombre.trim(),
        apellido.trim(),
        correo.trim().toLowerCase(),
        hash,
      ]
    );

    return res.status(201).json({ mensaje: 'Cuenta creada correctamente.' });
  } catch (error) {
    // 23505 = violación de índice único (correo repetido).
    if (error.code === '23505') {
      return res
        .status(409)
        .json({ mensaje: 'Ese correo ya está registrado.' });
    }

    console.error('Error al registrar usuario:', error.message);
    return res
      .status(500)
      .json({ mensaje: 'No pudimos crear la cuenta. Intenta de nuevo.' });
  }
});

// POST /api/usuarios/autenticacion
//   cuerpo { correo, contrasena }
//   éxito  200 { mensaje, usuario }
//   fallo  400/401/500 { mensaje }
router.post('/autenticacion', async (req, res) => {
  const { correo, contrasena } = req.body || {};

  if (!correo?.trim() || !contrasena) {
    return res
      .status(400)
      .json({ mensaje: 'Completa el correo y la contraseña.' });
  }

  try {
    const { rows } = await pool.query(
      `SELECT id, nombre, apellido, correo, contrasena_hash
       FROM usuarios
       WHERE LOWER(correo) = LOWER($1)
       LIMIT 1`,
      [correo.trim()]
    );

    const usuario = rows[0];
    const credencialesValidas =
      usuario && (await bcrypt.compare(contrasena, usuario.contrasena_hash));

    if (!credencialesValidas) {
      // Mensaje genérico: no revelamos si el correo existe o no.
      return res
        .status(401)
        .json({ mensaje: 'Correo o contraseña incorrectos.' });
    }

    return res.json({
      mensaje: 'Usuario autenticado correctamente',
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo: usuario.correo,
      },
    });
  } catch (error) {
    console.error('Error al autenticar:', error.message);
    return res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
});

module.exports = router;
