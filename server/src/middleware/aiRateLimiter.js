const rateLimit = require('express-rate-limit');

const aiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 10 AI requests per windowMs
    message: {
        error: 'Too many AI requests, please try again later.'
    }
});

module.exports = aiLimiter; 