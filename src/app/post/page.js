'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Clock,
    Share2,
    ThumbsUp,
    Search,
    Tag,
    ChevronRight,
    ChevronUp,
    Menu,
    Eye,
    Edit,
    Trash2,
    Send,
} from 'lucide-react'

export default function PostPage() {
    const [activeSection, setActiveSection] = useState('introduction')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedTag, setSelectedTag] = useState('')
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [showTableOfContents, setShowTableOfContents] = useState(false)
    const [liked, setLiked] = useState(false)
    const [commentContent, setCommentContent] = useState('')

    const blogPost = {
        title: 'The Future of Web Development: Trends to Watch',
        date: 'May 15, 2023',
        readTime: '10 min read',
        author: {
            name: 'Mithu Das',
            avatar: '/placeholder.svg',
            bio: 'Full-stack developer passionate about creating innovative web solutions.',
        },
        content: `
      <h2 id="introduction">Introduction</h2>
      <p>The world of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we look to the future, several key trends are shaping the landscape of web development. In this post, we'll explore some of the most significant trends that developers should keep an eye on.</p>

      <h2 id="progressive-web-apps">1. Progressive Web Apps (PWAs)</h2>
      <p>Progressive Web Apps are becoming increasingly popular due to their ability to provide an app-like experience within a browser. PWAs offer features such as offline functionality, push notifications, and home screen installation, blurring the line between web and native applications.</p>

      <h2 id="ai-and-ml">2. Artificial Intelligence and Machine Learning</h2>
      <p>AI and ML are finding their way into web development, enabling more intelligent and personalized user experiences. From chatbots to predictive analytics, these technologies are revolutionizing how we interact with web applications.</p>

      <h2 id="webassembly">3. WebAssembly</h2>
      <p>WebAssembly allows developers to run high-performance applications in web browsers at near-native speed. This technology opens up new possibilities for web-based games, video editing tools, and other compute-intensive applications.</p>

      <h2 id="serverless">4. Serverless Architecture</h2>
      <p>Serverless computing is gaining traction as it allows developers to focus on writing code without worrying about server management. This approach can lead to reduced costs, improved scalability, and faster development cycles.</p>

      <h2 id="voice-ui">5. Voice User Interfaces</h2>
      <p>With the rise of smart speakers and voice assistants, voice user interfaces are becoming an important consideration in web development. Integrating voice commands and responses into web applications can greatly enhance accessibility and user experience.</p>

      <h2 id="code-example">Code Example: Simple React Component</h2>
      <p>Here's a simple example of a React component that demonstrates some modern JavaScript features:</p>

      <pre><code class="language-jsx">
import React, { useState, useEffect } from 'react';

const FutureTechList = ({ technologies }) => {
  const [filteredTech, setFilteredTech] = useState([]);

  useEffect(() => {
    setFilteredTech(technologies.filter(tech => tech.year >= 2023));
  }, [technologies]);

  return (
    <ul>
      {filteredTech.map(tech => (
        <li key={tech.id}>{tech.name} - {tech.year}</li>
      ))}
    </ul>
  );
};

export default FutureTechList;
      </code></pre>

      <p>This component uses hooks like useState and useEffect, and demonstrates the use of arrow functions and modern array methods.</p>

      <h2 id="conclusion">Conclusion</h2>
      <p>As these trends continue to evolve, web developers must stay adaptable and continue learning to remain at the forefront of the industry. The future of web development is exciting, and these trends are just the beginning of what's to come.</p>
    `,
        likes: 127,
        views: 1503,
        comments: [
            {
                id: 1,
                author: 'Jane Doe',
                content:
                    "Great article! I'm particularly excited about the potential of WebAssembly.",
                replies: [
                    {
                        id: 101,
                        author: 'Mithu Das',
                        content:
                            'Thanks, Jane! WebAssembly is indeed a game-changer.',
                    },
                ],
            },
            {
                id: 2,
                author: 'John Smith',
                content:
                    "I'd love to see more examples of AI in web development. Any recommendations?",
                replies: [],
            },
        ],
        tags: [
            'Web Development',
            'PWA',
            'AI',
            'WebAssembly',
            'Serverless',
            'Voice UI',
        ],
    }

    const tableOfContents = [
        { id: 'introduction', title: 'Introduction' },
        { id: 'progressive-web-apps', title: '1. Progressive Web Apps (PWAs)' },
        {
            id: 'ai-and-ml',
            title: '2. Artificial Intelligence and Machine Learning',
        },
        { id: 'webassembly', title: '3. WebAssembly' },
        { id: 'serverless', title: '4. Serverless Architecture' },
        { id: 'voice-ui', title: '5. Voice User Interfaces' },
        { id: 'code-example', title: 'Code Example: Simple React Component' },
        { id: 'conclusion', title: 'Conclusion' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.pageYOffset > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleCommentSubmit = e => {
        e.preventDefault()
        // Add logic to submit the comment
        console.log('Comment submitted:', commentContent)
        setCommentContent('')
    }

    return (
        <div className="min-h-screen bg-[#1a1f2e] text-white pt-20">
            <motion.header
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#2a2f3e] py-4 sticky top-0 z-10">
                <div className="container flex items-center justify-between px-6 mx-auto">
                    <motion.a
                        href="/"
                        className="flex items-center text-[#4fd1c5] hover:underline"
                        whileHover={{ x: -5 }}>
                        <ArrowLeft className="mr-2" />
                        Back to Home
                    </motion.a>
                    <h1 className="text-2xl font-bold">Tech Blog</h1>
                    <div className="flex items-center space-x-4">
                        <motion.button
                            className="bg-[#4fd1c5] text-[#1a1f2e] px-4 py-2 rounded-full flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setLiked(!liked)}>
                            <ThumbsUp
                                className={`mr-2 ${liked ? 'fill-current' : ''}`}
                            />
                            {blogPost.likes + (liked ? 1 : 0)}
                        </motion.button>
                        <motion.button
                            className="bg-[#4fd1c5] text-[#1a1f2e] px-4 py-2 rounded-full flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            <Share2 className="mr-2" />
                            Share
                        </motion.button>
                    </div>
                </div>
            </motion.header>
            <main className="container px-6 py-12 mx-auto">
                <div className="flex flex-col gap-12 lg:flex-row">
                    <motion.div
                        className="lg:w-2/3"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        <h1 className="mb-6 text-4xl font-bold">
                            {blogPost.title}
                        </h1>
                        <div className="flex items-center mb-8 text-gray-400">
                            <Calendar className="mr-2" />
                            <span className="mr-4">{blogPost.date}</span>
                            <Clock className="mr-2" />
                            <span className="mr-4">{blogPost.readTime}</span>
                            <Eye className="mr-2" />
                            <span>{blogPost.views} views</span>
                        </div>
                        <div className="mb-12 prose prose-invert max-w-none">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: blogPost.content,
                                }}></div>
                        </div>

                        <motion.div
                            className="bg-[#2a2f3e] p-6 rounded-lg mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}>
                            <div className="flex items-center mb-4">
                                <img
                                    src={blogPost.author.avatar}
                                    alt={blogPost.author.name}
                                    className="w-16 h-16 mr-4 rounded-full"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {blogPost.author.name}
                                    </h3>
                                    <p className="text-gray-400">
                                        {blogPost.author.bio}
                                    </p>
                                </div>
                            </div>
                            <motion.button
                                className="bg-[#4fd1c5] text-[#1a1f2e] px-4 py-2 rounded-full"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}>
                                Follow
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}>
                            <h3 className="mb-4 text-2xl font-semibold">
                                Comments
                            </h3>
                            <form
                                onSubmit={handleCommentSubmit}
                                className="mb-8">
                                <textarea
                                    value={commentContent}
                                    onChange={e =>
                                        setCommentContent(e.target.value)
                                    }
                                    placeholder="Add a comment..."
                                    className="w-full bg-[#2a2f3e] text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4fd1c5] mb-4"
                                    rows={4}></textarea>
                                <motion.button
                                    type="submit"
                                    className="bg-[#4fd1c5] text-[#1a1f2e] px-6 py-2 rounded-full flex items-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}>
                                    <Send className="mr-2" />
                                    Submit Comment
                                </motion.button>
                            </form>
                            {blogPost.comments.map(comment => (
                                <div
                                    key={comment.id}
                                    className="mb-6 bg-[#2a2f3e] p-4 rounded-lg">
                                    <div className="flex items-start justify-between mb-2">
                                        <p className="font-semibold">
                                            {comment.author}
                                        </p>
                                        <div className="flex space-x-2">
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="text-[#4fd1c5]">
                                                <Edit size={16} />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="text-red-500">
                                                <Trash2 size={16} />
                                            </motion.button>
                                        </div>
                                    </div>
                                    <p className="mb-2">{comment.content}</p>
                                    <motion.button
                                        className="text-[#4fd1c5] hover:underline"
                                        whileHover={{ x: 5 }}>
                                        Reply
                                    </motion.button>
                                    {comment.replies.map(reply => (
                                        <div
                                            key={reply.id}
                                            className="mt-4 ml-6 bg-[#1a1f2e] p-3 rounded-lg">
                                            <div className="flex items-start justify-between mb-2">
                                                <p className="font-semibold">
                                                    {reply.author}
                                                </p>
                                                <div className="flex space-x-2">
                                                    <motion.button
                                                        whileHover={{
                                                            scale: 1.1,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.9,
                                                        }}
                                                        className="text-[#4fd1c5]">
                                                        <Edit size={14} />
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{
                                                            scale: 1.1,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.9,
                                                        }}
                                                        className="text-red-500">
                                                        <Trash2 size={14} />
                                                    </motion.button>
                                                </div>
                                            </div>
                                            <p>{reply.content}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="flex justify-between"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}>
                            <motion.a
                                href="#"
                                className="bg-[#2a2f3e] text-[#4fd1c5] px-6 py-3 rounded-full flex items-center"
                                whileHover={{ scale: 1.05, x: -5 }}
                                whileTap={{ scale: 0.95 }}>
                                <ArrowLeft className="mr-2" />
                                Previous Post
                            </motion.a>
                            <motion.a
                                href="#"
                                className="bg-[#2a2f3e] text-[#4fd1c5] px-6 py-3 rounded-full flex items-center"
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}>
                                Next Post
                                <ArrowRight className="ml-2" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="lg:w-1/3"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}>
                        <div className="sticky top-20">
                            <div className="mb-8">
                                <h3 className="mb-4 text-xl font-semibold">
                                    Search
                                </h3>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search posts..."
                                        value={searchQuery}
                                        onChange={e =>
                                            setSearchQuery(e.target.value)
                                        }
                                        className="w-full bg-[#2a2f3e] text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4fd1c5]"
                                    />
                                    <Search className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="mb-4 text-xl font-semibold">
                                    Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {blogPost.tags.map((tag, index) => (
                                        <motion.span
                                            key={index}
                                            className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
                                                selectedTag === tag
                                                    ? 'bg-[#4fd1c5] text-[#1a1f2e]'
                                                    : 'bg-[#2a2f3e] text-[#4fd1c5]'
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
                                            <Tag className="inline-block w-4 h-4 mr-1" />
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-4 text-xl font-semibold">
                                    Related Posts
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        'Mastering React Hooks',
                                        'The Power of GraphQL',
                                        'Building Scalable Node.js Apps',
                                    ].map((post, index) => (
                                        <motion.li
                                            key={index}
                                            className="bg-[#2a2f3e] p-3 rounded"
                                            whileHover={{ scale: 1.03 }}>
                                            <a
                                                href="#"
                                                className="text-[#4fd1c5] hover:underline flex items-center justify-between">
                                                {post}
                                                <ChevronRight className="w-4 h-4" />
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        className="fixed bottom-8 right-8 bg-[#4fd1c5] text-[#1a1f2e] p-3 rounded-full shadow-lg"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <ChevronUp />
                    </motion.button>
                )}
            </AnimatePresence>
            <motion.button
                className="fixed top-1/2 right-8 bg-[#4fd1c5] text-[#1a1f2e] p-3 rounded-full shadow-lg"
                onClick={() => setShowTableOfContents(!showTableOfContents)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Menu />
            </motion.button>
            <AnimatePresence>
                {showTableOfContents && (
                    <motion.div
                        className="fixed top-1/2 right-24 bg-[#2a2f3e] p-6 rounded-lg shadow-lg max-w-xs"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}>
                        <h3 className="mb-4 text-xl font-semibold">
                            Table of Contents
                        </h3>
                        <ul className="space-y-2">
                            {tableOfContents.map(item => (
                                <motion.li
                                    key={item.id}
                                    className={`cursor-pointer ${activeSection === item.id ? 'text-[#4fd1c5]' : 'text-gray-400'}`}
                                    onClick={() => {
                                        setActiveSection(item.id)
                                        document
                                            .getElementById(item.id)
                                            ?.scrollIntoView({
                                                behavior: 'smooth',
                                            })
                                    }}
                                    whileHover={{ x: 5 }}>
                                    {item.title}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
