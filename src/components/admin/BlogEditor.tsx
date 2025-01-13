import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Head from 'next/head';

const BlogEditor: React.FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [loading, setLoading] = useState(false);

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const db = getFirestore();
      const blogData = {
        title,
        content,
        excerpt,
        slug: createSlug(title),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const docRef = await addDoc(collection(db, 'blogs'), blogData);

      if (docRef.id) {
        
        // Reset form
        setTitle('');
        setContent('');
        setExcerpt('');
        
        // Redirect to blog page
        router.push('/blog');
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Head>
        <title>Create Blog - Abhishek Singh</title>
        <meta name="description" content="Summit website description" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    <Card className="max-w-2xl mx-auto mt-12 p-6 shadow-lg rounded-lg border border-gray-200 bg-white">
      <CardContent>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create a New Blog Post
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter blog title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt
            </label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              required
              placeholder="Enter a brief description"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Content
            </label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              placeholder="Write your blog content here"
              rows={10}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold ${
              loading ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-500'
            } shadow-md transition-all duration-200`}
          >
            {loading ? 'Creating...' : 'Create Blog Post'}
          </Button>
        </form>
      </CardContent>
    </Card>
    </>
  );
  
};

export default BlogEditor;