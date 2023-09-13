// postController.js

const Post = require('../models/post'); // Reemplaza con la ruta correcta a tu modelo de datos

// Obtener todos los posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los posts');
  }
};

// Obtener un post por ID
exports.getPostById = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).send('No se encontró el post');
    }
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el post');
  }
};

// Crear un nuevo post
exports.createPost = async (req, res) => {
  const { title, content, imageUrl } = req.body;
  try {
    const newPost = await Post.create({
      title,
      content,
      imageUrl,
    });
    res.json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear el post');
  }
};

// Actualizar un post existente
exports.updatePost = async (req, res) => {
  const postId = req.params.id;
  const { title, content, imageUrl } = req.body;
  try {
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).send('No se encontró el post');
    }
    post.title = title;
    post.content = content;
    post.imageUrl = imageUrl;
    await post.save();
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el post');
  }
};

// Eliminar un post por ID
exports.deletePost = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).send('No se encontró el post');
    }
    await post.destroy();
    res.send('Post eliminado con éxito');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar el post');
  }
};
