import React from 'react';
import BlogCard from './BlogCard';

const SAMPLE_POSTS = [
  {
    title: "The Art of Creative Writing: A Beginner's Guide",
    excerpt: "Discover the fundamental principles of creative writing and how to develop your unique voice as a writer.",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop",
    readTime: "5 min",
    date: "Mar 15, 2024",
    likes: 128,
    comments: 24,
  },
  {
    title: "Why Reading Makes You a Better Writer",
    excerpt: "Explore how regular reading habits can significantly improve your writing skills and creativity.",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    coverImage: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&h=400&fit=crop",
    readTime: "7 min",
    date: "Mar 14, 2024",
    likes: 256,
    comments: 42,
  },
  {
    title: "Finding Inspiration in Everyday Life",
    excerpt: "Learn how to turn ordinary moments into extraordinary stories that captivate your readers.",
    author: {
      name: "Emma Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    coverImage: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&h=400&fit=crop",
    readTime: "4 min",
    date: "Mar 13, 2024",
    likes: 184,
    comments: 31,
  },
];

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SAMPLE_POSTS.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogList;