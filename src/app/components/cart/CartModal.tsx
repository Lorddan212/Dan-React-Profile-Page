import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, MessageCircle, Mail, ShoppingBag } from 'lucide-react';
import { useCart } from '@/app/contexts/CartContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  const handleSendViaWhatsApp = () => {
    if (items.length === 0) return;

    let message = "Hello! I'd like to request the following services:\n\n";
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Category: ${item.category}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ₦${(item.price * item.quantity).toLocaleString()}\n\n`;
    });

    message += `Total: ₦${getTotalPrice().toLocaleString()}\n\n`;
    message += "Please let me know the next steps. Thank you!";

    window.open(`https://wa.me/2348123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSendViaEmail = () => {
    if (items.length === 0) return;

    let body = "Hello,%0D%0A%0D%0AI'd like to request the following services:%0D%0A%0D%0A";
    
    items.forEach((item, index) => {
      body += `${index + 1}. ${item.name}%0D%0A`;
      body += `   Category: ${item.category}%0D%0A`;
      body += `   Quantity: ${item.quantity}%0D%0A`;
      body += `   Price: ₦${(item.price * item.quantity).toLocaleString()}%0D%0A%0D%0A`;
    });

    body += `Total: ₦${getTotalPrice().toLocaleString()}%0D%0A%0D%0A`;
    body += "Please let me know the next steps. Thank you!";

    window.location.href = `mailto:daniel@example.com?subject=Service Request&body=${body}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-slate-800 border border-white/10 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl text-white">Your Cart</h2>
                    <p className="text-sm text-slate-400">{items.length} {items.length === 1 ? 'item' : 'items'}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Cart Items */}
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div
                        key={`${item.serviceType}-${item.id}`}
                        className="bg-white/5 border border-white/10 rounded-xl p-4"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                            <p className="text-sm text-slate-400">{item.category}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id, item.serviceType)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {item.serviceType === 'printing' && (
                              <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2 py-1">
                                <button
                                  onClick={() => updateQuantity(item.id, item.serviceType, item.quantity - 1)}
                                  className="w-6 h-6 text-slate-400 hover:text-white transition-colors"
                                >
                                  -
                                </button>
                                <span className="text-white w-8 text-center">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.serviceType, item.quantity + 1)}
                                  className="w-6 h-6 text-slate-400 hover:text-white transition-colors"
                                >
                                  +
                                </button>
                              </div>
                            )}
                            {item.serviceType !== 'printing' && (
                              <span className="text-sm text-slate-400">Qty: {item.quantity}</span>
                            )}
                          </div>
                          <div className="text-white font-bold">
                            ₦{(item.price * item.quantity).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg text-white">Total Amount:</span>
                      <span className="text-3xl text-white font-bold">₦{getTotalPrice().toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-slate-400">Choose a contact method below to send your request</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Send via WhatsApp
                    </button>
                    <button
                      onClick={handleSendViaEmail}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5" />
                      Send via Email
                    </button>
                  </div>

                  <button
                    onClick={clearCart}
                    className="w-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 px-6 py-3 rounded-xl transition-all duration-300 text-sm"
                  >
                    Clear Cart
                  </button>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
