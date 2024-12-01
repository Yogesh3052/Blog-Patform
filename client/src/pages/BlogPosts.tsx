import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, PenSquare } from 'lucide-react';
import BlogList from '../components/blog/BlogList';

const BlogPosts = () => {
  const handleCompose = () => {
    window.location.href = '/create';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-serif font-bold text-gray-900 mb-4 md:mb-0"
          >
            Discover Stories
          </motion.h1>
          
          <div className="flex space-x-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5 text-gray-500" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {['All', 'Technology', 'Writing', 'Creativity', 'Personal', 'Travel', 'Food'].map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-green-50 hover:border-green-500 hover:text-green-600 transition-colors whitespace-nowrap"
              >
                {tag}
              </button>
            ))}
          </div>
          
          <BlogList />
        </div>

        {/* Compose Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-8 right-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl"
            onClick={handleCompose}
          >
            <PenSquare className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPosts;