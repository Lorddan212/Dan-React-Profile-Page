import { MapPin, Phone, Mail } from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext';

export function EnhancedContactInfo() {
  const { isDark } = useTheme();

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jegbefumhendaniel@gmail.com',
      href: 'mailto:jegbefumhendaniel@gmail.com',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'whatsapp', // Special case for WhatsApp
      label: 'WhatsApp',
      value: '+234 810 936 8514',
      href: 'https://wa.me/2348109368514',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 810 936 8514',
      href: 'tel:+2348109368514',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '15 Ogurilara Drive, Surulere, Lagos, Nigeria',
      href: 'https://maps.google.com/?q=15+Ogurilara+Drive+Surulere+Lagos+Nigeria',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <div className="space-y-4">
      {contactItems.map((item, index) => {
        const Icon = item.icon === 'whatsapp' ? null : item.icon;
        return (
          <a
            key={index}
            href={item.href}
            target={item.icon === MapPin || item.icon === 'whatsapp' ? '_blank' : undefined}
            rel={item.icon === MapPin || item.icon === 'whatsapp' ? 'noopener noreferrer' : undefined}
            className={`group flex items-start gap-4 p-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 ${
              isDark
                ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                : 'bg-white/80 border-gray-200 hover:bg-white hover:border-gray-300 shadow-sm hover:shadow-md'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${item.color} shadow-lg`}>
              {item.icon === 'whatsapp' ? (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              ) : (
                <Icon className="w-6 h-6 text-white" />
              )}
            </div>
            <div className="flex-1">
              <p className={`text-sm mb-1 ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>
                {item.label}
              </p>
              <p className={`font-medium transition-colors ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {item.value}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}