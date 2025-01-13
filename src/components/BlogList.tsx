import React from 'react';
import BlogCard from './BlogCard';
import { BlogPostInterface } from '@/types/blog';
import styles from '@/styles/Blog.module.scss';

interface BlogListProps {
    posts: BlogPostInterface[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Blogs
                <span className={styles.underline}></span>
            </h2>
            {posts.length === 0 ? (
                <div className={styles.noBlog}>
                    <p>No Blog has been created</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogList;