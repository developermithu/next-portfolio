'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Markdown from 'react-markdown'
import DOMPurify from 'dompurify'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.css'
import CommentForm from './CommentForm'
import CommentHeader from './CommentHeader'
import axios from '@/lib/axios'

export default function Comment({
    comment,
    postSlug,
    user,
    onUpdate,
    onDelete,
}) {
    const [isEditing, setIsEditing] = useState(false)
    const [isReplying, setIsReplying] = useState(false)
    const [editedBody, setEditedBody] = useState(comment.body)
    const [replyBody, setReplyBody] = useState('')
    const [editError, setEditError] = useState(null)
    const [replyError, setReplyError] = useState(null)

    const handleEdit = async newBody => {
        try {
            await axios.put(`/api/posts/${postSlug}/comments/${comment.id}`, {
                body: newBody,
            })
            setEditedBody(newBody)
            onUpdate()
            setEditError(null)
            setIsEditing(false)
        } catch (error) {
            console.error('Edit error:', error)
            if (error.response?.data?.message) {
                setEditError(error.response.data.message)
            } else {
                setEditError('Something went wrong. Please try again.')
            }
        }
    }

    const handleReply = async replyText => {
        try {
            await axios.post(`/api/posts/${postSlug}/comments`, {
                body: replyText,
                parent_id: comment.id,
            })
            setReplyBody('')
            onUpdate()
            setReplyError(null)
            setIsReplying(false)
        } catch (error) {
            console.error('Reply error:', error)
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
            <CommentHeader
                comment={comment}
                user={user}
                onEdit={() => setIsEditing(!isEditing)}
                onDelete={() => onDelete(comment.id)}
            />

            {isEditing ? (
                <CommentForm
                    initialValue={editedBody}
                    onSubmit={handleEdit}
                    onCancel={() => setIsEditing(false)}
                    error={editError}
                    buttonText="Save"
                />
            ) : (
                <div>
                    <Markdown
                        rehypePlugins={[rehypeHighlight]}
                        className="prose prose-invert text-white">
                        {DOMPurify.sanitize(comment.body)}
                    </Markdown>
                </div>
            )}

            {comment.parent_id === null && !isReplying && !isEditing && (
                <motion.button
                    className="text-[#4fd1c5] hover:underline"
                    whileHover={{ x: 5 }}
                    onClick={() => setIsReplying(!isReplying)}>
                    Reply
                </motion.button>
            )}

            {isReplying && (
                <CommentForm
                    onSubmit={handleReply}
                    onCancel={() => setIsReplying(false)}
                    error={replyError}
                    buttonText="Send Reply"
                    placeholder="Write a reply..."
                />
            )}

            {comment.replies?.map(reply => (
                <Comment
                    key={reply.id}
                    comment={reply}
                    postSlug={postSlug}
                    user={user}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}
