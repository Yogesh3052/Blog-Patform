import React, { useState, useEffect } from 'react';
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
    <div className="min-h-screen bg-white">
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      {path === '/signin' && <SignIn setIsAuthenticated={setIsAuthenticated} />}
      {path === '/signup' && <SignUp setIsAuthenticated={setIsAuthenticated} />}
      {path === '/blogs' && <BlogPosts />}
      {path === '/blog/post' && <BlogPostView />}
      {path === '/create' && <CreatePost />}
      {path === '/' && <HeroSection isAuthenticated={isAuthenticated} />}
    </div>
  );
}

export default App;