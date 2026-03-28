import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const COMBO_VIDEO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663455778448/AvePTygo3fVVEQHiZtmqu5/mixkit-double-burger-with-fries-14010-hd-ready_385c8a99.mp4';

export default function FeaturedDeal() {
  const handleWhatsAppOrder = () => {
    const phoneNumber = '+923257767777';
    const message = encodeURIComponent('I want to order the FRYD Combo Deal!');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={COMBO_VIDEO_URL} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold mb-6 text-sm md:text-base">
            LIMITED TIME OFFER
          </div>

          <h2 className="fryd-heading text-white mb-4 drop-shadow-lg">
            The FRYD Combo Deal
          </h2>

          <p className="fryd-subheading text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Double Burger + Loaded Fries + Shake + Drink
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8 inline-block max-w-md">
            <p className="text-white/80 mb-4">Starting from</p>
            <p className="text-5xl font-black text-primary drop-shadow-lg">₨ 899</p>
          </div>

          <motion.button
            onClick={handleWhatsAppOrder}
            className="fryd-button flex items-center justify-center gap-2 text-lg font-bold shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
            Order Now via WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
