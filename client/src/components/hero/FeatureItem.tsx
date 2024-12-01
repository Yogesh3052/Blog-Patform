import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureItemProps {
  icon: LucideIcon;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, text }) => (
  <motion.div
    whileHover={{ x: 10 }}
    className="flex items-center space-x-4"
  >
    <div className="p-2 bg-green-100 rounded-lg">
      <Icon className="w-6 h-6 text-green-600" />
    </div>
    <p className="text-lg text-gray-700">{text}</p>
  </motion.div>
);

export default FeatureItem;