const express = require('express');
const router = express.Router();
const GeminiService = require('../services/geminiService');
const authMiddleware = require('../middleware/auth');
const aiLimiter = require('../middleware/aiRateLimiter');

// Apply rate limiting to all AI routes
router.use(aiLimiter);

// Generate blog content
router.post('/generate-content', authMiddleware, async (req, res) => {
    try {
        const { topic, tone } = req.body;
        
        if (!topic) {
            return res.status(400).json({ 
                error: 'Topic is required' 
            });
        }

        const content = await GeminiService.generateBlogContent(topic, tone);
        res.json({ 
            success: true,
            content,
            generatedAt: new Date().toISOString()
        });
    } catch (error) {
        console.error('AI Content Generation Error:', error);
        res.status(500).json({ 
            error: 'Failed to generate content',
            message: error.message 
        });
    }
});

// Enhance existing content
router.post('/enhance-content', authMiddleware, async (req, res) => {
  try {
    const { content } = req.body;
    const enhancedContent = await GeminiService.enhanceContent(content);
    res.json({ enhancedContent });
  } catch (error) {
    res.status(500).json({ message: 'Error enhancing content', error: error.message });
  }
});

// Generate SEO suggestions
router.post('/seo-suggestions', authMiddleware, async (req, res) => {
  try {
    const { content, title } = req.body;
    const suggestions = await GeminiService.generateSEOSuggestions(content, title);
    res.json({ suggestions });
  } catch (error) {
    res.status(500).json({ message: 'Error generating SEO suggestions', error: error.message });
  }
});

// Generate title suggestions
router.post('/title-suggestions', authMiddleware, async (req, res) => {
  try {
    const { content } = req.body;
    const titles = await GeminiService.generateTitleSuggestions(content);
    res.json({ titles });
  } catch (error) {
    res.status(500).json({ message: 'Error generating titles', error: error.message });
  }
});

module.exports = router; 