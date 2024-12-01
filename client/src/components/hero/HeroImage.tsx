import React from 'react';
import { motion } from 'framer-motion';

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <img
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80"
        alt="Person writing on a desk with coffee"
        className="rounded-2xl shadow-2xl"
      />
      <motion.div
        animate={{
          rotate: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute -top-8 -right-8 w-24 h-24 bg-green-100 rounded-full flex items-center justify-center"
      >
        <span className="text-4xl">✍️</span>
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;