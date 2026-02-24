import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO, TechStart Inc.',
    content: 'Marcus delivered an exceptional website that exceeded our expectations. His technical expertise and attention to detail made the entire process seamless. Highly recommended!',
    rating: 5
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Operations Manager',
    content: 'The electrical installation work was flawless. Professional, safe, and completed ahead of schedule. Marcus truly understands his craft.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amaka Okonkwo',
    role: 'Marketing Director',
    content: 'Outstanding printing services! The quality of our business cards and brochures impressed our clients. Fast turnaround and excellent customer service.',
    rating: 5
  },
  {
    id: 4,
    name: 'James Rodriguez',
    role: 'Small Business Owner',
    content: 'A true professional across all services. From website development to electrical work, Marcus handled everything with expertise. Five stars!',
    rating: 5
  }
];

export function EnhancedTestimonials() {
  const { isDark } = useTheme();
  const starColors = ['text-purple-400', 'text-pink-400', 'text-orange-400', 'text-cyan-400', 'text-yellow-400'];
  
  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className={`text-5xl mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>What Clients Say</h2>
        <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>Trusted by businesses and individuals across Nigeria</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative backdrop-blur-sm border rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 group ${
              isDark 
                ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10'
                : 'bg-white border-gray-200 shadow-lg'
            }`}
          >
            {/* Quote Icon Background - Smaller */}
            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Quote className="w-12 h-12 text-purple-400" fill="currentColor" />
            </div>
            
            {/* Rating - Different colors for each star */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 fill-current ${starColors[i % starColors.length]} ${starColors[i % starColors.length]}`} 
                />
              ))}
            </div>

            {/* Content - Smaller text */}
            <p className={`leading-relaxed mb-6 text-base relative z-10 ${
              isDark ? 'text-slate-300' : 'text-gray-700'
            }`}>
              "{testimonial.content}"
            </p>

            {/* Author Info (No Avatar) */}
            <div className={`border-t pt-4 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
              <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</div>
              <div className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>{testimonial.role}</div>
            </div>

            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-orange-500/0 group-hover:from-purple-500/5 group-hover:to-orange-500/5 rounded-2xl transition-all duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}