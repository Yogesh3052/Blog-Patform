import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Bookmark } from 'lucide-react';

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  readTime: string;
  date: string;
  likes: number;
  comments: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  author,
  coverImage,
  readTime,
  date,
  likes,
  comments,
}) => {
  const handleClick = () => {
    window.location.href = `/blog/post/${id}`;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative h-48">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium text-gray-900">{author.name}</p>
            <div className="flex items-center text-sm text-gray-500">
              <span>{date}</span>
              <span className="mx-2">·</span>
              <span>{readTime} read</span>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600">
              <Heart className="w-5 h-5" />
              <span>{likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600">
              <MessageCircle className="w-5 h-5" />
              <span>{comments}</span>
            </button>
          </div>
          <button className="text-gray-500 hover:text-green-600">
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;