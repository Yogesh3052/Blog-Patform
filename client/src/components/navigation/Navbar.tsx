import React from 'react';
import { motion } from 'framer-motion';
import NavLink from './NavLink';
import { LogOut } from 'lucide-react';

interface NavbarProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleSignIn = () => {
    window.location.href = '/signin';
  };

  const handleGetStarted = () => {
    window.location.href = '/signup';
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <a href="/" className="text-2xl font-serif font-bold text-gray-900">Pencraft</a>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" text="Home" />
            <NavLink href="/blogs" text="Stories" />
            <NavLink href="#" text="About" />
            <NavLink href="#" text="Contact" />
          </div>

          <div className="flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-green-600 font-medium"
                  onClick={handleSignIn}
                >
                  Sign in
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-green-600 text-white rounded-full font-medium"
                  onClick={handleGetStarted}
                >
                  Get started
                </motion.button>
              </>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-gray-600 font-medium flex items-center space-x-2"
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;