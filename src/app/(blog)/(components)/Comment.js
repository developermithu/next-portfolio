'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Edit, Trash2, Send } from 'lucide-react'
import axios from '@/lib/axios'
import Markdown from 'react-markdown'
import DOMPurify from 'dompurify'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.css'

export default function Comment({ comment, postId, user, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedBody, setEditedBody] = useState(comment.body)
    const [isReplying, setIsReplying] = useState(false)
    const [replyBody, setReplyBody] = useState('')

    const [editError, setEditError] = useState(null)
    const [replyError, setReplyError] = useState(null)

    const editTextareaRef = useRef(null)
    const replyTextareaRef = useRef(null)

    const autoResize = textarea => {
        if (textarea && textarea.style) {
            textarea.style.height = 'auto'
            textarea.style.height = `${textarea.scrollHeight}px`
        }
    }

    // Focus edit form when comment is edited
    useEffect(() => {
        if (isEditing && editTextareaRef.current) {
            editTextareaRef.current.focus()
            autoResize(editTextareaRef.current)
            editTextareaRef.current.setSelectionRange(
                editedBody.length,
                editedBody.length,
            ) // Set cursor at the end of the text
        }
    }, [isEditing])

    // Focus reply form when comment is replied
    useEffect(() => {
        if (isReplying && replyTextareaRef.current) {
            replyTextareaRef.current.focus()
            autoResize(replyTextareaRef.current)
            replyTextareaRef.current.setSelectionRange(
                replyBody.length,
                replyBody.length,
            ) // Set cursor at the end of the text
        }
    }, [isReplying])

    // Edit comment & reply
    const handleEdit = async () => {
        try {
            await axios.put(`/api/posts/${postId}/comments/${comment.id}`, {
                body: editedBody,
            })
            setIsEditing(false)
            onUpdate()
            setEditError(null)
        } catch (error) {
            if (error.response?.data?.message) {
                setEditError(error.response.data.message)
            } else {
                setEditError('Something went wrong. Please try again.')
            }
        }
    }

    // Basically create another comment with parent_id
    const handleReply = async () => {
        try {
            await axios.post(`/api/posts/${postId}/comments`, {
                body: replyBody,
                parent_id: comment.id,
            })
            setIsReplying(false)
            setReplyBody('')
            onUpdate()
            setReplyError(null)
        } catch (error) {
            if (error.response?.data?.message) {
                setReplyError(error.response.data.message)
            } else {
                setReplyError('Something went wrong. Please try again.')
            }
        }
    }

    return (
        <div
            className={`${comment.parent_id === null ? 'mb-6 bg-[#2a2f3e] p-4 rounded-lg' : 'mt-4 ml-6 bg-[#1a1f2e] p-3 rounded-lg'} `}>
            <div className="flex items-start justify-between mb-2">
                {/* Comment author and date */}
                <div className="flex items-start mb-2">
                    <img
                        src={
                            comment.user?.image
                                ? comment.user?.image
                                : 'https://placehold.it/60x60'
                        }
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

                {/* Edit and delete buttons */}
                {comment.user?.id === user?.id && (
                    <div className="flex space-x-3">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-[#4fd1c5]"
                            onClick={() => setIsEditing(!isEditing)}>
                            <Edit size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-red-500"
                            onClick={() => onDelete(comment.id)}>
                            <Trash2 size={20} />
                        </motion.button>
                    </div>
                )}
            </div>

            {/* Comment body and edit form */}
            {isEditing ? (
                <div>
                    <div className="mb-2">
                        <textarea
                            ref={editTextareaRef}
                            value={editedBody}
                            onChange={e => setEditedBody(e.target.value)}
                            onInput={e => autoResize(e.target)}
                            className="w-full duration-100 bg-[#2a2f3e] text-white p-2 rounded-lg focus:outline-none focus:ring-1 focus:border-[#4fd1c5] focus:ring-[#4fd1c5]"
                        />

                        {editError && (
                            <p className="text-red-500 text-sm">{editError}</p>
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        <motion.button
                            onClick={handleEdit}
                            className="bg-[#4fd1c5] text-[#1a1f2e] px-4 py-1 rounded-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            Save
                        </motion.button>

                        <motion.button
                            onClick={() => setIsEditing(false)}
                            className="text-[#4fd1c5] hover:underline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            Cancel
                        </motion.button>
                    </div>
                </div>
            ) : (
                <div>
                    <Markdown
                        rehypePlugins={[rehypeHighlight]}
                        className="prose prose-invert text-white">
                        {DOMPurify.sanitize(comment.body)}
                    </Markdown>
                </div>
            )}

            {/* Only parent comments can reply */}
            {comment.parent_id === null && !isReplying && !isEditing && (
                <motion.button
                    className="text-[#4fd1c5] hover:underline"
                    whileHover={{ x: 5 }}
                    onClick={() => setIsReplying(!isReplying)}>
                    Reply
                </motion.button>
            )}

            {/* Reply form */}
            {isReplying && (
                <div className="mt-2">
                    <div className="mb-2">
                        <textarea
                            ref={replyTextareaRef}
                            value={replyBody}
                            onChange={e => setReplyBody(e.target.value)}
                            onInput={e => autoResize(e.target)}
                            className="w-full bg-[#1a1f2e] text-white p-2 rounded-lg focus:outline-none focus:ring-1 focus:border-[#4fd1c5] focus:ring-[#4fd1c5] duration-100"
                            placeholder="Write a reply..."
                        />

                        {replyError && (
                            <p className="text-red-500 text-sm">{replyError}</p>
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        <motion.button
                            onClick={handleReply}
                            className="bg-[#4fd1c5] text-[#1a1f2e] px-4 py-1 rounded-full flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            <Send className="mr-2" size={14} />
                            Send Reply
                        </motion.button>

                        {/* Cancel button */}
                        <motion.button
                            onClick={() => setIsReplying(false)}
                            className="text-[#4fd1c5] hover:underline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            Cancel
                        </motion.button>
                    </div>
                </div>
            )}

            {/* Replies */}
            {comment.replies?.map(reply => (
                <Comment
                    key={reply.id}
                    comment={reply}
                    postId={postId}
                    user={user}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}
