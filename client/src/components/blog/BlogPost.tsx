import React from 'react';

// interface Author {
//   name: string;
//   avatar: string;
//   bio: string;
// }

interface BlogPostProps {
  post: {
    title: string;
    content: string;
    // author: Author;
    // coverImage: string;
    // readTime: string;
    // date: string;
    // likes: number;
    // comments: number;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="max-w-4xl mx-auto px-4">
      {/* <img src={post.coverImage} alt={post.title} className="w-full h-[400px] object-cover rounded-lg" /> */}
      <h1 className="text-4xl font-bold mt-8 mb-4">{post.title}</h1>
      <div className="flex items-center space-x-4 mb-8">
        {/* <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full" /> */}
        {/* <div>
          <p className="font-medium">{post.author.name}</p>
          <p className="text-gray-600">{post.date} · {post.readTime}</p>
        </div> */}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} className="prose max-w-none" />
    </article>
  );
};

export default BlogPost; 