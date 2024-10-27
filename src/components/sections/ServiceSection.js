'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Code,
    Smartphone,
    ShoppingCart,
    Zap,
    Database,
    BarChart,
} from 'lucide-react'

const services = [
    {
        icon: <Code />,
        title: 'Web Development',
        description:
            'Creating robust and scalable web applications using cutting-edge technologies.',
    },
    {
        icon: <Smartphone />,
        title: 'Responsive Design',
        description:
            'Crafting fluid layouts that adapt seamlessly to any device or screen size.',
    },
    {
        icon: <ShoppingCart />,
        title: 'E-commerce Solutions',
        description:
            'Building secure and efficient online stores with seamless payment integration.',
    },
    {
        icon: <Zap />,
        title: 'Performance Optimization',
        description:
            'Enhancing application speed and efficiency for a smooth user experience.',
    },
    {
        icon: <Database />,
        title: 'Database Management',
        description:
            'Designing and maintaining efficient, scalable database structures.',
    },
    {
        icon: <BarChart />,
        title: 'Analytics Integration',
        description:
            'Implementing data tracking and visualization for informed decision-making.',
    },
]

export function ServiceSection() {
    const [hoveredService, setHoveredService] = useState(null)

    return (
        <>
            <section id="services" className="py-20 bg-[#2a2f3e]">
                <div className="container px-6 mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 text-4xl font-bold text-center text-white">
                        Services
                    </motion.h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#1a1f2e] p-6 rounded-lg hover:shadow-lg transition-shadow relative overflow-hidden"
                                onMouseEnter={() => setHoveredService(index)}
                                onMouseLeave={() => setHoveredService(null)}>
                                <motion.div
                                    className="text-[#4fd1c5] mb-4 text-3xl"
                                    animate={{
                                        scale:
                                            hoveredService === index ? 1.1 : 1,
                                        rotate:
                                            hoveredService === index ? 5 : 0,
                                    }}>
                                    {service.icon}
                                </motion.div>
                                <h3 className="mb-2 text-xl font-semibold text-white">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400">
                                    {service.description}
                                </p>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-[#4fd1c5] to-[#3182ce] opacity-0"
                                    animate={{
                                        opacity:
                                            hoveredService === index ? 0.15 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
