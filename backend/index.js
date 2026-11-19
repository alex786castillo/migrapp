require('dotenv').config();

const express = require('express');
const cors = require('cors');
const usuarios = require('./routes/usuarios');
const ia = require('./routes/ia');

const app = express();

// En Vercel la petición llega a través del proxy de la plataforma; sin esto,
// el rate limit vería siempre la misma IP.
app.set('trust proxy', 1);

// En producción se define el dominio del frontend, por ejemplo:
// CORS_ORIGIN=https://migrapp.vercel.app
const origenes = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',')
      .map((origen) => origen.trim())
      .filter(Boolean)
  : '*';

app.use(cors({ origin: origenes }));
app.use(express.json({ limit: '100kb' }));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, servicio: 'migrapp-api' });
});

app.use('/api/usuarios', usuarios);
app.use('/api/ia', ia);

app.use((req, res) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada.' });
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  // express.json() lanza este error cuando el cuerpo no es JSON válido.
  if (error.type === 'entity.parse.failed') {
    return res
      .status(400)
      .json({ mensaje: 'El cuerpo de la petición no es JSON válido.' });
  }

  console.error('Error no controlado:', error.message);
  res.status(500).json({ mensaje: 'Error interno del servidor.' });
});

const puerto = process.env.PORT || 4001;

// En local se levanta el servidor; en Vercel se exporta la app y la plataforma
// se encarga de las peticiones.
if (require.main === module) {
  app.listen(puerto, () => {
    console.log(`Server on port ${puerto}`);
  });
}

module.exports = app;
