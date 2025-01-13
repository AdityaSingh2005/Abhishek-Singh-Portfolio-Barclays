import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import BlogEditor from '@/components/admin/BlogEditor';

const NewBlogPage = () => {
  const router = useRouter();
  
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/admin/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mx-8 mb-8">Create New Blog Post</h1>
      <BlogEditor />
    </div>
  );
};

export default NewBlogPage;