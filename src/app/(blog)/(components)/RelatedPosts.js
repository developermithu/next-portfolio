'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function RelatedPosts({ relatedPosts }) {
    return (
        <div>
            <h3 className="mb-4 text-xl font-semibold">Related Posts</h3>

            {relatedPosts?.length > 0 && (
                <ul className="space-y-4">
                    {relatedPosts.map(post => (
                        <motion.li
                            key={post.id}
                            className="bg-[#2a2f3e] p-3 rounded"
                            whileHover={{
                                scale: 1.03,
                            }}>
                            <Link
                                href={`/blog/posts/${post.id}`}
                                className="text-[#4fd1c5] hover:underline flex gap-1 items-center justify-between">
                                {post.title}
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            )}
        </div>
    )
}
