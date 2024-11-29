const { sql } = require('../config/db');

// Create posts table if it doesn't exist
async function createPostsTable() {
    try {
        await sql.query`
            IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='posts' and xtype='U')
            CREATE TABLE posts (
                id INT PRIMARY KEY IDENTITY(1,1),
                title NVARCHAR(255) NOT NULL,
                content NTEXT NOT NULL,
                author NVARCHAR(255) NOT NULL,
                createdAt DATETIME DEFAULT GETDATE()
            )
        `;
        console.log('Posts table created or already exists');
    } catch (err) {
        console.error('Error creating posts table:', err);
    }
}

module.exports = { createPostsTable }; 