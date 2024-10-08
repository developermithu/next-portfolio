'use client'

import InputError from '@/components/InputError'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Page = () => {
    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <>
            <AuthSessionStatus className="mb-4" status={status} />

            <div className="min-h-screen bg-[#1a1f2e] flex items-center justify-center px-4">
                <motion.div
                    className="max-w-md w-full"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    <motion.div
                        className="bg-[#2a2f3e] rounded-lg shadow-xl overflow-hidden"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        <div className="p-8">
                            <motion.h2
                                className="text-3xl font-bold text-center text-white mb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}>
                                Reset Your Password
                            </motion.h2>

                            <form onSubmit={submitForm}>
                                <motion.div
                                    className="mb-6"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}>
                                    <label
                                        htmlFor="email"
                                        className="block text-[#4fd1c5] mb-2">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={e =>
                                                setEmail(e.target.value)
                                            }
                                            className="w-full px-4 py-2 bg-[#1a1f2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4fd1c5]"
                                            autoFocus
                                            required
                                        />
                                        <Mail
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4fd1c5]"
                                            size={18}
                                        />
                                    </div>

                                    <InputError
                                        messages={errors.email}
                                        className="mt-2"
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className="w-full bg-[#4fd1c5] text-[#1a1f2e] py-2 rounded-lg font-semibold hover:bg-[#3ab7ac] transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}>
                                    Submit
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default Page
