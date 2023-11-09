const { Router } = require('express');
const router = Router();
const mysqlConnection= require('../env/env')

router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM usuario', (err, rows, fields)=>{
        if(!err) {
            return res.json(rows);
        }else {
            console.log(err);
        }
    });
});

router.post('/autenticacion', (req, res)=>{
    const txtusu= req.body[0];
    const txttel = req.body[1];
    const txtpas = req.body[2];
    console.log(req.body)
    const sql = 'SELECT * FROM usuario WHERE correo = ? AND telefono = ? AND contraseña = ?';

    mysqlConnection.query(sql, [txtusu, txttel, txtpas], (err, results) => {
        console.log(txtusu, txttel, txtpas)
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

router.post('/registro', (req, res)=>{
    console.log(req.body)
    const nombre =  req.body[0];
    const apellido =  req.body[1];
    const correo =  req.body[2];
    const telefono = req.body[3];
    const contraseña =  req.body[4];

  
    let usuario = [ nombre, apellido, correo, telefono, contraseña ];
  
    let nuevoUsuario = `INSERT INTO usuario(  nombre, apellido, correo, telefono, contraseña ) 
    VALUES( ?, ?,?,?,?)`;
    
    mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha registrado otro usuario`})
        }
    });
  
  });

 

module.exports = router;