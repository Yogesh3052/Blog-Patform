const model = require('../config/gemini');

class GeminiService {
  // Generate blog post content
  static async generateBlogContent(topic, tone = 'informative') {
    try {
      const prompt = `Write a blog post about ${topic}. 
                     Use a ${tone} tone. 
                     Include an introduction, main points, and conclusion.`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating blog content:', error);
      throw error;
    }
  }

  // Enhance existing content
  static async enhanceContent(content) {
    try {
      const prompt = `Improve the following blog content while maintaining 
                     the main message. Make it more engaging and professional:
                     ${content}`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error enhancing content:', error);
      throw error;
    }
  }

  // Generate SEO suggestions
  static async generateSEOSuggestions(content, title) {
    try {
      const prompt = `Analyze this blog post and provide SEO suggestions:
                     Title: ${title}
                     Content: ${content}
                     
                     Please provide:
                     1. Keywords suggestions
                     2. Meta description
                     3. Title tag recommendations
                     4. Content improvement suggestions`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating SEO suggestions:', error);
      throw error;
    }
  }

  // Generate title suggestions
  static async generateTitleSuggestions(content) {
    try {
      const prompt = `Generate 5 engaging title suggestions for this blog post:
                     ${content}`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating titles:', error);
      throw error;
    }
  }
}

module.exports = GeminiService; 