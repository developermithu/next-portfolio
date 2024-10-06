'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function SimplePaginate({ previous_post, next_post }) {
    return (
        <motion.div
            className="flex justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}>
            {previous_post ? (
                <Link href={`/blog/posts/${previous_post.id}`} passHref>
                    <motion.button
                        className="bg-[#2a2f3e] text-[#4fd1c5] px-6 py-3 rounded-full flex items-center"
                        whileHover={{ scale: 1.05, x: -5 }}
                        whileTap={{ scale: 0.95 }}>
                        <ArrowLeft className="mr-2" />
                        Previous Post
                    </motion.button>
                </Link>
            ) : (
                <motion.div className="bg-[#2a2f3e] text-[#4fd1c5] px-6 py-3 rounded-full flex items-center opacity-50 pointer-events-none">
                    <ArrowLeft className="mr-2" />
                    Previous Post
                </motion.div>
            )}

            {next_post ? (
                <Link href={`/blog/posts/${next_post.id}`} passHref>
                    <motion.button
                        className="bg-[#2a2f3e] text-[#4fd1c5] px-6 py-3 rounded-full flex items-center"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}>
                        Next Post
                        <ArrowRight className="ml-2" />
                    </motion.button>
                </Link>
            ) : (
                <motion.div className="bg-[#2a2f3e] text-[#4fd1c5] px-6 py-3 rounded-full flex items-center opacity-50 pointer-events-none">
                    Next Post
                    <ArrowRight className="ml-2" />
                </motion.div>
            )}
        </motion.div>
    )
}
