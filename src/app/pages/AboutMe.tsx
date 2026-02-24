import { motion } from 'motion/react';
import { Code, Zap, Printer, Download, Award, BookOpen, User } from 'lucide-react';
import { ContactSectionNoSocial } from '@/app/components/merged/ContactSectionNoSocial';
import { Footer } from '@/app/components/shared/Footer';
import { useTheme } from '@/app/contexts/ThemeContext';

interface AboutMeProps {
  onContactClick: () => void;
}

export function AboutMe({ onContactClick }: AboutMeProps) {
  const { isDark } = useTheme();

  const skills = {
    webDevelopment: [
      'HTML5, CSS3, JavaScript (ES6+)',
      'React.js & Next.js',
      'TypeScript',
      'Tailwind CSS & Bootstrap',
      'WordPress & CMS Development',
      'RESTful API Integration',
      'Responsive Web Design',
      'Performance Optimization',
      'SEO Best Practices',
      'Git Version Control',
      'Database Management (MySQL, MongoDB)',
      'E-commerce Development (WooCommerce, Shopify)'
    ],
    electrical: [
      'Residential & Commercial Wiring',
      'Electrical Installation & Maintenance',
      'Lighting System Design',
      'Power Distribution Systems',
      'Fault Diagnosis & Troubleshooting',
      'Safety Compliance & Inspections',
      'Solar Panel Integration',
      'Smart Home Automation',
      'Generator & Inverter Installation',
      'Electrical Load Calculations',
      'Emergency Electrical Services',
      'Energy Efficiency Consulting'
    ],
    printing: [
      'Digital Printing Technology',
      'Offset Printing',
      'Large Format Printing',
      'Graphic Design for Print',
      'Color Management & Calibration',
      'Print Production Management',
      'Binding & Finishing Techniques',
      'Custom Packaging Design',
      'Brand Identity Development',
      'Quality Control & Assurance',
      'Material Selection & Procurement',
      'Client Consultation & Project Management'
    ]
  };

  return (
    <div className="min-h-screen pt-32 pb-0 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            A passionate multi-disciplinary professional dedicated to delivering excellence in every project
          </p>
        </motion.div>

        {/* Introduction Card with Image on Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`backdrop-blur-sm border rounded-3xl overflow-hidden mb-12 ${
            isDark 
              ? 'bg-linear-to-br from-white/5 to-white/2 border-white/10' 
              : 'bg-white border-slate-200 shadow-lg'
          }`}
        >
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="flex-1 p-8 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center shrink-0">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className={`text-3xl mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Daniel Jegbefumhen</h2>
                  <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    With over 8 years of professional experience, I specialize in three dynamic fields: Web Development, Electrical Installation, and General Printing. My unique combination of skills allows me to offer comprehensive solutions that bring digital visions to life, power them efficiently, and present them beautifully in print.
                  </p>
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    My motto, "We Build It, Power It, And Bring It to Life With Innovation in Web, Precision in Power, Quality in Printing," reflects my commitment to excellence and my holistic approach to project delivery. I believe in creating seamless experiences from concept to completion.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 h-64 md:h-auto min-h-full">
              <img
                src="https://images.unsplash.com/photo-1489438497675-d1a8d6e0632e?w=800"
                alt="Professional workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Web Development Skills with Image on Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className={`rounded-3xl overflow-hidden mb-8 ${
            isDark
              ? 'bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20'
              : 'bg-linear-to-r from-purple-50 to-pink-50 border border-purple-200'
          }`}
        >
          <div className="flex flex-col md:flex-row-reverse items-stretch">
            <div className="flex-1 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-3xl ${isDark ? 'text-white' : 'text-slate-900'}`}>Web Development Expertise</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {skills.webDevelopment.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.03 }}
                    className={`flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full shrink-0" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 h-64 md:h-auto min-h-full">
              <img
                src="https://images.unsplash.com/photo-1489438497675-d1a8d6e0632e?w=800"
                alt="Web Development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Electrical Skills with Image on Right */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className={`rounded-3xl overflow-hidden mb-8 ${
            isDark
              ? 'bg-linear-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20'
              : 'bg-linear-to-r from-orange-50 to-yellow-50 border border-orange-200'
          }`}
        >
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="flex-1 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-linear-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-3xl ${isDark ? 'text-white' : 'text-slate-900'}`}>Electrical Installation Expertise</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {skills.electrical.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.03 }}
                    className={`flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                  >
                    <div className="w-2 h-2 bg-orange-400 rounded-full shrink-0" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 h-64 md:h-auto min-h-full">
              <img
                src="https://images.unsplash.com/photo-1660330589693-99889d60181e?w=800"
                alt="Electrical Installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Printing Skills with Image on Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className={`rounded-3xl overflow-hidden mb-12 ${
            isDark
              ? 'bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20'
              : 'bg-linear-to-r from-cyan-50 to-blue-50 border border-cyan-200'
          }`}
        >
          <div className="flex flex-col md:flex-row-reverse items-stretch">
            <div className="flex-1 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Printer className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-3xl ${isDark ? 'text-white' : 'text-slate-900'}`}>General Printing Expertise</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {skills.printing.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + idx * 0.03 }}
                    className={`flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full shrink-0" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 h-64 md:h-auto min-h-full">
              <img
                src="https://images.unsplash.com/photo-1656784095237-3fcb8f5971b8?w=800"
                alt="Printing Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Certifications & Documents with Image on Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className={`backdrop-blur-sm border rounded-3xl overflow-hidden mb-12 ${
            isDark 
              ? 'bg-linear-to-br from-white/5 to-white/2 border-white/10' 
              : 'bg-white border-slate-200 shadow-lg'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 p-8">
              <h3 className={`text-3xl mb-8 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Award className="w-8 h-8 text-orange-400" />
                Certifications & Documents
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`rounded-xl p-6 transition-all group ${
                  isDark 
                    ? 'bg-white/5 border border-white/10 hover:border-purple-500/30' 
                    : 'bg-purple-50 border border-purple-200 hover:border-purple-400'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-purple-400" />
                      <h4 className={`text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}>Professional CV</h4>
                    </div>
                    <Download className={`w-5 h-5 transition-colors ${
                      isDark 
                        ? 'text-slate-400 group-hover:text-purple-400' 
                        : 'text-slate-500 group-hover:text-purple-600'
                    }`} />
                  </div>
                  <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Complete professional curriculum vitae with all work experience and qualifications</p>
                  <button className="w-full bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                    Download CV
                  </button>
                </div>

                <div className={`rounded-xl p-6 transition-all group ${
                  isDark
                    ? 'bg-cyan-500/10 border border-cyan-500/20 hover:border-cyan-500/40'
                    : 'bg-cyan-50 border border-cyan-200 hover:border-cyan-400'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-cyan-400" />
                      <h4 className={`text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}>Certifications</h4>
                    </div>
                    <Download className={`w-5 h-5 transition-colors ${
                      isDark 
                        ? 'text-slate-400 group-hover:text-cyan-400' 
                        : 'text-slate-500 group-hover:text-cyan-600'
                    }`} />
                  </div>
                  <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Professional certifications in web development, electrical installation, and printing</p>
                  <button className="w-full bg-linear-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                    View Certificates
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1715173679369-18006e84d6a8?w=800"
                alt="Certifications"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <ContactSectionNoSocial onContactClick={onContactClick} />

      {/* Footer */}
      <Footer />
    </div>
  );
}