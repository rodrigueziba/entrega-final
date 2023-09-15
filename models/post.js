// Importa las dependencias necesarias
const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.js'); // Asegúrate de que la ruta sea correcta


// Define el modelo para la tabla de posts
const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING, // Puedes utilizar STRING para almacenar la URL de la imagen
    allowNull: true, // Puede ser nulo si no se proporciona una imagen
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Establece la fecha de creación automáticamente
  },
});

// Sincroniza el modelo con la base de datos (esto creará la tabla si no existe)
Post.sync();

module.exports = Post;
