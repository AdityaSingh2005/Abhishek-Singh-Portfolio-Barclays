import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { BlogPostInterface } from '@/types/blog';
import Head from 'next/head';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<BlogPostInterface | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        const q = query(collection(db, 'blogs'), where('slug', '==', slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const postData = {
            id: querySnapshot.docs[0].id,
            ...querySnapshot.docs[0].data(),
          } as BlogPostInterface;
          setPost(postData);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto mt-[100px] max-w-4xl animate-pulse space-y-8">
        <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-3/4"></div>

        <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-1/2"></div>

        <div className="h-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-full"></div>

        <div className="space-y-4">
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-full"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-5/6"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-2/3"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-3/4"></div>
        </div>
      </div>

    );
  }

  if (!post) return (
    <div className="container mx-auto mt-[300px] flex flex-col justify-center items-center h-full space-y-6">
      <div className="flex items-center justify-center bg-blue-500 text-white text-lg shadow-lg rounded-full w-16 h-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01m-6.938 4h13.856C18.502 20 20 18.502 20 16.938V7.062C20 5.498 18.502 4 16.938 4H7.062C5.498 4 4 5.498 4 7.062v9.876C4 18.502 5.498 20 7.062 20z"
          />
        </svg>
      </div>
      <p className="p-6 bg-blue-500 text-white text-lg font-semibold shadow-lg rounded-lg text-center max-w-md">
        Sorry, no blog has been found. Try exploring other categories or come back later!
      </p>
      <button
        onClick={() => router.push('/')}
        className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white text-md font-medium rounded-lg shadow-md transition duration-200"
      >
        Go to Home
      </button>
    </div>
  );
  

  return (
    <>
      <Head>
        <title>{post.title} - Abhishek Singh</title>
        <meta name="description" content="Summit website description" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <article className="container mx-auto mt-[100px] px-6 py-12 max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="mb-8">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4">{post.title}</h1>
          <p className="text-gray-500 text-sm">
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </header>
        <div className="prose prose-lg prose-gray max-w-none leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </>
  );
};

export default BlogPost;
