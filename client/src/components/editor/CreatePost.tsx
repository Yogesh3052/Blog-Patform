import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Wand2, Sparkles, Image as ImageIcon } from 'lucide-react';
import Editor from './Editor.tsx';
import AIFeatures from './AIFeatures.tsx';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [isAIFeaturesOpen, setIsAIFeaturesOpen] = useState(false);

  const handlePublish = async () => {
    try {
      const postData = {
        title,
        content,
        // coverImage
      };

      const token = localStorage.getItem('token');

      const response = await axios.post('http://localhost:3360/api/posts', postData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.status === 201 || response.status === 200) {
        setTitle('');
        setContent('');
        // setCoverImage('');
        alert('Post published successfully!');
        window.location.href = '/blogs';
      }
    } catch (error) {
      console.error('Error publishing post:', error);
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        alert('Please login to publish posts');
      } else {
        alert('Failed to publish post. Please try again.');
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          {/* Cover Image Upload */}
          <div className="mb-8">
            {coverImage ? (
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={coverImage}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setCoverImage('')}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg"
                >
                  ✕
                </button>
              </div>
            ) : (
              <label className="block h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <div className="h-full flex flex-col items-center justify-center text-gray-500">
                  <Upload className="w-8 h-8 mb-2" />
                  <p>Upload cover image</p>
                </div>
              </label>
            )}
          </div>

          {/* Title Input */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your title..."
            className="w-full text-4xl font-serif font-bold mb-8 p-2 border-none focus:ring-0 focus:outline-none"
          />

          {/* Rich Text Editor */}
          <Editor content={content} onChange={setContent} />

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => setIsAIFeaturesOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            >
              <Wand2 className="w-5 h-5" />
              <span>AI Features</span>
            </button>

            <div className="flex space-x-4">
              <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Save Draft
              </button>
              <button
                onClick={handlePublish}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Publish
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* AI Features Panel */}
      <AIFeatures
        isOpen={isAIFeaturesOpen}
        onClose={() => setIsAIFeaturesOpen(false)}
        onGenerate={(text) => setContent(content + text)}
      />
    </div>
  );
};

export default CreatePost;