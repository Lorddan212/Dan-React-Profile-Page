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

const printingProducts: Product[] = [
  // Business Printing (10 products)
  { id: 1, name: 'Business Cards (500pcs)', price: 8500, category: 'Business Printing', description: 'Premium business cards on quality paper', imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600', rating: 5 },
  { id: 2, name: 'Business Cards (1000pcs)', price: 15000, category: 'Business Printing', description: 'Bulk business cards with finishing', imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600', rating: 5 },
  { id: 3, name: 'Letterheads (100pcs)', price: 12000, category: 'Business Printing', description: 'Professional company letterheads', imageUrl: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=600', rating: 5 },
  { id: 4, name: 'Company Brochures', price: 25000, category: 'Business Printing', description: 'Tri-fold brochures full color', imageUrl: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=600', rating: 5 },
  { id: 5, name: 'Flyers (1000pcs)', price: 18000, category: 'Business Printing', description: 'A5 promotional flyers', imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600', rating: 5 },
  { id: 6, name: 'Posters (A3)', price: 5500, category: 'Business Printing', description: 'Full-color glossy posters', imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600', rating: 5 },
  { id: 7, name: 'Company Profile Design', price: 45000, category: 'Business Printing', description: 'Professional company profiles', imageUrl: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=600', rating: 5 },
  { id: 8, name: 'Catalog Printing', price: 65000, category: 'Business Printing', description: 'Product catalogs with binding', imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600', rating: 5 },
  { id: 9, name: 'Annual Report Design', price: 85000, category: 'Business Printing', description: 'Corporate annual reports', imageUrl: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=600', rating: 5 },
  { id: 10, name: 'Presentation Folders', price: 22000, category: 'Business Printing', description: 'Custom branded folders', imageUrl: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=600', rating: 5 },

  // Large Format Printing (10 products)
  { id: 11, name: 'Banner (3x6ft)', price: 12000, category: 'Large Format', description: 'Outdoor vinyl banner', imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600', rating: 5 },
  { id: 12, name: 'Banner (6x10ft)', price: 28000, category: 'Large Format', description: 'Large promotional banner', imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600', rating: 5 },
  { id: 13, name: 'Roll-Up Banner', price: 18000, category: 'Large Format', description: 'Retractable standing banner', imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=600', rating: 5 },
  { id: 14, name: 'X-Stand Banner', price: 15000, category: 'Large Format', description: 'Portable exhibition banner', imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=600', rating: 5 },
  { id: 15, name: 'Backdrop Banner', price: 45000, category: 'Large Format', description: 'Event backdrop printing', imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600', rating: 5 },
  { id: 16, name: 'Canvas Printing', price: 35000, category: 'Large Format', description: 'Stretched canvas artwork', imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600', rating: 5 },
  { id: 17, name: 'Vehicle Graphics', price: 65000, category: 'Large Format', description: 'Car branding and wraps', imageUrl: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600', rating: 5 },
  { id: 18, name: 'Window Graphics', price: 42000, category: 'Large Format', description: 'Store window decals', imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600', rating: 5 },
  { id: 19, name: 'Wall Graphics', price: 55000, category: 'Large Format', description: 'Large wall murals', imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600', rating: 5 },
  { id: 20, name: 'Floor Graphics', price: 38000, category: 'Large Format', description: 'Durable floor decals', imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600', rating: 5 },

  // Event & Wedding (10 products)
  { id: 21, name: 'Wedding Invitations (100pcs)', price: 35000, category: 'Event & Wedding', description: 'Elegant wedding invites', imageUrl: 'https://images.unsplash.com/photo-1522673607176-2b90660bc751?w=600', rating: 5 },
  { id: 22, name: 'Birthday Invitations', price: 18000, category: 'Event & Wedding', description: 'Custom party invitations', imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600', rating: 5 },
  { id: 23, name: 'Event Programs', price: 22000, category: 'Event & Wedding', description: 'Ceremony programs printing', imageUrl: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=600', rating: 5 },
  { id: 24, name: 'Table Numbers & Cards', price: 15000, category: 'Event & Wedding', description: 'Event table decorations', imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600', rating: 5 },
  { id: 25, name: 'Thank You Cards', price: 12000, category: 'Event & Wedding', description: 'Custom thank you cards', imageUrl: 'https://images.unsplash.com/photo-1522673607176-2b90660bc751?w=600', rating: 5 },
  { id: 26, name: 'Menu Cards', price: 25000, category: 'Event & Wedding', description: 'Event menu printing', imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600', rating: 5 },
  { id: 27, name: 'Event Tickets', price: 18000, category: 'Event & Wedding', description: 'Custom event tickets', imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600', rating: 5 },
  { id: 28, name: 'Photo Booth Props', price: 28000, category: 'Event & Wedding', description: 'Custom party props', imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600', rating: 5 },
  { id: 29, name: 'Event Signage', price: 32000, category: 'Event & Wedding', description: 'Directional event signs', imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=600', rating: 5 },
  { id: 30, name: 'Wedding Album Design', price: 75000, category: 'Event & Wedding', description: 'Professional photo album', imageUrl: 'https://images.unsplash.com/photo-1522673607176-2b90660bc751?w=600', rating: 5 },

  // Apparel & Merchandise (11 products)
  { id: 31, name: 'T-Shirt Printing (10pcs)', price: 35000, category: 'Apparel & Merch', description: 'Custom t-shirt printing', imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600', rating: 5 },
  { id: 32, name: 'Polo Shirt Printing', price: 45000, category: 'Apparel & Merch', description: 'Corporate polo shirts', imageUrl: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600', rating: 5 },
  { id: 33, name: 'Hoodie Printing', price: 55000, category: 'Apparel & Merch', description: 'Custom hoodies design', imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600', rating: 5 },
  { id: 34, name: 'Cap Embroidery', price: 28000, category: 'Apparel & Merch', description: 'Branded caps and hats', imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600', rating: 5 },
  { id: 35, name: 'Mugs Printing (12pcs)', price: 22000, category: 'Apparel & Merch', description: 'Custom ceramic mugs', imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600', rating: 5 },
  { id: 36, name: 'Mouse Pads', price: 15000, category: 'Apparel & Merch', description: 'Custom branded mouse pads', imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600', rating: 5 },
  { id: 37, name: 'Tote Bags', price: 32000, category: 'Apparel & Merch', description: 'Eco-friendly branded bags', imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600', rating: 5 },
  { id: 38, name: 'Notebook Branding', price: 18000, category: 'Apparel & Merch', description: 'Custom branded notebooks', imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600', rating: 5 },
  { id: 39, name: 'USB Drive Branding', price: 25000, category: 'Apparel & Merch', description: 'Branded flash drives', imageUrl: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600', rating: 5 },
  { id: 40, name: 'Branded Pens', price: 12000, category: 'Apparel & Merch', description: 'Corporate branded pens', imageUrl: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=600', rating: 5 },
  { id: 41, name: 'Gift Items Branding', price: 38000, category: 'Apparel & Merch', description: 'Custom corporate gifts', imageUrl: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=600', rating: 5 },
];

export function PrintingProductsWithImages() {
  const { isDark } = useTheme();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(printingProducts.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'All' 
    ? printingProducts 
    : printingProducts.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      serviceType: 'printing'
    });
  };

  return (
    <div className="py-20">
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent`}>
          General Printing Services
        </h2>
        <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Quality printing solutions for all your needs
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
                ? 'bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/50'
                : `${isDark ? 'bg-white/5 text-slate-300 border border-white/10' : 'bg-white text-slate-700 border border-slate-200'} hover:border-cyan-500/50`
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
            } hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105`}
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
                  <Star key={i} className="w-4 h-4 fill-cyan-500 text-cyan-500" />
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
                  className="p-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
                  title="Add to cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>

              <span className={`inline-block mt-3 px-2 py-1 text-xs rounded-full ${
                isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700'
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