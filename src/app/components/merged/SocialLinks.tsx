import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, MessageCircle, Send, Twitter } from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext';

export function SocialLinks() {
  const { isDark } = useTheme();
  
  const socials = [
    { icon: Facebook, label: 'Facebook', url: '#', color: 'hover:bg-blue-600' },
    { icon: MessageCircle, label: 'WhatsApp', url: '#', color: 'hover:bg-green-600' },
    { icon: Linkedin, label: 'LinkedIn', url: '#', color: 'hover:bg-blue-700' },
    { icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
      </svg>
    ), label: 'TikTok', url: '#', color: 'hover:bg-pink-600' },
    { icon: Twitter, label: 'Twitter', url: '#', color: 'hover:bg-sky-600' },
    { icon: Send, label: 'Telegram', url: '#', color: 'hover:bg-blue-500' },
    { icon: Instagram, label: 'Instagram', url: '#', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600' }
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.url}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className={`group relative w-12 h-12 backdrop-blur-sm rounded-xl flex items-center justify-center border transition-all duration-300 ${
              isDark 
                ? 'bg-white/10 border-white/20 hover:text-white' 
                : 'bg-slate-100 border-slate-200 hover:text-white'
            } ${social.color}`}
            aria-label={social.label}
          >
            <Icon className={`w-5 h-5 transition-colors ${isDark ? 'text-white' : 'text-slate-700 group-hover:text-white'}`} />
            <span className={`absolute -top-8 left-1/2 -translate-x-1/2 backdrop-blur-md text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${
              isDark ? 'bg-white/10 text-white' : 'bg-slate-800 text-white'
            }`}>
              {social.label}
            </span>
          </motion.a>
        );
      })}
    </div>
  );
}