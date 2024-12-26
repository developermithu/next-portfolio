'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ArrowLeft,
    Calendar,
    Clock,
    Share2,
    ThumbsUp,
    Search,
    ChevronUp,
    Menu,
    Eye,
    Send,
    LoaderCircle,
} from 'lucide-react'
import useSWR from 'swr'
import axios from '@/lib/axios'
import Tags from '@/app/(blog)/(components)/Tags'
import RelatedPosts from '@/app/(blog)/(components)/RelatedPosts'
import SimplePaginate from '@/components/SimplePaginate'
import Author from '@/app/(blog)/(components)/Author'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/navigation'
import Comment from '@/app/(blog)/(components)/Comment'
import toast, { Toaster } from 'react-hot-toast'
import Script from 'next/script'

const fetcher = url => axios.get(url).then(res => res.data)

const PostContent = ({ slug }) => {
    const { user } = useAuth({ middleware: 'guest' })
    const router = useRouter()

    const [activeSection, setActiveSection] = useState('introduction')
    const [searchQuery, setSearchQuery] = useState('')
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [showTableOfContents, setShowTableOfContents] = useState(false)
    const [isLiking, setIsLiking] = useState(false)
    const [commentBody, setCommentBody] = useState('')
    const [isSubmittingComment, setIsSubmittingComment] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const { data, error, mutate } = useSWR(`/api/posts/${slug}`, fetcher)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.pageYOffset > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const autoResize = e => {
        e.style.height = 'auto'
        e.style.height = `${e.scrollHeight}px`
    }

    const handleCommentSubmit = async e => {
        e.preventDefault()
        setIsSubmittingComment(true)

        if (!user) {
            router.push('/login')
            return
        }

        try {
            await axios.post(`/api/posts/${slug}/comments`, {
                body: commentBody,
            })
            mutate()
            setCommentBody('')
            setErrorMessage(null)
            toast.success('Comment created successfully!')
        } catch (error) {
            if (error.response?.data?.message) {
                setErrorMessage(error.response.data.message)
            } else {
                toast.error('Something went wrong. Please try again.')
            }
        } finally {
            setIsSubmittingComment(false)
        }
    }

    const handleCommentDelete = async commentId => {
        if (!confirm('Are you sure you want to delete this comment?')) {
            return
        }

        try {
            await axios.delete(`/api/posts/${slug}/comments/${commentId}`)
            mutate()
        } catch (error) {
            console.error('Error deleting comment:', error)
        }
    }

    const handleToggleLike = async () => {
        try {
            setIsLiking(true)
            await axios.post(`/api/posts/${slug}/toggle-like`)
            mutate()
        } catch (err) {
            console.error('Error toggling like:', err)
        } finally {
            setIsLiking(false)
        }
    }

    if (error) return <div>Failed to load post</div>
    if (!data) return (
        <div className="min-h-screen bg-[#1a1f2e] text-white pt-20">
            <div className="container px-6 py-12 mx-auto">Loading...</div>
        </div>
    )

    const { post, is_liked, relatedPosts, previous_post, next_post } = data

    const articleStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        author: {
            '@type': 'Person',
            name: post.author?.name || 'Mithu',
        },
        datePublished: post.created_at,
        dateModified: post.updated_at,
        publisher: {
            '@type': 'Organization',
            name: 'Developer Mithu',
            logo: {
                '@type': 'ImageObject',
                url: '/logo.png'
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${process.env.NEXT_PUBLIC_APP_URL}/blog/posts/${slug}`
        },
        keywords: post.tags?.map(tag => tag.name).join(', ')
    }

    return (
        <>
            <Script id="article-structured-data" type="application/ld+json">
                {JSON.stringify(articleStructuredData)}
            </Script>

            <article className="min-h-screen bg-[#1a1f2e] text-white pt-20">
                <motion.header
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#2a2f3e] py-4 sticky top-0 z-10">
                    <nav className="container flex justify-between items-center px-6 mx-auto">
                        <motion.a
                            href="/blog"
                            className="flex items-center text-[#4fd1c5] hover:underline"
                            whileHover={{ x: -5 }}>
                            <ArrowLeft className="mr-2" />
                            Back to Blog
                        </motion.a>
                        <h1 className="text-2xl font-bold">Tech Blog</h1>
                        <div className="flex items-center space-x-4">
                            <motion.button
                                className="bg-[#4fd1c5] disabled:opacity-50 disabled:pointer-events-none text-[#1a1f2e] px-4 py-2 rounded-full flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleToggleLike}
                                disabled={isLiking}>
                                {isLiking ? (
                                    <LoaderCircle className="mr-2 animate-spin" />
                                ) : (
                                    <ThumbsUp
                                        className={`mr-2 ${is_liked ? 'fill-current' : ''}`}
                                    />
                                )}
                                {post.likes}
                            </motion.button>
                            <motion.button
                                className="bg-[#4fd1c5] text-[#1a1f2e] px-4 py-2 rounded-full flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}>
                                <Share2 className="mr-2" />
                                Share
                            </motion.button>
                        </div>
                    </nav>
                </motion.header>

                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    toastOptions={{ duration: 3000 }}
                />

                <main className="container px-6 py-12 mx-auto">
                    <div className="flex flex-col gap-12 lg:flex-row">
                        <motion.div
                            className="lg:w-2/3"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}>
                            <header className="mb-8">
                                <h1 className="mb-6 text-4xl font-bold" itemProp="headline">
                                    {post.title}
                                </h1>
                                <div className="flex items-center text-gray-400">
                                    <time dateTime={post.published_at} className="flex items-center mr-4">
                                        <Calendar className="mr-2" />
                                        {post.published_at}
                                    </time>
                                    <div className="flex items-center mr-4">
                                        <Clock className="mr-2" />
                                        <span>{post.reading_time} min read</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Eye className="mr-2" />
                                        <span>{post.views} views</span>
                                    </div>
                                </div>
                            </header>

                            <div
                                className="mb-12 max-w-none prose prose-invert"
                                itemProp="articleBody">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: post.content,
                                    }}
                                />
                            </div>

                            <footer>
                                <Author author={post.author} />

                                <section className="mb-12">
                                    <h2 className="mb-4 text-2xl font-semibold">
                                        Comments ({post.comments?.length})
                                    </h2>

                                    <form onSubmit={handleCommentSubmit} className="mb-8">
                                        <div className="mb-4">
                                            <textarea
                                                value={commentBody}
                                                onChange={e => setCommentBody(e.target.value)}
                                                onInput={e => autoResize(e.target)}
                                                placeholder="Add a comment..."
                                                className={`w-full duration-100 bg-[#2a2f3e] text-white p-4 rounded-lg focus:outline-none focus:ring-1 focus:border-[#4fd1c5] focus:ring-[#4fd1c5] ${
                                                    errorMessage &&
                                                    'border-red-500 focus:ring-red-500 focus:border-red-500'
                                                }`}
                                                rows={3}
                                            />

                                            {errorMessage && (
                                                <p className="text-red-500">{errorMessage}</p>
                                            )}
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmittingComment}
                                            className="bg-[#4fd1c5] text-[#1a1f2e] disabled:opacity-50 disabled:pointer-events-none px-6 py-2 rounded-full flex items-center"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}>
                                            <Send className="mr-2" />
                                            {isSubmittingComment ? 'Submiting..' : 'Submit Comment'}
                                        </motion.button>
                                    </form>

                                    {post.comments?.map(comment => (
                                        <Comment
                                            key={comment.id}
                                            comment={comment}
                                            postSlug={slug}
                                            user={user}
                                            onUpdate={mutate}
                                            onDelete={handleCommentDelete}
                                        />
                                    ))}
                                </section>

                                <SimplePaginate
                                    previous_post={previous_post}
                                    next_post={next_post}
                                />
                            </footer>
                        </motion.div>

                        <motion.aside
                            className="lg:w-1/3"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}>
                            <div className="sticky top-20">
                                <div className="mb-8">
                                    <h2 className="mb-4 text-xl font-semibold">Search</h2>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search posts..."
                                            value={searchQuery}
                                            onChange={e => setSearchQuery(e.target.value)}
                                            className="w-full bg-[#2a2f3e] text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4fd1c5]"
                                            aria-label="Search posts"
                                        />
                                        <Search className="absolute right-3 top-1/2 text-gray-400 transform -translate-y-1/2" />
                                    </div>
                                </div>

                                <Tags post={post} />
                                <RelatedPosts relatedPosts={relatedPosts} />
                            </div>
                        </motion.aside>
                    </div>
                </main>

                <AnimatePresence>
                    {showScrollTop && (
                        <motion.button
                            className="fixed bottom-8 right-8 bg-[#4fd1c5] text-[#1a1f2e] p-3 rounded-full shadow-lg"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
                            <h3 className="mb-4 text-xl font-semibold">Table of Contents</h3>
                            <ul className="space-y-2">
                                {[
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
                                ].map(item => (
                                    <motion.li
                                        key={item.id}
                                        className={`cursor-pointer ${
                                            activeSection === item.id ? 'text-[#4fd1c5]' : 'text-gray-400'
                                        }`}
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
            </article>
        </>
    )
}

export default PostContent
