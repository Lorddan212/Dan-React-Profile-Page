import { useState } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import { X, Code, Zap, Printer } from 'lucide-react';
import { Footer } from '@/app/components/shared/Footer';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryProps {
  onRequestSample: () => void;
}

interface GalleryItem {
  id: number;
  category: 'web' | 'electrical' | 'printing';
  title: string;
  description: string;
  imageUrl: string;
}

const galleryItems: GalleryItem[] = [
  // Web Development (9 projects)
  { id: 1, category: 'web', title: 'E-Commerce Platform', description: 'Full-featured online shopping experience with payment integration', imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800' },
  { id: 2, category: 'web', title: 'Corporate Website', description: 'Professional multi-page business website with CMS', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800' },
  { id: 3, category: 'web', title: 'Portfolio Site', description: 'Creative showcase platform with dynamic galleries', imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800' },
  { id: 4, category: 'web', title: 'Dashboard Application', description: 'Real-time data visualization and analytics tool', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800' },
  { id: 5, category: 'web', title: 'Booking System', description: 'Online reservation platform with calendar integration', imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800' },
  { id: 6, category: 'web', title: 'Social Platform', description: 'Community engagement app with user profiles and messaging', imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800' },
  { id: 7, category: 'web', title: 'Restaurant Website', description: 'Menu showcase and online ordering system with delivery tracking', imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800' },
  { id: 8, category: 'web', title: 'Real Estate Portal', description: 'Property listing platform with advanced search and virtual tours', imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800' },
  { id: 9, category: 'web', title: 'Educational Platform', description: 'E-learning system with course management and student tracking', imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800' },
  
  // Electrical (9 projects)
  { id: 10, category: 'electrical', title: 'Residential Wiring', description: 'Complete 3-bedroom home electrical installation with modern fixtures', imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800' },
  { id: 11, category: 'electrical', title: 'Commercial Installation', description: 'Office building electrical setup with network infrastructure', imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800' },
  { id: 12, category: 'electrical', title: 'Smart Home Setup', description: 'Automated lighting and climate control systems', imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800' },
  { id: 13, category: 'electrical', title: 'Solar Panel Integration', description: '5KW solar power system with battery backup', imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800' },
  { id: 14, category: 'electrical', title: 'Security Systems', description: 'Complete CCTV and alarm installation for commercial property', imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800' },
  { id: 15, category: 'electrical', title: 'Industrial Wiring', description: 'Factory electrical distribution with heavy machinery support', imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800' },
  { id: 16, category: 'electrical', title: 'Generator Installation', description: '15KVA generator with automatic transfer switch for hospital', imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800' },
  { id: 17, category: 'electrical', title: 'LED Lighting Upgrade', description: 'Energy-efficient LED conversion for warehouse facility', imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800' },
  { id: 18, category: 'electrical', title: 'Emergency Power System', description: 'UPS and inverter installation for data center', imageUrl: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800' },
  
  // Printing (9 projects)
  { id: 19, category: 'printing', title: 'Business Cards', description: 'Premium business cards with embossed logo and metallic finish', imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800' },
  { id: 20, category: 'printing', title: 'Brochures & Flyers', description: 'Marketing materials with full-color printing and UV coating', imageUrl: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=800' },
  { id: 21, category: 'printing', title: 'Banner Printing', description: 'Large format outdoor banners with weather-resistant material', imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800' },
  { id: 22, category: 'printing', title: 'Wedding Invitations', description: 'Elegant custom event stationery with gold foiling', imageUrl: 'https://images.unsplash.com/photo-1522673607176-2b90660bc751?w=800' },
  { id: 23, category: 'printing', title: 'T-Shirt Printing', description: 'Custom corporate apparel with screen printing and embroidery', imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800' },
  { id: 24, category: 'printing', title: 'Packaging Design', description: 'Product packaging solutions with custom die-cut boxes', imageUrl: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800' },
  { id: 25, category: 'printing', title: 'Vehicle Branding', description: 'Full vehicle wrap with reflective vinyl and graphics', imageUrl: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800' },
  { id: 26, category: 'printing', title: 'Company Catalog', description: 'Product catalog with perfect binding and glossy pages', imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800' },
  { id: 27, category: 'printing', title: 'Event Signage', description: 'Conference signage package with rollup banners and posters', imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=800' },
];

export function Gallery({ onRequestSample }: GalleryProps) {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'electrical' | 'printing'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'electrical', label: 'Electrical Work' },
    { id: 'printing', label: 'Printing Services' },
  ];

  return (
    <div className="min-h-screen py-20 px-6 pb-0">
      <div className="max-w-7xl mx-auto">
        {/* Header - More space on large screens */}
        <div className="text-center mb-12 pt-12 lg:pt-20">
          <h1 className={`text-5xl font-bold mb-4 bg-linear-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent`}>
            Project Gallery
          </h1>
          <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Explore our portfolio of completed projects across all services
          </p>
        </div>

        {/* Category Filter with Icons and Slide Effect */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => {
            const Icon = cat.id === 'web' ? Code : cat.id === 'electrical' ? Zap : cat.id === 'printing' ? Printer : null;
            return (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl border transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? cat.id === 'web' 
                      ? 'bg-linear-to-r from-purple-500 to-purple-700 text-white border-transparent shadow-lg shadow-purple-500/50'
                      : cat.id === 'electrical'
                      ? 'bg-linear-to-r from-yellow-500 via-orange-500 to-red-500 text-white border-transparent shadow-lg shadow-orange-500/50'
                      : cat.id === 'printing'
                      ? 'bg-linear-to-r from-cyan-400 to-cyan-600 text-white border-transparent shadow-lg shadow-cyan-500/50'
                      : 'bg-linear-to-r from-purple-500 via-orange-500 to-cyan-500 text-white border-transparent shadow-lg'
                    : `${isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-white border-slate-200 text-slate-700'} hover:border-purple-500/50`
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        {/* Gallery Grid with Slide Transition */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer backdrop-blur-xl border ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'
                  } hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                    item.category === 'web' ? 'hover:shadow-purple-500/20' :
                    item.category === 'electrical' ? 'hover:shadow-orange-500/20' :
                    'hover:shadow-cyan-500/20'
                  }`}
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Always Visible Info - Similar to Product Page */}
                  <div className="p-4">
                    <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>

                    <p className={`text-sm mb-3 line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.description}
                    </p>

                    <span className={`inline-block px-3 py-1 text-xs rounded-full ${
                      item.category === 'web' ? 'bg-purple-500/20 text-purple-400' :
                      item.category === 'electrical' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-cyan-500/20 text-cyan-400'
                    }`}>
                      {item.category === 'web' ? 'Web Dev' : 
                       item.category === 'electrical' ? 'Electrical' : 'Printing'}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <div className={`mt-16 mb-16 p-8 rounded-2xl backdrop-blur-xl border ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'
        } text-center`}>
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Like What You See?
          </h2>
          <p className={`text-lg mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Let's create something amazing together
          </p>
          <button
            onClick={onRequestSample}
            className="px-8 py-4 bg-linear-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Request a Sample
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-xl border border-white/20 transition-all"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="max-w-4xl w-full">
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-white/80">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <Footer />
    </div>
  );
}