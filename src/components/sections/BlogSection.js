'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, User } from 'lucide-react'

const blogPosts = [
    {
        title: "The Future of Web Development: Trends to Watch",
        excerpt: "Explore the cutting-edge technologies and methodologies shaping the future of web development.",
        date: "May 15, 2023",
        author: "Mithu Das",
        image: "https://placehold.it/1920x1080"
    },
    {
        title: "Optimizing React Applications for Peak Performance",
        excerpt: "Learn advanced techniques to boost the speed and efficiency of your React-based projects.",
        date: "June 2, 2023",
        author: "Mithu Das",
        image: "https://placehold.it/1920x1080"
    },
    {
        title: "The Art of Writing Clean, Maintainable Code",
        excerpt: "Discover best practices for creating code that's not only functional but also easy to understand and maintain.",
        date: "June 20, 2023",
        author: "Mithu Das",
        image: "https://placehold.it/1920x1080"
    }
]

export default function BlogSection() {
    const [hoveredBlog, setHoveredBlog] = useState(null)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    }

    return (
        <>
            <section id="blog" className="py-20 bg-[#2a2f3e]">
                <div className="container px-6 mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-12 text-4xl font-bold text-center text-white"
                    >
                        Featured Blog Posts
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-8 md:grid-cols-3"
                    >
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-[#1a1f2e] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                onMouseEnter={() => setHoveredBlog(index)}
                                onMouseLeave={() => setHoveredBlog(null)}
                            >
                                <div className="relative overflow-hidden">
                                    <img src={post.image} alt={post.title} className="object-cover w-full h-48 transition-transform duration-300 transform hover:scale-110" />
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] to-transparent opacity-0"
                                        animate={{
                                            opacity: hoveredBlog === index ? 0.7 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="mb-2 text-xl font-semibold text-white">{post.title}</h3>
                                    <p className="mb-4 text-gray-400">{post.excerpt}</p>
                                    <div className="flex justify-between items-center text-sm text-[#4fd1c5]">
                                        <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {post.date}</span>
                                        <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {post.author}</span>
                                    </div>
                                </div>
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4fd1c5] to-[#3182ce]"
                                    initial={{ scaleX: 0 }}
                                    animate={{
                                        scaleX: hoveredBlog === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{ transformOrigin: "left" }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.a
                            href="/blog"
                            className="inline-flex items-center text-[#4fd1c5] hover:underline text-lg font-semibold"
                            whileHover={{ x: 5 }}
                        >
                            View All Posts <ArrowRight className="w-5 h-5 ml-2" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </>
    )
}