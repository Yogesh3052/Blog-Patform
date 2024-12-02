import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

interface SignUpFormProps {
  setIsAuthenticated: (value: boolean) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ setIsAuthenticated }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Register the user
      const registerResponse = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      if (!registerResponse.ok) {
        const data = await registerResponse.json();
        throw new Error(data.message || 'Registration failed');
      }

      // If registration successful, login automatically
      const loginResponse = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      const loginData = await loginResponse.json();

      if (loginResponse.ok) {
        localStorage.setItem('token', loginData.token);
        setIsAuthenticated(true);
        window.location.href = '/blogs';
      } else {
        throw new Error('Login failed after registration');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect to server');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md w-full mx-auto p-8 bg-white rounded-2xl shadow-xl"
    >
      <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Join Pencraft</h2>
      <p className="text-gray-600 mb-8">Start your writing journey today</p>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="John Doe"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-green-700 transition-colors"
        >
          <span>Create account</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </form>

      <p className="mt-6 text-center text-gray-600">
        Already have an account?{' '}
        <a href="/signin" className="text-green-600 hover:text-green-700 font-medium">
          Sign in
        </a>
      </p>
    </motion.div>
  );
};

export default SignUpForm;