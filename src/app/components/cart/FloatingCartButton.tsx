import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/app/contexts/CartContext';

interface FloatingCartButtonProps {
  onClick: () => void;
}

export function FloatingCartButton({ onClick }: FloatingCartButtonProps) {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  if (itemCount === 0) return null;

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full shadow-2xl shadow-purple-500/50 flex items-center justify-center group"
    >
      <ShoppingCart className="w-7 h-7 text-white" />
      
      {/* Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center border-2 border-slate-900"
      >
        <span className="text-white text-xs font-bold">{itemCount}</span>
      </motion.div>

      {/* Pulse Effect */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-linear-to-r from-purple-600 to-orange-500 rounded-full"
      />
    </motion.button>
  );
}
