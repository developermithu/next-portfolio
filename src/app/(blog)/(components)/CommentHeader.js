import React from 'react'
import { motion } from 'framer-motion'
import { Edit, Trash2 } from 'lucide-react'

export default function CommentHeader({ comment, user, onEdit, onDelete }) {
    return (
        <div className="flex items-start justify-between mb-2">
            <div className="flex items-start mb-2">
                <img
                    src={comment.user?.image || 'https://placehold.it/60x60'}
                    alt={comment.user?.name}
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                    <p className="font-semibold">{comment.user?.name}</p>
                    <p className="text-sm text-gray-400">
                        {comment.created_at}
                    </p>
                </div>
            </div>

            {comment.user?.id === user?.id && (
                <div className="flex space-x-3">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-[#4fd1c5]"
                        onClick={onEdit}>
                        <Edit size={20} />
                    </motion.button>
                    
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-red-500"
                        onClick={onDelete}>
                        <Trash2 size={20} />
                    </motion.button>
                </div>
            )}
        </div>
    )
}
