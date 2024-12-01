import React from 'react';
import BlogCard from './BlogCard';

interface BlogPost {
  id: number;
  title: string;
  content: string;
//   excerpt: string;
//   author: {
//     name: string;
//     avatar: string;
//   };
//   coverImage: string;
//   readTime: string;
//   date: string;
//   likes: number;
//   comments: number;
}

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default BlogList;