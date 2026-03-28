import { motion } from 'framer-motion';
import { MessageCircle, Moon, Sun } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navigation() {
  const { theme, toggleTheme, switchable } = useTheme();

  const handleWhatsAppClick = () => {
    const phoneNumber = '+923257767777';
    const message = encodeURIComponent('Hi FRYD! I want to place an order.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-3xl font-black text-primary"
          whileHover={{ scale: 1.05 }}
        >
          FRYD
        </motion.div>

        <div className="flex items-center gap-3">
          {switchable && toggleTheme ? (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 text-foreground transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" strokeWidth={1.8} />
              ) : (
                <Moon className="w-5 h-5" strokeWidth={1.8} />
              )}
            </button>
          ) : null}

          {/* Glassmorphism CTA with Magnetic Effect */}
          <MagneticButton
            onClick={handleWhatsAppClick}
            className="glassmorphism px-6 py-3 text-white font-bold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
            Order Now
          </MagneticButton>
        </div>
      </div>
    </motion.nav>
  );
}
