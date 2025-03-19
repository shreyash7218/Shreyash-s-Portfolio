import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20  bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative">
                <img
                  src="\components\myimg.jpg"
                  alt="Profile"
                  className="w-full h-[600px] rounded-lg shadow-xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </div>
            </motion.div>
            
            <div >
              <h3 className="text-2xl font-semibold mb-4">
                Education
              </h3>
              <div className="mb-6">
              <p className="text-lg font-medium text-gray-900">Pimpri Chinchwad Collage Of Engineering[SSPU]</p>
                <p className="text-gray-600">Master's in Computer Applications</p>
                <p className="text-gray-600">[2022] - [2024]</p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Professional Summary
              </h3>
              <p className="text-gray-600 mb-6">
              I am seeking a challenging role in a dynamic organization that offers opportunities for professional growth, where I can
leverage my technical expertise in Java, C++, and web development, alongside my experience in tools like VS Code, Eclipse,
and Docker. My goal is to contribute to innovative, user-centric solutions while continuously enhancing my skills in modern
technologies such as DevOps and cloud computing.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.span 
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Problem Solving
                </motion.span>
                <motion.span 
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Team Player
                </motion.span>
                <motion.span 
                  className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Quick Learner
                </motion.span>
                <motion.span 
                  className="px-4 py-2 bg-gradient-to-r from-rose-500 to-indigo-500 text-white rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Analytical Thinking
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}