import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Microsoft Power BI Data Analyst Certification',
    issuer: 'Coursera',
    date: 'Aug 2024',
    image: '\\components\\powerbi.png',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/R15FOUQD6YU3'
  },
  {
    title: 'Google Data Analytics',
    issuer: 'Coursera',
    date: 'September 2023',
    image: '\\components\\dataanalyst.png',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/VDG8Y2S9VDFU'
  },
  {
    title: 'Google Cybersecurity',
    issuer: 'Coursera',
    date: 'February 2024',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/N45PZVC9CK2L'
  },
  
  {
    title: 'Jenkins certificate',
    issuer: 'LinkedIn Learning',
    date: 'Aug 2023',
    image: '\\components\\jenkins.png',
    link: 'https://www.linkedin.com/learning/certificates/b05266fe36c5584ea2ad53fc2e029db89b3a5e20849bf965186a6e9dc7f15da5?trk=share_certificate'
  },
  
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Training and Certification',
    date: 'June 2023',
    image: '\\components\\AWS.png',
    link: 'https://www.credly.com/badges/9fbc2ceb-7dbb-40ad-8747-e7b2779f22d5/public_url'
  },
  
  {
    title: 'AWS Academy Machine Learning Foundations',
    issuer: 'AWS Training and Certification',
    date: 'June 2023',
    image: '\\components\\AWS.png',
    link: 'https://www.credly.com/badges/cb765836-2edc-4fee-9b3c-6cb3cb9ff3dd/public_url'
  },
  {
    title: 'AWS AI-ML VIRTUAL INTERNSHIP',
    issuer: 'AICTE',
    date: ' (MAY - JULY 2023)',
    image: '\\components\\aict.png',
    link: '\\components\\aictcer.png'
  },
  
  
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Certifications & Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <Award className="w-8 h-8 text-white mb-2" />
                    <h3 className="text-xl font-semibold text-white">
                      {cert.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-900">Issuer:</span> {cert.issuer}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-900">Date:</span> {cert.date}
                    </p>
                  </div>
                  
                  <motion.a
                    href={cert.link}
                    className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </motion.a>
                </div>

                <div className="absolute top-2 right-2 z-20">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-400"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}