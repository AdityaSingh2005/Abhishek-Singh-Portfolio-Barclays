import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { BlogPostInterface } from '@/types/blog';
import BlogList from '@/components/BlogList';
import Head from 'next/head';
import styles from '@/styles/Blog.module.scss';
import router from 'next/router';

const BlogIndex = () => {
    const [posts, setPosts] = useState<BlogPostInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
                const querySnapshot = await getDocs(q);
                const fetchedPosts = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as BlogPostInterface[];
                setPosts(fetchedPosts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="mx-auto px-8 py-16 bg-white mt-[115px] sm:px-4 sm:py-8">
                <h2 className={styles.title}>
                    Blogs
                    <span className={styles.underline}></span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-lg animate-pulse">
                            <div className="h-40 bg-gray-300 rounded-lg"></div>
                            <div className="mt-4 h-6 bg-gray-300 rounded-lg w-3/4"></div>
                            <div className="mt-2 h-4 bg-gray-300 rounded-lg w-full"></div>
                            <div className="mt-2 h-4 bg-gray-300 rounded-lg w-2/3"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <>
            <Head>
                <title>Blog - Abhishek Singh</title>
                <meta name="description" content="Summit website description" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
                <h2 className="text-3xl font-semibold text-gray-800">No Blog Posts Found</h2>
                <p className="text-gray-600 mt-2 text-center">
                    It looks like there are no blog posts available at the moment. 
                    Check back later for updates!
                </p>
                <button
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 focus:outline-none"
                    onClick={() => router.push('/')}
                >
                    Go To Home
                </button>
            </div>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>Blog - Abhishek Singh</title>
                <meta name="description" content="Summit website description" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="bg-white h-full w-full mt-20">
                <BlogList posts={posts} />
            </div>
        </>
    );
};

export default BlogIndex;
