'use client'

import { useAuth } from '@/hooks/auth'
import { useScroll, useTransform, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact', 'Blog']

export default function BlogHeader() {
    const { user } = useAuth({ middleware: 'guest' })
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { scrollY } = useScroll()
    const headerBackground = useTransform(
        scrollY,
        [0, 100],
        ['rgba(26, 31, 46, 0)', 'rgba(26, 31, 46, 0.9)'],
    )

    return (
        <>
            <motion.header
                style={{ background: headerBackground }}
                className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
                <nav className="container px-6 py-4 mx-auto">
                    <div className="flex items-center justify-between">
                        <motion.a
                            href="/"
                            className="text-2xl font-bold text-[#4fd1c5]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            MD
                        </motion.a>
                        <div className="hidden space-x-8 md:flex">
                            {navItems.map(item => (
                                <motion.a
                                    key={item}
                                    href={
                                        item.toLowerCase() === 'home'
                                            ? '/'
                                            : `/#${item.toLowerCase()}`
                                    }
                                    className="hover:text-[#4fd1c5] transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}>
                                    {item}
                                </motion.a>
                            ))}

                            {user ? (
                                <Link href="/dashboard" passHref>
                                    <motion.button
                                        className="hover:text-[#4fd1c5] transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}>
                                        Dashboard
                                    </motion.button>
                                </Link>
                            ) : (
                                <Link href="/login" passHref>
                                    <motion.button
                                        className="hover:text-[#4fd1c5] transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}>
                                        Login
                                    </motion.button>
                                </Link>
                            )}
                        </div>
                        <motion.button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-[#4fd1c5]"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </motion.button>
                    </div>
                </nav>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-[#1a1f2e] py-2">
                        {navItems.map(item => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block px-6 py-2 hover:bg-[#2a2f3e] hover:text-[#4fd1c5] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                                whileHover={{ x: 5 }}>
                                {item}
                            </motion.a>
                        ))}

                        {user ? (
                            <motion.a
                                href="/dashboard"
                                className="block px-6 py-2 hover:bg-[#2a2f3e] hover:text-[#4fd1c5] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                                whileHover={{ x: 5 }}>
                                Dashboard
                            </motion.a>
                        ) : (
                            <motion.a
                                href="/login"
                                className="block px-6 py-2 hover:bg-[#2a2f3e] hover:text-[#4fd1c5] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                                whileHover={{ x: 5 }}>
                                Login
                            </motion.a>
                        )}
                    </motion.div>
                )}
            </motion.header>
        </>
    )
}
