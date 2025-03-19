import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Submit-Assignment-submission-portal',
    description: 'eSubmit is a Spring Boot-based submission management system with JWT authentication, MySQL database, and Swagger API documentation. It streamlines secure file submissions, user authentication, and data management efficiently.',
    image: '\\components\\esubmit.png',
    technologies: ['React', 'Spring Boot', 'Mysql'],
    github: 'https://github.com/DAC-project-Esubmitt/E-Submit-Assignment-submission-portal',
    live: '#'
  },
  
  {
    title: 'Personal Portfolio',
    description: 'This personal portfolio website showcases my skills, projects, certifications, and professional accomplishments. Designed with a clean and responsive layout, it highlights my experience and career goals effectively.',
    image: '\\components\\portfolio.png',
    technologies: ['React', 'Tailwind CSS'],
    github: 'https://github.com/shreyash7218/Shreyash7218.github.io',
    live: 'https://shreyash7218.github.io/'
  },
  {
    title: 'PC StorePCStore - E-commerce Website',
    description: 'PCStore is an interactive e-commerce platform developed to streamline online product management for sellers. This project demonstrates expertise in full-stack web development, offering a seamless user experience and robust seller management capabilities.',
    image: '\\components\\pcstore.png',
    technologies: ['Html5', 'PHP', 'PostgreSQL'],
    github: 'https://github.com/shreyash7218/pc_store',
    live: '#'
  },
  
  {
    title: 'Bakery Website',
    description: 'CakeShop is a PHP-based online bakery management system with JavaScript, PostgreSQL, and HTML/CSS for a seamless user experience. It allows customers to browse, order cakes online, and manage deliveries, while admins handle inventory, orders, and payments efficiently.',
    image: '\\components\\cakeshop.png',
    technologies: ['Html5', 'PHP', 'MySQL'],
    github: 'https://github.com/shreyash7218/Cake-Shop',
    live: '#'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      className="flex items-center text-gray-300 hover:text-purple-400"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="flex items-center text-gray-300 hover:text-purple-400"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
