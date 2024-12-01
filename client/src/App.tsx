import React from 'react';
import Navbar from './components/navigation/Navbar';
import HeroSection from './components/hero/HeroSection';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BlogPosts from './pages/BlogPosts';
import BlogPostView from './pages/BlogPostView';
import CreatePost from './components/editor/CreatePost';

function App() {
  // Simple routing based on pathname
  const path = window.location.pathname;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {path === '/signin' && <SignIn />}
      {path === '/signup' && <SignUp />}
      {path === '/blogs' && <BlogPosts />}
      {path === '/blog/post' && <BlogPostView />}
      {path === '/create' && <CreatePost />}
      {path === '/' && <HeroSection />}
    </div>
  );
}

export default App;