const { sql } = require('../config/db');

const postController = {
    // Get all posts
    async getAllPosts(req, res) {
        try {
            const result = await sql.query`SELECT * FROM posts ORDER BY createdAt DESC`;
            res.json(result.recordset);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Get single post
    async getPostById(req, res) {
        try {
            const { id } = req.params;
            const result = await sql.query`SELECT * FROM posts WHERE id = ${id}`;
            
            if (result.recordset.length === 0) {
                return res.status(404).json({ message: 'Post not found' });
            }
            
            res.json(result.recordset[0]);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Create new post
    async createPost(req, res) {
        try {
            const { title, content, author } = req.body;
            
            const result = await sql.query`
                INSERT INTO posts (title, content, author)
                OUTPUT INSERTED.*
                VALUES (${title}, ${content}, ${author})
            `;
            
            res.status(201).json(result.recordset[0]);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = postController; 