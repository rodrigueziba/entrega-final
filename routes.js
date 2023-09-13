// routes.js

const express = require('express');
const router = express.Router();
const postController = require('./controllers/postController'); // Reemplaza con la ruta correcta a tu controlador

// Rutas para la gestión de posts
router.get('/', postController.getAllPosts); // Obtener todos los posts
router.get('/posts/:id', postController.getPostById); // Obtener un post por ID
router.post('/posts', postController.createPost); // Crear un nuevo post
router.put('/posts/:id', postController.updatePost); // Actualizar un post existente
router.delete('/posts/:id', postController.deletePost); // Eliminar un post por ID

module.exports = router;
