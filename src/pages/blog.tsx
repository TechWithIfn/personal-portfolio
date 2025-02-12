import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight, Tag } from 'lucide-react';
import { Button } from '../components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  examples?: {
    title: string;
    code: string;
    explanation: string;
  }[];
  images?: {
    url: string;
    caption: string;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Python for Data Science',
    excerpt: 'A comprehensive guide to begin your journey in data science using Python, including practical examples and real-world applications.',
    content: `**Advanced Guide to Python for Data Science and Machine Learning**

**Introduction**
Python has become the leading programming language for data science and machine learning due to its simplicity, vast ecosystem of libraries, and strong community support. This advanced guide will explore essential libraries, data manipulation techniques, visualization best practices, and machine learning fundamentals.

**1. Understanding Python's Role in Data Science**
Before diving into complex analysis, it's essential to understand Python's role in data science and how its core features support data manipulation, analysis, and visualization.

Key Features of Python for Data Science:
✅ Open-source and widely supported
✅ Extensive libraries for numerical computing and machine learning
✅ Excellent tools for data manipulation and visualization
✅ Scalable and efficient for handling large datasets

**2. Essential Python Libraries for Data Science**
**a) NumPy (Numerical Python)**
Provides support for multi-dimensional arrays and matrices
Optimized for high-performance numerical computing
Supports mathematical operations like linear algebra and statistical functions

**b) Pandas (Data Manipulation & Analysis)**
Built on top of NumPy for handling structured data (tables, CSV, JSON, SQL)
Offers DataFrame and Series objects for easy manipulation
Provides functions for data cleaning, merging, and transformation

**c) Matplotlib & Seaborn (Data Visualization)**
Matplotlib: Used for creating static, animated, and interactive graphs
Seaborn: Built on Matplotlib, specializes in statistical visualization

**d) Scikit-learn (Machine Learning)**
Provides pre-built algorithms for regression, classification, and clustering
Includes tools for model evaluation, feature selection, and data preprocessing
Supports cross-validation and hyperparameter tuning

**3. Data Manipulation with Pandas**
Data manipulation is one of the most critical aspects of data science. Pandas allows data scientists to:

✔ Load and clean datasets
✔ Perform filtering, grouping, and aggregation
✔ Handle missing data and outliers
✔ Merge multiple datasets

**Advanced Data Manipulation Techniques**
MultiIndexing: Working with hierarchical indexing in DataFrames
Pivot Tables: Reshaping data for better insights
Lambda Functions: Applying custom operations on data efficiently
Time Series Analysis: Working with datetime indexes and trends

**4. Working with Jupyter Notebooks**
Jupyter Notebooks provide an interactive coding environment where data scientists can:

Combine code, visualization, and documentation in a single document
Run code in separate cells, making debugging easier
Export results as HTML, PDF, or share via JupyterHub

**5. Data Visualization Best Practices**
Visualization is key to understanding data patterns and trends.

Key Guidelines:
📌 Choose the right chart type (bar, line, scatter, heatmap)
📌 Keep visualizations simple and avoid clutter
📌 Use meaningful color schemes for better interpretation
📌 Label axes and include descriptive titles

**Advanced Visualization Techniques:**
Pairplots & Heatmaps (for correlations)
Violin & Boxplots (for distribution analysis)
Subplots & Grid Layouts (for multi-chart comparisons)

**6. Machine Learning Fundamentals**
Machine learning is a core part of data science that enables predictive analysis.

**a) Types of Machine Learning**
🔹 Supervised Learning – Regression, classification (e.g., predicting house prices, spam detection)
🔹 Unsupervised Learning – Clustering, dimensionality reduction (e.g., customer segmentation)
🔹 Reinforcement Learning – Learning from rewards (e.g., AI in gaming)

**b) Key Steps in Machine Learning**
1️⃣ Data preprocessing (cleaning, handling missing values)
2️⃣ Feature engineering (creating new features from raw data)
3️⃣ Splitting data (training vs. testing sets)
4️⃣ Model selection and training
5️⃣ Model evaluation (accuracy, precision, recall, F1-score)
6️⃣ Hyperparameter tuning for optimization

**7. Advanced Machine Learning Concepts**
**Cross-validation**
Ensures the model generalizes well to unseen data by splitting data into multiple folds for testing.

**Feature Engineering**
Transforming raw data into meaningful features to improve model performance.

**Hyperparameter Tuning**
Optimizing parameters (e.g., learning rate, number of layers) to enhance model accuracy.

**8. Conclusion**
Python's flexibility, extensive libraries, and strong community make it the best language for data science and machine learning. By mastering these advanced concepts, you can analyze complex datasets, build predictive models, and gain deep insights from data.`,
    date: 'March 15, 2024',
    readTime: '10 min read',
    category: 'Data Science',
    tags: ['Python', 'Data Science', 'Machine Learning', 'Tutorial'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    examples: [
      {
        title: 'Basic Data Analysis with Pandas',
        code: `import pandas as pd
import numpy as np

# Load data
df = pd.read_csv('data.csv')

# Basic statistics
print(df.describe())

# Data visualization
import matplotlib.pyplot as plt
df['column'].hist()
plt.show()`,
        explanation: 'This example shows how to load data using Pandas and perform basic statistical analysis.'
      }
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
        caption: 'Data visualization example showing various chart types'
      },
      {
        url: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&q=80&w=1000',
        caption: 'Machine learning workflow diagram'
      }
    ]
  },
  {
    id: '2',
    title: 'Building Scalable Web Applications with Django',
    excerpt: 'Learn how to create robust and scalable web applications using Django framework, with real-world examples and best practices.',
    content: `Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. In this comprehensive tutorial, we'll explore how to build scalable web applications.

    Architecture Overview:
    Django follows the MVT (Model-View-Template) pattern:
    - Models: Define your data structure
    - Views: Handle business logic
    - Templates: Present data to users

    Setting Up a Django Project:
    We'll start with creating a virtual environment and installing Django. Then we'll explore project structure and configuration.

    Database Design Best Practices:
    1. Proper model relationships
    2. Efficient indexing
    3. Database optimization techniques
    4. Query optimization

    Authentication and Authorization:
    Security is crucial in web applications. We'll cover:
    - User authentication
    - Permission systems
    - Custom user models
    - Social authentication

    API Development:
    Modern web applications often need APIs. We'll explore:
    - REST framework setup
    - Serializers
    - ViewSets
    - Authentication
    - Rate limiting

    Performance Optimization:
    Learn how to make your Django application faster:
    - Caching strategies
    - Database optimization
    - Static file handling
    - Content Delivery Networks (CDN)

    Deployment Considerations:
    Proper deployment is crucial for scalability:
    - WSGI/ASGI servers
    - Load balancing
    - Docker containerization
    - CI/CD pipelines`,
    date: 'March 10, 2024',
    readTime: '15 min read',
    category: 'Web Development',
    tags: ['Django', 'Python', 'Web Development', 'Backend'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
    examples: [
      {
        title: 'Django Model Example',
        code: `from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey('User', on_delete=models.CASCADE)

    def __str__(self):
        return self.title`,
        explanation: 'This example shows how to create a basic Django model with relationships and field types.'
      }
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=1000',
        caption: 'Django MVT Architecture Diagram'
      },
      {
        url: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?auto=format&fit=crop&q=80&w=1000',
        caption: 'Database Schema Design Example'
      }
    ]
  },
  {
    id: '3',
    title: 'Advanced React Patterns and Best Practices',
    excerpt: 'Explore advanced React patterns and learn how to write better React applications with practical examples and performance optimization techniques.',
    content: `React has evolved significantly, and with it, patterns and best practices have emerged that help developers write better, more maintainable code.

    Component Patterns:
    1. Compound Components
    - Creating flexible and reusable component APIs
    - Managing internal state
    - Sharing context between components

    2. Render Props Pattern
    - Sharing code between components
    - Creating flexible component interfaces
    - Handling cross-cutting concerns

    3. Custom Hooks
    - Creating reusable logic
    - Managing component lifecycle
    - Handling side effects

    State Management:
    Understanding different state management approaches:
    - Local state with useState
    - Complex state with useReducer
    - Global state management
    - Server state management

    Performance Optimization:
    1. Code Splitting
    - Route-based splitting
    - Component-based splitting
    - Dynamic imports

    2. Memoization
    - useMemo
    - useCallback
    - React.memo

    3. Virtual DOM Optimization
    - Key prop usage
    - Avoiding unnecessary renders
    - Performance profiling

    Testing Strategies:
    - Unit testing components
    - Integration testing
    - End-to-end testing
    - Testing custom hooks

    Accessibility:
    - ARIA attributes
    - Keyboard navigation
    - Screen reader compatibility
    - Color contrast

    By mastering these patterns and practices, you'll be able to create more maintainable and performant React applications.`,
    date: 'March 5, 2024',
    readTime: '12 min read',
    category: 'Frontend',
    tags: ['React', 'JavaScript', 'Frontend', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
    examples: [
      {
        title: 'Custom Hook Example',
        code: `import { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}`,
        explanation: 'This custom hook demonstrates how to track window size changes in a reusable way.'
      }
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1000',
        caption: 'React Component Lifecycle Diagram'
      },
      {
        url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
        caption: 'Performance Optimization Techniques'
      }
    ]
  }
];

export function BlogPage() {
  const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
    const blogSection = document.getElementById('blog');
    if (blogSection) {
      const headerOffset = 64;
      const elementPosition = blogSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (selectedPost) {
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
            <Button
              variant="ghost"
              className="group"
              onClick={() => setSelectedPost(null)}
            >
              <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Blog
            </Button>

            {/* Header */}
            <header className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                {selectedPost.category}
              </span>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                {selectedPost.title}
              </h1>
              
              {/* Meta Information */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {selectedPost.readTime}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
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
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content with Enhanced Typography */}
            <article className="prose prose-lg max-w-none">
              {selectedPost.content.split('\n').map((paragraph, index) => {
                // Check if the paragraph is a main heading (wrapped in **)
                if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold mt-8 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                      {paragraph.trim().replace(/\*\*/g, '')}
                    </h1>
                  );
                }
                
                // Check if the paragraph is a section heading (starts with number)
                if (paragraph.trim().match(/^[0-9]+\./)) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph.trim()}
                    </h2>
                  );
                }

                // Check if the paragraph is a subsection heading
                if (paragraph.trim().match(/^[a-z]\)/i)) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                      {paragraph.trim()}
                    </h3>
                  );
                }

                // Regular paragraph with Roman (normal) font
                return (
                  <p key={index} className="text-muted-foreground font-normal leading-relaxed">
                    {paragraph.trim()}
                  </p>
                );
              })}

              {/* Code Examples */}
              {selectedPost.examples?.map((example, index) => (
                <div key={index} className="my-8 space-y-4">
                  <h3 className="text-xl font-semibold">{example.title}</h3>
                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm font-mono">{example.code}</code>
                  </pre>
                  <p className="text-muted-foreground font-normal">{example.explanation}</p>
                </div>
              ))}

              {/* Additional Images */}
              {selectedPost.images?.map((image, index) => (
                <figure key={index} className="my-8">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full rounded-lg"
                  />
                  <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </article>

            {/* Navigation */}
            <div className="border-t pt-8 mt-12">
              <Button
                variant="ghost"
                className="group"
                onClick={() => setSelectedPost(null)}
              >
                <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Blog
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              Thoughts, tutorials, and insights about Python, Web Development, and Data Analytics.
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group grid md:grid-cols-5 gap-6 items-start"
              >
                <div className="md:col-span-2 aspect-video overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="md:col-span-3 space-y-4">
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      {post.category}
                    </span>
                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground font-normal">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground font-medium"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    className="group font-semibold"
                    onClick={() => handleReadMore(post)}
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}