import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Bookmark, Share2 } from 'lucide-react';
import { fadeIn, slideUp } from '../../utils/animations.ts';

interface BlogPostProps {
  post: {
    title: string;
    content: string;
    author: {
      name: string;
      avatar: string;
      bio: string;
    };
    coverImage: string;
    readTime: string;
    date: string;
    likes: number;
    comments: number;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <motion.header 
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="space-y-6 mb-12"
      >
        <motion.h1 
          variants={slideUp}
          className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight"
        >
          {post.title}
        </motion.h1>

        <motion.div variants={fadeIn} className="flex items-center space-x-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-medium text-gray-900">{post.author.name}</p>
            <div className="flex items-center text-sm text-gray-500">
              <span>{post.date}</span>
              <span className="mx-2">·</span>
              <span>{post.readTime} read</span>
            </div>
          </div>
        </motion.div>
      </motion.header>

      <motion.div 
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="relative h-96 mb-12"
      >
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </motion.div>

      <motion.div 
        variants={slideUp}
        initial="hidden"
        animate="visible"
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <motion.div 
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-between mt-12 pt-6 border-t"
      >
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-gray-500 hover:text-green-600">
            <Heart className="w-6 h-6" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-500 hover:text-green-600">
            <MessageCircle className="w-6 h-6" />
            <span>{post.comments}</span>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-green-600">
            <Share2 className="w-6 h-6" />
          </button>
          <button className="text-gray-500 hover:text-green-600">
            <Bookmark className="w-6 h-6" />
          </button>
        </div>
      </motion.div>

      <motion.div 
        variants={slideUp}
        initial="hidden"
        animate="visible"
        className="mt-12 p-6 bg-gray-50 rounded-xl"
      >
        <h3 className="text-lg font-semibold mb-2">About the author</h3>
        <p className="text-gray-600">{post.author.bio}</p>
      </motion.div>
    </article>
  );
};

export default BlogPost;