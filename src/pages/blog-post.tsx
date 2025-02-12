import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronLeft, Tag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { blogPosts } from './blog';

export function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 pb-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold">Post Not Found</h1>
            <Link to="/blog">
              <Button variant="ghost" className="group">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Back Button */}
          <Link to="/blog">
            <Button variant="ghost" className="group">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Header */}
          <header className="space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
              {post.category}
            </span>
            <h1 className="text-4xl font-bold">{post.title}</h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <article className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </article>

          {/* Navigation */}
          <div className="border-t pt-8 mt-12">
            <Link to="/blog">
              <Button variant="ghost" className="group">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}