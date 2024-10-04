"use client";

import { motion } from 'framer-motion'
import { ChevronRight } from "lucide-react";

export default function AboutSection() {
  return (
    <>
      <section id="about" className="py-20">
        <div className="container px-6 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-4xl font-bold text-center"
          >
            About Me
          </motion.h2>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 md:w-1/3 md:mb-0"
            >
              <div className="relative">
                <img
                  src="https://placehold.it/1080x720"
                  alt="Mithu Das"
                  className="w-full h-auto rounded-lg"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#4fd1c5] to-[#3182ce] opacity-50 rounded-lg"
                  animate={{
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-2/3 md:pl-12"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#4fd1c5]">
                Passionate about crafting digital solutions
              </h3>
              <p className="mb-6 text-lg">
                With over 5 years of experience in full stack development, I've
                honed my skills in creating seamless, user-centric web
                applications that not only meet but exceed expectations. My
                journey in tech has been driven by a constant desire to learn
                and innovate.
              </p>
              <p className="mb-6 text-lg">
                I specialize in building scalable, high-performance applications
                using cutting-edge technologies. My approach combines creative
                problem-solving with technical expertise, ensuring that every
                project I undertake is not just functional, but also innovative
                and future-proof.
              </p>
              <div className="mb-8">
                <h4 className="mb-4 text-xl font-semibold">
                  Core Competencies:
                </h4>
                <div className="flex flex-wrap gap-4">
                  {[
                    "JavaScript",
                    "React",
                    "Node.js",
                    "Python",
                    "MongoDB",
                    "AWS",
                    "GraphQL",
                    "Docker",
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      className="bg-[#2a2f3e] text-[#4fd1c5] px-4 py-2 rounded-full text-sm"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#4fd1c5",
                        color: "#1a1f2e",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <motion.a
                href="#projects"
                className="inline-flex items-center text-[#4fd1c5] hover:underline"
                whileHover={{ x: 5 }}
              >
                View My Projects <ChevronRight className="w-4 h-4 ml-2" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
