const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'b5lk4ifgxu2grqwwgehd-mysql.services.clever-cloud.com',
    user: 'um8r6s0avuvqnwur',
    password: 'yNGDWE6ljIv2amDYJVRy',
    database: 'b5lk4ifgxu2grqwwgehd',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos conectada!');
    }
})

module.exports = mysqlConnection;