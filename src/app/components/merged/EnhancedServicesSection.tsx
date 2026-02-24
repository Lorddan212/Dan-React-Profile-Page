import { motion, AnimatePresence } from 'motion/react';
import { Code, Zap, Printer, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';

interface EnhancedServicesSectionProps {
  activeService: 'web' | 'electrical' | 'printing';
  onServiceChange: (service: 'web' | 'electrical' | 'printing') => void;
}

const services = [
  {
    id: 'web' as const,
    name: 'Web Development',
    icon: Code,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
    skills: [
      'HTML, CSS & JavaScript',
      'React & Next.js Development',
      'WordPress & CMS',
      'E-commerce Solutions',
      'UI/UX Design',
      'API Integration',
      'SEO Optimization',
      'Performance Tuning'
    ]
  },
  {
    id: 'electrical' as const,
    name: 'Electrical Installation',
    icon: Zap,
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
    skills: [
      'Residential Wiring',
      'Commercial Installation',
      'Lighting Systems',
      'Power Backup Solutions',
      'Fault Diagnosis',
      'Safety Inspections',
      'Solar Integration',
      'Smart Home Setup'
    ]
  },
  {
    id: 'printing' as const,
    name: 'General Printing',
    icon: Printer,
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/30',
    skills: [
      'Business Stationery',
      'Marketing Materials',
      'Large Format Printing',
      'Digital & Offset Printing',
      'Branding Services',
      'Booklet & Binding',
      'Custom Packaging',
      'Event Materials'
    ]
  }
];

export function EnhancedServicesSection({ activeService, onServiceChange }: EnhancedServicesSectionProps) {
  const { isDark } = useTheme();
  const [autoSlideIndex, setAutoSlideIndex] = useState(0);
  const [isManualSelection, setIsManualSelection] = useState(false);

  // Auto-slide effect (only when no manual selection)
  useEffect(() => {
    if (isManualSelection) return;

    const interval = setInterval(() => {
      setAutoSlideIndex((prev) => (prev + 1) % services.length);
    }, 8000); // Change every 8 seconds (increased from 3)

    return () => clearInterval(interval);
  }, [isManualSelection]);

  const handleServiceClick = (serviceId: 'web' | 'electrical' | 'printing') => {
    setIsManualSelection(true);
    onServiceChange(serviceId);
  };

  const currentAutoSlide = services[autoSlideIndex];

  return (
    <div className={`py-12 sticky top-0 z-40 backdrop-blur-lg border-b ${
      isDark 
        ? 'bg-slate-900/95 border-white/10' 
        : 'bg-white/95 border-slate-200'
    }`} id="services-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            What I Do
          </h2>
          <p className="text-slate-400 text-lg">
            Expertise across multiple disciplines
          </p>
        </motion.div>

        {/* Auto-Sliding Preview (when no service is selected) */}
        {!isManualSelection && (
          <AnimatePresence mode="wait">
            <motion.div
              key={autoSlideIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`mb-8 p-8 rounded-3xl border-2 ${
                isDark
                  ? `bg-gradient-to-r ${currentAutoSlide.bgGradient} ${currentAutoSlide.borderColor}`
                  : `bg-gradient-to-r ${currentAutoSlide.bgGradient.replace('/20', '/30')} ${currentAutoSlide.borderColor.replace('/30', '')} shadow-lg`
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${currentAutoSlide.gradient}`}>
                  {<currentAutoSlide.icon className="w-8 h-8 text-white" />}
                </div>
                <div>
                  <h3 className={`text-2xl font-semibold bg-gradient-to-r ${currentAutoSlide.gradient} bg-clip-text text-transparent`}>
                    {currentAutoSlide.name}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Auto-preview • Click below to explore products</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {currentAutoSlide.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex items-center gap-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                  >
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {services.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === autoSlideIndex 
                        ? isDark 
                          ? 'w-8 bg-white' 
                          : 'w-8 bg-slate-700'
                        : isDark 
                          ? 'w-2 bg-white/30' 
                          : 'w-2 bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Service Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeService === service.id && isManualSelection;
            
            return (
              <motion.button
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative group p-6 rounded-2xl transition-all duration-300 text-left ${
                  isActive
                    ? isDark
                      ? `bg-gradient-to-r ${service.bgGradient} border-2 ${service.borderColor} shadow-lg shadow-${service.id === 'web' ? 'purple' : service.id === 'electrical' ? 'amber' : 'cyan'}-500/20`
                      : `bg-gradient-to-r ${service.bgGradient.replace('/20', '/30')} border-2 ${service.borderColor.replace('/30', '')} shadow-lg`
                    : isDark
                      ? 'bg-white/5 border-2 border-white/10 hover:border-white/20'
                      : 'bg-white border-2 border-slate-300 hover:border-slate-400 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    isActive
                      ? `bg-gradient-to-br ${service.gradient}`
                      : isDark 
                        ? 'bg-white/10' 
                        : 'bg-gradient-to-br from-slate-100 to-slate-200'
                  }`}>
                    <Icon className={`w-7 h-7 ${
                      isActive 
                        ? 'text-white' 
                        : isDark 
                          ? 'text-white' 
                          : 'text-slate-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-lg font-semibold ${
                      isActive
                        ? `bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`
                        : isDark 
                          ? 'text-white' 
                          : 'text-slate-900'
                    }`}>
                      {service.name}
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-1.5 mb-4">
                  {service.skills.slice(0, 4).map((skill, idx) => (
                    <div key={idx} className={`flex items-center gap-2 text-xs ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      <div className={`w-1 h-1 rounded-full ${
                        isActive 
                          ? isDark ? 'bg-white' : 'bg-slate-700' 
                          : isDark ? 'bg-slate-500' : 'bg-slate-400'
                      }`} />
                      <span>{skill}</span>
                    </div>
                  ))}
                  <div className={`text-xs mt-2 ${
                    isDark ? 'text-slate-500' : 'text-slate-500'
                  }`}>+{service.skills.length - 4} more skills</div>
                </div>

                <div className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {isActive ? 'Viewing Products Below ↓' : 'Tap to explore'}
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeService"
                    className={`absolute inset-0 bg-gradient-to-r ${service.bgGradient} rounded-2xl -z-10 blur-xl`}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}