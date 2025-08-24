import { motion, useScroll, useTransform } from "framer-motion"
import React, { useEffect, useState, useRef } from "react"
import ThreeDBackground from "./3DBackground"

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  // 🔥 Enhanced Typewriter Effect
  const words = ["Frontend Developer", "React Enthusiast", "UI/UX Designer", "Problem Solver"];
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    if (index === words.length) {
      setIndex(0) 
      setSubIndex(0)
      setReverse(false)
      return
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500)
      return
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 80 : 120)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse])

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev)
    }, 600)
    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Background Animation - Only for Hero section */}
      <ThreeDBackground />

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-[#0b1020] via-gray-900 to-black" />
        <div className="block dark:hidden absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />

        {/* Floating geometric shapes - Responsive sizes */}
        <motion.div
          className="absolute top-20 left-4 sm:left-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ y }}
        />
        <motion.div
          className="absolute top-40 right-4 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-pink-400/20 to-red-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ y, animationDelay: "2s" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 sm:left-1/3 w-36 h-36 sm:w-72 sm:h-72 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ y, animationDelay: "4s" }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 sm:space-y-12"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6 sm:mb-8"
          >
            {/* <div className="relative">
              <motion.div
                className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/src/components/face.jpg"
                  alt="Sumit Jain"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            
              {/* Floating badges around profile 
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                🚀
              </motion.div>
            </div> */}
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 leading-tight drop-shadow-2xl px-4"
          >
            Hi, I'm{" "}
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Sumit Jain
            </span>
          </motion.h1>

          {/* Enhanced Typewriter Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700 dark:text-gray-200 mb-4 px-4"
          >
            A passionate{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-extrabold">
                {`${words[index].substring(0, subIndex)}`}
              </span>
              <motion.span
                className="inline-block w-1 h-6 sm:h-8 bg-blue-600 ml-1"
                animate={{ opacity: blink ? 1 : 0 }}
                transition={{ duration: 0.1 }}
              />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
          >
            Crafting digital experiences with code, creativity, and cutting-edge technology. 
            Let's build something amazing together! ✨
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-16 py-6 sm:py-8 px-4"
          >
            {[
              { number: "1+", label: "Years Experience" },
              { number: "10+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
            {/* <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              {/* <span className="relative z-10" onClick={() =>  ("")}>🚀 View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              /> 
            </motion.button> */}

            
          </motion.div>

          {/* Scroll indicator */}
          {/* <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}


export default Hero
