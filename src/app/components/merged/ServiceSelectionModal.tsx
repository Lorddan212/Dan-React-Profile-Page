import { motion, AnimatePresence } from 'motion/react';
import { X, Code, Zap, Printer, Mail, MessageCircle, MessageSquare } from 'lucide-react';
import { useState } from 'react';

interface ServiceSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onServiceSelect: (service: string, contactMethod: 'whatsapp' | 'email' | 'sms') => void;
}

export function ServiceSelectionModal({ isOpen, onClose, onServiceSelect }: ServiceSelectionModalProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showContactMethods, setShowContactMethods] = useState(false);

  const services = [
    {
      id: 'web',
      name: 'Web Development',
      icon: Code,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 'electrical',
      name: 'Electrical Installation',
      icon: Zap,
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-500/20 to-orange-500/20'
    },
    {
      id: 'printing',
      name: 'General Printing',
      icon: Printer,
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-500/20 to-blue-500/20'
    }
  ];

  const contactMethods = [
    {
      id: 'whatsapp' as const,
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'from-green-500 to-green-600',
      description: 'Quick chat on WhatsApp'
    },
    {
      id: 'email' as const,
      name: 'Email',
      icon: Mail,
      color: 'from-purple-500 to-purple-600',
      description: 'Send detailed email'
    },
    {
      id: 'sms' as const,
      name: 'Text Message',
      icon: MessageSquare,
      color: 'from-blue-500 to-blue-600',
      description: 'Send via SMS'
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setShowContactMethods(true);
  };

  const handleContactMethodClick = (method: 'whatsapp' | 'email' | 'sms') => {
    if (selectedService) {
      onServiceSelect(selectedService, method);
      onClose();
      setSelectedService(null);
      setShowContactMethods(false);
    }
  };

  const handleClose = () => {
    onClose();
    setSelectedService(null);
    setShowContactMethods(false);
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
            onClick={handleClose}
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
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {!showContactMethods ? (
                <>
                  {/* Service Selection */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl text-white mb-3">Select Your Service</h2>
                    <p className="text-slate-400">Choose the service you need help with</p>
                  </div>

                  <div className="grid gap-4">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <motion.button
                          key={service.id}
                          onClick={() => handleServiceClick(service.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative group p-6 rounded-2xl bg-gradient-to-r ${service.bgGradient} border border-white/10 hover:border-white/20 transition-all text-left`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.gradient}`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <div className={`text-xl font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                {service.name}
                              </div>
                              <div className="text-sm text-slate-400 mt-1">
                                Click to continue
                              </div>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </>
              ) : (
                <>
                  {/* Contact Method Selection */}
                  <div className="text-center mb-8">
                    <button
                      onClick={() => setShowContactMethods(false)}
                      className="text-purple-400 text-sm mb-4 hover:text-purple-300 transition-colors"
                    >
                      ← Back to services
                    </button>
                    <h2 className="text-3xl text-white mb-3">Choose Contact Method</h2>
                    <p className="text-slate-400">How would you like to reach out?</p>
                  </div>

                  <div className="grid gap-4">
                    {contactMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <motion.button
                          key={method.id}
                          onClick={() => handleContactMethodClick(method.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-left"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${method.color}`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <div className="text-xl font-semibold text-white">
                                {method.name}
                              </div>
                              <div className="text-sm text-slate-400 mt-1">
                                {method.description}
                              </div>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
