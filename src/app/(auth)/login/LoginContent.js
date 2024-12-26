'use client'

import InputError from '@/components/InputError'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail } from 'lucide-react'

const LoginContent = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            setErrors,
            setStatus,
        })
    }

    return (
        <>
            <AuthSessionStatus className="mb-4" status={status} />
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
                            <motion.h2
                                className="mb-6 text-3xl font-bold text-center text-white"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}>
                                Welcome Back
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

                                <motion.div
                                    className="mb-6"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}>
                                    <label
                                        htmlFor="password"
                                        className="block text-[#4fd1c5] mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            id="password"
                                            value={password}
                                            onChange={e =>
                                                setPassword(e.target.value)
                                            }
                                            className="w-full px-4 py-2 bg-[#1a1f2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4fd1c5]"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4fd1c5]">
                                            {showPassword ? (
                                                <EyeOff size={18} />
                                            ) : (
                                                <Eye size={18} />
                                            )}
                                        </button>

                                        <InputError
                                            messages={errors.password}
                                            className="mt-2"
                                        />
                                    </div>
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className="w-full bg-[#4fd1c5] text-[#1a1f2e] py-2 rounded-lg font-semibold hover:bg-[#3ab7ac] transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}>
                                    Log In
                                </motion.button>
                            </form>

                            <motion.div
                                className="mt-6 text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}>
                                <Link
                                    href="/forgot-password"
                                    className="text-[#4fd1c5] hover:underline">
                                    Forgot password?
                                </Link>
                            </motion.div>
                        </div>
                        <motion.div
                            className="bg-[#1a1f2e] p-4 text-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}>
                            <p className="text-white">
                                Don't have an account?{' '}
                                <Link
                                    href="/register"
                                    className="text-[#4fd1c5] font-semibold hover:underline">
                                    Sign up
                                </Link>
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default LoginContent
