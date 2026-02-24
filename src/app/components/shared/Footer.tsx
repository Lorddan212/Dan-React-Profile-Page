import { useTheme } from '@/app/contexts/ThemeContext';
import { SocialLinks } from '@/app/components/merged/SocialLinks';

export function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`relative border-t py-12 ${
      isDark ? 'border-white/10 bg-slate-900/50' : 'border-gray-200 bg-white/50'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Motto */}
        <div className="text-center mb-8">
          <p className={`text-lg italic mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
            "We Build It, Power It, And Bring It to Life With Innovation in Web, Precision in Power, Quality in Printing"
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mb-8">
          <SocialLinks />
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            © 2026 Daniel Jegbefumhen. All rights reserved.
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-600' : 'text-slate-500'}`}>
            Crafted with passion and precision • Web Development • Electrical Installation • Printing Services
          </p>
        </div>
      </div>
    </footer>
  );
}