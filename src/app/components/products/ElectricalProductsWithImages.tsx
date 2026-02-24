import { useState } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import { useCart } from '@/app/contexts/CartContext';
import { ShoppingCart, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  imageUrl: string;
  rating: number;
}

const electricalProducts: Product[] = [
  // Wiring & Cables (8 products)
  { id: 1, name: 'Complete House Wiring', price: 180000, category: 'Wiring & Cables', description: '3-bedroom apartment full wiring', imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600', rating: 5 },
  { id: 2, name: 'Office Wiring Installation', price: 250000, category: 'Wiring & Cables', description: 'Commercial office electrical setup', imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600', rating: 5 },
  { id: 3, name: 'Cable Management System', price: 45000, category: 'Wiring & Cables', description: 'Professional cable organization', imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600', rating: 5 },
  { id: 4, name: 'Armored Cable Installation', price: 85000, category: 'Wiring & Cables', description: 'Heavy-duty armored cables', imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600', rating: 5 },
  { id: 5, name: 'Underground Cabling', price: 120000, category: 'Wiring & Cables', description: 'Underground electrical distribution', imageUrl: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c8?w=600', rating: 5 },
  { id: 6, name: 'Data & Network Cabling', price: 95000, category: 'Wiring & Cables', description: 'Cat6/Cat7 network infrastructure', imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600', rating: 5 },
  { id: 7, name: 'Fire-Resistant Wiring', price: 110000, category: 'Wiring & Cables', description: 'Safety-compliant fire-rated cables', imageUrl: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600', rating: 5 },
  { id: 8, name: 'Rewiring Services', price: 150000, category: 'Wiring & Cables', description: 'Complete electrical system upgrade', imageUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600', rating: 5 },

  // Lighting Systems (8 products)
  { id: 9, name: 'LED Lighting Installation', price: 65000, category: 'Lighting Systems', description: 'Energy-efficient LED setup', imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600', rating: 5 },
  { id: 10, name: 'Smart Lighting System', price: 140000, category: 'Lighting Systems', description: 'Automated intelligent lighting', imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600', rating: 5 },
  { id: 11, name: 'Outdoor Lighting', price: 85000, category: 'Lighting Systems', description: 'Garden and exterior illumination', imageUrl: 'https://images.unsplash.com/photo-1495571758719-6ec1e876d6ae?w=600', rating: 5 },
  { id: 12, name: 'Emergency Lighting', price: 75000, category: 'Lighting Systems', description: 'Backup lighting system', imageUrl: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600', rating: 5 },
  { id: 13, name: 'Chandelier Installation', price: 55000, category: 'Lighting Systems', description: 'Decorative lighting fixtures', imageUrl: 'https://images.unsplash.com/photo-1567225591450-74a778bc2c10?w=600', rating: 5 },
  { id: 14, name: 'Track Lighting', price: 48000, category: 'Lighting Systems', description: 'Adjustable track light system', imageUrl: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600', rating: 5 },
  { id: 15, name: 'Recessed Lighting', price: 92000, category: 'Lighting Systems', description: 'Ceiling-mounted downlights', imageUrl: 'https://images.unsplash.com/photo-1541480551145-2370a440d585?w=600', rating: 5 },
  { id: 16, name: 'Landscape Lighting', price: 105000, category: 'Lighting Systems', description: 'Outdoor architectural lighting', imageUrl: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600', rating: 5 },

  // Power Solutions (8 products)
  { id: 17, name: 'Generator Installation', price: 350000, category: 'Power Solutions', description: '10KVA generator with ATS', imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600', rating: 5 },
  { id: 18, name: 'Solar Panel System', price: 450000, category: 'Power Solutions', description: '5KW solar power setup', imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600', rating: 5 },
  { id: 19, name: 'Inverter Installation', price: 180000, category: 'Power Solutions', description: '3.5KVA inverter with batteries', imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600', rating: 5 },
  { id: 20, name: 'UPS System', price: 95000, category: 'Power Solutions', description: 'Uninterruptible power supply', imageUrl: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=600', rating: 5 },
  { id: 21, name: 'Stabilizer Installation', price: 35000, category: 'Power Solutions', description: 'Voltage stabilization system', imageUrl: 'https://images.unsplash.com/photo-1621905252472-aa08192a2cd8?w=600', rating: 5 },
  { id: 22, name: 'Battery Backup System', price: 120000, category: 'Power Solutions', description: 'Deep cycle battery installation', imageUrl: 'https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?w=600', rating: 5 },
  { id: 23, name: 'Hybrid Power System', price: 550000, category: 'Power Solutions', description: 'Solar + Grid + Generator integration', imageUrl: 'https://images.unsplash.com/photo-1509390144059-5141a2b6e6ad?w=600', rating: 5 },
  { id: 24, name: 'Power Factor Correction', price: 85000, category: 'Power Solutions', description: 'Energy efficiency optimization', imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600', rating: 5 },

  // Security Systems (8 products)
  { id: 25, name: 'CCTV System (4 Cameras)', price: 120000, category: 'Security Systems', description: 'HD surveillance camera setup', imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600', rating: 5 },
  { id: 26, name: 'CCTV System (8 Cameras)', price: 220000, category: 'Security Systems', description: 'Extended surveillance coverage', imageUrl: 'https://images.unsplash.com/photo-1563184889-5d327f9d2337?w=600', rating: 5 },
  { id: 27, name: 'Access Control System', price: 180000, category: 'Security Systems', description: 'Biometric and card access', imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600', rating: 5 },
  { id: 28, name: 'Intruder Alarm System', price: 95000, category: 'Security Systems', description: 'Motion sensor alarm setup', imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600', rating: 5 },
  { id: 29, name: 'Video Intercom System', price: 75000, category: 'Security Systems', description: 'Video doorbell and intercom', imageUrl: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600', rating: 5 },
  { id: 30, name: 'Electric Fence Installation', price: 250000, category: 'Security Systems', description: 'Perimeter security fencing', imageUrl: 'https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?w=600', rating: 5 },
  { id: 31, name: 'Fire Alarm System', price: 165000, category: 'Security Systems', description: 'Smoke and heat detection', imageUrl: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600', rating: 5 },
  { id: 32, name: 'Smart Home Security', price: 320000, category: 'Security Systems', description: 'Integrated smart security system', imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600', rating: 5 },
];

export function ElectricalProductsWithImages() {
  const { isDark } = useTheme();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(electricalProducts.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'All' 
    ? electricalProducts 
    : electricalProducts.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      serviceType: 'electrical'
    });
  };

  return (
    <div className="py-20">
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent`}>
          Electrical Installation Services
        </h2>
        <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Professional electrical solutions for homes and businesses
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50'
                : `${isDark ? 'bg-white/5 text-slate-300 border border-white/10' : 'bg-white text-slate-700 border border-slate-200'} hover:border-orange-500/50`
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`group relative overflow-hidden rounded-2xl backdrop-blur-xl border ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'
            } hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105`}
          >
            {/* Product Image */}
            <div className="aspect-video overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(product.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {product.name}
              </h3>

              <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  ₦{product.price.toLocaleString()}
                </span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="p-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110"
                  title="Add to cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>

              <span className={`inline-block mt-3 px-2 py-1 text-xs rounded-full ${
                isDark ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {product.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}