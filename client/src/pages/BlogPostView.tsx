import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/blog/BlogPost';

interface BlogPostData {
  title: string;
  content: string;
//   author: {
//     name: string;
//     avatar: string;
//     bio: string;
//   };
//   coverImage: string;
//   readTime: string;
//   date: string;
//   likes: number;
//   comments: number;
}

// Add prop interface
interface BlogPostViewProps {
  isAuthenticated?: boolean;
}

// Update component signature to accept props
const BlogPostView: React.FC<BlogPostViewProps> = ({ isAuthenticated }) => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`process.env.API_BASE_URL/api/posts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {post && <BlogPost post={post} />}
    </div>
  );
};

export default BlogPostView;