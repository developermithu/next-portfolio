'use client'

import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const VerifyEmailContent = () => {
    const { logout, resendEmailVerification } = useAuth({
        middleware: 'auth',
        redirectIfAuthenticated: '/dashboard',
    })

    const [status, setStatus] = useState(null)

    return (
        <>
            <div className="min-h-screen bg-[#1a1f2e] flex items-center justify-center px-4">
                <motion.div
                    className="w-full max-w-md"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    <motion.div
                        className="bg-[#2a2f3e] rounded-lg shadow-xl overflow-hidden"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        <div className="p-8">
                            <div className="mb-4 text-sm text-white">
                                Thanks for signing up! Before getting started,
                                could you verify your email address by clicking
                                on the link we just emailed to you? If you
                                didn't receive the email, we will gladly send
                                you another.
                            </div>

                            {status === 'verification-link-sent' && (
                                <div className="mb-4 font-medium text-sm text-[#4fd1c5]">
                                    A new verification link has been sent to the
                                    email address you provided during
                                    registration.
                                </div>
                            )}

                            <div className="flex gap-6 justify-between items-center mt-4">
                                <motion.button
                                    type="submit"
                                    className="w-full bg-[#4fd1c5] text-[#1a1f2e] py-2 rounded-lg font-semibold hover:bg-[#3ab7ac] transition-colors flex items-center justify-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() =>
                                        resendEmailVerification({ setStatus })
                                    }>
                                    Resend Verification Email
                                    <ArrowRight className="ml-2" size={18} />
                                </motion.button>

                                <button
                                    type="button"
                                    className="text-[#4fd1c5] font-semibold hover:underline"
                                    onClick={logout}>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default VerifyEmailContent
