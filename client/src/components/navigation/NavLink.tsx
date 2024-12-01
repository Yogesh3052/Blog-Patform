import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => (
  <motion.a
    href={href}
    whileHover={{ y: -2 }}
    className="text-gray-600 hover:text-gray-900 transition-colors"
  >
    {text}
  </motion.a>
);

export default NavLink;
