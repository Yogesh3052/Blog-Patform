import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import HeroSection from './components/hero/HeroSection';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BlogPosts from './pages/BlogPosts';
import BlogPostView from './pages/BlogPostView';
import CreatePost from './components/editor/CreatePost';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const path = window.location.pathname;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      if (path === '/') {
        window.location.href = '/blogs';
      }
    }
  }, [path]);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/blogs" element={<BlogPosts setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path="/blog/post/:id" element={<BlogPostView isAuthenticated={isAuthenticated} />} />
          <Route path="/create" element={<CreatePost isAuthenticated={isAuthenticated}/>} />
          <Route path="/" element={<HeroSection isAuthenticated={isAuthenticated} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;