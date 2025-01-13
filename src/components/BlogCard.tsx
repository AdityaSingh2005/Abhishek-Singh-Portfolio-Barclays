import React from 'react';
import Link from 'next/link';
import { BlogPostInterface } from '@/types/blog';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface BlogCardProps {
  post: BlogPostInterface;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="hover:shadow-lg transition-shadow duration-200 p-4 flex flex-col gap-3 items-start justify-start w-full h-full">
        <CardHeader className='p-0'>
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className='p-0'>
          <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <CardFooter className='p-0 mt-2'>
          <p className="text-sm text-gray-500">
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
