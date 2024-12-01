import React from 'react';
import { motion } from 'framer-motion';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

interface HeroSectionProps {
  isAuthenticated: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isAuthenticated }) => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-green-50/30" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute right-20 top-20 w-64 h-64 rounded-full bg-green-100/50"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent isAuthenticated={isAuthenticated} />
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;