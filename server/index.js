require('dotenv').config();
const express = require('express');
const cors = require('cors');
const postRoutes = require('./src/routes/posts');
const authRoutes = require('./src/routes/auth');
const errorHandler = require('./src/middleware/errorHandler');
const limiter = require('./src/middleware/rateLimiter');
const logger = require('./src/middleware/logger');
const aiRoutes = require('./src/routes/ai');
const aiLogger = require('./src/middleware/aiLogger');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3360;

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(limiter);

// Routes
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/ai', aiLogger);
app.use('/api/ai', aiRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Error handling
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 