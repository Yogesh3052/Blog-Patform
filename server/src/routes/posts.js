const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// In-memory storage (moved from index.js)
const posts = [];

// Get all posts
router.get('/', (req, res) => {
  res.json(posts);
});

// Get single post
router.get('/:id', (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.json(post);
});

// Create new post
router.post('/', authMiddleware, (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: Date.now().toString(),
    title,
    content,
    authorId: req.userId,
    createdAt: new Date().toISOString()
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

module.exports = router; 