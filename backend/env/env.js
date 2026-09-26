// Carga las variables del archivo .env en process.env
require('dotenv').config();
const mysql = require('mysql2');

// Los datos de conexión NUNCA van escritos aquí: se leen del .env,
// que está en .gitignore y no se sube a GitHub.
const mysqlConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

mysqlConnection.connect((err) => {
    if (err) {
        console.error('Error al conectar con MySQL:', err.message);
        return;
    }
    console.log('Base de datos conectada!');
});

module.exports = mysqlConnection;
