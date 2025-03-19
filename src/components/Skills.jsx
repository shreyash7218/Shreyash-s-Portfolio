import { motion } from 'framer-motion';

const skills = [
  { category: 'Programming Languages', items: ['Java', 'C++','JS', 'C#' ] },
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'React'] },
  { category: 'Backend', items: ['Spring', 'DOt Net', 'Node .JS'] },
  { category: 'Database', items: ['Mysql', 'Postgress', 'MongoDB'] },
  { category: 'Tools & Others', items: ['Git', 'VS Code', 'Docker', 'Jenkins'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-full bg-gray-200/20 rounded-full h-2.5">
                        <motion.div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '75%' }}
                          transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                      <span className="ml-4 text-sm font-medium text-gray-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}