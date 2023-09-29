// routes.js

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController'); 

// Rutas para la gestión de posts
router.get('/', postController.getAllPosts); // Obtener todos los posts
router.get('/post/', postController.getAllPosts); // Obtener todos los posts
router.get('/posts/:id', postController.getPostById); // Obtener un post por ID
router.get('/post/create', postController.createPost); // Crear un nuevo post
router.post('/post/save', postController.savePost); // Crear un nuevo post
router.get('/post/update/:id', postController.updatePostRender); // Actualizar un post existente
router.post('/post/update/:id', postController.updatePost); // Actualizar un post existente
router.get('/post/delete/:id', postController.deletePostRender); // Eliminar un post por ID
router.post('/post/delete/:id', postController.deletePost); // Eliminar un post por ID

module.exports = router;
