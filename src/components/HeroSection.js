"use client";

import { motion, useAnimation } from "framer-motion";
import { Code, Database, Server } from "lucide-react";
import { useEffect } from "react";

export default function HeroSection() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <>
      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1a1f2e] opacity-90"></div>
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: "linear-gradient(45deg, #4fd1c5 0%, #3182ce 100%)",
              filter: "blur(100px)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        
        <div className="container z-10 px-6 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <motion.div
              className="text-center md:w-1/2 md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
            >
              <motion.h1
                className="mb-4 text-5xl font-bold md:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Mithu Das
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-3xl text-[#4fd1c5] mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Full Stack Developer & Tech Innovator
              </motion.h2>
              <motion.p
                className="max-w-2xl mb-12 text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Crafting digital experiences that blend creativity with
                cutting-edge technology. Transforming ideas into powerful,
                scalable solutions.
              </motion.p>
              <motion.a
                href="#contact"
                className="bg-[#4fd1c5] text-[#1a1f2e] font-bold py-3 px-8 rounded-full inline-block hover:bg-[#3ac0b4] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate
              </motion.a>
            </motion.div>
            <motion.div
              className="mt-12 md:w-1/2 md:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="relative w-full h-96">
                <motion.div
                  className="absolute top-0 left-0 w-40 h-40 bg-[#4fd1c5] rounded-lg"
                  animate={{
                    rotate: [0, 180, 180, 0],
                    scale: [1, 1.2, 1.2, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <Code className="w-full h-full p-8 text-[#1a1f2e]" />
                </motion.div>
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#3182ce] rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <Database className="w-full h-full p-12 text-white" />
                </motion.div>
                <motion.div
                  className="absolute bottom-0 right-0 w-36 h-36 bg-[#9f7aea] rounded-lg"
                  animate={{
                    rotate: [0, -180, -180, 0],
                    scale: [1, 1.2, 1.2, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <Server className="w-full h-full p-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
