'use client'

import { useState } from "react"
import { motion } from "framer-motion"

const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-featured online store with real-time inventory management.",
        tags: ["React", "Node.js", "MongoDB", "Redux"],
        image: "https://placehold.co/1920x1080"
    },
    {
        title: "Social Media Dashboard",
        description: "Centralized platform for managing multiple social media accounts.",
        tags: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
        image: "https://placehold.co/1920x1080"
    },
    {
        title: "Fitness Tracking App",
        description: "Mobile app for tracking workouts and nutrition with personalized insights.",
        tags: ["React Native", "GraphQL", "AWS", "TensorFlow"],
        image: "https://placehold.co/1920x1080"
    },
    {
        title: "Real Estate Marketplace",
        description: "Property listing and search platform with virtual tour capabilities.",
        tags: ["Next.js", "Prisma", "MySQL", "Three.js"],
        image: "https://placehold.co/1920x1080"
    },
]

export default function ProjectSection() {
    const [hoveredProject, setHoveredProject] = useState(null)

    return (
        <section id="projects" className="py-20 bg-[#1a1f2e]">
            <div className="container px-6 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-4xl font-bold text-center text-white">
                    Featured Projects
                </motion.h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#2a2f3e] rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative"
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}>
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-48" />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-[#4fd1c5] to-[#3182ce] opacity-0"
                                    animate={{
                                        opacity: hoveredProject === index ? 0.7 : 0,
                                    }}
                                    transition={{ duration: 0.3 }} />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
                                <p className="mb-4 text-gray-400">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <motion.span
                                            key={tagIndex}
                                            className="bg-[#1a1f2e] text-[#4fd1c5] px-2 py-1 rounded-full text-sm"
                                            whileHover={{ scale: 1.1, backgroundColor: "#4fd1c5", color: "#1a1f2e" }}>
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 bg-[#4fd1c5] h-1"
                                initial={{ scaleX: 0 }}
                                animate={{
                                    scaleX: hoveredProject === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                style={{ transformOrigin: "left" }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}