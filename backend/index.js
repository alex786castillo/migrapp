const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser'); // Añade esta línea
const routes = require('./routes/usuarios');

app.use(cors({ origin: '*' }));
app.use(bodyParser.json()); // Configura body-parser para analizar solicitudes JSON
app.use(bodyParser.urlencoded({ extended: true })); // Configura body-parser para analizar solicitudes de formulario

app.set('port', process.env.PORT || 4001);

// ... otras configuraciones ...

// Rutas
app.use('/api/usuarios', routes);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
