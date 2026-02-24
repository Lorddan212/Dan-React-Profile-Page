import { motion } from 'motion/react';
import { Send, Sparkles, MapPin, Phone, Mail } from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext';

interface ContactSectionNoSocialProps {
  onContactClick: () => void;
}

export function ContactSectionNoSocial({ onContactClick }: ContactSectionNoSocialProps) {
  const { isDark } = useTheme();

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jegbefumhendaniel@gmail.com',
      href: 'mailto:jegbefumhendaniel@gmail.com',
      color: 'purple'
    },
    {
      icon: 'whatsapp',
      label: 'WhatsApp',
      value: '+234 810 936 8514',
      href: 'https://wa.me/2348109368514',
      color: 'green'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 810 936 8514',
      href: 'tel:+2348109368514',
      color: 'pink'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '15 Ogurilara Drive, Surulere, Lagos, Nigeria',
      href: 'https://maps.google.com/?q=15+Ogurilara+Drive+Surulere+Lagos+Nigeria',
      color: 'orange'
    }
  ];
  
  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-900/50' : 'bg-gray-50/50'}`}>
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
          <h2 className={`text-5xl mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent`}>
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
            
            <div className="space-y-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon !== 'whatsapp' ? item.icon : null;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.icon === MapPin || item.icon === 'whatsapp' ? '_blank' : undefined}
                    rel={item.icon === MapPin || item.icon === 'whatsapp' ? 'noopener noreferrer' : undefined}
                    className={`group flex items-start gap-4 p-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 ${
                      isDark
                        ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                        : 'bg-white/80 border-gray-200 hover:bg-white hover:border-gray-300 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${
                      item.color === 'purple' ? 'from-purple-500 to-purple-600' :
                      item.color === 'pink' ? 'from-pink-500 to-pink-600' :
                      item.color === 'green' ? 'from-green-500 to-green-600' :
                      'from-orange-500 to-orange-600'
                    } shadow-lg`}>
                      {item.icon === 'whatsapp' ? (
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      ) : Icon && (
                        <Icon className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm mb-1 ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>
                        {item.label}
                      </p>
                      <p className={`font-medium transition-colors ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
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