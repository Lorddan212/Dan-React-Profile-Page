import { motion } from 'motion/react';
import { Send, Sparkles } from 'lucide-react';
import { EnhancedContactInfo } from '@/app/components/merged/EnhancedContactInfo';
import { SocialLinks } from '@/app/components/merged/SocialLinks';
import { useTheme } from '@/app/contexts/ThemeContext';

interface ContactSectionProps {
  onContactClick: () => void;
}

export function ContactSection({ onContactClick }: ContactSectionProps) {
  const { isDark } = useTheme();
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-purple-500/10' : 'bg-purple-300/20'}`} />
        <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-orange-500/10' : 'bg-orange-300/20'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 border px-4 py-2 rounded-full mb-6 ${
            isDark 
              ? 'bg-gradient-to-r from-purple-500/20 to-orange-500/20 border-purple-500/30 text-purple-400'
              : 'bg-gradient-to-r from-purple-200/50 to-orange-200/50 border-purple-400/40 text-purple-700'
          }`}>
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Let's Connect</span>
          </div>
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
            Get in touch today and let's bring your vision to life with expertise and precision
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h3>
            <EnhancedContactInfo />

            {/* Social Links */}
            <div className="mt-12">
              <p className={`text-sm mb-4 uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>Follow Me On Social Media</p>
              <SocialLinks />
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 rounded-3xl blur-2xl ${
              isDark
                ? 'bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20'
                : 'bg-gradient-to-br from-purple-300/30 via-pink-300/30 to-orange-300/30'
            }`} />
            
            <div className={`relative backdrop-blur-sm border rounded-3xl p-12 ${
              isDark
                ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/20'
                : 'bg-gradient-to-br from-white/90 to-white/70 border-purple-200/50 shadow-xl'
            }`}>
              {/* Icon */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-purple-500/50"
              >
                <Send className="w-12 h-12 text-white" />
              </motion.div>

              <h3 className={`text-3xl mb-4 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Send Me a Message</h3>
              <p className={`text-center mb-8 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                Click below to select your service and contact method
              </p>

              <button
                onClick={onContactClick}
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-5 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                Start Your Project
              </button>

              {/* Decorative Elements */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl text-purple-400 mb-1">24/7</div>
                  <div className={`text-xs ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>Available</div>
                </div>
                <div>
                  <div className="text-2xl text-pink-400 mb-1">&lt;24h</div>
                  <div className={`text-xs ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>Response</div>
                </div>
                <div>
                  <div className="text-2xl text-orange-400 mb-1">100%</div>
                  <div className={`text-xs ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}