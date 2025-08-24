import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hover: { scale: 1.15, y: -8, rotate: 5 },
    tap: { scale: 0.95 },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const quickLinks = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "About", href: "#about", icon: "👨‍💻" },
    { name: "Skills", href: "#skills", icon: "⚡" },
    { name: "Projects", href: "#projects", icon: "🚀" },
    { name: "Contact", href: "#contact", icon: "📞" },
  ];

  const services = [
    { name: "Web Development", icon: "💻" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Consulting", icon: "💡" },
    { name: "Maintenance", icon: "🔧" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "🐙",
      link: "https://github.com/sumitjain43",
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      link: "https://www.linkedin.com/in/sumit-jain-772811258/",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Instagram",
      icon: "📷",
      link: "https://instagram.com/sumitjain_27",
      color: "from-pink-600 to-pink-800",
    },
    {
      name: "Email",
      icon: "📧",
      link: "mailto:jain77282@gmail.com",
      color: "from-green-600 to-green-800",
    },
  ];

  return (
    <footer
      ref={containerRef}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ y, animationDelay: "3s" }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div
            className="col-span-1 md:col-span-2"
            variants={itemVariants}
          >
            <motion.div
              className="inline-block mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
                🚀
              </div>
            </motion.div>

            <motion.h3
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Sumit Jain
            </motion.h3>

            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              A passionate Full Stack Developer dedicated to creating innovative
              web solutions and delivering exceptional user experiences. Let's
              build the future together! ✨
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`p-3 rounded-xl bg-gradient-to-r ${social.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 8, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </span>
                    <span className="group-hover:pl-2 transition-all duration-300">
                      {link.name}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-2xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Services
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 8, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </span>
                  <span className="group-hover:pl-2 transition-all duration-300">
                    {service.name}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 p-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-3xl border border-gray-700/50 backdrop-blur-sm"
        >
          <h4 className="text-2xl font-bold text-white mb-4" >Stay Updated</h4>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Get notified about new projects, tech insights, and development
            tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" 
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"

            />
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              
            >
             <span>Subscribe</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear}{" "}
            <span className="text-blue-400 font-semibold">Sumit Jain</span>. All
            rights reserved.
          </p>

          <motion.div
            className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span>Made with</span>
            <motion.span
              className="text-red-500 text-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            <span>using</span>
            <span className="text-blue-400 font-semibold">React</span>
            <span>&</span>
            <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
          </motion.div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>↑</span>
            <span>Back to Top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
