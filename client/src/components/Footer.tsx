import { motion } from 'framer-motion';
import { MapPin, Instagram, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+923257767777';
    const message = encodeURIComponent('Hi FRYD! I want to place an order.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/fryd.pakistan', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      {/* Footer Section */}
      <footer className="bg-card text-foreground py-16">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Brand */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-black text-primary mb-4">FRYD</h3>
              <p className="text-muted-foreground">
                Bold flavors. No regrets. The ultimate loaded experience in Kasur.
              </p>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
                Our Location
              </h4>
              <p className="text-muted-foreground mb-2">
                1st Floor, Alfalah Islamic Building
              </p>
              <p className="text-muted-foreground">Kasur, Punjab, Pakistan</p>
              <a
                href="https://maps.google.com/?q=1st+Floor+Alfalah+Islamic+Building+Kasur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold mt-3 inline-block hover:underline"
              >
                View on Maps →
              </a>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" strokeWidth={1.5} />
                Get in Touch
              </h4>
              <a
                href="tel:+923257767777"
                className="text-muted-foreground hover:text-primary transition-colors mb-3 block"
              >
                +92 325 7767777
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="text-primary font-bold hover:underline flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Chat on WhatsApp
              </button>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-border py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground text-center md:text-left">
                © 2026 FRYD. All rights reserved.
              </p>

              {/* Social Links */}
              <motion.button
                onClick={handleInstagramClick}
                className="flex items-center gap-2 text-primary font-bold hover:text-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
                Instagram
              </motion.button>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 bg-green-500 text-foreground p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
      </motion.button>
    </>
  );
}
