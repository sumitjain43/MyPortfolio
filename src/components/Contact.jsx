import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    
    // Show success message (you can implement a toast notification here)
    alert('Message sent successfully! I\'ll get back to you soon.')
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "sumit-jain",
      link: "mailto:jain77282@gmail.com",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "9829704250",
      link: "tel:+919829704250",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Jhansi, U.P",
      link: "#",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "sumit-jain",
      link: "https://www.linkedin.com/in/sumit-jain-772811258/",
      color: "from-blue-600 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100"
    }
  ]

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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
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

  const buttonVariants = {
    hover: { scale: 1.05, y: -3 },
    tap: { scale: 0.95 }
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

  return (
    <section id="contact" ref={containerRef} className="py-24 relative overflow-hidden min-h-screen">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <div className="block dark:hidden absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50" />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-pink-400/10 to-red-400/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ y, animationDelay: "2s" }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.2) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }} />
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
            className="inline-block mb-6"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl shadow-2xl">
              📞
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6">
            Get In Touch
          </h2>
          
          <div className="w-40 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          
          <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-xl leading-relaxed">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to connect! Let's build something amazing together. 🚀
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enhanced Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                Send Message
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I'll get back to you within 24 hours
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2"
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2"
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className="space-y-2"
              >
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className="space-y-2"
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    📤 Send Message
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Enhanced Contact Information */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I'm available for freelance work, full-time positions, and interesting collaborations. 
                Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${info.bgColor} dark:from-gray-700 dark:to-gray-600 border border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
                  onClick={() => window.open(info.link, '_blank')}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`text-3xl p-3 rounded-full bg-gradient-to-r ${info.color} text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-lg">{info.title}</h4>
                      <span className={`text-lg bg-gradient-to-r ${info.color} bg-clip-text text-transparent font-medium`}>
                        {info.value}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <div className="text-center lg:text-left">
              <h4 className="font-bold text-gray-900 dark:text-white text-2xl mb-6">Follow Me</h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {[
                  { name: "GitHub", icon: "🐙", link: "https://github.com/sumitjain43", color: "from-gray-700 to-gray-900", bgColor: "from-gray-100 to-gray-200" },
                  { name: "LinkedIn", icon: "💼", link: "https://www.linkedin.com/in/sumit-jain-772811258/", color: "from-blue-500 to-blue-600", bgColor: "from-blue-100 to-blue-200" },
                  { name: "Instagram", icon: "📷", link: "https://instagram.com/sumitjain_27", color: "from-pink-500 to-pink-600", bgColor: "from-pink-100 to-pink-200" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center space-y-3 p-6 rounded-2xl bg-gradient-to-br ${social.bgColor} dark:from-gray-700 dark:to-gray-600 border border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 group`}
                  >
                    <motion.span 
                      className="text-3xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {social.icon}
                    </motion.span>
                    <span className="font-semibold text-gray-900 dark:text-white">{social.name}</span>
                    <motion.div
                      className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center lg:text-left p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-700"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-green-700 dark:text-green-400">Available for new opportunities</span>
              </div>
              <p className="text-green-600 dark:text-green-400 text-sm">
                I'm currently accepting new projects and collaborations
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
