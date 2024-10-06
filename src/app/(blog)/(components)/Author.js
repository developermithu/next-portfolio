'use client'

import { motion } from 'framer-motion'

export default function Author({ author }) {
    return (
        <motion.div
            className="bg-[#2a2f3e] p-6 rounded-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <div className="flex items-center mb-4">
                <img
                    src={
                        author?.avatar
                            ? author.avatar
                            : 'https://via.placeholder.com/150'
                    }
                    alt={author?.name}
                    className="w-16 h-16 mr-4 rounded-full"
                />
                <div>
                    <h3 className="text-xl font-semibold">{author?.name}</h3>
                    <p className="text-gray-400">
                        Full-stack developer passionate about creating
                        innovative web solutions.
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
    )
}
