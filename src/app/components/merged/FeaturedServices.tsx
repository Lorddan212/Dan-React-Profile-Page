import { motion } from 'motion/react';
import { Code, Zap, Printer, ArrowRight } from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext';

interface FeaturedServicesProps {
  onServiceClick: (service: 'web' | 'electrical' | 'printing') => void;
}

export function FeaturedServices({ onServiceClick }: FeaturedServicesProps) {
  const { isDark } = useTheme();
  
  const featuredServices = [
    {
      id: 'web' as const,
      name: 'Custom Website Development',
      description: 'Professional website design and development tailored to your business needs with modern technologies',
      price: 150000,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2ODU4MTcxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      icon: Code
    },
    {
      id: 'electrical' as const,
      name: 'Residential Electrical Installation',
      description: 'Complete house wiring and electrical fittings installation for new and existing buildings',
      price: 350000,
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd2lyaW5nfGVufDF8fHx8MTc2ODU4MTcxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-500/20 to-orange-500/20',
      icon: Zap
    },
    {
      id: 'printing' as const,
      name: 'Business Branding Package',
      description: 'Complete business stationery including business cards, letterheads, and marketing materials',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzfGVufDF8fHx8MTc2ODU4MTcxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-500/20 to-blue-500/20',
      icon: Printer
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Featured Services
          </h2>
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Popular solutions to get you started
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`group relative backdrop-blur-sm border rounded-3xl overflow-hidden transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 hover:border-white/20' 
                    : 'bg-white border-slate-200 hover:border-purple-300 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-900 via-slate-900/50' : 'from-slate-900/80 via-slate-900/40'} to-transparent`} />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-xl`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className={`text-2xl mb-3 font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {service.name}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className={`mb-6 pb-6 border-b ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                    <div className={`text-sm mb-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Starting from</div>
                    <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>₦{service.price.toLocaleString()}</div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onServiceClick(service.id)}
                    className={`w-full bg-gradient-to-r ${service.gradient} text-white px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 font-semibold`}
                  >
                    View All Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl blur-2xl -z-10`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}