import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#",
      featured: true,
      category: "fullstack",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      icon: "🛒",
      stats: { users: "10K+", revenue: "$50K+", rating: "4.8" }
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
      featured: false,
      category: "frontend",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      icon: "✅",
      stats: { users: "5K+", tasks: "100K+", rating: "4.6" }
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful UI and responsive design.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      liveLink: "#",
      githubLink: "#",
      featured: false,
      category: "frontend",
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50",
      icon: "🌤️",
      stats: { users: "15K+", cities: "100+", rating: "4.7" }
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and professional design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      liveLink: "#",
      githubLink: "#",
      featured: false,
      category: "frontend",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      icon: "🎨",
      stats: { views: "25K+", visitors: "8K+", rating: "4.9" }
    },
    {
      title: "Blog Platform",
      description: "A content management system for blogs with markdown support, user authentication, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
      featured: false,
      category: "fullstack",
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50",
      icon: "📝",
      stats: { posts: "500+", authors: "50+", rating: "4.5" }
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling capabilities.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "Chart.js"],
      liveLink: "#",
      githubLink: "#",
      featured: false,
      category: "fullstack",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50",
      icon: "📊",
      stats: { accounts: "100+", posts: "1K+", rating: "4.4" }
    },
    {
      title: "API Gateway Service",
      description: "A high-performance API gateway built with Node.js and Express, featuring rate limiting, authentication, and load balancing capabilities.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Express", "Redis", "Docker"],
      liveLink: "#",
      githubLink: "#",
      featured: false,
      category: "backend",
      gradient: "from-red-500 to-pink-600",
      bgGradient: "from-red-50 to-pink-50",
      icon: "🔌",
      stats: { requests: "1M+", uptime: "99.9%", rating: "4.7" }
    },
    {
      title: "Microservices Architecture",
      description: "A scalable microservices system built with Python and FastAPI, featuring service discovery, monitoring, and distributed tracing.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Kubernetes"],
      liveLink: "#",
      githubLink: "#",
      featured: false,
      category: "backend",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      icon: "🏗️",
      stats: { services: "15+", throughput: "10K/s", rating: "4.6" }
    },
    {
      title: "Database Management System",
      description: "A custom database management system with advanced query optimization, indexing, and transaction management.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&h=300&fit=crop",
      technologies: ["C++", "SQL", "B-tree", "ACID"],
      liveLink: "#",
      githubLink: "#",
      featured: false,
      category: "backend",
      gradient: "from-teal-500 to-green-600",
      bgGradient: "from-teal-50 to-green-50",
      icon: "🗄️",
      stats: { tables: "1000+", queries: "100K/s", rating: "4.5" }
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🚀' },
    { id: 'fullstack', name: 'Full Stack', icon: '⚡' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  // Debug logging to help troubleshoot
  console.log('Active filter:', activeFilter)
  console.log('Total projects:', projects.length)
  console.log('Filtered projects:', filteredProjects.length)
  console.log('Available categories:', [...new Set(projects.map(p => p.category))])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { y: 100, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotateY: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="projects" ref={containerRef} className="py-20 relative overflow-hidden min-h-screen">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <div className="block dark:hidden absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        
        {/* Floating 3D shapes */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ y }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ y, animationDelay: "2s" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ y, animationDelay: "4s" }}
        />
        
        {/* Geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="absolute top-40 left-40 w-1 h-1 bg-purple-500 rounded-full"></div>
          <div className="absolute top-60 left-60 w-3 h-3 bg-pink-500 rounded-full"></div>
          <div className="absolute top-80 left-80 w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="absolute top-32 right-32 w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute top-64 right-64 w-1 h-1 bg-red-500 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-8"
            whileHover={{ rotateY: 360, scale: 1.1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl shadow-2xl">
              🚀
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6">
            Featured Projects
          </h2>
          
          <div className="w-48 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          
          <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-xl leading-relaxed">
            Explore my portfolio of innovative projects that showcase cutting-edge technologies, 
            creative problem-solving, and exceptional user experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* 3D Project Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredProjects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                y: -20,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.4 }
              }}
              onHoverStart={() => setHoveredProject(project.title)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative perspective-1000"
            >
              {/* 3D Card Container */}
              <div className="relative transform-style-preserve-3d transition-all duration-500 group-hover:rotate-y-5">
                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} rounded-3xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500`}></div>
                
                {/* Main Card */}
                <div className={`relative bg-white dark:bg-gray-800 rounded-3xl p-6 border-2 border-gray-200 dark:border-gray-700 shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden`}>
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute top-4 right-4 z-20"
                    >
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                        ⭐ Featured
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Project Icon */}
                  <div className="text-center mb-6">
                    <motion.div 
                      className="text-5xl mb-3"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.icon}
                    </motion.div>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-2 py-3">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-100 px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-600"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <motion.a 
                        href={project.liveLink}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3 px-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Live Demo
                      </motion.a>
                      <motion.a 
                        href={project.githubLink}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-center py-3 px-4 rounded-xl font-medium border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all duration-300"
                      >
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>

                             {/* Hover Glow Effect */}
               {hoveredProject === project.title && (
                 <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl -z-10"
                 />
               )}
             </motion.div>
           ))}
           </motion.div>
         ) : (
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-center py-20"
           >
             <div className="text-6xl mb-4">🔍</div>
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
               No projects found
             </h3>
             <p className="text-gray-600 dark:text-gray-300 mb-6">
               No projects match the selected category. Try selecting a different filter.
             </p>
             <motion.button
               onClick={() => setActiveFilter('all')}
               whileHover={{ scale: 1.05, y: -2 }}
               whileTap={{ scale: 0.95 }}
               className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
             >
               Show All Projects
             </motion.button>
           </motion.div>
         )}

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 shadow-2xl border border-gray-200 dark:border-gray-600">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start a Project
              </motion.button>
              
              <motion.button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-medium border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all duration-300"
              >
                Back to Top
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
