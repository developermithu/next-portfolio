import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function CommentForm({
    initialValue = '',
    onSubmit,
    onCancel,
    error,
    buttonText,
    placeholder = '',
}) {
    const [body, setBody] = useState(initialValue)
    const inputRef = useRef(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
            autoResize(inputRef.current)
            inputRef.current.setSelectionRange(body.length, body.length)
        }
    }, [])

    const autoResize = e => {
        if (e && e.style) {
            e.style.height = 'auto'
            e.style.height = `${e.scrollHeight}px`
        }
    }

    const handleSubmit = () => {
        onSubmit(body)
    }

    return (
        <div className="mt-2">
            <div className="mb-2">
                <textarea
                    ref={inputRef}
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    onInput={e => autoResize(e.target)}
                    className="w-full bg-[#1a1f2e] text-white p-2 rounded-lg focus:outline-none focus:ring-1 focus:border-[#4fd1c5] focus:ring-[#4fd1c5] duration-100"
                    placeholder={placeholder}
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            <div className="flex items-center gap-4">
                <motion.button
                    onClick={handleSubmit}
                    className="bg-[#4fd1c5] text-[#1a1f2e] px-4 py-1 rounded-full flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <Send className="mr-2" size={14} />
                    {buttonText}
                </motion.button>

                <motion.button
                    onClick={onCancel}
                    className="text-[#4fd1c5] hover:underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    Cancel
                </motion.button>
            </div>
        </div>
    )
}
