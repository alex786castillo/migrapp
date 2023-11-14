const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../env/env');

router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  });
});

router.post('/autenticacion', (req, res) => {
    try {
      const txtusu = req.body.correo;
      const txtpas = req.body.contraseña;
      console.log("Correo y Contraseña recibidos:", txtusu, txtpas);
  
      // Corrige el nombre de la tabla a 'usuarios'
      const sql = 'SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?';
  
      mysqlConnection.query(sql, [txtusu, txtpas], (err, results) => {
        console.log(txtusu, txtpas);
        if (err) {
          console.error(err);
          res.status(500).json({ mensaje: 'Error interno del servidor' });
          return;
        }
  
        if (results.length > 0) {
          res.json({ mensaje: 'Usuario autenticado correctamente' });
          console.log("result -->", results);
        } else {
          res.status(401).json({ mensaje: 'Correo o contraseña incorrectos' });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  });
  
router.post('/registro', (req, res) => {
  console.log(req.body);
  const nombre = req.body[0];
  const apellido = req.body[1];
  const correo = req.body[2];
  const contraseña = req.body[3];

  let usuario = [nombre, apellido, correo, contraseña];

  let nuevoUsuario = `
        INSERT INTO usuarios(nombre, apellido, Correo, Contraseña) 
        VALUES (?, ?, ?, SHA1(?))
    `;

  mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: 'Error al registrar el usuario' });
    } else {
      res.json({ message: `Se ha registrado otro usuario` });
    }
  });
});

router.post('/', (req, res) => {
  const { Correo, Contraseña, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion } = req.body;

  let usuario = [Correo, Contraseña, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion];

  let nuevoUsuario = `INSERT INTO usuarios( Correo, Contraseña, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion) 
    VALUES( ?, SHA1(?),?,?,?,?,?)`;

  mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    } else {
      res.json({ message: `se ha registrado otro usuario` });
    }
  });
});

module.exports = router;
