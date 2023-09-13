const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');

// Configura Express para usar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Configura Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static(__dirname + '/public'));

// Utiliza el middleware bodyParser para procesar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
