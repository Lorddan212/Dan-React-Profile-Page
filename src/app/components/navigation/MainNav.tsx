import { motion } from 'motion/react';
import { Home, User, ImageIcon, Briefcase } from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext';

interface MainNavProps {
  activePage: 'home' | 'about' | 'gallery';
  onPageChange: (page: 'home' | 'about' | 'gallery') => void;
}

export function MainNav({ activePage, onPageChange }: MainNavProps) {
  const { isDark } = useTheme();
  const navItems = [
    { id: 'home' as const, label: 'Home', icon: Home },
    { id: 'about' as const, label: 'About', icon: User },
    { id: 'gallery' as const, label: 'Gallery', icon: ImageIcon }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-lg border-b transition-colors duration-300 ${
      isDark 
        ? 'bg-slate-900/95 border-white/10' 
        : 'bg-white/95 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0 min-w-0">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="hidden sm:block min-w-0">
              <div className={`font-bold text-sm sm:text-base truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>Daniel Jegbefumhen</div>
              <div className={`text-xs truncate ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>Multi-Disciplinary Professional</div>
            </div>
          </div>

          {/* Navigation - Fully Responsive */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3 py-2 sm:px-6 sm:py-3 rounded-xl flex items-center gap-2 transition-all duration-300 flex-shrink-0 ${
                    isActive
                      ? isDark
                        ? 'bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-purple-500/30 text-white'
                        : 'bg-gradient-to-r from-purple-100 to-orange-100 border border-purple-300 text-purple-900'
                      : isDark
                        ? 'text-slate-400 hover:text-white hover:bg-white/5'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">{item.label}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute inset-0 rounded-xl -z-10 blur-xl ${
                        isDark 
                          ? 'bg-gradient-to-r from-purple-500/10 to-orange-500/10' 
                          : 'bg-gradient-to-r from-purple-200/50 to-orange-200/50'
                      }`}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}