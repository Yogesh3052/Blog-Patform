require('dotenv').config();
const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/posts');
const authRoutes = require('./routes/auth');
const errorHandler = require('./middleware/errorHandler');
const limiter = require('./middleware/rateLimiter');
const logger = require('./middleware/logger');
const aiRoutes = require('./routes/ai');
const aiLogger = require('./middleware/aiLogger');

const app = express();
const PORT = process.env.PORT || 3360;

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(limiter);

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/ai', aiLogger);
app.use('/api/ai', aiRoutes);

// Error handling
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 