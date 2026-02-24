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

const webDevProducts: Product[] = [
  { id: 1, name: 'Portfolio Website', price: 85000, category: 'Basic Websites', description: 'Professional portfolio site with modern design', imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600', rating: 5 },
  { id: 2, name: 'Business Website', price: 120000, category: 'Basic Websites', description: 'Corporate website with CMS integration', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600', rating: 5 },
  { id: 3, name: 'Landing Page', price: 45000, category: 'Basic Websites', description: 'High-converting landing page design', imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600', rating: 5 },
  { id: 4, name: 'Blog Platform', price: 95000, category: 'Content Sites', description: 'Custom blogging platform with SEO', imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600', rating: 5 },
  { id: 5, name: 'E-Commerce Store', price: 250000, category: 'E-Commerce', description: 'Full-featured online store with payment gateway', imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600', rating: 5 },
  { id: 6, name: 'Booking System', price: 180000, category: 'Web Apps', description: 'Online appointment and reservation system', imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600', rating: 5 },
  { id: 7, name: 'Real Estate Portal', price: 220000, category: 'Industry-Specific', description: 'Property listing and management platform', imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600', rating: 5 },
  { id: 8, name: 'Restaurant Website', price: 110000, category: 'Industry-Specific', description: 'Menu showcase with online ordering', imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600', rating: 5 },
  { id: 9, name: 'Educational Platform', price: 280000, category: 'E-Learning', description: 'Online course and learning management system', imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600', rating: 5 },
  { id: 10, name: 'Social Network', price: 350000, category: 'Social Media', description: 'Custom social networking platform', imageUrl: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600', rating: 5 },
  { id: 11, name: 'Admin Dashboard', price: 150000, category: 'Web Apps', description: 'Data visualization and management dashboard', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600', rating: 5 },
  { id: 12, name: 'API Development', price: 200000, category: 'Backend Services', description: 'RESTful API with documentation', imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600', rating: 5 },
  { id: 13, name: 'Mobile App (React Native)', price: 320000, category: 'Mobile Development', description: 'Cross-platform mobile application', imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600', rating: 5 },
  { id: 14, name: 'Progressive Web App', price: 190000, category: 'Web Apps', description: 'Offline-capable PWA', imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600', rating: 5 },
  { id: 15, name: 'CRM System', price: 400000, category: 'Enterprise Solutions', description: 'Customer relationship management platform', imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600', rating: 5 },
  { id: 16, name: 'Inventory Management', price: 300000, category: 'Enterprise Solutions', description: 'Stock and inventory tracking system', imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600', rating: 5 },
];

export function WebDevProductsWithImages() {
  const { isDark } = useTheme();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(webDevProducts.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'All' 
    ? webDevProducts 
    : webDevProducts.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      serviceType: 'web'
    });
  };

  return (
    <div className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent">
          Web Development Services
        </h2>
        <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Professional web solutions tailored to your needs
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
                ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg shadow-purple-500/50'
                : `${isDark ? 'bg-white/5 text-slate-300 border border-white/10' : 'bg-white text-slate-700 border border-slate-200'} hover:border-purple-500/50`
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
            } hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105`}
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
                  <Star key={i} className="w-4 h-4 fill-purple-500 text-purple-500" />
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
                  className="p-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
                  title="Add to cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>

              <span className={`inline-block mt-3 px-2 py-1 text-xs rounded-full ${
                isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-700'
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