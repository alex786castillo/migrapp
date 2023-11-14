const { Router } = require('express');
const router = Router();
const mysqlConnection= require('../env/env')


router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields)=>{
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});


    
router.post('/autenticacion', (req, res)=>{
    const txtusu= req.body[0];
    const txtpas = req.body[1];
    console.log(req.body)
    const sql = 'SELECT * FROM usuario WHERE correo = ? AND contraseña = ?';
    
    mysqlConnection.query(sql, [txtusu, txtpas], (err, results) => {
        console.log(txtusu, txtpas)
      if (err) throw err;
  
      if (results.length > 0) {
        res.json({ mensaje: 'Usuario autenticado correctamente' });
        console.log("result -->",results)
        return results.nombre
      } else {

        res.status(401).json({ mensaje: 'Correo o contraseña incorrectos' });
        return false
      }
    });
})


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



router.post('/', (req, res)=>{
    const { Correo, Contraseña, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion} = req.body;
  
    let usuario = [ Correo, Contraseña, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion];
  
    let nuevoUsuario = `INSERT INTO usuarios( Correo, Contraseña, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion) 
    VALUES( ?, SHA1(?),?,?,?,?,?)`;
    
    mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha registrado otro usuario`})
        }
    });
  
  });

 

module.exports = router;