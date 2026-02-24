import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SocialLinks } from '@/app/components/merged/SocialLinks';
import { useState, useEffect } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';

// Profile images - using Unsplash as fallback
const profileImages = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop'
];

interface RotatingProfileHeroProps {
  onContactClick: () => void;
  onExploreServices: () => void;
}

export function RotatingProfileHero({ onContactClick, onExploreServices }: RotatingProfileHeroProps) {
  const { isDark } = useTheme();
  const name = "Daniel Odion Jegbefumhen";
  const motto = "We Build It, Power It, And Bring It to Life With Innovation in Web, Precision in Power, Quality in Printing.";
  
  const [displayedName, setDisplayedName] = useState('');
  const [displayedMotto, setDisplayedMotto] = useState('');
  const [nameComplete, setNameComplete] = useState(false);
  const [descriptionComplete, setDescriptionComplete] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [shouldRetypeName, setShouldRetypeName] = useState(false);

  // Profile image rotation with zoom effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  // Typing animation for name
  useEffect(() => {
    setDisplayedName('');
    setNameComplete(false);
    
    let i = 0;
    const timer = setInterval(() => {
      if (i < name.length) {
        setDisplayedName(name.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setNameComplete(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [shouldRetypeName]);

  // Wait for description to show before showing motto
  useEffect(() => {
    if (nameComplete) {
      const timer = setTimeout(() => {
        setDescriptionComplete(true);
      }, 2000); // Wait 2 seconds after name is complete
      return () => clearTimeout(timer);
    }
  }, [nameComplete]);

  // Typing animation for motto (starts after description is shown)
  useEffect(() => {
    if (!descriptionComplete) return;
    
    setDisplayedMotto('');
    let i = 0;
    const timer = setInterval(() => {
      if (i < motto.length) {
        setDisplayedMotto(motto.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [descriptionComplete]);

  // Retype name every 2 minutes
  useEffect(() => {
    const retypeInterval = setInterval(() => {
      setShouldRetypeName(prev => !prev);
    }, 120000); // 2 minutes

    return () => clearInterval(retypeInterval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32 pt-32 md:pt-40">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-purple-900/20 via-slate-900 to-orange-900/20'
            : 'bg-gradient-to-br from-purple-100 via-white to-orange-100'
        }`} />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
            isDark ? 'bg-purple-500/20' : 'bg-purple-300/30'
          }`} />
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
            isDark ? 'bg-orange-500/20' : 'bg-orange-300/30'
          }`} style={{ animationDelay: '1s' }} />
          <div className={`absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse ${
            isDark ? 'bg-pink-500/20' : 'bg-pink-300/30'
          }`} style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className={`absolute inset-0 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.05]'}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(100, 100, 100, 0.1)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(100, 100, 100, 0.1)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content - Responsive Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Picture with Rotating Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start order-1 w-full"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative mb-8"
            >
              {/* Rotating Gradient Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 rounded-full blur-2xl opacity-50"
              />
              
              {/* Shield-Shaped Profile Container - Increased Size */}
              <div className="relative w-80 h-96 md:w-[28rem] md:h-[34rem]">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 240" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                    <clipPath id="shieldClip">
                      <path d="M 100,10 L 180,40 L 180,140 Q 180,200 100,230 Q 20,200 20,140 L 20,40 Z" />
                    </clipPath>
                  </defs>
                  
                  {/* Glowing border */}
                  <path 
                    d="M 100,10 L 180,40 L 180,140 Q 180,200 100,230 Q 20,200 20,140 L 20,40 Z" 
                    fill="none" 
                    stroke="url(#shieldGradient)" 
                    strokeWidth="4"
                    className="drop-shadow-2xl"
                  />
                </svg>
                
                {/* Profile Image with Shield Clip and Rotation */}
                <div className="absolute inset-4 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="w-full h-full"
                    >
                      <svg className="w-full h-full" viewBox="0 0 200 240" preserveAspectRatio="none">
                        <image
                          href={profileImages[currentImageIndex]}
                          clipPath="url(#shieldClip)"
                          width="200"
                          height="240"
                          preserveAspectRatio="xMidYMid slice"
                        />
                      </svg>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Sparkle Effect */}
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>

            {/* Available for Projects Badge - Moved Below Profile Picture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 border border-purple-500/30 px-6 py-2 rounded-full backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
              <span className="text-purple-400 text-sm font-semibold">Available for Projects</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="order-2 text-center lg:text-left w-full">
            {/* Name with Typing Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight min-h-[2em]"
            >
              <span className={isDark ? 'text-white' : 'text-slate-900'}>
                {displayedName.split(' ').slice(0, 2).join(' ')}
              </span>
              {displayedName.split(' ').length > 2 && (
                <>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                    {displayedName.split(' ').slice(2).join(' ')}
                  </span>
                </>
              )}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-12 md:h-16 bg-gradient-to-b from-purple-400 to-orange-400 ml-2 align-middle"
              />
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                isDark ? 'text-slate-400' : 'text-slate-700'
              }`}
            >
              Crafting exceptional digital experiences, precision electrical solutions, 
              and premium printing services with over 8 years of expertise. 
              Transforming visions into reality with cutting-edge technology and meticulous attention to detail.
            </motion.p>

            {/* Motto with Typing Animation - After Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <div className="text-sm text-purple-400 mb-2 uppercase tracking-wider">Motto:</div>
              <p className={`text-lg md:text-xl min-h-[5em] leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-800'
              }`}>
                {displayedMotto}
                {descriptionComplete && displayedMotto.length < motto.length && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className={`inline-block w-0.5 h-5 ml-1 align-middle ${
                      isDark ? 'bg-slate-300' : 'bg-slate-800'
                    }`}
                  />
                )}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <button
                onClick={onContactClick}
                className="group bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl flex items-center gap-3 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1 text-base md:text-lg font-semibold"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onExploreServices}
                className={`group backdrop-blur-sm px-8 md:px-10 py-4 md:py-5 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 text-base md:text-lg font-semibold ${
                  isDark
                    ? 'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-purple-400/50'
                    : 'bg-slate-100 text-slate-900 border-slate-300 hover:bg-slate-200 hover:border-purple-500'
                }`}
              >
                Explore Services
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className={`text-sm mb-4 uppercase tracking-wider ${
                isDark ? 'text-slate-500' : 'text-slate-600'
              }`}>Connect With Me</p>
              <SocialLinks />
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-20"
        >
          {[
            { value: '8+', label: 'Years Experience' },
            { value: '200+', label: 'Projects Completed' },
            { value: '150+', label: 'Happy Clients' },
            { value: '100%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className={`relative backdrop-blur-sm border rounded-2xl p-4 md:p-6 transition-all ${
                isDark
                  ? 'bg-white/5 border-white/10 group-hover:border-purple-500/30'
                  : 'bg-white border-slate-200 group-hover:border-purple-500/50 shadow-md'
              }`}>
                <div className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent mb-2 font-bold">
                  {stat.value}
                </div>
                <div className={`text-xs md:text-sm uppercase tracking-wider ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 ${
          isDark ? 'border-white/30' : 'border-slate-400/50'
        }`}>
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-orange-400 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}