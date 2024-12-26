'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Search,
    Filter,
    ArrowRight,
    Calendar,
    Clock,
    User,
    ChevronDown,
} from 'lucide-react'
import Link from 'next/link'
import axios from '@/lib/axios'

const blogPosts = [
    {
        id: 1,
        title: 'The Future of Web Development: Trends to Watch',
        excerpt:
            'Explore the cutting-edge trends shaping the future of web development, from AI integration to serverless architecture.',
        author: 'Mithu Das',
        date: 'May 15, 2023',
        readTime: '10 min read',
        category: 'Web Development',
        tags: ['AI', 'Serverless', 'PWA'],
        image: 'https://placehold.co/600x400',
    },
    {
        id: 2,
        title: 'Mastering React Hooks: A Comprehensive Guide',
        excerpt:
            'Dive deep into React Hooks and learn how to build more efficient and maintainable React applications.',
        author: 'Jane Smith',
        date: 'May 20, 2023',
        readTime: '15 min read',
        category: 'React',
        tags: ['Hooks', 'State Management', 'Performance'],
        image: 'https://placehold.co/600x400',
    },
    {
        id: 3,
        title: 'The Power of GraphQL: Revolutionizing API Design',
        excerpt:
            "Discover how GraphQL is changing the game in API design and why it's becoming the preferred choice for modern web applications.",
        author: 'John Doe',
        date: 'May 25, 2023',
        readTime: '12 min read',
        category: 'API',
        tags: ['GraphQL', 'REST', 'Performance'],
        image: 'https://placehold.co/600x400',
    },
]

const categories = [
    'All',
    'Web Development',
    'React',
    'API',
    'JavaScript',
    'CSS',
]

export default function BlogContent() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedTag, setSelectedTag] = useState('')
    const [showFilters, setShowFilters] = useState(false)

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        const response = await axios.get('/api/posts')
        setPosts(response.data.data)
    }

    return (
        <div className="min-h-screen bg-[#1a1f2e] text-white p-8 pt-20">
            <motion.div
                className="mx-auto mb-12 max-w-4xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <h1 className="mb-4 text-5xl font-bold text-center">
                    Our Blog
                </h1>
                <p className="text-xl text-center text-gray-400">
                    Discover the latest insights, tutorials, and trends in web
                    development
                </p>
            </motion.div>
            <motion.div
                className="mx-auto mb-12 max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full bg-[#2a2f3e] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4fd1c5]"
                    />
                    <Search className="absolute right-3 top-1/2 text-gray-400 transform -translate-y-1/2" />
                </div>

                <motion.button
                    className="w-full bg-[#2a2f3e] text-white px-4 py-3 rounded-lg flex items-center justify-between"
                    onClick={() => setShowFilters(!showFilters)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}>
                    <span className="flex items-center">
                        <Filter className="mr-2" />
                        Filters
                    </span>
                    <ChevronDown
                        className={`transform transition-transform ${
                            showFilters ? 'rotate-180' : ''}`}
                    />
                </motion.button>

                {/* Filters */}
                <AnimatePresence>
                    {showFilters && (
                        <motion.div
                            className="bg-[#2a2f3e] mt-2 p-4 rounded-lg"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}>
                            <div className="mb-4">
                                <h3 className="mb-2 text-lg font-semibold">
                                    Categories
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map(category => (
                                        <motion.button
                                            key={category}
                                            className={`px-3 py-1 rounded-full text-sm ${
                                                selectedCategory === category
                                                    ? 'bg-[#4fd1c5] text-[#1a1f2e]'
                                                    : 'bg-[#1a1f2e] text-[#4fd1c5]'
                                            }`}
                                            onClick={() =>
                                                setSelectedCategory(category)
                                            }
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}>
                                            {category}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-2 text-lg font-semibold">
                                    Tags
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {Array.from(
                                        new Set(
                                            blogPosts.flatMap(
                                                post => post.tags,
                                            ),
                                        ),
                                    ).map(tag => (
                                        <motion.button
                                            key={tag}
                                            className={`px-3 py-1 rounded-full text-xs ${
                                                selectedTag === tag
                                                    ? 'bg-[#3182ce] text-white'
                                                    : 'bg-[#1a1f2e] text-[#4fd1c5]'
                                            }`}
                                            onClick={() =>
                                                setSelectedTag(
                                                    tag === selectedTag
                                                        ? ''
                                                        : tag,
                                                )
                                            }
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}>
                                            #{tag}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Posts */}
            <motion.div
                className="mx-auto max-w-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}>
                <AnimatePresence>
                    {posts.map(post => (
                        <motion.div
                            key={post.id}
                            className="bg-[#2a2f3e] rounded-xl overflow-hidden shadow-lg mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}>
                            <div className="md:flex">
                                <div className="md:w-1/3">
                                    <img
                                        src={
                                            post.image_url
                                                ? post.image_url
                                                : 'https://placehold.co/600x400'
                                        }
                                        alt={post.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-6 md:w-2/3">
                                    <h2 className="mb-2 text-2xl font-semibold">
                                        {post.title}
                                    </h2>
                                    <p className="mb-4 text-gray-400">
                                        {post.content?.slice(0, 180) + ' ...'}
                                    </p>

                                    {post.tags?.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map(tag => (
                                                <span
                                                    key={tag.id}
                                                    className="bg-[#1a1f2e] text-[#4fd1c5] px-2 py-1 rounded-full text-xs">
                                                    #{tag.name}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center mb-4 text-sm text-gray-400">
                                        <User className="mr-2" />
                                        <span className="mr-4">
                                            {post.author?.name}
                                        </span>
                                        <Calendar className="mr-2" />
                                        <span className="mr-4">
                                            {post.published_at}
                                        </span>
                                        <Clock className="mr-2" />
                                        <span>
                                            {post.reading_time} min read
                                        </span>
                                    </div>

                                    <Link
                                        href={`/blog/posts/${post.slug}`}
                                        passHref>
                                        <motion.button
                                            className="bg-[#4fd1c5] text-[#1a1f2e] px-4 py-2 rounded-lg inline-flex items-center"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}>
                                            Read More
                                            <ArrowRight className="ml-2" />
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
