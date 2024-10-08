'use client'

import InputError from '@/components/InputError'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { Eye, EyeOff, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const PasswordReset = () => {
    const searchParams = useSearchParams()

    const { resetPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        resetPassword({
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
            setStatus,
        })
    }

    useEffect(() => {
        setEmail(searchParams.get('email'))
    }, [searchParams.get('email')])

    return (
        <>
            {/* Session Status */}
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
                                Password Reset
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

                                <motion.div
                                    className="mb-6"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}>
                                    <label
                                        htmlFor="passwordConfirmation"
                                        className="block text-[#4fd1c5] mb-2">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            id="passwordConfirmation"
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

                                    <InputError
                                        messages={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className="w-full bg-[#4fd1c5] text-[#1a1f2e] py-2 rounded-lg font-semibold hover:bg-[#3ab7ac] transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}>
                                    Reset Password
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default PasswordReset
