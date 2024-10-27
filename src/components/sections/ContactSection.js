'use client'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <section id="contact" className="py-20 bg-[#1a1f2e]">
            <div className="container px-6 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-4xl font-bold text-center text-white">
                    Get in Touch
                </motion.h2>
                <div className="flex flex-col gap-12 md:flex-row">
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}>
                        <h3 className="text-2xl font-semibold mb-4 text-[#4fd1c5]">
                            Let's Create Something Amazing
                        </h3>
                        <p className="mb-6 text-gray-400">
                            Have a project in mind or just want to chat about
                            the latest in tech? I'm always excited to
                            collaborate on innovative ideas and bring visions to
                            life.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-[#4fd1c5] flex items-center justify-center mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-[#1a1f2e]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <span className="text-white">
                                    developermithu@gmail.com
                                </span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-[#4fd1c5] flex items-center justify-center mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-[#1a1f2e]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <span className="text-white">
                                    Sylhet, Bangladesh
                                </span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}>
                        <form className="space-y-4">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-1 text-sm font-medium text-gray-400">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 bg-[#2a2f3e] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#4fd1c5]"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block mb-1 text-sm font-medium text-gray-400">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    className="w-full px-3 py-2 bg-[#2a2f3e] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#4fd1c5]"
                                    required />
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full bg-[#4fd1c5] text-[#1a1f2e] font-bold py-2 px-4 rounded-md hover:bg-[#3ac0b4] transition-colors duration-300 flex items-center justify-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}>
                                Send Message
                                <Send className="w-5 h-5 ml-2" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
