// postController.js

//const Post = require('../models/Posts'); 
const { Post } = require('../models');

// Obtener todos los posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    // Renderiza la vista 'list-posts.ejs' y pasa los datos de los posts como contexto
    
    res.render('./post/list-posts', { posts });
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
    // Renderiza la vista 'get-post-by-id.ejs' y pasa los datos del post como contexto
    res.render('post/get-post-by-id', { post });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el post');
  }
};


// Crear un nuevo post
exports.createPost = async (req, res) => {
  try {
    // Renderiza la vista 'create-post.ejs'
    res.render('./post/create-post');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear el post');
  }
};

exports.savePost = async (req, res) => {
  const { title, content, imageUrl } = req.body;
  try {
    const newPost = await Post.create({
      title,
      content,
      imageUrl,
    });
    console.log ("intenta guardar");
    res.render('./post/create-post');
   
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear el post');
  }
};


exports.updatePostRender = async (req, res) => {
  const { id } = req.params
  try {
    const post = await Post.findByPk(id)

    if (!post) {
      return res.status(404).send('No se encontró el post');
    }

    res.render('post/update-post', {post})
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al actualizar el post');
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
    try {
      const posts = await Post.findAll();
      // Renderiza la vista 'list-posts.ejs' y pasa los datos de los posts como contexto
      
      res.render('./post/list-posts', { posts });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener los posts');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el post');
  }
};
exports.deletePostRender = async (req, res) => {
  const { id } = req.params
  try {
    const post = await Post.findByPk(id)

    if (!post) {
      return res.status(404).send('No se encontró el post');
    }

    res.render('post/delete-post', {post})
  } catch (error) {
    console.log(error)
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
    try {
      const posts = await Post.findAll();
      // Renderiza la vista 'list-posts.ejs' y pasa los datos de los posts como contexto
      res.render('./post/list-posts', { posts });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener los posts');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar el post');
  }
};

