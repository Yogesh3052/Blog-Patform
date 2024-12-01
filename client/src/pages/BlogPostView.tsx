import React from 'react';
import BlogPost from '../components/blog/BlogPost';

const SAMPLE_POST = {
  title: "The Art of Creative Writing: A Beginner's Guide",
  content: `
    <p>Writing is more than just putting words on paper—it's about creating worlds, sharing perspectives, and touching hearts. Whether you're aspiring to write novels, short stories, or personal essays, understanding the fundamentals of creative writing can help you craft more compelling narratives.</p>

    <h2>Finding Your Voice</h2>
    <p>Your writing voice is as unique as your fingerprint. It's shaped by your experiences, perspectives, and the way you see the world. Don't try to imitate others; instead, focus on developing your authentic voice.</p>

    <h2>The Power of Show, Don't Tell</h2>
    <p>Instead of telling readers that a character is sad, show them through actions, dialogue, and sensory details. This creates a more immersive experience and helps readers connect emotionally with your story.</p>

    <h2>Creating Memorable Characters</h2>
    <p>Great characters are the heart of any story. They should be complex, flawed, and relatable. Give them clear motivations, distinct personalities, and room to grow throughout your narrative.</p>

    <blockquote>
      "There is no greater agony than bearing an untold story inside you." - Maya Angelou
    </blockquote>

    <h2>The Importance of Revision</h2>
    <p>Writing is rewriting. Your first draft is just the beginning. Through revision, you can strengthen your plot, deepen your characters, and polish your prose until it shines.</p>
  `,
  author: {
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    bio: "Sarah Johnson is a creative writing instructor and author of multiple bestselling novels. She's passionate about helping new writers find their voice and tell their stories."
  },
  coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=600&fit=crop",
  readTime: "5 min",
  date: "Mar 15, 2024",
  likes: 128,
  comments: 24
};

const BlogPostView = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <BlogPost post={SAMPLE_POST} />
    </div>
  );
};

export default BlogPostView;