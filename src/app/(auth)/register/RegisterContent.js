'use client'

import InputError from '@/components/InputError'
import { motion } from 'framer-motion'
import { Eye, EyeOff, User, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const RegisterContent = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    return (
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
                            Create Your Account
                        </motion.h2>

                        <form onSubmit={submitForm} className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}>
                                <label
                                    htmlFor="name"
                                    className="block text-[#4fd1c5] mb-2">
                                    Full Name
                                </label>

                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className="w-full px-4 py-2 bg-[#1a1f2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4fd1c5]"
                                        required
                                    />
                                    <User
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4fd1c5]"
                                        size={18}
                                    />

                                    <InputError
                                        messages={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}>
                                <label
                                    htmlFor="email"
                                    className="block text-[#4fd1c5] mb-2">
                                    Email
                                </label>

                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        className="w-full px-4 py-2 bg-[#1a1f2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4fd1c5]"
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
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1 }}>
                                <label
                                    htmlFor="password"
                                    className="block text-[#4fd1c5] mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={
                                            showPassword ? 'text' : 'password'
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
                                </div>

                                <InputError
                                    messages={errors.password}
                                    className="mt-2"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.2 }}>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-[#4fd1c5] mb-2">
                                    Confirm Password
                                </label>

                                <div className="relative">
                                    <input
                                        type={
                                            showConfirmPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        id="confirmPassword"
                                        value={passwordConfirmation}
                                        onChange={e =>
                                            setPasswordConfirmation(
                                                e.target.value,
                                            )
                                        }
                                        className="w-full px-4 py-2 bg-[#1a1f2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4fd1c5]"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword,
                                            )
                                        }
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4fd1c5]">
                                        {showConfirmPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="w-full bg-[#4fd1c5] text-[#1a1f2e] py-2 rounded-lg font-semibold hover:bg-[#3ab7ac] transition-colors flex items-center justify-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}>
                                Create Account
                                <ArrowRight className="ml-2" size={18} />
                            </motion.button>
                        </form>
                    </div>

                    <motion.div
                        className="bg-[#1a1f2e] p-4 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.4 }}>
                        <p className="text-white">
                            Already have an account?{' '}
                            <Link
                                href="/login"
                                className="text-[#4fd1c5] font-semibold hover:underline">
                                Log in
                            </Link>
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default RegisterContent
