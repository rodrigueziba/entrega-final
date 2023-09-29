const express = require('express');
const methodOverride = require('method-override');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const mysql = require('mysql2');
const { sequelize } = require('./src/models/index.js');
const routes = require('./src/routes/PostRoutes.js');

const config = require('./config/server.js');

process.env.NODE_ENV = 'development';

// Configura Express para usar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views')
app.use(express.static((__dirname + '/public')));

// Configura Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static(__dirname + '/public'));

// Utiliza el middleware bodyParser para procesar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(cors());
app.use(morgan('tiny'))
app.use(helmet());
app.use(methodOverride('_method'));
app.use('/', routes);

//Prueba de conexión con la Base de Datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

//Ejecucion del servidor
console.log(`NODE_ENV=${config.NODE_ENV}`);
app.listen(config.PORT, config.HOST, function () {
  console.log(`Servidor en ejecución en http://${config.HOST}:${config.PORT}`);
});
