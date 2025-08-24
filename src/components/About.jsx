import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -25, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const stats = [
    { number: "1+", label: "Years Experience", icon: "⏰" },
    { number: "10+", label: "Projects Completed", icon: "🚀" },
    { number: "100%", label: "Client Satisfaction", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "🔄" }
  ]

  const skills = [
    { name: "Frontend Development", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Backend Development", level: 90, color: "from-purple-500 to-pink-500" },
    { name: "UI/UX Design", level: 85, color: "from-green-500 to-emerald-500" },
    { name: "Problem Solving", level: 92, color: "from-orange-500 to-red-500" }
  ]

  return (
    <section id="about" ref={containerRef} className="relative overflow-hidden py-16 sm:py-20 lg:py-24 min-h-screen">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <div className="block dark:hidden absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50" />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-br from-pink-400/10 to-red-400/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ y }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 sm:mb-6"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-2xl">
              👨‍💻
            </div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4 sm:mb-6 px-4">
            About Me
          </h2>
          
          <div className="w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed px-4">
            Passionate developer crafting digital experiences with innovation and creativity
          </p>
        </motion.div>

        {/* ===== 2) IMAGE SECTION (centered, with floating icons) ===== */}
        <motion.div 
          className="flex justify-center mb-12 sm:mb-16 lg:mb-20 px-4"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative flex items-center justify-center">
            {/* Main Image Container */}
            <motion.div 
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-90 lg:h-90 rounded-3xl overflow-hidden shadow-4xl border-4 border-white dark:border-gray-800"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="src/assets/photomania-b1baa60c541bed4bc4e0347b74505616-removebg-preview.png" 
                alt="Sumit Jain - Developer" 
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div 
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl shadow-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ⚡
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-base sm:text-xl shadow-xl"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -180, -360]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🚀
            </motion.div>

            <motion.div 
              className="absolute top-1/2 -left-6 sm:-left-8 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-sm sm:text-lg shadow-xl"
              animate={{ 
                y: [0, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💻
            </motion.div>
          </div>
        </motion.div>

        {/* ===== 3) PASSIONATE (LEFT) + CORE (RIGHT) ===== */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-12 sm:mb-16 lg:mb-20 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left: Passionate Developer */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-base sm:text-lg">
              I'm a dedicated <span className="text-blue-600 font-semibold">Full Stack Developer</span> with a passion for creating innovative web solutions. With expertise in modern technologies like React, Node.js, and cloud platforms, I bring ideas to life through clean, efficient code and intuitive user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-base sm:text-lg">
              My journey in web development started with curiosity and has evolved into a career focused on building scalable applications that solve real-world problems. I believe in continuous learning and staying updated with the latest industry trends.
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-base sm:text-lg">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          {/* Right: Core Competencies */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Core Competencies</h4>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200 font-medium">{skill.name}</span>
                  <span className="text-blue-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ===== 4) STATS SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
