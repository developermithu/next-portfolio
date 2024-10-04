'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    (<footer className="bg-[#1a1f2e] text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h3 className="mb-4 text-2xl font-bold">Mithu Das</h3>
            <p className="mb-4 text-gray-400">Crafting digital experiences with passion and precision.</p>
            <motion.div className="flex space-x-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-[#4fd1c5] hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}>
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <h4 className="mb-4 text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#4fd1c5] transition-colors duration-300">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <h4 className="mb-4 text-xl font-semibold">Stay Updated</h4>
            <p className="mb-4 text-gray-400">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#2a2f3e] text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#4fd1c5] flex-grow" />
              <motion.button
                type="submit"
                className="bg-[#4fd1c5] text-[#1a1f2e] px-4 py-2 rounded-r-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <ArrowRight />
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <motion.div
          className="pt-8 mt-12 text-center border-t border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          <p className="text-gray-400">
            © {currentYear} Mithu Das. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>)
  );
}