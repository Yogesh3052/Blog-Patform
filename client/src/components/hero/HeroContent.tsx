import React from 'react';
import { motion } from 'framer-motion';
import { Pen, BookOpen, Users } from 'lucide-react';
import FeatureItem from './FeatureItem';

interface HeroContentProps {
  isAuthenticated: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ isAuthenticated }) => {
  const features = [
    { icon: Pen, text: "Share your unique perspective" },
    { icon: BookOpen, text: "Discover thought-provoking content" },
    { icon: Users, text: "Connect with like-minded readers" }
  ];

  const handleStartWriting = () => {
    window.location.href = isAuthenticated ? '/create' : '/signup';
  };

  const handleStartReading = () => {
    window.location.href = isAuthenticated ? '/blogs' : '/signin';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <h1 className="text-6xl font-serif font-bold text-gray-900 leading-tight">
        Human stories & ideas that matter
      </h1>
      <p className="text-xl text-gray-600 max-w-lg">
        Join a community of curious minds. Write, read, and engage with stories that inspire, challenge, and connect.
      </p>
      
      <div className="space-y-4 pt-8">
        {features.map((feature, index) => (
          <FeatureItem key={index} icon={feature.icon} text={feature.text} />
        ))}
      </div>

      {!isAuthenticated && (
        <div className="flex space-x-4 pt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-green-600 text-white rounded-full font-medium text-lg hover:bg-green-700 transition-colors"
            onClick={handleStartWriting}
          >
            Start Writing
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-full font-medium text-lg hover:bg-green-50 transition-colors"
            onClick={handleStartReading}
          >
            Start Reading
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

export default HeroContent;