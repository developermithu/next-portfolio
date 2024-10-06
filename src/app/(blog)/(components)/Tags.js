'use client'

import { motion } from 'framer-motion'
import { Tag } from 'lucide-react'

export default function Tags({ post }) {
    return (
        <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold">Tags</h3>

            {post.tags?.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                        <motion.li
                            key={tag.id}
                            className={`px-3 py-1 rounded-full text-sm cursor-pointer bg-[#2a2f3e] text-[#4fd1c5]`}
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}>
                            <Tag className="inline-block w-4 h-4 mr-1" />
                            {tag.name}
                        </motion.li>
                    ))}
                </ul>
            )}
        </div>
    )
}
