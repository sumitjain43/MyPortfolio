import { motion } from 'framer-motion'
import { useState } from 'react'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      skills: [
        { name: "React", level: 90, color: "from-blue-500 to-blue-600", icon: "⚛️" },
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500", icon: "🟨" },
        { name: "HTML/CSS", level: 95, color: "from-orange-500 to-red-500", icon: "🌐" },
        { name: "Tailwind CSS", level: 80, color: "from-cyan-500 to-blue-500", icon: "🎨" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      skills: [
        { name: "Node.js", level: 80, color: "from-green-500 to-green-600", icon: "🟢" },
        { name: "Express.js", level: 75, color: "from-gray-500 to-gray-600", icon: "🚀" },
        { name: "Python", level: 70, color: "from-blue-500 to-indigo-500", icon: "🐍" },
        { name: "MongoDB", level: 75, color: "from-green-400 to-green-500", icon: "🍃" }
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      skills: [
        { name: "Git", level: 85, color: "from-orange-500 to-red-500", icon: "📚" },
        { name: "AWS", level: 65, color: "from-yellow-500 to-orange-500", icon: "☁️" },
        { name: "Figma", level: 60, color: "from-purple-500 to-pink-500", icon: "🎭" },
        { name: "Linux", level: 75, color: "from-yellow-400 to-orange-400", icon: "🐧" }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  }

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="skills" className="py-16 sm:py-20 relative overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <div className="block dark:hidden absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 sm:mb-6"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl sm:text-3xl">
              🚀
            </div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4 sm:mb-6 px-4">
            Skills & Expertise
          </h2>
          
          <div className="w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed px-4">
            Crafting digital experiences with cutting-edge technologies and innovative solutions
          </p>
        </motion.div>

        {/* Hexagonal Skill Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Hexagonal Card */}
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} rounded-3xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300`}></div>
                <div className={`relative bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border-2 ${category.borderColor} shadow-2xl group-hover:shadow-3xl transition-all duration-300`}>
                  {/* Category Header */}
                  <div className="text-center mb-6 sm:mb-8">
                    <motion.div 
                      className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex}
                        custom={skillIndex}
                        variants={skillVariants}
                        whileHover={{ 
                          scale: 1.05,
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        className="relative group/skill"
                      >
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-3 sm:p-4 text-center border border-gray-200 dark:border-gray-600 hover:border-transparent hover:shadow-lg transition-all duration-300">
                          <div className="text-xl sm:text-2xl mb-2">{skill.icon}</div>
                          <div className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                            {skill.name}
                          </div>
                          
                          {/* Circular Progress */}
                          <div className="relative w-12 h-12 sm:w-16 sm:h-16 mx-auto">
                            <svg className="w-12 h-12 sm:w-16 sm:h-16 transform -rotate-90" viewBox="0 0 36 36">
                              <path
                                className="text-gray-200 dark:text-gray-600"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <motion.path
                                className={`bg-gradient-to-r ${skill.color}`}
                                stroke="url(#gradient)"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: skill.level / 100 }}
                                transition={{ duration: 2, delay: skillIndex * 0.2 }}
                              />
                              <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="currentColor" />
                                  <stop offset="100%" stopColor="currentColor" />
                                </linearGradient>
                              </defs>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs font-bold text-gray-700 dark:text-gray-200">
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Hover Tooltip */}
                        {hoveredSkill === skill.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-10"
                          >
                            {skill.name} - {skill.level}% proficiency
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills - Organized Grid */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 px-4">
            Additional Expertise
          </h3>
          
          <div className="max-w-6xl mx-auto">
            {/* Skills organized in categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {/* Development Tools */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-center mb-3 sm:mb-4">
                  <div className="text-2xl sm:text-3xl mb-2">🛠️</div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">Development Tools</h4>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Webpack", "Vite", "Git", "AWS", "Linux"].map((tool, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Testing & Quality */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-center mb-3 sm:mb-4">
                  <div className="text-2xl sm:text-3xl mb-2">🧪</div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">Testing & Quality</h4>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Testing Library", "VS Code", "Prettier", "SonarQube"].map((tool, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* APIs & Authentication */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-center mb-3 sm:mb-4">
                  <div className="text-2xl sm:text-3xl mb-2">🔐</div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">APIs & Security</h4>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["RESTful APIs", "GraphQL", "JWT Auth", "OAuth", "OpenAPI"].map((tool, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Soft Skills & Methodologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-gray-600"
            >
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🌟</div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">Soft Skills & Methodologies</h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Professional development and collaboration</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {[
                  { name: "Problem Solving", color: "from-blue-500 to-cyan-500" },
                  { name: "Team Collaboration", color: "from-pink-500 to-pink-600" },
                  { name: "Code Review", color: "from-green-500 to-green-600" },
                  { name: "Technical Writing", color: "from-orange-500 to-orange-600" },
                  { name: "Mentoring", color: "from-purple-500 to-purple-600" },
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className={`bg-gradient-to-r ${skill.color} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <div className='related flex mt-10 justify-center items-center '>
              <motion.button
                            whileHover="hover"
                            whileTap="tap"
                            className="group bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
                          >
                            <span onClick={() => window.open("https://drive.google.com/file/d/1rRcC_0pMmtwMVSf2qCqRhRGQAkNNPl7r/view?usp=sharing")}>Download Resume</span>
                            <motion.span
                              className="inline-block"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              →
                            </motion.span>
                          </motion.button>
            </div>
            
          </div>
          
        </motion.div>
        
      </div>
    </section>
  )
}

export default Skills
